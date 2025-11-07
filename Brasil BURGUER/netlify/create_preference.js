// create_preference.js - Netlify Function (usa fetch global)
exports.handler = async function(event) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    const body = JSON.parse(event.body || '{}');
    const total = parseFloat(body.total) || 0;
    const description = body.description || 'Pedido Brasil Burguer';

    if (total <= 0) {
      return { statusCode: 400, body: 'Total inválido' };
    }

    const ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN || '';
    if (!ACCESS_TOKEN) {
      return { statusCode: 500, body: 'MERCADOPAGO_ACCESS_TOKEN não configurado' };
    }

    const mpBody = {
      items: [
        {
          title: description,
          quantity: 1,
          currency_id: "BRL",
          unit_price: Number(total)
        }
      ],
      auto_return: "approved",
      back_urls: {
        success: "https://brasilburguer.netlify.app/pagamento/sucesso",
        failure: "https://brasilburguer.netlify.app/pagamento/falha"
      }
    };

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ACCESS_TOKEN
      },
      body: JSON.stringify(mpBody)
    });

    const data = await resp.json();
    if (!resp.ok) {
      return { statusCode: 500, body: JSON.stringify(data) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};

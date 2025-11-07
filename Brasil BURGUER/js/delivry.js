@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&amp;display=swap);
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
}

::-webkit-scrollbar {
    width: 10px;
    height: 6px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #a5aaad;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #a5aaad;
}

/* BASE */

html {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
}

body,
html {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #403f3f;
    background: #ffffff;
    height: auto;
    min-height: 100%;
}

button,
input,
textarea,
select {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
}

.btn {
    display: flex;
    margin: 10px auto;
    padding: 10px 20px;
    cursor: pointer;
    background: #000000;
    color: #ffffff;
    border: 0;
    border-radius: 100px;
    align-items: center;
    font-size: 14px;
    justify-content: center;
}

.btnSair {
    position: absolute;
    top: 10px;
    right: 55px;
    width: auto;
    padding: 10px 10px;
    cursor: pointer;
    background: #000000;
    color: #ffffff;
    border: 0;
    border-radius: 100px;
    align-items: center;
    font-size: 12px;
    z-index: 1;
}

.btnFidelidade {
    position: absolute;
    top: 10px;
    right: 117px;
    width: auto;
    padding: 10px 10px;
    cursor: pointer;
    background: #000000;
    color: #ffffff;
    border: 0;
    border-radius: 100px;
    align-items: center;
    font-size: 12px;
    z-index: 1;
}

.btn:hover,
a.voltar:hover,
a.voltar2:hover,
.btnSair:hover,
.btnFidelidade:hover {
    opacity: 0.9;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

a.btn {
    max-width: 270px;
}

a.login {
    width: auto;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 12px;
    margin: 0;
    z-index: 1;
}

a.login i {
    padding-left: 0;
    font-size: 20px;
}

.btn i {
    padding-left: 10px;
}

.btn i.right {
    padding-right: 10px;
    padding-left: 0;
}

.btnVerde {
    background: #077c22 !important;
}

.btnVerde:hover {
    opacity: 1;
    background: #3ac93f !important;
}

.btnCinza {
    background: #cecece !important;
    cursor: not-allowed;
}

.aberto {
    padding: 5px 10px;
    border-radius: 20px;
    color: #077c22;
    background-color: #d7fdd7;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 1;
}

.fechado {
    padding: 5px 10px;
    border-radius: 20px;
    color: #c90000;
    background-color: #eed3d7;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    z-index: 1;
}

@keyframes btn-pisca {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.btn-pisca {
    -webkit-animation: btn-pisca .9s linear infinite;
    -moz-animation: btn-pisca .9s linear infinite;
    -ms-animation: btn-pisca .9s linear infinite;
    -o-animation: btn-pisca .9s linear infinite;
    animation: btn-pisca .9s linear infinite;
}

.lojaFechada {
    padding: 15px 0;
    text-align: center;
}

#login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    align-items: center;
    text-align: center;
}

#login .form {
    display: none;
}

#login h1 {
    font-size: 25px;
    text-align: center;
}

#login p {
    text-align: center;
}

#login .codigoConfirmacao {
    display: none;
}

#login .codigoConfirmacao input {
    font-size: 25px;
}

#login .opcoes {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

.btnGoogle,
.btnEmail,
.btnSemCadastro {
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 20px;
    background: #2864EF;
    max-width: 300px;
    margin: 5px auto;
}

.btnGoogle:hover,
.btnEmail:hover,
.btnSemCadastro:hover {
    transition: .2s;
    opacity: 0.9;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

.btns {
    width: 100%;
    display: flex;
    justify-content: center;
}

.btns .btn {
    margin: 10px 0 20px 0;
}

/*alertaMSG*/

.alert {
    width: 100%;
    font-size: 14px;
    padding: 10px 2.5%;
    margin: 10px 0;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    float: left;
    text-align: center;
    border-radius: 10px;
    outline: 2px solid #403f3f;
}

.alert>span {
    width: auto;
    font-size: 25px;
    padding-right: 20px;
    color: #c90000;
    background: none;
}

.alert-success {
    outline: 2px solid #077c22;
    color: #077c22;
}

.alert-error {
    outline: 2px solid #b94a48;
    color: #b94a48;
}

.alert-info {
    outline: 2px solid #fbbc05;
    background-color: #fcefcc;
    color: #000000;
}

.container {
    width: 100%;
    max-width: 1200px;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
}

.containerFinalizar {
    max-width: 800px;
    border: 2px solid #cecece;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    padding: 20px 30px 30px 30px;
    margin-top: 20px;
    margin-bottom: 100px;
    display: table;
}

.containerFinalizar h2 {
    text-align: center;
    margin: 20px 0 20px 0;
}

.containerFinalizar h2:first-child {
    margin-top: 0;
}

.opacidade {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 1048;
    background-color: rgba(0, 0, 0, 0.2);
}

a {
    color: #403f3f;
}

/* MAIN HEADER */

header#topo {
    /*box-shadow: 0 1px 10px rgba(0,0,0,.05);*/
    background: #ffffff;
    border-bottom: 1px solid #f8fafc;
}

header#topo .cover {
    height: 172px;
    position: relative;
    background-size: auto;
}

header#topo .borda {
    height: 65px;
    border-radius: 40px 40px 0 0;
    background: #ffffff;
    position: inherit;
    top: 110px;
    z-index: 1;
}

header#topo .cover .logo {
    position: absolute;
    top: 55px;
    left: calc(50% - 60px);
    z-index: 5;
    width: 120px;
    height: 120px;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 300px;
    border: 4px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .16);
    transition: .35s;
    background: white;
}

header#topo .cover .logo figure {
    width: 100%;
    height: 100%;
}

header#topo .cover .logo figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .35s;
}

header#topo .cover .logo:hover img {
    transform: scale(1.15);
}

header#topo .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 5px;
}

header#topo .info h1 {
    font-family: Poppins;
    font-weight: 900;
    color: #676767;
}

header#topo .info h2 {
    color: #676767;
    font-size: 15px;
    font-family: Poppins;
    font-weight: 400;
    margin-bottom: 10px;
}

header#topo .info .detalhes {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
}

header#topo .info .icones {
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

header#topo .info .icones a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border: 2px solid #EEE;
    border-radius: 100px;
    background: #FFF;
    color: #AAA;
    font-size: 20px;
    transition: .2s;
}

header#topo .info .icones a:hover {
    color: #676767;
    border-color: #676767;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

header#topo .info .icones i {
    display: flex;
    transition: .2s;
}

header#topo .info .icones a:hover i {
    transform: scale(1.1);
}

header#topo .info .detalhe {
    display: flex;
    flex-direction: row;
    font-size: small;
    gap: 10px;
    padding: 2px 0;
}

header#topo .info .detalhe>div {
    flex-direction: row;
}

header#topo .info .mostrarHorario {
    cursor: pointer;
    flex-direction: initial;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
}

header#topo .info .horarios {
    display: none;
    font-size: 14px;
    border: 2px solid #cecece;
    padding: 20px;
    border-radius: 20px;
    width: 400px;
    margin: 0 auto 15px auto;
}

header#topo .info .horarios .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
}

header#topo .info .horarios .destaque {
    font-weight: bold;
}

header#topo #menuCategorias {
    padding: 10px;
}

header#topo #menuCategorias .container {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

header#topo #menuCategorias a.pesquisar {
    color: #ffffff;
    font-size: 25px;
    padding: 0 10px;
}

header#topo #menuCategorias.fixed {
    position: fixed;
    top: 0;
    padding: 15px 0 15px 0;
    width: 100%;
    z-index: 11;
    box-shadow: 0 1px 10px rgb(0 0 0 / 5%);
}

.form-busca {
    width: 100%;
    padding: 8px 0px 5px 0px;
    display: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.form-busca input {
    width: 50%;
    min-height: 40px;
    padding: 9px 10px;
    padding-left: 20px;
    font-size: 16px;
    border: 2px solid #403f3f;
    background: #fff;
    border-radius: 25px;
}

.form-busca input::placeholder {
    font-weight: 600;
    color: #000000;
}

.form-busca span {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: red;
    margin-top: 5px;
}

main#lista {
    margin-top: 5px;
    padding-bottom: 85px;
}

main#lista h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}

main#lista .produtos {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

main#lista .produtos .item a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 10px 15px;
    background: #FFF;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    border: 2px solid #cecece;
}

main#lista .produtos .item:last-child a {
    margin-bottom: 20px;
}

main#lista .produtos .item a:hover {
    background: #f8fafc;
}

main#lista .produtos .item .texto {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
}

main#lista .produtos .item .texto h3 {
    font-size: 16px;
}

main#lista .produtos .item .texto span {
    font-size: 14px;
}

main#lista .produtos .item .texto span.precoPromocao {
    text-decoration: line-through;
}

main#lista .produtos .item .texto span.preco {
    color: #077c22;
    font-size: 18px;
    font-weight: bold;
}

span.estoque {
    font-size: 12px !important;
}

main#lista .produtos .item .fotoProduto {
    display: flex;
}

main#lista .produtos .item figure {
    width: 110px;
    height: 110px;
    border: 1px solid #cecece;
    border-radius: 20px;
    overflow: hidden;
    margin: 0;
}

main#lista .produtos .item figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

main #desenvolvimento {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
}

main #desenvolvimento img:hover {
    opacity: 0.7;
}

main #desenvolvimento .btn2 {
    padding: 5px 10px;
    border: 1px solid #676767;
    border-radius: 20px;
    width: 300px;
    margin: 10px auto 35px auto;
}

main #desenvolvimento .btn2:hover {
    background: #2864EF;
    border: 1px solid #2864EF;
    color: #ffffff;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #000000;
    font-weight: bold;
    color: #ffffff;
}

footer#carrinho {
    display: flex;
    flex-direction: column;
    text-align: center;
}

footer#carrinho a {
    color: #ffffff;
    padding: 15px 0;
}

footer#carrinho a.rastreamento {
    background: #077c22;
    padding: 5px;
    margin-bottom: 10px;
    animation: pulse 1s infinite;
}

@-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
}

@keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
}

footer#carrinho .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

footer#carrinho .container .icone span {
    top: -1.2em;
    left: 0.1em;
    position: relative;
    background: #ffffff;
    padding: 3px 5px;
    color: #000000;
    font-size: 60%;
    border-radius: 3px;
}

#info {
    width: 100%;
    max-width: 550px;
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0px;
    z-index: 1049;
    background: #ffffff;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    overflow-y: auto;
    padding: 20px;
    display: none;
}

/* ... restante do CSS original continua igual ... */

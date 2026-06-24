
/* ==========================
MODO ESCURO
========================== */

const darkModeBtn = document.getElementById("darkModeBtn");

if(localStorage.getItem("tema") === "dark"){
document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {

```
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    localStorage.setItem("tema","dark");
}else{
    localStorage.setItem("tema","light");
}
```

});

/* ==========================
CONTADORES ANIMADOS
========================== */

function animarContador(id, valorFinal){

```
let contador = 0;

const elemento = document.getElementById(id);

const incremento = Math.ceil(valorFinal / 100);

const intervalo = setInterval(() => {

    contador += incremento;

    if(contador >= valorFinal){

        contador = valorFinal;

        clearInterval(intervalo);

    }

    elemento.textContent =
    contador.toLocaleString("pt-BR");

},20);
```

}

animarContador("contador1", 5000000);
animarContador("contador2", 250000);
animarContador("contador3", 12000);

/* ==========================
QUIZ
========================== */

let pontos = 0;

function respostaQuiz(correta){

```
const resultado =
document.getElementById("resultadoQuiz");

if(correta){

    pontos++;

    resultado.innerHTML =
    "✅ Correto! Verificar a fonte é essencial para combater a desinformação.";

    resultado.style.color = "green";

}else{

    resultado.innerHTML =
    "❌ Resposta incorreta. Compartilhar sem verificar pode espalhar fake news.";

    resultado.style.color = "red";

}
```

}

/* ==========================
DETECTOR DE FAKE NEWS
========================== */

const analisarBtn =
document.getElementById("analisarBtn");

analisarBtn.addEventListener("click", () => {

```
const texto =
document.getElementById("manchete").value;

const resultado =
document.getElementById("resultadoDetector");

if(texto.trim() === ""){

    resultado.innerHTML =
    "Digite uma manchete para análise.";

    resultado.style.color = "orange";

    return;

}

let risco = 0;

if(texto.includes("!!!")){
    risco += 2;
}

if(texto === texto.toUpperCase()){
    risco += 2;
}

if(texto.includes("URGENTE")){
    risco += 2;
}

if(texto.includes("COMPARTILHE")){
    risco += 2;
}

if(texto.includes("CLIQUE")){
    risco += 2;
}

if(risco <= 2){

    resultado.innerHTML =
    "🟢 Baixo risco de desinformação.";

    resultado.style.color = "green";

}
else if(risco <= 5){

    resultado.innerHTML =
    "🟡 Atenção: manchete potencialmente sensacionalista.";

    resultado.style.color = "#d97706";

}
else{

    resultado.innerHTML =
    "🔴 Alto risco de fake news ou conteúdo manipulador.";

    resultado.style.color = "red";

}
```

});

/* ==========================
FORMULÁRIO
========================== */

const formulario =
document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{

```
e.preventDefault();

const nome =
document.getElementById("nome").value;

const email =
document.getElementById("email").value;

const mensagem =
document.getElementById("mensagem").value;

const resposta =
document.getElementById("mensagemForm");

if(
    nome.trim() === "" ||
    email.trim() === "" ||
    mensagem.trim() === ""
){

    resposta.innerHTML =
    "⚠️ Preencha todos os campos.";

    resposta.style.color = "red";

    return;

}

if(!email.includes("@")){

    resposta.innerHTML =
    "⚠️ Digite um e-mail válido.";

    resposta.style.color = "red";

    return;

}

resposta.innerHTML =
`✅ Obrigado, ${nome}! Seu compromisso digital foi registrado com sucesso.`;

resposta.style.color = "green";

formulario.reset();
```

});

/* ==========================
VOLTAR AO TOPO
========================== */

const btnTopo =
document.getElementById("voltarTopo");

btnTopo.addEventListener("click", ()=>{

```
window.scrollTo({

    top:0,
    behavior:"smooth"

});
```

});

/* ==========================
ANIMAÇÃO AO ROLAR
========================== */

const secoes =
document.querySelectorAll(".section");

const observer =
new IntersectionObserver((entries)=>{

```
entries.forEach((entry)=>{

    if(entry.isIntersecting){

        entry.target.style.opacity = "1";

        entry.target.style.transform =
        "translateY(0px)";

    }

});
```

},{
threshold:0.2
});

secoes.forEach((secao)=>{

```
secao.style.opacity = "0";

secao.style.transform =
"translateY(50px)";

secao.style.transition =
"all 0.8s ease";

observer.observe(secao);
```

});

/* ==========================
MENSAGEM FINAL
========================== */

console.log(
"Projeto Cidadania Digital e IA carregado com sucesso."
);

// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});


// Botão voltar ao topo

const botao=document.createElement("button");

botao.innerHTML="⬆";

document.body.appendChild(botao);

botao.style.position="fixed";
botao.style.bottom="20px";
botao.style.right="20px";
botao.style.width="55px";
botao.style.height="55px";
botao.style.borderRadius="50%";
botao.style.border="none";
botao.style.background="#2563eb";
botao.style.color="#fff";
botao.style.cursor="pointer";
botao.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

botao.style.display="block";

}else{

botao.style.display="none";

}

});

botao.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

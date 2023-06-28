//Fazer com que só seja permitido os inputs dos números e símbolos presentes na calculadora
//Fazer com que seja possível apagar inputs usando a tecla Backspace
//Fazer com que o Enter realize o cálculo
//Configurar os botões para que eles sejam adicionados ao input ao serem clicados
//Configurar o botão clear
//Configurar o botão de resultado para que ele exiba o resultado

const input = document.querySelector("#input");
const keys = document.querySelectorAll(".charKey");
const clear = document.querySelector("#clear");
const root = document.querySelector(":root");
const main = document.querySelector("main")
const copyButton = document.querySelector("#copyToClipboard")
const resultInput = document.querySelector("#result")

document.querySelector("#themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color","#f1f5f9");
    root.style.setProperty("--border-color","#aaa");
    root.style.setProperty("--font-color","#212529");
    root.style.setProperty("--primary-color","#3e73e7");
    root.style.setProperty("--shadow-color","#000000");
    root.style.setProperty("--button-border-color","#000000");
    root.style.setProperty("--active-color","#000000");
    main.dataset.theme = "light";
  }else {
    root.style.setProperty("--bg-color","#212529");
    root.style.setProperty("--border-color","#666");
    root.style.setProperty("--font-color","#f1f5f9");
    root.style.setProperty("--primary-color","#95e6e9");
    root.style.setProperty("--shadow-color","#ffffff");
    root.style.setProperty("--button-border-color","#ffffff");
    root.style.setProperty("--active-color","#f0f0f0");
    main.dataset.theme = "dark";
  }
  
})

const allowedKeys = ["(", ")","/", "7", "8", "9","*","4","5","6","-","1","2","3","+","0",".","%"];

input.addEventListener("keydown",(ev) => {
   ev.preventDefault();
   if (allowedKeys.includes(ev.key)) {
     input.value += ev.key;
     return
   }
   if (ev.key === "Backspace"){
    input.value = input.value.slice(0,-1)
   }
   if (ev.key === "Enter"){
    document.querySelector("#result").value = eval(input.value)
   }
})

keys.forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    input.value += charKeyBtn.dataset.value;
  })
})

clear.addEventListener("click", () => {
  input.value = "";
  input.focus();
})


document.querySelector("#equal").addEventListener("click",() => {
   document.querySelector("#result").value = eval(input.value);
})

copyButton.addEventListener("click", () => {
  copyButton.innerText = "Copied!"
  navigator.clipboard.writeText(resultInput.value);
  copyButton.classList.add("success")
})


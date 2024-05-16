import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai'
const url = 'https://f733644a-cf2c-4aa0-9868-0fe63979ff2d-00-3hi4zrb19xfrs.spock.replit.dev/receitas'
const genAI = new GoogleGenerativeAI("AIzaSyBxWCkyRq3c0jhycOo01gnIq15EaKjNA-c");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  let prompter = document.getElementById("prompter").value
  let receita = document.getElementById("pedidorecebido")
  const prompt = prompter

  const result = await model.generateContent(prompt)
  const response = await result.response
  const nreceita = {  
    pedido: prompter,
    "modo de preparo": response.text()
  }
  const opcoes = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nreceita)
  }
  const text = response.text()
  console.log("deu certo!")
  receita.textContent = text
  fetch(url, opcoes)
  .then(response => response.json())
  .then(data => console.log(data)) // Exibe a resposta do servidor no console
  .catch(error => console.error('Erro ao salvar a receita no histórico!', error))
}


let btn = document.getElementById("botao")
btn.addEventListener("click", run)
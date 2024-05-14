import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai'

const genAI = new GoogleGenerativeAI("AIzaSyBxWCkyRq3c0jhycOo01gnIq15EaKjNA-c");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  let prompter = document.getElementById("prompter").value
  let receita = document.getElementById("pedidorecebido")
  const prompt = prompter

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log("deu certo!")
  receita.textContent = text
}
let btn = document.getElementById("botao")
btn.addEventListener("click", run)
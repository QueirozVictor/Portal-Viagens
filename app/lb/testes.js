const { version } = require("node:os");

console.log("Olá Mundo");

const nome = "Seu Nome";
let idade = 20;
idade = 21;

console.log(nome, idade);


//Usando const
const nome = "Seu Nome";
const idade = 20;

//Usando let
let cidade = "São Paulo";
cidade = "Rio de Janeiro";

const nome = "Seu Nome";                            //string
const idade = 21;                                   //number
const ativo = true;                                 //boolean
const tecnologias = ["HTML", "CSS", "JavaScript"];  //array

const usuario = {
nome: "Seu Nome",
idade: 20
}                                                   //object


const a = 10;
const b = 20;
console.log(a + b);     //30
console.log(a - b);     //-10
console.log(a * b);     //200
console.log(a / b);     //0.5
console.log(a == b);    //false
console.log(a === b);   //false
console.log(a !== b);   //true

const idade = 18;

if(idade >= 18){
    console.log("Maior de Idade");
} else{
    console.log("Menor de Idade");
}

const frutas = ["Maça", "Banana", "Uva"];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

frutas.forEach((fruta => {
    console.log(fruta)
}))

function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("João"));
console.log(saudacao("Maria"));

const soma = (a, b) => a + b;
console.log(soma(10, 5));

const numeros = [1, 2, 3, 4, 5];

//map - cria um novo array
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

//filter - filtra elementos
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

//find - encontra um elemento
const encontrado = numeros.find(n => n > 3);
console.log(encontrado); // 4

const artigo = {
    id: 1,
    titulo: "React para iniciantes",
    autor: "React",
    tags: ["react", "javascript"]
};

console.log(artigo.titulo);
console.log(artigo.autor);

const titulo = document.querySelector("h1");
titulo.textContent = "Novo titulo";

const btn = document.querySelector("button");
btn.classList.add("ativo");

const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Paragrafo criado";
document.body.appendChild(novoParagrafo);

const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    alert("Botão clicado");
});

const input = document.querySelector("input");

input.addEventListener("input", (e) => {
    console.log(e.target.value);
});

//Usando Promise
function buscarDados(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados carregados!"), 2000)
    });
}
buscarDados().then(dados => console.log(dados));

//Usando async e await
async function carregar() {
    const dados = await buscarDados();
    console.log(dados);
}
carregar();

// 1. Variaveis e tipos de dados
// 2. Operadores
// 3. Condicionais
// 4. Loops
// 5. Funções
// 6. Arrays
// 7. Objetos
// 8. Dom e eventos
// 9. Metodos de arrays
// 10. Promises, async e await


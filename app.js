//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Cria array vazio para armazenar os amigos
let listaAmigos = [];

//Função para tornar a primeira letra maiscula
const tornaPrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//Função para adicionar um amigo na lista
const adicionarAmigo = () => {
  let amigo = document.getElementById("amigo").value.toLowerCase();
  if (amigo != "") {
    if (listaAmigos.includes(amigo)) {
      alert("Este amigo já foi adicionado");
      document.getElementById("amigo").value = "";
      document.getElementById("amigo").focus();
      return;
    }
    listaAmigos.push(amigo);
  } else {
    alert("Este campo não pode ser vazio");
  }
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
  let li = document.createElement("li");
  document.getElementById("listaAmigos").appendChild(li).innerHTML =
    tornaPrimeiraLetraMaiuscula(amigo);
  
};
//função para sortear amigo
const sortearAmigo = () => {
  let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
  document.getElementById(
    "resultado"
  ).innerHTML = `Amigo sorteado(a) ${tornaPrimeiraLetraMaiuscula(
    listaAmigos[amigoSorteado]
  )}`;
};

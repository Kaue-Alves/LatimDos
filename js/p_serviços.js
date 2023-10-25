document.querySelector(".navbar-toggler").addEventListener("click", function () {
    var target = document.getElementById("navbar-links");
    target.classList.toggle("show");
});

document.querySelector("#env-banho").addEventListener("click", () => {
    const teste = document.querySelector('#produtoRacao').value;
    const adicionar = document.querySelector("#adicionar_carrinho");

    if (teste == "ban1") {
        adicionar.innerHTML += "<li> Banho Normal </li>"
    } else {
        adicionar.innerHTML += "<li> Banho Premium </li>";
    }
})

document.querySelector("#env-tosa").addEventListener("click", () => {
  const teste = document.querySelector("#produtoRacao2").value;
  const adicionar = document.querySelector("#adicionar_carrinho");

  if (teste == "tos1") {
    adicionar.innerHTML += "<li> Tosa Normal </li>";
  } else {
    adicionar.innerHTML += "<li> Tosa Premium </li>";
  }
});

document.querySelector("#env-racao").addEventListener("click", () => {
  const teste = document.querySelector("#produtoRacao3").value;
  const adicionar = document.querySelector("#adicionar_carrinho");

  if (teste == "rac1") {
    adicionar.innerHTML += "<li> Ração Normal </li>";
  } else if (teste == "rac2"){
    adicionar.innerHTML += "<li> Ração Premium </li>";
  } else {
    adicionar.innerHTML += "<li> Ração Super Premium </li>";
  }
});

document.querySelector("#env-veterinario").addEventListener("click", () => {
  const teste = document.querySelector("#produtoRacao4").value;
  const adicionar = document.querySelector("#adicionar_agendamentos");

  if (teste == "hor1") {
    adicionar.innerHTML += "<li> 14h às 15h </li>";
  } else if (teste == "hor2"){
    adicionar.innerHTML += "<li> 15h às 16h </li>";
  } else {
    adicionar.innerHTML += "<li> 17h às 18h </li>";
  }
});


document.querySelector('#salvar-carrinho').addEventListener('click', () => {
    const salvar = document.querySelector('#adicionar_carrinho'); 
    const salvarList = salvar.getElementsByTagName('li');

    const valoresSalvos = []
    for (let i = 0; i < salvarList.length; i++) {
        valoresSalvos.push(salvarList[i].textContent);
    };
    localStorage.setItem('Carrinho', JSON.stringify(valoresSalvos));
});

document.querySelector('#salvar-agendamentos').addEventListener('click', () => {
    const salvar = document.querySelector('#adicionar_agendamentos');
    const salvarList = salvar.getElementsByTagName("li");

    const valoresSalvos = [];
    for (let i = 0; i < salvarList.length; i++) {
      valoresSalvos.push(salvarList[i].textContent);
    }
    localStorage.setItem("Agendamento", JSON.stringify(valoresSalvos));
})
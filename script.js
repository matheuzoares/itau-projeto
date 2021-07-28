function testaCPF(strCPF) {
  var soma;
  var resto;
  soma = 0;

  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11))  resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10))) return false;

  soma = 0;
  for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11))  resto = 0;
  if (resto != parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

function validadeCpf() {
  var cpfValor = document.getElementById("cpf").value;

  if (testaCPF(cpfValor) == true) {
    document.getElementById("cpfLabel").innerHTML = "CPF VÁLIDO";
    document.getElementById("cpfLabel").style.fontWeight = "600";
    document.getElementById("cpfLabel").style.color = "green";
  } 
  
  if (testaCPF(cpfValor) == false) {
    document.getElementById("cpfLabel").innerHTML = "CPF INVÁLIDO";
    document.getElementById("cpfLabel").style.fontWeight = "600";
    document.getElementById("cpfLabel").style.color = "red";
  }

  if (cpfValor == "") {
    document.getElementById("cpfLabel").innerHTML = "CPF <span>*</span>";
    document.getElementById("cpfLabel").style.fontWeight = "400";
    document.getElementById("cpfLabel").style.color = "black";
  }
}

function mostrarPagina(n) {
  var paginas = document.getElementsByClassName("pagina");
  paginas[n].style.display = "block";

  if (n == 0) {
    document.getElementById("anterior").style.display = "none";
  } else {
    document.getElementById("anterior").style.display = "block";
  }
  if (n == 0) {
    document.getElementById("posterior").innerHTML = "Começar";
  } 
  if (n == 1) {
    document.getElementById("posterior").innerHTML = "Avançar";
  }
  if (n == 2) {
    document.getElementById("posterior").innerHTML = "Avançar";
  }
  if (n == 3) {
    document.getElementById("posterior").innerHTML = "Concluir";
  }
  if (n == 4) {
    document.getElementById("anterior").style.display = "none";
    document.getElementById("posterior").style.display = "none";
  }
}

var paginaAtual = 0;
mostrarPagina(paginaAtual);

function validateForm() {
  var paginas, obrigatorio, i, valid = true;
  paginas = document.getElementsByClassName("pagina");
  obrigatorio = paginas[paginaAtual].getElementsByClassName("asterisk");

  for (i = 0; i < obrigatorio.length; i++) {
    if (obrigatorio[i].value == "") {
      obrigatorio[i].placeholder = "Campo obrigatório"
      obrigatorio[i].style.borderBottomColor = "red"
      valid = false;
    }
  }
  return valid;
}

function trocarPagina(n) {
  var paginas = document.getElementsByClassName("pagina");

  if (n == 1 && !validateForm()) return false;

  paginas[paginaAtual].style.display = "none";
  paginaAtual = paginaAtual + n;
  mostrarPagina(paginaAtual);
  scrollParaCima();
}

function scrollParaCima() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function purpleBorder(inputId) {
  var elementId = document.getElementById(inputId.id);

  elementId.style.borderBottomColor = "purple";
  elementId.placeholder = "";
}
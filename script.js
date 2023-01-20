let conteudo;

let x = document.getElementById("mostra-conteudo");
let y = document.getElementById("oculta-conteudo");

function temTexto() {
  let conteudo = document.getElementById("digita-texto").value;

  if (conteudo == "") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function ValidarConteudo() {
  let conteudo = document.getElementById("digita-texto").value;

  if (conteudo == "") {
    alert("Você não digitou nada!");
  } else {
    const pattern = /[0-9A-ZÀ-ü@´`^~'"]/;
    if (conteudo.match(pattern)) {
      alert("Somente letras minúsculas e sem acento!");
      document.getElementById("digita-texto").value = "";
    }
  }
}

function criptografar() {
  ValidarConteudo();

  let conteudo = document.getElementById("digita-texto").value.toLowerCase();

  let txtCriptografado = conteudo
    .replace(/e/gim, "enter")
    .replace(/o/gim, "ober")
    .replace(/i/gim, "imes")
    .replace(/a/gim, "ai")
    .replace(/u/gim, "ufat");

  document.getElementById("saida-texto").innerHTML = txtCriptografado;
  temTexto();
}

function descriptografar() {
  let conteudo = document.getElementById("digita-texto").value.toLowerCase();

  let txtDescriptografado = conteudo
    .replace(/enter/gim, "e")
    .replace(/ober/gim, "o")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ufat/gim, "u");

  document.getElementById("saida-texto").innerHTML = txtDescriptografado;
  temTexto();
}

function CopiaCriptografia() {
  let conteudoVAzio = document.getElementById("saida-texto").value;
  if (conteudoVAzio == "") {
    alert("Não tem nada para ser copiado!");
  } else {
    let copiar = document.getElementById("saida-texto");

    copiar.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(copiar.value);
    alert("Mensagem copiada!");
  }
}

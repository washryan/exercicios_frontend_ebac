const form = document.getElementById("form-validacao");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = parseFloat(document.getElementById("campoA").value);
  const campoB = parseFloat(document.getElementById("campoB").value);

  if (campoB > campoA) {
    mensagem.textContent = "Formulário válido! Campo B é maior que o Campo A.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent =
      "Formulário inválido! Campo B deve ser maior que o Campo A.";
    mensagem.style.color = "red";
  }
});

$(document).ready(function () {
  // Evento de submit do formulário
  $("#form-tarefa").on("submit", function (e) {
    e.preventDefault();
    const tarefa = $("#nome-tarefa").val();

    if (tarefa) {
      // Cria um novo item <li> com o ícone de "check"
      const novaTarefa = $(
        `<li>
          <span class="check-icon"></span>
          <span>${tarefa}</span>
        </li>`
      );

      $("#lista-tarefas").append(novaTarefa);
      $("#nome-tarefa").val(""); // Limpa o input
    }
  });

  // Evento de clique para marcar/desmarcar uma tarefa como completa
  $("#lista-tarefas").on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});

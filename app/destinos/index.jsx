//Por exemplo:

function Botao() {
  function mostrarMensagem() {
    alert("Você clicou no botão!");
  }

  return (
    <button onClick={mostrarMensagem}>
      Clique aqui
    </button>
  );
}
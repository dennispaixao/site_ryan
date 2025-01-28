const textoTitulo = "Oi, meu nome é Ryan";
const link = document.querySelector(".link");
link.innerText = "";

for (let i = 0; i < textoTitulo.length; i++) {
  setTimeout(() => {
    link.innerHTML += textoTitulo[i];
  }, i * 100); // Multiplica o tempo pelo índice para manter o intervalo correto
}

function carregarPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(dados => {
      document.getElementById("resultado").innerHTML =
        "<h3>" + dados.title + "</h3><p>" + dados.body + "</p>";
    });
}

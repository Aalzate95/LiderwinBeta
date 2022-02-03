const noticias = () => {
  fetch("./assets/data/productos3.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
noticias();

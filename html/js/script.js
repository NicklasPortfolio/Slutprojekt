fetch("js/texts.json")
  .then((response) => response.json())
  .then((data) => {
    const randomIndex = Math.floor(Math.random() * data.conspiracies.length)
    const conspiracy = data.conspiracies[randomIndex]

    document.getElementById("header").textContent = conspiracy.title
    document.getElementById("maintext").textContent = conspiracy.description
    document.getElementById("img-container").src = conspiracy.imgname
  });

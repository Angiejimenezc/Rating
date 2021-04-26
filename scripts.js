window.onload = () => {
  const stars = document.querySelector(".star");
  const body = document.querySelector("body");

  stars.onmouseover = (e) => {
    Array.from(stars.children).forEach((star) => {
      if (star.id <= e.target.id) {
        star.classList.remove("green");
        star.classList.add("yellowgreen");
      }
    });
  };

  stars.onmouseout = (e) => {
    Array.from(stars.children).forEach((star) => {
      if (star.id <= e.target.id) {
        star.classList.replace("yellowgreen", "green");
      }
    });
  };

  const Relleno = true;
  const Vacio = false;

  stars.onclick = (e) => {
    reset(Vacio, stars.children.length);
    reset(Relleno, e.target.id);
  };

  body.onclick = (e) => {
    if (e.target.tagName === "I") return;
    reset(Vacio, stars.children.length);
  };

  function reset(solido, targetID) {
    classFrom = solido ? "far" : "fas";
    classTo = solido ? "fas" : "far";

    Array.from(stars.children).forEach((star) => {
      if (star.id <= targetID) {
        star.classList.replace(classFrom, classTo);
      }
    });
  }
};

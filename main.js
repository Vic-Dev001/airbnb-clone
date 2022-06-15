var iconsmenu = document.querySelector(".iconsgeneral");
var nextbtn = document.querySelector(".rightarrow");
var prevbtn = document.querySelector(".leftarrow");

// scrollTo(x, y);

function next() {
  if (nextbtn) {
    return iconsmenu.scrollTo(850, 0);
  }
}

function prev() {
  if (prevbtn) {
    return iconsmenu.scrollTo(-850, 0);
  }
}  
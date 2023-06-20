function shufflevalues(event) {
  event.preventDefault();
  var values = document.getElementsByClassName("checkbox");
  var rand = Math.floor(Math.random() * 4);
  let sameIndex = true;
  for (let i = 0; i < values.length; i++) {
    if (rand == i) {
      rand = Math.floor(Math.random() * 4);
    }
    values[i].checked = false;

    var temp = values[rand].value;
    var idElement = values[i].value;

    var element = (document.getElementById(idElement).innerHTML = temp);
    element.id = idElement;

    rand++;
    if (rand == 4) {
      rand = 0;
    }
  }
}

function changeValues(event) {
  event.preventDefault();
  var values = document.getElementsByClassName("checkbox");

  for (let i = 0; i < values.length; i++) {
    var rand = Math.round(Math.random());
    values[i].checked = rand > 0 ? true : false;
  }
}

function showValues(event) {
  event.preventDefault();
  const valContainer = document.getElementById("showValuesContainer");
  var values = document.getElementsByClassName("checkbox");
  while (valContainer.firstChild) {
    valContainer.removeChild(valContainer.firstChild);
  }
  for (let i = 0; i < values.length; i++) {
    const p = document.createElement("p");
    const text = document.createTextNode(values[i].checked);
    p.style.color = values[i].checked ? "green" : "red";
    p.appendChild(text);
    valContainer.append(p);
  }
}

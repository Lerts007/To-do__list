const ROOT_LIST = document.getElementById("list");
class List {
  createEL(text) {
    const html = `
      <div class = "List-container">
        <input type = "checkbox" class = "checkbox__input" id = "checkbox__id"/>
        <label class = "text" for = "checkbox__id">${text}</label>
        <img src="../../img/trash.png" onClick="delete_row(this)"/>
      </div>
      `;
    textNote.value = "";

    ROOT_LIST.innerHTML += html;
  }
}

const ListPage = new List();

//Функция добавления через кнопку 'Enter'
document.getElementById("textNote").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addLi();
  }
});

//Функция добавления через кнопку
function addLi() {
  let text = document.getElementById("textNote").value;
  if (text !== "") ListPage.createEL(text);
}

//Функция удаления элемента списка
function delete_row(el) {
  let el1 = el.parentNode;
  el1.style.opacity = 1;
  let intervalId = setInterval(() => {
    if (el1.style.opacity > 0) {
      el1.style.opacity -= 0.1;
    } else {
      clearInterval(intervalId);
      el.parentNode.parentNode.removeChild(el.parentNode);
    }
  }, 20);
}

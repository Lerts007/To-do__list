const ROOT_LIST = document.getElementById("list");
class List {
  createUl() {
    const html = `
      <div class = "List-container">
        <ul id = "ulList">
        </ul>
      </div>
      `;
    ROOT_LIST.innerHTML = html;
  }

  render() {
    let text = document.getElementById(textNote);
    const textHtml = `
        <li>
            ${textNote.value}
        </li>`;
  }
}

const ListPage = new List();
ListPage.createUl();

document.getElementById("textNote").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addLi();
  }
});

function addLi() {
  let text = document.getElementById("textNote").value;
  if(text != ""){
    let ul = document.getElementById("ulList");
    let li = document.createElement("li");
    li.prepend(text);
    ul.prepend(li);
    textNote.value = "";
  }
}

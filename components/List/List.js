const ROOT_LIST = document.getElementById("list");
class List {
  createUl() {
    const html = `
        <ul id = "ulList">
        </ul>`;
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
  let ul = document.getElementById("ulList");
  let li = document.createElement("li");
  let text = document.getElementById("textNote").value;
  li.append(text);
  ul.append(li);
}

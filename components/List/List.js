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
  removeLi() {
    let myblock = document.querySelectorAll("li");

    myblock.forEach((block) => block.addEventListener("click", removeBlock));

    function removeBlock() {
      let block = this;
      block.style.opacity = 1;
      let blockId = setInterval(function () {
        if (block.style.opacity > 0) block.style.opacity -= 0.1;
        else {
          clearInterval(blockId);
          block.remove();
        }
      }, 60);
    }
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
  if (text != "") {
    let ul = document.getElementById("ulList");
    let li = document.createElement("li");
    li.prepend(text);
    ul.prepend(li);
    textNote.value = "";
    ListPage.removeLi();
  }
}

const ROOT_INPUTMENU = document.getElementById("inputMenu");
class InputMenu {
  render() {
    const html = `
            <div class = "logotip">
                <h2>Заметки</h2>
            </div>
            <div class = "addMenu">
                <input type = "text" placeholder = "Купить мороженое..." id="textNote"/> 
                <button class = "inputMenu-btn" onclick="addLi()">Добавить</button>
            </div>
        `;

    ROOT_INPUTMENU.innerHTML = html;
  }
}

const inputMenuPage = new InputMenu();
inputMenuPage.render();

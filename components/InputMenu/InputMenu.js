const ROOT_INPUTMENU = document.getElementById("inputMenu");
class InputMenu {
  render() {
    const html = `
        <div class = "inputMenu-container">
            <div class = "logotip">
                <h2>Заметки</h2>
            </div>
            <div class = "addMenu">
                <input type = "text" placeholder = "Купить мороженое..."/> 
                <button class = "inputMenu-btn">Добавить</button>
            </div>
            <div class = "login"></div>
        </div>
        `;

    ROOT_INPUTMENU.innerHTML = html;
  }
}

const inputMenuPage = new InputMenu();
inputMenuPage.render();

class Button {

  constructor(x, y, w, h, text, id) {
    this.button = document.createElement('input');
    this.button.setAttribute("type", 'button');
    this.button.setAttribute("id", id);
    this.button.setAttribute("left", x + 'px');
    this.button.setAttribute("top", y + 'px');
    this.button.setAttribute("width", w + 'px');
    this.button.setAttribute("height", h + 'px');
    this.button.setAttribute("value", text);

    // this.onClick = this.button.onclick;
  }
}

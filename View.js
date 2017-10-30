class View {

  constructor() {
    this.createButton();

  }

  createButton() {
    this.buttonId = 'button';
    this.paul = new Button(model.buttonX, model.buttonY, 120, 40, 'кнопка', this.buttonId);
    document.getElementById("container").appendChild(this.paul.button);
    // this.paul.button.onclick
      // this.buttonClickedCallback;

  }

}

function mousePressed() {
  if (model.button.mouseOver()) {
    controller.buttonDisappear();
  }
}

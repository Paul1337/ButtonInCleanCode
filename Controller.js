class Controller {

  constructor(model) {
    this.model = model;
    this.view = new View();
    this.view.paul.button.onclick = function() {
      model.onButtonClick();

    }
  }
}

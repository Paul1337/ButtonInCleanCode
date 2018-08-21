class Controller {

  constructor(model) {
    this.model = model;
    this.view = new View();
    this.view.createButton(this.model.button.x, this.model.button.y);
    this.view.createTexts();

    this.model.clicksUpdated = function( counter ) {
      self.view.text1.innerHTML = "Clicks amount: " + counter;
    }

    this.model.gotHundred = function() {
      self.view.text1.innerHTML = "Good boy!";
      self.view.text1.style.fontSize = "50px";

    }

    var self = this;
    this.view.btn.button.onclick = function() {
      self.model.onButtonClick();
    }
  }
}

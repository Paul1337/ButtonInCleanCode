class Model {

  constructor() {
    this.buttonX = 10;
    this.buttonY = 10;
  }

  onButtonClick() {

    console.log(controller.view.paul.button.getAttribute('visibility'));
    if (controller.view.paul.button.getAttribute('visibility') == 'hidden' || controller.view.paul.button.getAttribute('visibility') == null) {
      controller.view.paul.button.setAttribute('visibility', 'visible');
    } else {
      controller.view.paul.button.setAttribute('visibility', 'hidden');
    }

  }




}

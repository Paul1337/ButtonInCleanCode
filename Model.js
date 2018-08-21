class Model {

  constructor() {

    this.button = {
      x : 10,
      y : 10
    }

    this.clicks = 0;
    
  }

  onButtonClick() {
    this.clicks ++;
    this.clicksUpdated ( this.clicks );

    if (this.clicks >= 100) {
      this.gotHundred();
    }

  }




}

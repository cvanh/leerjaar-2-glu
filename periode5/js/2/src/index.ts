const WheelOptions = ["1", "2", "3", "4", "5", "6"];

// creates all the elements
// for (let index = 0; index < WheelOptions.length; index++) {
//     const t = document.createElement('div');
//     t.classList.add('WheelSpoke')
//     t.innerHTML = WheelOptions[index];
//     wheel.appendChild(t)
// }

class Wheel {
  wheel;
  constructor(wheel: any) {
    // const wheel = document.getElementById('wheel');
    this.wheel = wheel;
    this.WheelConstruct(WheelOptions);
    this.WheelStartButton();
  }
  private WheelConstruct(WheelOptions: any) {
    for (let index = 0; index < WheelOptions.length; index++) {
      // creates a div element
      const t = document.createElement("div");
      // then this element will receive a class
      t.classList.add("WheelSpoke");
      // the Wheel gets a content from the array
      t.innerHTML = WheelOptions[index];
      // the wheelspoke receives a rotate
      t.style.transform = `rotate(${(360 / WheelOptions.length) * index}deg)`;
      // then it is inserted to the wheel body
      this.wheel.appendChild(t);
    }
  }
  private WheelRotate() {
    let Rotation: number = 0;
    for (let index = 0; index < 60; index++) {
        console.log(this.Easing(index,1,5,60))        
    }
    this.wheel.style.transform = `rotate(${this.Easing(0,1,5,60)}deg)`    
  }
  /**
   * 
   * @param t current time
   * @param b start value
   * @param c change in value
   * @param d duraction
   * @returns stuff
   */
  private Easing(t:number, b:number, c:number, d:number) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
  // add a event listner to the start button so when its pressed it can make the weel spin
  public WheelStartButton() {
    document.getElementById("start").addEventListener("click", () => {
      this.WheelRotate();
    });
  }
}

const rad = new Wheel(document.getElementById("wheel"));

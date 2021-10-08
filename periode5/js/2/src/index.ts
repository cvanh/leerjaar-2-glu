/*
todo list

[] replace any to proper types
[] unfuck the wheel bug
[] add a number selector
[] ??

*/

class Wheel {
  wheel;
  WheelOptions;
  constructor(wheel: any, WheelOptions: any) {
    // declares the variables so we can use them
    this.wheel = wheel;
    this.WheelOptions = WheelOptions;

    // creates the wheel spokes
    this.WheelConstruct(WheelOptions);

    // adds a event listner to the start button
    this.WheelStartButton();
  }
  /**
   * draws the wheel
   * @param WheelOptions the array with the options on the wheel
   */
  private WheelConstruct(WheelOptions: any) {
    for (let index = 0; index < this.WheelOptions.length; index++) {
      // creates a div element
      const t = document.createElement("div");
      // then this element will receive a class
      t.classList.add("WheelSpoke");
      // the Wheel gets a content from the array
      t.innerHTML = this.WheelOptions[index];
      // the wheelspoke receives a rotate
      t.style.transform = `rotate(${
        (360 / this.WheelOptions.length) * index}deg)`;
      // then it is inserted to the wheel body
      this.wheel.appendChild(t);
    }
  }
  /**
   * makes the wheel rotate
   * @param multiplier
   */
  private WheelRotate(multiplier: any) {
    let Rotation: number = 0;
    for (let index = 0; index < 60; index++) {
      setTimeout(() => {
        console.log(this.Easing(index,1,5,60))
        this.wheel.style.transform = `rotate(${parseInt(this.Easing(index,1,360,60) + multiplier)}deg)`
        this.wheel.style.transition =  'transform 10ms ease-in-out'

      }, (Math.random()*100000));
    }
    // this.wheel.style.transform = `rotate(${this.Easing(0,1,5,60)}deg)`
  }
  /**
   *
   * @param t current time
   * @param b start value
   * @param c change in value
   * @param d duraction
   * @returns stuff
   */
  private Easing(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  /**
   * clears the wheel of all the spokes
   */
  private WheelSpokeClear() {
    this.wheel.innerHTML = null;
  }

  /**
   * add a event listner to the start button so when its pressed it can make the wheel spin
   */
  public WheelStartButton() {
    document.getElementById("start").addEventListener("click", () => {
      this.WheelRotate(WheelOptions);
    });
  }
}
const WheelOptions = ["1", "2", "3", "4", "5", "6","7","8","9","10"];
const t = document.getElementById("wheel");
const rad = new Wheel(t, WheelOptions);

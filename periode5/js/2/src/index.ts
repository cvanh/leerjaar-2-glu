/*
todo list

[] replace any to proper types
[x] unfuck the wheel bug
[x] add a number selector
[] add _ to private functions

[x] fix the fucking wheel spin 

*/

class Wheel {
  wheel; 
  WheelOptions;
  constructor(wheel: any, WheelOptions: string[]) {
    // declares the variables so we can use them
    this.wheel = wheel as HTMLBodyElement;

    // the spokes and values
    this.WheelOptions = WheelOptions;

    // creates the wheel spokes
    this._WheelConstruct(WheelOptions);

    // adds a event listner to the start button
    this.WheelStartButton();
  }
  /**
   * draws the wheel
   * @param WheelOptions the array with the options on the wheel
   * @private
   */
  private _WheelConstruct(WheelOptions: string[]) {
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
   * @private
   */
  private _WheelRotate() {
    for (let index:number = 0; index < 6; index++) {
      // random timing so everything will be in sync
      let RotationGeneration:number = 1
      const Randomtiming: number = Math.random() * 6
      setTimeout(() => {
        console.log(this._Easing(index,1,5,60))
        this.wheel.style.transition =  `transform ${Randomtiming * 1.10 * RotationGeneration / 10}ms`
        this.wheel.style.transform = `rotate(${this._Easing(index,1,360,Randomtiming / 10)}deg)`
        // RotationGeneration++
      }, (Randomtiming));
    }
  }
  /**
   *
   * @param t current time
   * @param b start value
   * @param c change in value
   * @param d duraction
   * @returns stuff
   * @private
   */
  private _Easing(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  /**
   * clears the wheel of all the spokes
   * @private
   */
  private _WheelSpokeClear() {
    this.wheel.innerHTML = null;
  }

  /**
   * @description add a event listner to the start button so when its pressed it can make the wheel spin
   */
  public WheelStartButton() {
    document.getElementById("start").addEventListener("click", () => {
      this._WheelRotate();
    });
  }
}
const WheelOptions: string[] = ["1", "2", "3", "4", "5", "6","7","8","9","10"];

// yea the variable names suck
const t = document.getElementById("wheel");
const rad = new Wheel(t, WheelOptions);

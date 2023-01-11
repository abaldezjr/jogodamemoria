
export default class Timer {

    constructor() {
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.lblHour = document.getElementById("hour");
        this.lblMinute = document.getElementById("minute");
        this.lblSecond = document.getElementById("second");
    }

    timer() {
        if (this.second == 60) {
            this.minute++;
            this.second = 0;
        }

        if (this.minute == 60) {
            this.hour++;
            this.second = this.minute = 0;
        }

        this.lblHour.innerHTML = this.hour.toString().padStart(2,'0');
        this.lblMinute.innerHTML = this.minute.toString().padStart(2,'0');;
        this.lblSecond.innerHTML = this.second.toString().padStart(2,'0');;

        this.second++;
    }

    start() {
        this.hour = 0, this.minute = 0, this.second;
        window.setInterval(() => this.timer(), 1000);
    }

}
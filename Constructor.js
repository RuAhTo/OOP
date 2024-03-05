class color{
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
color.prototype.rgb = function (){
    return `rgb(${this.r},${this.g},${this.b})`;
}

color.prototype.hex = function (){
    const hexR = this.r.toString(16).padStart(2, '0');
    const hexG = this.g.toString(16).padStart(2, '0');
    const hexB = this.b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
}

color.prototype.rgba = function (a) {
    return `rgba(${this.r},${this.g},${this.b}, ${a})`;
}

const myColor = new color(102,20,121);
console.log(myColor.rgb());
console.log(myColor.hex());
console.log(myColor.rgba(0));
document.body.style.backgroundColor = myColor.rgb();
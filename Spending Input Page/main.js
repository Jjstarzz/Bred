var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var reserved = document.getElementById("secondValue");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    reserved.innerHTML = 100 - this.value;
}
slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(117,257,117)' + x +'%,rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})

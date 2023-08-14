var color = document.querySelectorAll(".color");
var gradientBox = document.querySelector(".gradientBox");
var direction = document.querySelector("#direction");

var randomColor = () => {
  var rn1 = "#"+Math.floor(Math.random() * 0xFFFFFF ).toString(16);
  var rn2 = "#"+Math.floor(Math.random() * 0xFFFFFF ).toString(16);
  generate_color(rn1,rn2);

  //random color also set in color box
   color[0].value  = rn1;
   color[1].value  = rn2;

} 


var generate_color = (rn1,rn2) => {

    
    if(rn1 !== undefined)
    {
        var gradient = `linear-gradient(to ${direction.value}, ${rn1},${rn2})`;
    }
    else 
    {
        var color1 = color[0].value
        var color2 = color[1].value 
        var gradient = `linear-gradient(to ${direction.value}, ${color1},${color2})`;
    }

 

    gradientBox.style.background = gradient;

    document.querySelector("#colorCode").value = gradient;


}   

color.forEach((elem) =>{
   elem.addEventListener("input",function()
   {
      generate_color();
   })
})

direction.addEventListener("change",()=>
{
    generate_color();
})

document.querySelector(".refresh").addEventListener("click",function()
{
    randomColor();
})

//copy color code  - clipboard copy

document.querySelector(".copy").addEventListener("click",function()
{
    var copyCode = document.querySelector("#colorCode").value.trim();
    navigator.clipboard.writeText(copyCode);

    this.innerText = "Copied";

    setTimeout(function()
    {
        document.querySelector(".copy").innerText = "Copy Color";
    },3000);
    
})





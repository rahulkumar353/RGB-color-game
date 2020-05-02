
var numColor =6; 
var color = generateRandomColors(numColor); 
var square = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector(".jumbo");
var resetButton = document.querySelector(".reset");
var easyButton = document.querySelector(".easy");
var hardButton = document.querySelector(".hard");

resetButton.addEventListener("click", function() {
	color = generateRandomColors(numColor);    
    pickedcolor=pickColor();             
    colorDisplay.textContent=pickedcolor;
    
    for(var i=0;i<square.length;i++){   
          square[i].style.background = color[i];  	
    }
})

easyButton.addEventListener("click", function() {
	easyButton.classList.add("hard");
	hardButton.classList.remove("hard");
	numColor=3;
	color = generateRandomColors(numColor);    
    pickedcolor=pickColor();             
    colorDisplay.textContent=pickedcolor;  
    for(var i=0;i<square.length;i++){  
        if (color[i]) {
        	square[i].style.background=color[i];
        }       
    	else{
    		square[i].style.display ="none";
    	}
    }
	
});

hardButton.addEventListener("click", function() {
	easyButton.classList.add("hard");
	hardButton.classList.remove("hard");
	numColor=6;
	color = generateRandomColors(numColor);    
    pickedcolor=pickColor();             
    colorDisplay.textContent=pickedcolor;  
    for(var i=0;i<square.length;i++){  
        if (color[i]) {
        	square[i].style.background=color[i];
    		square[i].style.display ="block";
    	}
    }
})




colorDisplay.textContent = pickedcolor;

for(var i=0; i<square.length; i++) {
	square[i].style.background = color[i];

	square[i].addEventListener("click", function() {
    //grab color of clicked squares
	   var clickedcolor =	this.style.background;
	   //compare clickedcolor to pickedcolor
	   if (clickedcolor == pickedcolor) {
          messageDisplay.textContent="Correct!";
		  resetButton.textContent = "Play Again?";
		  changeColors(clickedcolor);
		  h1.style.background = clickedcolor;
	    }
	   else{
		   this.style.background="#232323";
		   messageDisplay.textContent = "Try Again";
	   }
	});
}

function changeColors(color){
	for(var i=0;i<square.length;i++) {
		square[i].style.background = color;
	}
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0 ;i<num;i++){
      //get random color and push into arr
      arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick a red green bluefrom 0-255
	var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b +")";
}
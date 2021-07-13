// Created by Mahesh maddi

// for addition 
function a()
{ 
var x=parseInt(document.getElementById("e").value);
 var y=parseInt(document.getElementById("f").value);
 var z=x+y; document.getElementById("g").value=z ;
} 
//for subtraction
function b()
{ 
var x=parseInt(document.getElementById("e").value);
 var y=parseInt(document.getElementById("f").value);
 var z=x-y; 
  document.getElementById("g").value=z;
} 
//for multiplication
function c()
{ 
var x=parseInt(document.getElementById("e").value);
 var y=parseInt(document.getElementById("f").value);
 var z=x*y; 
  document.getElementById("g").value=z ;
} 
//for division 
function d()
{ 
var x=parseInt(document.getElementById("e").value);
 var y=parseInt(document.getElementById("f").value);
 var z=x/y; 
  document.getElementById("g").value=z ;
} 
//clear button 
function clearIt() { 
document.getElementById('e').value = "";
document.getElementById('f').value = "";
 document.getElementById('g').value = "";
}

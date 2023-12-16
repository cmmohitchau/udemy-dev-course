document.querySelector("input").click();
var secondLink = document.querySelector("li a"); 
secondLink.style.color = "red";  // changing link color
document.querySelector("h1").style.color = "red";
document.querySelector(".btn").style.backgroundColor = "yellow"; 
//document.querySelector("h1").classList.add("huge");  //adding class

document.querySelector("button").classList.add("invisible");

document.querySelector("h1").innerHTML = "Good bye";

document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.bing.com")
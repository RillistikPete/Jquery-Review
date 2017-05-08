let howmanyBeans = 6;
let howmanyCows = 2;

$("#resultBtn").click( () => {
	console.log("click on result btn");
	resultFunction(howmanyBeans, howmanyCows);
});

function resultFunction(a, b){
	let result = a * b;
	$("#result-1").html(result);
}

$("#scaryBtn").click( () => {
	$("dd").toggle();
	console.log("ishidden", $("dd").is(":hidden"));
	$("dd").is(":hidden") ? $("#scaryBtn").html("Show") : $("#scaryBtn").html("Too Scary");
});

let storyItems = $(".story");

for (let i = 0; i < storyItems.length; i++){
	storyItems[i].onmouseover = over;
	storyItems[i].onmouseout = out;
}

function over(){
	console.log("this is", this);
	this.style.backgroundColor = "#cc0000";
	//THIS - refers to storyItem[i], the same as 'event.target'
	//event.target.style.backgroundColor = "#cc0000";
}

function out(){
	this.style.backgroundColor = "#ffffff";
}

$(".inner").append(`, <strong>Chief</strong>`); //Quotation marks work the same as the tick marks here, but you need ticks for defining variables (${x})

$("#holiday").click( () => {
	doSomething($("#holiday"));

});
function doSomething(obj){
	console.log("obj", obj, obj[0], event);
	//returns an array of one object
	console.log(this);
	event.target.style.backgroundColor = "orange";
}






let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map((buttons) => {
	buttons.addEventListener("click", (e) => {
		console.log("click");
		console.log(e);
		console.log(e.target);
		console.log(e.target.innerText);
	});
});

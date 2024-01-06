document.addEventListener("DOMContentLoaded", function() {

	function changeColors() {
		console.log("Changing colors... " + this.id);

		var content = document.getElementById("content");
	
		if(this.id === "black-on-white") {
			content.style.color = "#333";
			content.style.backgroundColor = "#FAFAFA";
			document.querySelector("#content a").style.color = "#333";
			document.querySelector("#content a").style.borderColor = "#333";
		}
		if(this.id === "white-on-black") {
			content.style.color = "#FAFAFA";
			content.style.backgroundColor = "#333";
			document.querySelector("#content a").style.color = "#FAFAFA";
			document.querySelector("#content a").style.borderColor = "#FAFAFA";
		}
	}

	function changeFont() {
		console.log("Changing font... " + this.id);

		var content = document.getElementById("content");

		if(this.id === "serif") {
			content.style.fontFamily = '"Droid Serif", serif';
		}
		if(this.id === "sans-serif") {
			content.style.fontFamily = '"Open Sans", sans-serif';
		}
		if(this.id === "monospace") {
			content.style.fontFamily = '"Droid Sans Mono", monospace';
		}
	}

	function changeSize() {
		console.log("Changing size... " + this.id);

		var content = document.getElementById("content");

		if(this.id === "small") {
			content.style.fontSize = "100%";
		}
		if(this.id === "medium") {
			content.style.fontSize = "110%";
		}
		if(this.id === "large") {
			content.style.fontSize = "120%";
		}
	}

	document.getElementById("serif").addEventListener("change", changeFont);
	document.getElementById("sans-serif").addEventListener("change", changeFont);
	document.getElementById("monospace").addEventListener("change", changeFont);
	document.getElementById("black-on-white").addEventListener("change", changeColors);
	document.getElementById("white-on-black").addEventListener("change", changeColors);
	document.getElementById("small").addEventListener("change", changeSize);
	document.getElementById("medium").addEventListener("change", changeSize);
	document.getElementById("large").addEventListener("change", changeSize);

});
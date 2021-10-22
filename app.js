
	document.addEventListener("keyup", stroke);
	document.addEventListener("keyup", write);
	/*document.addEventListener("keyup", count);*/

		function stroke() 
		{
			let code = document.getElementById("input").value.length;
				console.log(code);
				document.getElementById("counter").innerHTML = 200 - code;
			const stop = document.getElementById("gif");
				stop.style.visibility = "Hidden";
		}

		function write() 
		{
			document.getElementById("output").innerHTML = document.getElementById("input").value;
		}
/*
		function count() 
		{
			let code = document.getElementById("input").value.length;
				console.log(code);
				document.getElementById("counter").innerHTML = 200 - code
		}
*/
		document.getElementById("input").onfocus = function appear() 
		{
			const walk = document.getElementById("gif");
			walk.style.visibility = "visible";
		}

		document.getElementById("input").onblur = function disappear() 
		{
			const stop = document.getElementById("gif");
			stop.style.visibility = "Hidden";
		}

		document.getElementById("bold").onclick = function b() 
		{
			document.getElementById("input").value += "<b></b>"
		}

		document.getElementById("italic").onclick = function i() 
		{
			document.getElementById("input").value += "<i></i>"
		}

		document.getElementById("underline").onclick = function u() 
		{
			document.getElementById("input").value += "<u></u>"
		}
/*		
		function pop() {
                if (code.length==200)
				{ 
				alert("Vous avez atteint la limite de caracteres");
				document.removeEventListener("keyup", stroke);
				document.removeEventListener("keyup", write);
				}
*/
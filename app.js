// Event Listener
	document.addEventListener("keyup" , stroke);
	document.addEventListener("keyup" , write);
	document.addEventListener("keyup" , progression);
// Character counter & gif on stroke
		function stroke() 
			{
				let code = document.getElementById("output").textContent.length;
				let max = document.getElementById("input").maxLength;
					document.getElementById("counter").innerHTML = (max - 1) - code;
				document.getElementById("gif").style.visibility = "Hidden";	
			}
// Write into output
		function write() 
			{
				document.getElementById("output").innerHTML = document.getElementById("input").value;
			}
// Gif into text area click
		document.getElementById("input").onfocus = function appear() 
			{
				document.getElementById("gif").style.visibility = "visible";
			}
// Gif out of text area click
		document.getElementById("input").onblur = function disappear() 
			{
				document.getElementById("gif").style.visibility = "Hidden";
			}
// Buttons		
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
// Progress Bar
	function progression ()
	{
		let valeur = document.getElementById("input").value.length;
		let maxi = document.getElementById("input").maxLength;

		document.getElementById("bar").style.width = valeur*100 / maxi + "%";

		let resol = document.getElementById("bar").style.width = valeur * 100 / maxi;

		if(resol >= 0 && resol <= 50)
			{
				document.getElementById("bar").style.backgroundColor = "green";
			}
			else if(resol >= 51 && resol <= 80)
				{
					document.getElementById("bar").style.backgroundColor ="orange";
				}
				else if(resol >= 81 && resol < 100)
					{
						document.getElementById("bar").style.backgroundColor ="red";
					}
					else if(resol == 100)
						{
							document.getElementById("bar").style.backgroundColor ="transparent";
							alert('Vous avez atteint la limite de caractères!')
							document.getElementById("counter").innerHTML = 0;
							document.getElementById("gif").style.visibility = "Hidden";	
						}	
	}
// Dark mode
	const Btn= document.querySelector('.inner-switch');
		Btn.addEventListener('click',() => 
			{
			if(document.body.classList.contains('dark')) 
				{
					document.body.classList.add('light')
					document.body.classList.remove('dark')
					Btn.innerHTML= "<b>OFF</b>";
					document.getElementById("gif").src = "walkday.gif";
				} 
				else if(document.body.classList.contains('light'))
					{
						document.body.classList.add('dark');
						document.body.classList.remove('light')
						Btn.innerHTML = "<b>ON</b>";
						document.getElementById("gif").src = "walknight.gif";
					}
			}
		);
// Clear everything on refresh	
	function init()
		{
			document.value = "";
		}
	window.onload = init;
// End
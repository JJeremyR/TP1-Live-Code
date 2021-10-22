// --Counter -- Bar / ++Counter ++Bar
	document.addEventListener('keyup', function keyPressed(e) 
		{	
			let code = document.getElementById("output").textContent.length;
			let max = document.getElementById("input").maxLength;
			if(e.code == "Backspace") 
				{
					document.getElementById("counter").innerHTML = max - (code-1);	
					document.getElementById("bar").style.width = (code-1)  * 100 / max + "%";
					document.getElementById("gif").style.visibility = "visible";
					document.getElementById("output").innerHTML = document.getElementById("input").value;	
					console.log(code);
				}
				else
					{
						document.getElementById("counter").innerHTML = max - (code+1);
						document.getElementById("bar").style.width = (code+1)  * 100 / max + "%";
						document.getElementById("gif").style.visibility = "Hidden";
						document.getElementById("output").innerHTML = document.getElementById("input").value;
						if(document.getElementById("counter").innerHTML == 0 )
							{
								document.getElementById("bar").style.backgroundColor ="transparent";
								alert('Vous avez atteint la limite de caractères!');
								document.getElementById("counter").style.color = document.getElementById("body").style.color;
								document.getElementById("gif").style.visibility = "visible";	
							}
					}
		}
	);
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
// Progress Bar Color
	document.getElementById("input").onkeydown = function barcolor ()
		{
			let cod = document.getElementById("output").textContent.length;
			let maxi = document.getElementById("input").maxLength;
			let res = (cod+1)  * 100 / maxi;
			let bar = document.getElementById("bar").style.width;
			bar = res;
			if(res > 0 && res <= 20)
				{
					document.getElementById("bar").style.backgroundColor = "mediumseagreen";
					document.getElementById("counter").style.color = "mediumseagreen";
				}
				else if(res > 20 && res <= 40)
					{
						document.getElementById("bar").style.backgroundColor ="forestgreen";
						document.getElementById("counter").style.color = "forestgreen";
					}
					else if(res > 40 && res <= 60)
						{
							document.getElementById("bar").style.backgroundColor ="green";
							document.getElementById("counter").style.color = "green";
						}
						else if(res > 60 && res <= 70)
							{
								document.getElementById("bar").style.backgroundColor ="orange";
								document.getElementById("counter").style.color = "orange";
							}
							else if(res > 70 && res <= 80)
								{
									document.getElementById("bar").style.backgroundColor ="darkorange";
									document.getElementById("counter").style.color = "darkorange";
								}
								else if(res > 80 && res <= 90)
									{
										document.getElementById("bar").style.backgroundColor ="orangered";
										document.getElementById("counter").style.color = "orangered";
									}
									else if(res > 90 && res <= 95)
										{
											document.getElementById("bar").style.backgroundColor ="red";
											document.getElementById("counter").style.color = "red";
										}
										else if(res > 95 && res <= 100)
											{
												document.getElementById("bar").style.backgroundColor ="crimson";
												document.getElementById("counter").style.color = "crimson";
											}
	}
// Dark mode
	const Btn= document.querySelector('.inner-switch');
		Btn.addEventListener('click',function mode () 
			{
			if (document.body.classList.contains('dark')) 
				{
					document.body.classList.add('light');
					document.body.classList.remove('dark');
					Btn.innerHTML = "<b>OFF</b>";
					document.getElementById("gif").src = "walkday.gif";
				}
				else if (document.body.classList.contains('light')) 
					{
						document.body.classList.add('dark');
						document.body.classList.remove('light');
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
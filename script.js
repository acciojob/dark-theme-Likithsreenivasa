let isDay=true

function swapTheme(){
	let appDiv=document.getElementById("app");
	if(isDay)
	{
		appDiv.classList.remove("day");
		appDiv.classList.add("night");
		button.classList.remove("button_day");
		button.classList.add("button_night");
		
		
	}
	else
	{
		appDiv.classList.remove("night");
		appDiv.classList.add("day");
		button.classList.remove("button_night");
		button.classList.add("button_day");
		
		
	}
	isDay=!isDay;
}
const button=document.getElementById("swap");
button.addEventListener("click",swapTheme);




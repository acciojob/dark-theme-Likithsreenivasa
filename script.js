let isDay=true

function swapTheme(){
	let appDiv=document.getElementById("app");
	if(isDay)
	{
		appDiv.classList.remove("day");
		appDiv.classList.add("night");
		
	}
	else
	{
		appDiv.classList.remove("night");
		appDiv.classList.add("day");
	}
	isDay=!isDay;
}
const button=document.getElementById("swap");
button.addEventListener("click",swapTheme);




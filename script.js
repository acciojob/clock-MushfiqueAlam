//your JS code here. If required.
const timer=document.querySelector("#timer");
setInterval(()=>{
	let date=new Date();
	timer.innerHTML=`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
},1000)
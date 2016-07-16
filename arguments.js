var argumentObject={};
argumentObject.recursive=function(value)
{
	if(value==0) return;
	var div=document.createElement("div")
	div.innerText=value;
	div.style="color:red;font-size:16pt;";
	document.body.appendChild(div);
	arguments.callee(value-1);
}
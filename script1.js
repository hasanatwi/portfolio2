document.getElementById('whatsapp').addEventListener("click",function(){
    const whatsappImg = document.getElementById('whatsappImg');
	if(whatsappImg.src.endsWith("whatsapp%20logo.png")){
		whatsappImg.src="my%20phone%20number.png";
	}
	else
		whatsappImg.src="whatsapp%20logo.png";
});
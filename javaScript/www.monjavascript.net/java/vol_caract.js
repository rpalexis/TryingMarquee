<!--
var x,y
var flag=0

message=message.split("")

var xpos=new Array()
for (i=0;i<=message.length-1;i++) {
	xpos[i]=-50
}

var ypos=new Array()
for (i=0;i<=message.length-1;i++) {
	ypos[i]=-50
}

function handlerMM(e){

	x = (navigator.appName.substring(0,3) == "Net") ? e.pageX : document.body.scrollLeft+event.clientX
	y = (navigator.appName.substring(0,3) == "Net") ? e.pageY : document.body.scrollTop+event.clientY

	flag=1
}

function vol_caract() {
	if (flag==1 ) {
    	for (i=message.length-1; i>=1; i--) {
   			xpos[i]=xpos[i-1]+step
			ypos[i]=ypos[i-1]
    	}
		xpos[0]=x+step
		ypos[0]=y
	
		for (i=0; i<message.length-1; i++) {

			document.getElementById("spantxt"+(i)+"").style.left = xpos[i];
			document.getElementById("spantxt"+(i)+"").style.top = ypos[i];
    	}
	}
	
	
		timer=setTimeout("vol_caract()",30)
}
if(navigator.appName.substring(0,3) == "Net")
document.captureEvents(Event.MOUSEMOVE);
window.onload = vol_caract;
//-->


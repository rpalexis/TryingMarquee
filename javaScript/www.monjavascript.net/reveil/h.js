<!--
// PLF - http://www.monjavascript.net/
var date_du_jour, heure, minute;
var tex= "index.html"
var dos="reveil/index.html"

document.write('<a href="http://www.monjavascript.net/reveil.php" target="_blank" ><img src="reveil/0.gif" name="im1" border="0" alt=',tex,' ><img src="reveil/1.gif" name="im2" border="0" alt=',tex,'><img src="reveil/p.gif" width="7" height="21" alt=',tex,' border="0"><img src="reveil/2.gif" name="im3" border="0" alt=',tex,'><img src="reveil/3.gif" name="im4" border="0" alt=',tex,'></a>');
	document.im1.src = dos+"4.gif";
	document.im2.src = dos+"5.gif";
	document.im3.src = dos+"6.gif";
	document.im4.src = dos+"7.gif";
	document.im1.src = dos+"8.gif";
	document.im2.src = dos+"9.gif";
function changer_jjs() {
		date_du_jour = new Date();
		heure = date_du_jour.getHours();
		minute = date_du_jour.getMinutes();
		if (heure<10) heure="0"+heure;
		if (minute<10) minute="0"+minute;
		heure = heure+" ";minute = minute+" "
		heur1=heure.charAt(0);
		heur2=heure.charAt(1);
		min1=minute.charAt(0);
		min2=minute.charAt(1);
       document.im1.src = dos+heur1+".gif";
       document.im2.src = dos+heur2+".gif";
       document.im3.src = dos+min1+".gif";
	   document.im4.src = dos+min2+".gif";	
                setTimeout("changer_jjs()", 15000);				
}
changer_jjs();
//-->
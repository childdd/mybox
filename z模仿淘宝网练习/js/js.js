window.onload=function(){
	document.getElementsByTagName("body")[0].onscroll=function(){
		var l1=document.getElementById("l1");
		var l2=document.getElementById("l2");
		var l3=document.getElementById("l3");
		if(pageYOffset!=undefined){
			if(pageYOffset>=200){
				l1.style.backgroundColor='red';
				l2.style.backgroundColor='red';
				l3.style.backgroundColor='blue';
			}
				else if(pageYOffset>=100){
				l1.style.backgroundColor='red';
				l2.style.backgroundColor='blue';
				l3.style.backgroundColor='red';
				}
					else{
				l1.style.backgroundColor='blue';
				l2.style.backgroundColor='red';
				l3.style.backgroundColor='red';
					}
		}else{
			//document.body.scrollTop
		}
	}
}
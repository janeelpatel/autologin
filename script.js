(function () {
	
	function fill (element, val) { 
		document.getElementsByName(element)[0].value = val; 
	} 

	fill("uname", "your_username_here"); 
	fill("passwd", "your_password_here");
	document.getElementsByName("auth")[0].submit();

})();

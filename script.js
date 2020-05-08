(function () {
	
	function fill (element, val) { 
		document.getElementsByName(element)[0].value = val; 
	} 

	fill("uname", "janeelpatel"); 
	fill("passwd", "Lordg@neshji1");
	document.getElementsByName("auth")[0].submit();

})();

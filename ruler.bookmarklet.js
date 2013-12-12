javascript:void((function ( doc ) {
	
	var head = document.querySelector( "head" );
	var link = document.createElement( "link" );
	var script = document.createElement( "script" );
	
	link.rel = "stylesheet";
	link.href = "http://github.com/jonathansampson/ruler/ruler.css";
	script.src = "http://github.com/jonathansampson/ruler/ruler.js";

	head.appendChild(link);
	head.appendChild(script);

}( document )));
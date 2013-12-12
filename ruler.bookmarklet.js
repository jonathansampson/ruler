javascript:void((function ( doc ) {
	
	var head = document.querySelector( "head" );
	var link = document.createElement( "link" );
	var script = document.createElement( "script" );
	
	link.rel = "stylesheet";
	link.href = "//jonathansampson.github.io/ruler/ruler.css";
	script.src = "//jonathansampson.github.io/ruler/ruler.js";

	head.appendChild(link);
	head.appendChild(script);

}( document )));
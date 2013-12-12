(function ( win, doc ) {

	"use strict";

	var ruler;

	doc.addEventListener("DOMContentLoaded", setup, false);

	win.addEventListener("resize", updateDims, false);
	win.addEventListener("resize", addLabels, false);

	function setup () {

		// Build a append ruper
		ruler = doc.createElement("div");
		ruler.setAttribute("class", "smpsnRuler");
		doc.body.appendChild(ruler);

		// Setup onscreen metrics
		addLabels(); updateDims();

	}

	function updateDims () {

		// Get updated window dimensions
		var newDims = win.innerWidth + " x " + win.innerHeight;

		// ::after isn't updated when setting new value via .dataset
		ruler.setAttribute("data-dimensions", newDims);

	}

	function addLabels () {

		// Clear all labels
		ruler.innerHTML = "";

		// Determine how many we need
		var count = Math.round( win.innerWidth / 100 );

		// Add them back into the ruler
		while ( --count ) {
			var label = doc.createElement("span");
			label.setAttribute("class", "label");
			label.style.left = count * 100 + "px";
			label.textContent = count * 100;
			ruler.appendChild(label);
		}

	}

}( window, document ));
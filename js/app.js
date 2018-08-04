document.demo = (function() {
	'use strict';

	window.addEventListener("deviceorientation", function(event) {

		var values = [
			Math.round(event.alpha),
			Math.round(event.beta),
			Math.round(event.gamma)
			];

		document.querySelectorAll(".output-result-value")
			.forEach(function(el, index) {
				el.innerHTML = values[index];
			});
		}, true);

})();

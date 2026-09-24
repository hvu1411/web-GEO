// Minimal JS for accessibility and tiny UX helpers
document.addEventListener('DOMContentLoaded', function () {
	var skip = document.querySelector('.skip-link');
	if (skip) skip.addEventListener('click', function (e) {
		var main = document.getElementById('top');
		if (main) main.setAttribute('tabindex', '-1');
		if (main) main.focus();
	});
});


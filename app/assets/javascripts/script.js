
(function (document) {
	var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));

/* inner-bar moves one after another	
	_bars.map(function (bar, index) {
		setTimeout(function () {
				bar.style.width = bar.dataset.percent;			
			}, index * 1000);
		
	});
*/

_bars.map(function (bar, index) {
		setTimeout(function () {
				bar.style.width = bar.dataset.percent;			
			});	
	});	
	
})(document);

/*-------Javascript form validation
function validate_aboutform() {
	if (document.contactform.name.value == "" && document.contactform.email.value == "") {
		alert("Name and email is required!!!")
		document.contactform.name.focus();
		return false;
		}
}
*/
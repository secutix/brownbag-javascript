require([], function() {
	// bind the view with the form validation
	document.querySelector("form").addEventListener("submit", function(event) {
		var btn = this.querySelector("input[type=submit]");

		event.preventDefault();
		// TODO: need proper disabling of fields as well
		btn.classList.add("loading");

		require(["modules/validation"], function(validation) {

			var ccNumberInput = document.querySelector("[name=cc_number]"),
				ccNumber = ccNumberInput.value;

			btn.classList.remove("loading");
			// break reference for memory leaks
			btn = null;

			if (validation.validate({
				ccNumber : ccNumber
			})) {
				ccNumberInput.classList.remove("error");
				alert("Payed !");
			} else {
				// TODO: smart handling of fields to put in error
				ccNumberInput.classList.add("error");
			}
		});
	})
});
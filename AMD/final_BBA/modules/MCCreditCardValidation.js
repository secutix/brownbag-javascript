define(function() {
	// Strips all non-numeric characters from the passed value and returns an integer
	// This is now private, as intended
	var formalize = function (cc_no) {
			// Remove non-numeric characters from cc_no
			var i, result = '';
			for (i = 0; i < cc_no.length; i++) {
				if (cc_no.charAt(i).match(/[0-9]/)) {
					result = result.concat(cc_no.charAt(i));
				}
			}
			return result;
		},

		// Validate a credit card number using the LUHN formula (mod 10)
		validateCreditCardNumber = function (cc_no) {
			var digits = '', sum = 0;
			// Clean the number
			cc_no = formalize(cc_no);
			for (var ndx = 0; ndx < cc_no.length; ++ndx) {
				digits += (ndx % 2) ? cc_no.charAt(cc_no.length - 1 - ndx) * 2 : cc_no.charAt(cc_no.length - 1 - ndx);
			}
			// Add all of the single digits together
			for (ndx = 0; ndx < digits.length; ++ndx) {
				sum += parseInt(digits.charAt(ndx), 10);
			}
			// Valid card numbers will be transformed into a multiple of 10
			return (sum % 10) ? false : true;
		};


	return {
		validate : function (cc_no) {
			return cc_no && cc_no.match && cc_no.match(/^5[1-5].{14}$/) && validateCreditCardNumber(cc_no);
		}
	};
});
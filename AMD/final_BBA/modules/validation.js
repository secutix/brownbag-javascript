define(["./MCCreditCardValidation"], function (MCCreditCardValidation) {
	return {
		validate : function (paymentData) {
			// TODO: validate other fields as well
			return paymentData && MCCreditCardValidation.validate(paymentData.ccNumber);
		}
	};
});
require(["validator"], function (validator) {

  // validate payment form
  var validateForm = function (event) {
    console.log("validating");
    event.preventDefault()
    var ccNumberInput = document.querySelector("[name=cc_number]"),
      value = ccNumberInput.value
    if (validator.validateMastercardCc(value)) {
      ccNumberInput.classList.remove("error")
      alert("Payed !")
    } else {
      ccNumberInput.classList.add("error")
    }
  };

  document.getElementById('cc_form').onsubmit = validateForm;
  console.log("installed");
});


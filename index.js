/* const form = document.getElementById("form");
const cardNumber = document.getElementById("cardNumber");
const cvc = document.getElementById("CVC");
const ammount = document.getElementById("ammount");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("city");
const postalCode = document.getElementById("postalCode");
const paymentMethod = document.getElementById("radio");
const cardNumber = document.getElementById("cardNumber");

form.addEventListener("submit", function (e) {
    e.preventDefault();


    checkFormInputs();
})

function checkFormInputs() {
    const cardNumberValue = cardNumber.value.trim();
    const cvcValue = cvc.value.trim();
    const ammountValue = ammount.value.trim();
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const cityValue = city.value.trim();
    const postalCodeValue = postalCode.value.trim();
    const paymentMethodValue = paymentMethod.value.trim();
    const cardNumberValue = cardNumber.value.trim();

    if (cardNumberValue == ""){
        setErrorFor(cardNumber, "required field");
    }
    else {
        setSuccesFor(cardNumber);
    }
}

function setErrorFor(input, message){
    
}*/

(function(){
    'use strict';
    window.addEventListener("load", function(){
        let forms = document.getElementsByClassName("needs-validation");
        let validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener("submit", function(event){
                if (form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
})();










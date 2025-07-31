// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to The Royal Heritage Palace website!");

    // Set minimum date for check-in to today
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    if(checkinInput) {
        checkinInput.setAttribute('min', today);
    }
    
    // Logic to ensure checkout date is after check-in date
    const checkoutInput = document.getElementById('checkout');
    if(checkinInput && checkoutInput) {
        checkinInput.addEventListener('change', function() {
            checkoutInput.setAttribute('min', this.value);
            if (checkoutInput.value < this.value) {
                checkoutInput.value = this.value;
            }
        });
    }
});


    
        // JavaScript code for interactivity
        
        // Accessing elements
        const emailInput = document.getElementById("email");
        const subscribeBtn = document.getElementById("subscribeBtn");
        const statusMessage = document.getElementById("statusMessage");
        
        // Subscribe button click event
        subscribeBtn.addEventListener("click", function() {
            const email = emailInput.value;
            
            if (isValidEmail(email)) {
                statusMessage.textContent = "Thank you for subscribing!";
                // Here you can send the email to your server or perform other actions.
            } else {
                statusMessage.textContent = "Please enter a valid email address.";
            }
        });
        
        // Function to validate email format
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    

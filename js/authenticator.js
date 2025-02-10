const API_BASE_URL = "https://api1.simplyworkcrm.com/api:C7JSXBeF/auth";


const token = localStorage.getItem("access_token");
    if(!token){
        alert("You're not authorized to access page, please login.");
        window.location.href = "/sign-in"; 
    }else{  
        // Check if timeLeft exists in localStorage
        let timeLeft = localStorage.getItem('timeLeft');

        if (timeLeft !== null) {
            timeLeft = parseInt(timeLeft, 10); // Convert to number
            startCountdown(timeLeft);
        } else {
            console.log('No countdown in progress.');
        }
    }

async function startCountdown(timeLeft) {
    const countdownInterval = setInterval(() => {
        if (timeLeft <= 880000){
            clearInterval(countdownInterval);
            refreshAuth();

        } else {
            timeLeft -= 1000; // Decrease by 1 seconds
            localStorage.setItem('timeLeft', timeLeft); // Save updated time
            document.getElementById("countdown").textContent= `${timeLeft/1000} seconds`;
            }
        }, 1000);
}

async function refreshAuth() {
    try {
        const response = await fetch(`${API_BASE_URL}/refresh`, {
            method: "POST",
            credentials: "include" // Sends the HttpOnly cookie
        });
    
        if (!response.ok) {
            console.warn("Refresh token expired or invalid. Redirecting to login...");
            window.location.href = "/sign-in"; // Redirect to login if refresh fails
            return null;
        }
    
        const data = await response.json();
        console.log("Access token refreshed:", data);
    
        // Store new access token
        localStorage.setItem("access_token", data.access_token);
        return data.access_token;
        
    } catch (error) {
        console.error("Failed to refresh token:", error);
        return null;
    }
}
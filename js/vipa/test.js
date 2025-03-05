document.addEventListener("DOMContentLoaded", async function () {
    const userInfo = await AppUtils.Utilities.getCurrentUser();
     // Get the div element
     const userInfoDiv = document.getElementById("userInfoDisplay");
     // Insert user info into the HTML
     userInfoDiv.innerHTML = `
     <p><strong>ID:</strong> ${userInfo.id}</p>
     <p><strong>Name:</strong> ${userInfo.name}</p>
     <p><strong>First Name:</strong> ${userInfo.firstName}</p>
     <p><strong>Last Name:</strong> ${userInfo.lastName}</p>
     <p><strong>Email:</strong> ${userInfo.email}</p>
     <p><strong>Type:</strong> ${userInfo.type}</p>
     <p><strong>Role:</strong> ${userInfo.role}</p>
    `;
});
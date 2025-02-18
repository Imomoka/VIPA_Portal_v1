const contactnav = document.getElementById('navContacts');
contactnav.addEventListener('click',loadcontacts);

function loadcontacts(){
    fetch('contacts-list.html')  // Fetch the external HTML file
        .then(response => response.text()) // Convert to text
        .then(data => {
            // Create a temporary container to parse HTML
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;
                    
            // Select the specific div from the fetched content
            let targetDiv = tempDiv.querySelector("#content_contacts");
                    
            // Append it to the main page
            if (targetDiv) {
                document.getElementById("main").innerHTML = targetDiv.innerHTML;
            } else {
                document.getElementById("main").innerHTML = "Content not found!";
            }
        })
        .catch(error => console.error('Error loading the content:', error));
}

const supportnav = document.getElementById('navSupport');
supportnav.addEventListener('click', loadSupport);

function loadSupport(){
    fetch('support-center.html')  // Fetch the external HTML file
        .then(response => response.text()) // Convert to text
        .then(data => {
            // Create a temporary container to parse HTML
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;
                    
            // Select the specific div from the fetched content
            let targetDiv = tempDiv.querySelector("#content_support");
                    
            // Append it to the main page
            if (targetDiv) {
                document.getElementById("main").innerHTML = targetDiv.innerHTML;
            } else {
                document.getElementById("main").innerHTML = "Content not found!";
            }
        })
        .catch(error => console.error('Error loading the content:', error));
}

const agentnav = document.getElementById('navAgents');
agentnav.addEventListener('click', loadAgents);

function loadAgents(){
    fetch('agents-list.html')  // Fetch the external HTML file
        .then(response => response.text()) // Convert to text
        .then(data => {
            // Create a temporary container to parse HTML
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;
                    
            // Select the specific div from the fetched content
            let targetDiv = tempDiv.querySelector("#content_agents");
                    
            // Append it to the main page
            if (targetDiv) {
                document.getElementById("main").innerHTML = targetDiv.innerHTML;
            } else {
                document.getElementById("main").innerHTML = "Content not found!";
            }
        })
        .catch(error => console.error('Error loading the content:', error));
}
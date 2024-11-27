// Function to load resources from the minorityResources.json file
async function loadMinorityResources() {
    try {
        // Fetch the JSON file
        const response = await fetch("minorityResources.json");
        const resources = await response.json();

        // Get the resource grid container
        const grid = document.getElementById("resource-grid");

        // Loop through each resource and create its card
        resources.forEach(resource => {
            // Create a resource card
            const resourceCard = document.createElement("div");
            resourceCard.classList.add("resource-card");

            // Populate the card with resource details
            resourceCard.innerHTML = `
                <h3>${resource.name}</h3>
                <p>${resource.description}</p>
                <a href="${resource.link}" target="_blank">Learn More</a>
            `;

            // Append the card to the grid
            grid.appendChild(resourceCard);
        });
    } catch (error) {
        console.error("Error loading minority resources:", error);

        // Fallback message in case of an error
        const grid = document.getElementById("resource-grid");
        grid.innerHTML = "<p>Failed to load resources. Please try again later.</p>";
    }
}

// Call the function to load resources on page load
window.onload = loadMinorityResources;

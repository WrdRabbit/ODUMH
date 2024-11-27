// Function to fetch and display minority resources
async function loadMinorityResources() {
    try {
        const response = await fetch("minorityResources.json");
        const resources = await response.json();
        const grid = document.getElementById("resource-grid");

        // Clear any existing content
        grid.innerHTML = "";

        // Dynamically create resource cards for the grid
        resources.forEach(resource => {
            const resourceCard = document.createElement("div");
            resourceCard.classList.add("resource-card");

            // Create HTML content for each card
            resourceCard.innerHTML = `
                <h3>${resource.name}</h3>
                <p>${resource.descriptions.default}</p>
                <a href="${resource.link}" target="_blank" class="btn-learn-more">Learn More</a>
            `;

            // Add resource-specific tag information
            if (resource.tags && resource.tags.length > 0) {
                const tagsDiv = document.createElement("div");
                tagsDiv.classList.add("resource-tags");
                resource.tags.forEach(tag => {
                    const tagSpan = document.createElement("span");
                    tagSpan.classList.add("resource-tag");
                    tagSpan.textContent = tag;
                    tagsDiv.appendChild(tagSpan);
                });
                resourceCard.appendChild(tagsDiv);
            }

            grid.appendChild(resourceCard);
        });
    } catch (error) {
        console.error("Error loading resources:", error);
        const grid = document.getElementById("resource-grid");
        grid.innerHTML = `<p>Unable to load resources at this time. Please try again later.</p>`;
    }
}

// Call the function to load resources on page load
window.onload = function () {
    if (document.getElementById("resource-grid")) {
        loadMinorityResources();
    }
};

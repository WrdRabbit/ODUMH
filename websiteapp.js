let resources = [];
let filteredResources = [];
let currentPage = 1;
const resourcesPerPage = 15;
let isReversed = false;

// Fetch resources from JSON file
window.onload = async function () {
    try {
        const response = await fetch("resources.json");
        resources = await response.json();
        filteredResources = [...resources];
        displayResources();
    } catch (error) {
        console.error("Failed to load resources:", error);
    }
};

// Display resources for the current page
function displayResources() {
    const resultsSection = document.getElementById("resource-list");
    resultsSection.innerHTML = "";

    sortResources();

    const start = (currentPage - 1) * resourcesPerPage;
    const end = start + resourcesPerPage;
    const pageResources = filteredResources.slice(start, end);

    pageResources.forEach(resource => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${resource.name}</strong>:
            <a href="${resource.link}" target="_blank">${resource.descriptions.default}</a>
            <br><em>${resource.tags.join(", ")}</em>
        `;
        resultsSection.appendChild(listItem);
    });

    document.getElementById("page-number").innerText = `Page ${currentPage}`;
}

// Sort resources by alphabetical order or reverse
function sortResources() {
    filteredResources.sort((a, b) => {
        return isReversed ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
    });
}

// Go to the next page
function nextPage() {
    if (currentPage * resourcesPerPage < filteredResources.length) {
        currentPage++;
        displayResources();
    }
}

// Go to the previous page
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayResources();
    }
}

// Toggle alphabetical order
function toggleSortOrder() {
    isReversed = !isReversed;
    currentPage = 1;
    displayResources();
}

// Filter resources based on selected criteria
function findResources() {
    const issue = document.getElementById("issue").value;
    const support = document.getElementById("support").value;
    const isLanguageAccessible = document.getElementById("language-accessible").checked;
    const isAffordable = document.getElementById("affordable-options").checked;

    const generalResourcesSection = document.getElementById("general-resources-section");

    // Filter resources
    filteredResources = resources.filter(resource => {
        const matchesIssue = !issue || resource.tags.includes(issue);
        const matchesSupport = !support || resource.tags.includes(support);
        const matchesLanguage = !isLanguageAccessible || resource.tags.includes("language");
        const matchesAffordable = !isAffordable || resource.tags.includes("affordable");

        return matchesIssue && matchesSupport && matchesLanguage && matchesAffordable;
    });

    // Check if "Language Accessible" filter is checked
    if (isLanguageAccessible) {
        generalResourcesSection.style.display = "block"; // Show the general resources section
    } else {
        generalResourcesSection.style.display = "none"; // Hide the general resources section
    }

    currentPage = 1;
    displayResources();
}
if (filteredResources.length === 0) {
    const resultsSection = document.getElementById("resource-list");
    resultsSection.innerHTML = "<p style='text-align:center;'>No specific resources found. Please check the general resources section below.</p>";
}

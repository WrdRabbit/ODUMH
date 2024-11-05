// Define resources in a JavaScript object
const resourceMap = {
    anxiety: {
        therapist: [
            { name: "BetterHelp (Online Counseling)", link: "https://www.betterhelp.com", description: "Virtual counceling and therapist providers" },
            { name: "Talkspace", link: "https://www.talkspace.com" }
        ],
        hotlines: [
            { name: "Crisis Text Line", link: "https://www.crisistextline.org" }
        ],
        apps: [
            { name: "Headspace", link: "https://www.headspace.com" },
            { name: "Calm", link: "https://www.calm.com" }
        ],
        supportGroups: [
            { name: "7 Cups (Online Support Group)", link: "https://www.7cups.com" }
        ],
        education: [
            { name: "Anxiety and Depression Association of America", link: "https://adaa.org" }
        ]
    },
    depression: {
        therapist: [
            { name: "BetterHelp", link: "https://www.betterhelp.com" }
        ],
        hotlines: [
            { name: "National Suicide Prevention Lifeline", link: "https://suicidepreventionlifeline.org" }
        ]
        // Add more resources as needed
    },
    // Add other issues like "stress", "addiction", etc.
};

// Function to find and display resources based on selected options
function findResources() {
    const issue = document.getElementById("issue").value;
    const support = document.getElementById("support").value;
    const resultsSection = document.getElementById("results");

    // Clear previous results
    resultsSection.innerHTML = "";

    // Check if issue and support are selected and resources are available
    if (issue && support && resourceMap[issue] && resourceMap[issue][support]) {
        const resources = resourceMap[issue][support];
        
        // Display the results
        let responseHtml = `<h2>Recommended Resources for ${issue}</h2><ul>`;
        resources.forEach(resource => {
            responseHtml += `<li>
            <a href="${resource.link}" target="_blank">${resource.name}</a>
            <p>${resource.description}</p> <!-- Display the description -->
            </li>`;
        });
        responseHtml += '</ul>';
        resultsSection.innerHTML = responseHtml;
    } else {
        resultsSection.innerHTML = "<p>No resources found for the selected options.</p>";
    }
}

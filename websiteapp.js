// Define resources in a JavaScript object with descriptions
const resourceMap = {
    anxiety: {
        therapist: [
            { name: "BetterHelp", link: "https://www.betterhelp.com", description: "Online therapy services with various therapists." },
            { name: "Talkspace", link: "https://www.talkspace.com", description: "Connects users with licensed therapists through an app." },
            { name: "Amwell", link: "https://www.amwell.com", description: "Telehealth service offering mental health counseling." },
            { name: "MDLive", link: "https://www.mdlive.com", description: "Online therapy for anxiety, depression, and more." }
        ],
        hotlines: [
            { name: "Crisis Text Line", link: "https://www.crisistextline.org", description: "24/7 support through text for people in crisis." },
            { name: "SAMHSA Helpline", link: "https://www.samhsa.gov/find-help/national-helpline", description: "Free, confidential 24/7 treatment referrals and information." }
        ],
        apps: [
            { name: "Headspace", link: "https://www.headspace.com", description: "Meditation app with guided sessions for relaxation." },
            { name: "Calm", link: "https://www.calm.com", description: "App for relaxation, sleep, and mindfulness." },
            { name: "Sanvello", link: "https://www.sanvello.com", description: "App with tools for managing anxiety and depression." }
        ],
        supportGroups: [
            { name: "7 Cups", link: "https://www.7cups.com", description: "Online support with trained listeners." },
            { name: "Anxiety Support Group on Reddit", link: "https://www.reddit.com/r/Anxiety/", description: "A community on Reddit for anxiety support." }
        ],
        education: [
            { name: "ADAA", link: "https://adaa.org", description: "Resources and information on anxiety and depression." },
            { name: "Mind", link: "https://www.mind.org.uk", description: "Mental health charity offering information on anxiety." }
        ]
    },
    depression: {
        therapist: [
            { 
                name: "BetterHelp", 
                link: "https://www.betterhelp.com", 
                description: "BetterHelp offers accessible, affordable, and private online therapy." 
            }
        ],
        hotlines: [
            { 
                name: "National Suicide Prevention Lifeline", 
                link: "https://suicidepreventionlifeline.org", 
                description: "A 24/7 hotline for those in distress or in need of emotional support." 
            }
        ]
        // Add more resources as needed
    },
    // Add other issues like "stress", "addiction", etc.
};

// Function to display all resources in alphabetical order
function displayAllResources() {
    const resultsSection = document.getElementById("results");
    let allResources = [];

    // Gather all resources from all issues and support types
    for (const issue in resourceMap) {
        for (const supportType in resourceMap[issue]) {
            resourceMap[issue][supportType].forEach(resource => {
                allResources.push({ ...resource, issue, supportType });
            });
        }
    }

    // Sort resources alphabetically
    allResources.sort((a, b) => a.name.localeCompare(b.name));

    // Display all resources
    let responseHtml = "<h2>All Resources</h2><ul>";
    allResources.forEach(resource => {
        responseHtml += `
            <li>
                <a href="${resource.link}" target="_blank">${resource.name}</a>
                <p><textarea readonly>${resource.description}</textarea></p>
            </li>`;
    });
    responseHtml += "</ul>";
    resultsSection.innerHTML = responseHtml;
}

// Function to filter resources based on issue and support type
function findResources() {
    const issue = document.getElementById("issue").value;
    const support = document.getElementById("support").value;
    const resultsSection = document.getElementById("results");

    resultsSection.innerHTML = "";

    if (issue && support && resourceMap[issue] && resourceMap[issue][support]) {
        const resources = resourceMap[issue][support];

        let responseHtml = `<h2>Resources for ${issue} - ${support}</h2><ul>`;
        resources.forEach(resource => {
            responseHtml += `
                <li>
                    <a href="${resource.link}" target="_blank">${resource.name}</a>
                    <p><textarea readonly>${resource.description}</textarea></p>
                </li>`;
        });
        responseHtml += "</ul>";
        resultsSection.innerHTML = responseHtml;
    } else {
        resultsSection.innerHTML = "<p>No resources found for the selected options.</p>";
    }
}

// Initial call to display all resources alphabetically
displayAllResources();
// Define resources in a JavaScript object with descriptions
const resourceMap = {
    anxiety: {
        therapist: [
            { 
                name: "BetterHelp (Online Counseling)", 
                link: "https://www.betterhelp.com", 
                description: "BetterHelp offers online therapy services through video, phone, and messaging." 
            },
            { 
                name: "Talkspace", 
                link: "https://www.talkspace.com", 
                description: "Talkspace connects users with licensed therapists through a secure app." 
            },
            { 
                name: "Amwell", 
                link: "https://www.amwell.com", 
                description: "A telehealth service offering mental health counseling, including support for anxiety and stress management." 
            }
        ],
        hotlines: [
            { 
                name: "Crisis Text Line", 
                link: "https://www.crisistextline.org", 
                description: "A text-based support service for people in crisis, available 24/7." 
            },
            { 
                name: "National Suicide Prevention Lifeline (U.S.)", 
                number: "1-800-273-8255", 
                description: "Though it’s for suicide prevention, they also offer help for severe anxiety and panic attacks." 
            }
        ],
        apps: [
            { 
                name: "Headspace", 
                link: "https://www.headspace.com", 
                description: "A meditation and mindfulness app with guided sessions." 
            },
            { 
                name: "Calm", 
                link: "https://www.calm.com", 
                description: "An app for meditation, relaxation, and sleep assistance." 
            }
        ],
        supportGroups: [
            { 
                name: "7 Cups (Online Support Group)", 
                link: "https://www.7cups.com", 
                description: "7 Cups provides online emotional support with trained listeners." 
            }
        ],
        education: [
            { 
                name: "Anxiety and Depression Association of America", 
                link: "https://adaa.org", 
                description: "An organization that provides information and resources on anxiety and depression." 
            }
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
            responseHtml += `
                <li>
                    <a href="${resource.link}" target="_blank">${resource.name}</a>
                    <p><textarea readonly>${resource.description}</textarea></p>
                </li>`;
        });
        responseHtml += '</ul>';
        resultsSection.innerHTML = responseHtml;
    } else {
        resultsSection.innerHTML = "<p>No resources found for the selected options.</p>";
    }
}

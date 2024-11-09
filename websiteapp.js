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
        ],
        affordable: [
            { name: "BetterHelp", link: "https://www.betterhelp.com", description: "Better Help has financial aid options to make therapy more affordable" },
            { name: "Crisis Text Line", link: "https://www.crisistextline.org", description: "Free 24/7 support through text. Text 'HELLO' to 741741" }
        ]
    },
    depression: {
        therapist: [
            { name: "BetterHelp", link: "https://www.betterhelp.com", description: "BetterHelp offers accessible, affordable, and private online therapy." },
            { name: "Talkspace", link: "https://www.talkspace.com", description: "Connects users with licensed therapists through an app." },
            { name: "Therapist Finder", link: "https://www.therapistfinder.com", description: "Online tool for finding licensed therapists." }
        ],
        hotlines: [
            { name: "National Suicide Prevention Lifeline", link: "https://suicidepreventionlifeline.org", description: "A 24/7 hotline for those in distress or in need of emotional support." },
            { name: "Lifeline Crisis Chat", link: "https://www.crisischat.org", description: "Chat-based support for individuals dealing with depression." },
            { name: "Samaritans", link: "https://www.samaritans.org", description: "24/7 support hotline for mental health and depression." }
        ],
        apps: [
            { name: "Youper", link: "https://www.youper.ai", description: "Mental health app with mood tracking and AI-driven support." },
            { name: "Happify", link: "https://www.happify.com", description: "Science-backed app to help manage depression and anxiety." },
            { name: "Daylio", link: "https://daylio.net", description: "Mood tracking app that helps users manage depression." }
        ],
        supportGroups: [
            { name: "7 Cups", link: "https://www.7cups.com", description: "Online support with trained listeners." },
            { name: "Depression Support Group on Reddit", link: "https://www.reddit.com/r/depression/", description: "A community on Reddit for depression support." },
            { name: "Beyond Blue", link: "https://www.beyondblue.org.au", description: "Support groups and resources for managing depression." }
        ],
        education: [
            { name: "Mental Health America", link: "https://mhanational.org", description: "Education and resources on mental health and depression." },
            { name: "National Institute of Mental Health", link: "https://www.nimh.nih.gov", description: "Research and resources on depression and mental health." },
            { name: "Verywell Mind", link: "https://www.verywellmind.com", description: "Articles and guides on depression and other mental health issues." }
        ],
        affordable: [
            {name: "Open Path Psychotherapy Collective", link: "https://openpathcollective.org/", description: "Offers affordable in-person and online therapy sessions for a flat fee of $30–$60."},
            { name: "7 Cups", link: "https://www.7cups.com", description: "Provides free access to trained volunteer listeners for emotional support." }
        ]
    },
    addiction: {
        therapist: [
            { name: "Hazelden Betty Ford", link: "https://www.hazeldenbettyford.org", description: "Addiction treatment and recovery programs." }
        ],
        hotlines: [
            { name: "SAMHSA National Helpline", link: "https://www.samhsa.gov/find-help/national-helpline", description: "24/7 helpline for addiction and substance use treatment." }
        ],
        apps: [
            { name: "Sober Grid", link: "https://www.sobergrid.com", description: "App for connecting with a sober community and tracking recovery progress." }
        ],
        supportGroups: [
            { name: "Alcoholics Anonymous (AA)", link: "https://www.aa.org", description: "Support group for individuals recovering from alcohol addiction." }
        ],
        education: [
            { name: "National Institute on Drug Abuse (NIDA)", link: "https://www.drugabuse.gov", description: "Information and research on drug addiction and abuse." }
        ],
        affordable: [
            {name: "SMART Recovery", link: "https://smartrecovery.org/", description: "Free online support groups for addiction recovery with a science-based approach."}
        ]
    },
    grief_loss: {
        therapist: [
            { name: "Grief Counseling Center", link: "https://www.griefcounselingcenter.com", description: "Therapy focused on individuals dealing with grief and loss." }
        ],
        hotlines: [
            { name: "Grief Recovery Helpline", link: "https://www.griefrecoverymethod.com", description: "Provides support and resources for grief and loss." }
        ],
        apps: [
            { name: "Grief Works", link: "https://www.griefworkscounseling.com", description: "App providing support and guidance for dealing with grief." }
        ],
        supportGroups: [
            { name: "Grief Support on Reddit", link: "https://www.reddit.com/r/GriefSupport/", description: "Online community for people experiencing grief." }
        ],
        education: [
            { name: "Grief.com", link: "https://www.grief.com", description: "Resources and articles on the process of grief and loss." }
        ],
        affordable: [
            { name: "Option B", link: "https://optionb.org/", description: "A free online community and resource hub for resilience and coping with grief."}
        ]
    }
    // Add more categories as needed
};

// Function to display all resources in alphabetical order
function displayAllResources() {
    const resultsSection = document.getElementById("results");
    let allResources = [];
    const resourceNames = new Set(); // To track unique resource names

    // Gather all unique resources from all issues and support types
    for (const issue in resourceMap) {
        for (const supportType in resourceMap[issue]) {
            resourceMap[issue][supportType].forEach(resource => {
                // Only add the resource if its name isn't already in the Set
                if (!resourceNames.has(resource.name)) {
                    allResources.push({ ...resource, issue, supportType });
                    resourceNames.add(resource.name); // Add to Set to avoid duplicates
                }
            });
        }
    }

    // Sort resources alphabetically
    allResources.sort((a, b) => a.name.localeCompare(b.name));

    // Display all unique resources
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

    // Clear previous results
    resultsSection.innerHTML = "";

    let filteredResources = [];

    // Filter resources based on the issue and support type selected
    for (const resourceIssue in resourceMap) {
        if (issue && resourceIssue !== issue) continue;

        for (const supportType in resourceMap[resourceIssue]) {
            if (support && supportType !== support) continue;

            resourceMap[resourceIssue][supportType].forEach(resource => {
                filteredResources.push({ ...resource, issue: resourceIssue, supportType });
            });
        }
    }

    // Display filtered resources
    if (filteredResources.length > 0) {
        let responseHtml = "<h2>Filtered Resources</h2><ul>";
        filteredResources.forEach(resource => {
            responseHtml += `
                <li>
                    <a href="${resource.link}" target="_blank">${resource.name}</a>
                    <br>
                    <em>${resource.issue} - ${resource.supportType}</em><br>
                    ${resource.description}
                </li>
            `;
        });
        responseHtml += "</ul>";
        resultsSection.innerHTML = responseHtml;
    } else {
        resultsSection.innerHTML = "<p>No resources found for the selected filters.</p>";
    }
}

// Initial call to display all resources alphabetically
displayAllResources();

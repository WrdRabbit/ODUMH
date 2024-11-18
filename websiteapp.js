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
            { name: "BetterHelp", link: "https://www.betterhelp.com", description: "Better Help has financial aid options to make therapy more affordable." },
            { name: "Crisis Text Line", link: "https://www.crisistextline.org", description: "Free 24/7 support through text. Text 'HELLO' to 741741" }
        ],
        language: [
            {name: "Crisis Text Line", link: "https://www.crisistextline.org", description: "(Supports English and Spanish) 24/7 support through text. Text 'HELLO' to 741741"},
            {name: "Mindshift CBT App", Link: "https://www.anxietycanada.com/resources/mindshift-cbt", description: "(Supports English and French) A mobile app to help users manage anxiety, supports French speakers."}
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
            { name: "Open Path Psychotherapy Collective", link: "https://openpathcollective.org/", description: "Offers affordable in-person and online therapy sessions for a flat fee of $30–$60."},
            { name: "7 Cups", link: "https://www.7cups.com", description: "Provides free access to trained volunteer listeners for emotional support." }
        ],
        language: [
            {name:"7 Cups", link: "https://www.7cups.com", description: "(Supports English, Spanish, French, German and more) Offers an online community and access to therapists."},
            {name: "Samaritans", link: "https://www.samaritans.org", description: "(Supports Spanish, French and more languages through international network) Provides 24/7 emotional support via phone and email for those dealing with depression, distress and suicide prevention."}
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
        ],
        language: [
            {name: "Alcoholics Anonymous (AA)", link: "https://www.aa.org", description: "(Supports over 100 languages) Offers global online and in-person support meetings, available in various languages, for individuals seeking recovery from alcohol addiction." },
            {name: "SMART Recovery", link: "https://smartrecovery.org/", description: "(Supports English, Spanish, and several other European languages) Offers multilingual resources for those recovering from addiction and substance abuse as well as a recovery program."}
        ]
    },
    grief: {
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
        ],
        language: [
            { name: "Option B", link: "https://optionb.org/", description: "(Supports English, Spanish and Portugese) An online community offering resources for those dealing with grief and loss."},
            { name: "Grief.com (by David Kessler)", Link: "https://grief.com/", description: "(Has resources in English and some Spanish)  A comprehensive resource for people dealing with grief and loss."}
        ]
    }
    // Add more categories as needed
};

// Flatten resourceMap into an array of unique resources for the total list
let resourceList = [];
const uniqueNames = new Set(); // Track unique resource names for the total list

// This array will hold all resources, including duplicates in different categories
let allResources = [];

// Populate resourceList with unique names for the total list and allResources for filtering
for (const category in resourceMap) {
    for (const supportType in resourceMap[category]) {
        resourceMap[category][supportType].forEach(resource => {
            // Add to resourceList if the name is unique (for the total list)
            if (!uniqueNames.has(resource.name)) {
                resourceList.push({ ...resource, category, supportType });
                uniqueNames.add(resource.name); // Mark name as seen
            }
            // Add to allResources regardless, to allow duplicates in filtered view
            allResources.push({ ...resource, category, supportType });
        });
    }
}

// Settings for pagination and filtering
let currentPage = 1;
const resourcesPerPage = 15;
let isReversed = false;
let filteredResources = [...resourceList]; // Initially, filtered list shows the total list

// Function to sort resources in alphabetical or reverse alphabetical order
function sortResources() {
    filteredResources.sort((a, b) => {
        return isReversed ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
    });
}

// Function to display resources for the current page
function displayResources() {
    const resultsSection = document.getElementById("resource-list");
    resultsSection.innerHTML = ""; // Clear previous resources

    sortResources(); // Ensure resources are sorted before displaying

    // Calculate start and end index for current page
    const start = (currentPage - 1) * resourcesPerPage;
    const end = start + resourcesPerPage;
    const pageResources = filteredResources.slice(start, end);

    // Display the resources on the current page
    pageResources.forEach(resource => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${resource.name}</strong>:
            <a href="${resource.link}" target="_blank">${resource.description}</a>
            <br><em>${resource.category} - ${resource.supportType}</em>
        `;
        resultsSection.appendChild(listItem);
    });

    // Update pagination controls
    document.getElementById("page-number").innerText = `Page ${currentPage}`;
}

// Function to go to the next page
function nextPage() {
    if (currentPage * resourcesPerPage < filteredResources.length) {
        currentPage++;
        displayResources();
    }
}

// Function to go to the previous page
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayResources();
    }
}

// Function to toggle the reverse alphabetical order and reload resources
function toggleSortOrder() {
    isReversed = !isReversed;
    currentPage = 1; // Reset to first page
    displayResources();
}

// Function to filter resources based on issue and support type
function findResources() {
    const issue = document.getElementById("issue").value;
    const support = document.getElementById("support").value;

    // Filter allResources (including duplicates in different categories) based on selected issue and support type
    filteredResources = allResources.filter(resource => {
        const matchesIssue = !issue || resource.category === issue;
        const matchesSupport = !support || resource.supportType === support;
        return matchesIssue && matchesSupport;
    });

    currentPage = 1; // Reset to first page
    displayResources(); // Display filtered results
}

// Initial call to display resources on page load
window.onload = function () {
    displayResources();
};

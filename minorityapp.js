// Fetch the resources from the minority-resources.json file
fetch('minority-resources.json')
  .then(response => response.json())
  .then(data => {
    // Populate the resources for each community
    populateResources('black-community', data['black-community']);
    populateResources('asian-community', data['asian-community']);
    populateResources('latinx-community', data['latinx-community']);
    populateResources('indigenous-community', data['indigenous-community']);
  })
  .catch(error => console.error('Error loading minority resources:', error));

// Function to populate the resources in the respective sections
function populateResources(community, resources) {
  const communityList = document.getElementById(`${community}-resources-list`);
  resources.forEach(resource => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="${resource.link}" target="_blank">${resource.name}</a>
      <p>${resource.description}</p>
    `;
    communityList.appendChild(listItem);
  });
}

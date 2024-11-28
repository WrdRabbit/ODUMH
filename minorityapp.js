document.addEventListener("DOMContentLoaded", () => {
  // Fetch the resources from the minority-resources.json file
  fetch('minority-resources.json')
      .then(response => response.json())
      .then(data => {
          // Populate the resources for each community
          populateResources('black-resources-list', data['black-community']);
          populateResources('latinx-resources-list', data['latinx-community']);
          populateResources('asian-resources-list', data['asian-community']);
          populateResources('indigenous-resources-list', data['indigenous-community']);
      })
      .catch(error => console.error('Error loading minority resources:', error));
});

// Function to populate the resources in the respective sections
function populateResources(listId, resources) {
  const communityList = document.getElementById(listId);

  if (!communityList) {
      console.error(`No element found with ID: ${listId}`);
      return;
  }

  resources.forEach(resource => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <a href="${resource.link}" target="_blank"><strong>${resource.name}</strong></a>
          <p>${resource.description}</p>
      `;
      communityList.appendChild(listItem);
  });
}

// Load members list
const apiUrl = 'https://challenge-api.view.agentur-loop.com/api/';
const limit = 5;
const tokenAuth = 'Bearer 0123456789';
const spinner = document.getElementById('team-spinner');
let currentPage = 1;
let currentFilter = 'show-all';

function loadCrewMembers(page, limit, filter = 'show-all') {
	const url =
		filter === 'show-all'
			? apiUrl
			: apiUrl + `?duty=${filter}&page=1&limit=25`;

	fetch(url + `?page=${page}&limit=${limit}`, {
		headers: {
			Authorization: tokenAuth,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			spinner.style.display = 'none';

			const crewMembers = data.data.data;
			// Display the crew members on the page
			displayCrewMembers(crewMembers);

			// Update the current page, limit, and filter values
			currentPage = data.data.meta.pagination.current_page;
			limit = data.data.meta.pagination.limit;
			currentFilter = filter;

			// If there are more pages, show or hide the "Load More" button
			if (currentPage < data.data.meta.pagination.total_pages) {
				showLoadMoreButton();
			} else {
				hideLoadMoreButton();
			}
		})
		.catch((error) => console.error(error));
}

function displayCrewMembers(crewMembers) {
	// Display the crew members on the page
	const crewMembersContainer = document.querySelector('.team-list');

	crewMembers.forEach((crewMember) => {
		const crewMemberElement = document.createElement('div');
		crewMemberElement.classList.add('team-member');
		crewMemberElement.innerHTML = `
			<div class="team-member-photo" style="background-image: url(${crewMember.image})"></div>
			<div class="team-member-details"><div>
				<h2 class="h5 teaser__headline color-primary">${crewMember.name}</h2>
				<p>${crewMember.duties}</p>
			</div></div>`;
		crewMembersContainer.appendChild(crewMemberElement);

		// fadeIn transition
		setTimeout(() => {
			crewMemberElement.classList.add('active');
		}, 150);
	});
}

function showLoadMoreButton() {
	const button = document.querySelector('.team-load-more');
	button.removeEventListener('click', loadMoreClickHandler);
	button.addEventListener('click', loadMoreClickHandler);
}

function hideLoadMoreButton() {
	const button = document.querySelector('.team-load-more');
	button.classList.add('team-load-more-hidden');
}

function loadMoreClickHandler() {
	loadCrewMembers(currentPage + 1, limit, currentFilter);
	spinner.style.display = 'block';
}

// Load the first five crew members
loadCrewMembers(currentPage, limit);

// Add click event listeners to the filter buttons
const filterButtons = document.querySelectorAll(
	'.team-category-filters .duty-filter-button'
);
const crewMembersContainer = document.querySelector('.team-list');
filterButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		filterButtons.forEach((f) => f.classList.remove('active'));
		button.classList.add('active');
		spinner.style.display = 'block';

		crewMembersContainer.innerHTML = ''; // Clear the container before adding new crew members
		const filter = event.target.getAttribute('data-filter');
		loadCrewMembers(1, 25, filter);
		hideLoadMoreButton();
	});
});

// Filter team list by number of columns
const filters = document.querySelectorAll(
	'.team-column-filters .column-filter-button'
);
const teamListContainer = document.querySelector('.team-list');

const filterValues = ['1', '2', '4', '5', '6'];
const filterClasses = filterValues.reduce((obj, val) => {
	obj[val] = `team-list-${val}-col`;
	return obj;
}, {});

filters.forEach((filter) => {
	filter.addEventListener('click', () => {
		// Remove all existing classes from the container
		teamListContainer.className = 'team-list';

		// Remove the "active" class from all filter buttons
		filters.forEach((f) => f.classList.remove('active'));

		// Add the "active" class to the clicked filter button
		filter.classList.add('active');

		const filterClass = filterClasses[filter.textContent];
		if (filterClass) {
			teamListContainer.classList.add(filterClass);
		}
	});
});

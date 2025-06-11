import SearchModel from '../models/searchModel.js';

let currentJobs = [];
let currentPage = 1;
const jobsPerPage = 10;

const SearchPresenter = {
  async search({ keyword = '', location = '', jobType = '', industry = '', salary = '' }) {
    const container = document.getElementById('search-results');

    container.innerHTML = `
      <div class="results-wrapper">
        <div class="company-list" id="company-list"></div>
        <div class="company-detail" id="company-detail">
          <p>Select a job on the left to view details.</p>
        </div>
      </div>
      <div class="pagination-container" id="pagination-container"></div>
    `;

    currentJobs = await SearchModel.searchJobs({ keyword, location, jobType, industry, salary });
    currentPage = 1;
    renderPage(currentPage);
  }
};

function renderPage(page) {
  const start = (page - 1) * jobsPerPage;
  const end = start + jobsPerPage;
  const jobsToShow = currentJobs.slice(start, end);

  const leftContainer = document.getElementById('company-list');
  const rightContainer = document.getElementById('company-detail');

  if (jobsToShow.length === 0) {
    leftContainer.innerHTML = `<p>No jobs found.</p>`;
    rightContainer.innerHTML = '';
    return;
  }

  leftContainer.innerHTML = jobsToShow.map(job => `
    <div class="company-card1" data-id="${job.id}">
      <div class="image-placeholder">
        <img src="${job.image}" alt="${job.company}" />
      </div>
      <h4>${job.title}</h4>
      <p>${job.company}</p>
      <p class="location"><img src="/icons/location.png"/> ${job.location}</p>
      <span class="job-type">${job.jobType}</span>
      <span class="salary">${job.salaryDisplay}<p>/ Month</p></span>
    </div>
  `).join('');

  const items = leftContainer.querySelectorAll('.company-card1');

  const renderDetail = (job) => {
    rightContainer.innerHTML = `
      <div class="detail-header">
        <div class="banner-image">
          <img src="${job.bannerImage || job.image}" alt="Banner ${job.company}" />
        </div>
        <div class="logo-box">
          <img src="${job.logo || job.image}" alt="Logo ${job.company}" />
        </div>
      </div>
      <div class="job-info">
        <h2>${job.title}</h2>
        <h4>${job.company}</h4>
        <p class="location"><img src="/icons/location.png"/> ${job.location}</p>
        <span class="job-type">${job.jobType}</span>
        <div class="salary">
          <img src="/icons/money.png"/>${job.salaryDisplay}<p>/ Month</p>
        </div>
        <button class="apply-button">Apply</button>
        <h3>Full Job Description</h3>
        <p>${job.description}</p>
      </div>
    `;
  };

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const jobId = parseInt(item.dataset.id);
      const selectedJob = currentJobs.find(job => job.id === jobId);
      renderDetail(selectedJob);
    });
  });

  if (items.length > 0) {
    items[0].classList.add('active');
    const firstJob = currentJobs.find(job => job.id === parseInt(items[0].dataset.id));
    renderDetail(firstJob);
  }

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(currentJobs.length / jobsPerPage);
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = '';
  if (totalPages <= 1) return;

  const maxVisible = 5; // Maksimum tombol halaman yang ditampilkan
  let startPage = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisible + 1, 1);
  }

  // Tombol "First"
  if (currentPage > 1) {
    const firstBtn = createPaginationButton('« First', 1);
    paginationContainer.appendChild(firstBtn);
  }

  // Tombol "Prev"
  if (currentPage > 1) {
    const prevBtn = createPaginationButton('‹ Prev', currentPage - 1);
    paginationContainer.appendChild(prevBtn);
  }

  // Tombol halaman numerik
  for (let i = startPage; i <= endPage; i++) {
    const btn = createPaginationButton(i, i);
    if (i === currentPage) btn.classList.add('active');
    paginationContainer.appendChild(btn);
  }

  // Tombol "Next"
  if (currentPage < totalPages) {
    const nextBtn = createPaginationButton('Next ›', currentPage + 1);
    paginationContainer.appendChild(nextBtn);
  }

  // Tombol "Last"
  if (currentPage < totalPages) {
    const lastBtn = createPaginationButton('Last »', totalPages);
    paginationContainer.appendChild(lastBtn);
  }
}

function createPaginationButton(text, pageNumber) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.className = 'pagination-btn';
  btn.addEventListener('click', () => {
    currentPage = pageNumber;
    renderPage(currentPage);
  });
  return btn;
}

export default SearchPresenter;

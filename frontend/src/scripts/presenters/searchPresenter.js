import SearchModel from '../models/searchModel.js';

let currentJobs = [];
let currentPage = 1;
const jobsPerPage = 10;

const SearchPresenter = {
  async search({ keyword = '', location = '', jobType = '', industry = '', salary = '' }) {
    const container = document.getElementById('search-results');

    // Reset tampilan hasil pencarian
    container.innerHTML = `
      <div class="results-wrapper">
        <div class="company-list" id="company-list"></div>
        <div class="company-detail" id="company-detail">
          <p>Select a job on the left to view details.</p>
        </div>
      </div>
      <div class="pagination-container" id="pagination-container"></div>
    `;

    // Ambil data dari model
    currentJobs = await SearchModel.searchJobs({ keyword, location, jobType, industry, salary });
    currentPage = 1;
    renderPage(currentPage);
  }
};

// Fungsi untuk menampilkan detail pekerjaan (dengan forceRefresh)
function renderDetail(job, forceRefresh = false) {
  const rightContainer = document.getElementById('company-detail');

  if (!job) {
    rightContainer.innerHTML = '<p>Data pekerjaan tidak ditemukan.</p>';
    return;
  }

  // Cek apakah sudah ditampilkan sebelumnya
  if (!forceRefresh && rightContainer.dataset.jobId === String(job._id)) {
    return;
  }

  rightContainer.dataset.jobId = String(job._id);

  rightContainer.innerHTML = `
    <div class="detail-header">
      <div class="banner-image">
        <img src="${job.bannerImage || job.image || '/images/default-banner.jpg'}" alt="Banner ${job.company}" />
      </div>
      <div class="logo-box">
        <img src="${job.logo || job.image || '/images/default-logo.png'}" alt="Logo ${job.company}" />
      </div>
    </div>
    <div class="job-info">
      <h2>${job.title || '-'}</h2>
      <h4>${job.company || '-'}</h4>
      <p class="location"><img src="/icons/location.png"/> ${job.location || '-'}</p>
      <span class="job-type">${job.jobType || '-'}</span>
      <div class="salary">
        <img src="/icons/money.png"/>${job.salaryDisplay || '-'}<p>/ Month</p>
      </div>
      <a class="apply-button" href="${job.companyLink || '#'}" target="_blank" rel="noopener noreferrer">Apply</a>
      <h3>Full Job Description</h3>
      <p>${job.description || '-'}</p>
    </div>
  `;
}

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

  // Tampilkan daftar pekerjaan
  leftContainer.innerHTML = jobsToShow.map(job => `
    <div class="company-card1" data-id="${job._id}">
      <div class="image-placeholder">
        <img src="${job.logo || job.image || '/images/default-logo.png'}" alt="${job.company || 'Unknown'}" />
      </div>
      <h4>${job.title || '-'}</h4>
      <p>${job.company || '-'}</p>
      <p class="location"><img src="/icons/location.png"/> ${job.location || '-'}</p>
      <span class="job-type">${job.jobType || '-'}</span>
      <span class="salary">${job.salaryDisplay || '-'}<p>/ Month</p></span>
    </div>
  `).join('');

  const items = leftContainer.querySelectorAll('.company-card1');

  // Event klik pada setiap item
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const jobId = item.dataset.id;
      const selectedJob = currentJobs.find(job => String(job._id) === jobId);
      renderDetail(selectedJob, true); // force refresh saat klik
    });
  });

  // Pilih otomatis pekerjaan pertama
  if (items.length > 0) {
    items.forEach(el => el.classList.remove('active'));
    items[0].classList.add('active');

    const firstJobId = items[0].dataset.id;
    const firstJob = currentJobs.find(job => String(job._id) === firstJobId);

    rightContainer.innerHTML = ''; // kosongkan dulu untuk paksa render
    renderDetail(firstJob, true);  // paksa tampil ulang
  }

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(currentJobs.length / jobsPerPage);
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = '';

  if (totalPages <= 1) return;

  const maxVisible = 5;
  let startPage = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisible + 1, 1);
  }

  if (currentPage > 1) {
    paginationContainer.appendChild(createPaginationButton('« First', 1));
    paginationContainer.appendChild(createPaginationButton('‹ Prev', currentPage - 1));
  }

  for (let i = startPage; i <= endPage; i++) {
    const btn = createPaginationButton(i, i);
    if (i === currentPage) btn.classList.add('active');
    paginationContainer.appendChild(btn);
  }

  if (currentPage < totalPages) {
    paginationContainer.appendChild(createPaginationButton('Next ›', currentPage + 1));
    paginationContainer.appendChild(createPaginationButton('Last »', totalPages));
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
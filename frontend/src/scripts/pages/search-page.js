import SearchPresenter from '../presenters/searchPresenter.js';

const SearchPage = {
  async render() {
    return `
        <section class="main-search">
            <div class="search-content">
                <div class="left-search">
                    <h1>Your Career Journey <br><span>Begins Here!</span></h1>
                    <p>
                        From your first step to your future career, 
                        <span class="brand-name">
                            <span class="brand-main">magang</span><span class="brand-highlight">in.</span>
                        </span> is here to guide, support, and connect you to 
                        meaningful internships and job experiences that matter.
                    </p>

                    <div class="input-group full-width">
                        <img src="/icons/search.png" alt="Search" />
                        <input type="text" id="keyword-input" placeholder="Job title, Keyword, or Company" />
                    </div>

                    <div class="search-row">
                        <div class="input-group">
                            <img src="/icons/location.png" alt="Location" />
                            <input type="text" id="location-input" placeholder="Add City or Provinces" />
                        </div>
                        <button id="search-button">Search</button>
                    </div>
                </div>

                <div class="right-search">
                    <div class="search-image">
                        <img src="/image/logo14.png" class="logo14" />
                    </div>
                </div>
            </div>
        </section>

        <section class="job-filter-section">
            <h2>Still searching for the right opportunity?</h2>
            <div class="filter-options">
                <div class="filter-select">
                    <select id="filter-jobtype">
                    <option value="" disabled selected hidden>Job Type  ▼</option>
                    <option value="internship">Internship</option>
                    <option value="fulltime">Full-Time</option>
                    <option value="parttime">Part-Time</option>
                    </select>
                    <span class="reset-filter" data-target="filter-jobtype">×</span>
                </div>

                <div class="filter-select">
                    <select id="filter-industry">
                    <option value="" disabled selected hidden>Industry/Field  ▼</option>
                    <option value="tech">Technology</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    </select>
                    <span class="reset-filter" data-target="filter-industry">×</span>
                </div>

                <div class="filter-select">
                    <select id="filter-salary">
                    <option value="" disabled selected hidden>Salary  ▼</option>
                    <option value="low">Below IDR 2M</option>
                    <option value="medium">IDR 2M - 5M</option>
                    <option value="high">Above IDR 5M</option>
                    </select>
                    <span class="reset-filter" data-target="filter-salary">×</span>
                </div>
            </div>
        </section>

        <section id="search-results" class="results-container">
            <div class="results-wrapper">
                <div class="company-list" id="company-list">
                </div>
                <div class="company-detail" id="company-detail">
                <p>Select a job on the left to view details.</p>
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const searchButton = document.getElementById('search-button');
    const keywordInput = document.getElementById('keyword-input');
    const locationInput = document.getElementById('location-input');

    const filters = {
        keyword: '',
        location: '',
        jobType: '',
        industry: '',
        salary: ''
    };

    const updateFilters = () => {
        filters.keyword = keywordInput.value.trim();
        filters.location = locationInput.value.trim();
        filters.jobType = document.getElementById('filter-jobtype').value;
        filters.industry = document.getElementById('filter-industry').value;
        filters.salary = document.getElementById('filter-salary').value;

        ['jobtype', 'industry', 'salary'].forEach((field) => {
            const select = document.getElementById(`filter-${field}`);
            const wrapper = select.closest('.filter-select');
            if (select.value) {
            wrapper.classList.add('active');
            } else {
            wrapper.classList.remove('active');
            }
        });

        SearchPresenter.search(filters);
    };

    // Event pencarian manual
    searchButton.addEventListener('click', updateFilters);

    // Real-time input
    keywordInput.addEventListener('input', updateFilters);
    locationInput.addEventListener('input', updateFilters);
    document.getElementById('filter-jobtype').addEventListener('change', updateFilters);
    document.getElementById('filter-industry').addEventListener('change', updateFilters);
    document.getElementById('filter-salary').addEventListener('change', updateFilters);

    // Tombol reset filter ❌
    document.querySelectorAll('.reset-filter').forEach((resetBtn) => {
        resetBtn.addEventListener('click', () => {
            const targetId = resetBtn.dataset.target;
            const selectElement = document.getElementById(targetId);
            if (selectElement) {
            selectElement.value = '';
            updateFilters();
            }
        });
    });

    const filterFields = ['jobtype', 'industry', 'salary'];
    filterFields.forEach(field => {
        const select = document.getElementById(`filter-${field}`);
        const wrapper = select.closest('.filter-select');
        if (select.value) {
        wrapper.classList.add('active');
        } else {
        wrapper.classList.remove('active');
        }
    });

    // Optional: jalankan pencarian pertama kali untuk menampilkan rekomendasi
    updateFilters();
    }
};

export default SearchPage;

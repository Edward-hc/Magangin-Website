const TopSearchView = {
  render(companies) {
    const groupedCompanies = this._chunkArray(companies, 4);

    return `
      <section class="top-searches" style="padding: 20px;">
        <h2 class="top-searches-title"><img src="/icons/search.png" class="search1" />Top Searches</h2>
        <div class="slider-wrapper" style="position: relative; overflow: hidden; width: 100%;">
          <button class="arrow left" id="arrow-left">
            <img src="/icons/Vector 1.png" alt="left arrow" class="arrow-icon" />
          </button>
          <div class="slides" id="slides"
            style="display: flex; transition: transform 0.5s ease; width: ${groupedCompanies.length * 100}%;">

            ${groupedCompanies.map(group => `
              <div class="slide"
                style="flex: 0 0 ${100 / groupedCompanies.length}%; display: flex; justify-content: center; gap: 11px; 
                padding: 0 20px; align-items: center;">

                
                ${group.map(company => `
                  <div class="company-card">
                    <img src="${company.logo}" alt="${company.name}" class="company-logo">
                    <p class="company-name">${company.name}</p>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>

          <button class="arrow right" id="arrow-right">
            <img src="/icons/Vector 2.png" alt="right arrow" class="arrow-icon" />
          </button>
        </div>
        <div class="dots" id="top-search-dots" style="text-align: center; margin-top: 12px;">
          ${groupedCompanies.map((_, i) => `
            <span class="dot" data-index="${i}"
              style="display: inline-block; width: 10px; height: 10px; margin: 0 5px; background-color: #ccc; border-radius: 50%; cursor: pointer;"></span>
          `).join('')}
        </div>
      </section>
    `;
  },

  afterRender() {
    const slidesContainer = document.getElementById('slides');
    const dots = document.querySelectorAll('.dot');
    const btnLeft = document.getElementById('arrow-left');
    const btnRight = document.getElementById('arrow-right');

    let activeIndex = 0;
    updateSlide();

    function updateSlide() {
      slidesContainer.style.transform = `translateX(-${activeIndex * (100 / dots.length)}%)`;
      dots.forEach((dot, i) => {
        dot.style.backgroundColor = i === activeIndex ? '#042A4C' : '#ccc';
      });
    }

    btnLeft.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + dots.length) % dots.length;
      updateSlide();
    });

    btnRight.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % dots.length;
      updateSlide();
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        activeIndex = parseInt(dot.dataset.index);
        updateSlide();
      });
    });
  },

  _chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
};

export default TopSearchView;

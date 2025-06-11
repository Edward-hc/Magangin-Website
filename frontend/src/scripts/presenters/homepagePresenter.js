import TopSearchView from '../views/topsearchView';

const companies = [
  { name: "Google", logo: "/image/google.png" },
  { name: "PT South Pacific Viscose", logo: "/image/microsoft.png" },
  { name: "ShopeeUnited States Department of the Air Force", logo: "/image/shopee.png" },
  { name: "Tokopedia", logo: "/image/tokopedia.png" },
  { name: "Bukalapak", logo: "/image/bukalapak.png" },
  { name: "Gojek", logo: "/image/gojek.png" },
  { name: "Grab", logo: "/image/grab.png" },
  { name: "Traveloka", logo: "/image/traveloka.png" },
  { name: "Netflix", logo: "/image/netflix.png" },
  { name: "Apple", logo: "/image/apple.png" },
  { name: "Samsung", logo: "/image/samsung.png" },
  { name: "Amazon", logo: "/image/amazon.png" },
];

const HomepagePresenter = {
  async init() {
    const topSearchSection = TopSearchView.render(companies);
    document.getElementById('top-searches').innerHTML = topSearchSection;
    TopSearchView.afterRender();
  }
};

export default HomepagePresenter;

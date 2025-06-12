import JobModel from './jobModel.js';

const SearchModel = {
  async searchJobs({ keyword, location, jobType, industry, salary }) {
    // Simulasi data dummy
    const dummyData = [
      {
        id: 1,
        title: 'Frontend Developer Intern',
        company: 'Magangin Tech',
        location: 'Jakarta',
        jobType: 'Internship',
        industry: 'tech',
        salaryRange: 'low',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        salaryDisplay: 'IDR 2 - 3 M',
        image: '/image/google.png',
        logo: '',
        bannerImage: '/image/google2.png',
        isRecommended: true,
      },
       {
            id: 2,
            title: 'ShopeeUnited States Department of the Air Force',
            company: 'PT. Design Co.',
            location: 'Bandung, West Java',
            jobType: 'Internship',
            industry: 'design',
            salaryRange: 'HIGH',
            description: 'Desain antarmuka pengguna untuk platform mobile dan web.',
            salaryDisplay: 'IDR 9 - 10 M',
            image: '/image/job2.png',
            logo: '/image/logo-designco.png',
            bannerImage: '/image/banner-designco.jpg',
            isRecommended: true,
        },
        {
            id: 3,
            title: 'Backend Developer',
            company: 'WebDev Inc.',
            location: 'Surabaya',
            jobType: 'Full-Time',
            industry: 'tech',
            salaryRange: 'medium',
            description: 'Mengembangkan API dan manajemen database.',
            salaryDisplay: 'IDR 5 - 6 M',
            image: '/image/job3.png',
            logo: '/image/logo-webdev.png',
            bannerImage: '/image/banner-webdev.png',
            isRecommended: true,
        },
        {
            id: 4,
            title: 'Business Analyst',
            company: 'Good Inc.',
            location: 'Surabaya',
            jobType: 'Part-time',
            industry: 'marketing',
            salaryRange: 'medium',
            description: 'Menganalisis kebutuhan bisnis dan membuat laporan.',
            salaryDisplay: 'IDR 5 - 6 M',
            image: '/image/job4.png',
            logo: '/image/logo-goodinc.png',
            bannerImage: '/image/banner-goodinc.png',
            isRecommended: true,
        },
        {
            id: 5,
            title: 'UI/UX Designer Intern',
            company: 'Creative Minds',
            location: 'Yogyakarta',
            jobType: 'Internship',
            industry: 'design',
            salaryRange: 'low',
            description: 'Membantu dalam desain antarmuka dan pengalaman pengguna untuk aplikasi web dan mobile.',
            salaryDisplay: 'IDR 2 - 3 M',
            image: '/image/job5.png',
            logo: '/image/logo-creativeminds.png',
            bannerImage: '/image/banner-creativeminds.jpg',
            isRecommended: true,
        },
        {
            id: 6,
            title: 'Data Analyst',
            company: 'DataSpark',
            location: 'Jakarta',
            jobType: 'Full-Time',
            industry: 'tech',
            salaryRange: 'medium',
            description: 'Mengolah dan menganalisis data perusahaan untuk mendukung pengambilan keputusan.',
            salaryDisplay: 'IDR 5 - 6 M',
            image: '/image/job6.png',
            logo: '/image/logo-dataspark.png',
            bannerImage: '/image/banner-dataspark.png',
            isRecommended: true,
        },
        {
            id: 7,
            title: 'Content Marketing Intern',
            company: 'MediaKit',
            location: 'Semarang',
            jobType: 'Internship',
            industry: 'marketing',
            salaryRange: 'low',
            description: 'Membuat konten kreatif untuk kampanye pemasaran digital.',
            salaryDisplay: 'IDR 2 - 3 M',
            image: '/image/job7.png',
            logo: '/image/logo-mediakit.png',
            bannerImage: '/image/banner-mediakit.png',
            isRecommended: true,
        },
        {
            id: 8,
            title: 'DevOps Engineer',
            company: 'CloudOps',
            location: 'Bandung',
            jobType: 'Full-Time',
            industry: 'tech',
            salaryRange: 'high',
            description: 'Mengelola infrastruktur cloud dan deployment pipeline.',
            salaryDisplay: 'IDR 7 - 10 M',
            image: '/image/job8.png',
            logo: '/image/logo-cloudops.png',
            bannerImage: '/image/banner-cloudops.jpg',
            isRecommended: true,
        },
        {
            id: 9,
            title: 'SEO Specialist',
            company: 'Digital Boost',
            location: 'Medan',
            jobType: 'Part-time',
            industry: 'marketing',
            salaryRange: 'medium',
            description: 'Meningkatkan visibilitas website klien di mesin pencari melalui strategi SEO.',
            salaryDisplay: 'IDR 4 - 6 M',
            image: '/image/job9.png',
            logo: '/image/logo-digitalboost.png',
            bannerImage: '/image/banner-digitalboost.png',
            isRecommended: true,
        },
        {
            id: 10,
            title: 'Mobile Developer Intern',
            company: 'AppLabs',
            location: 'Malang',
            jobType: 'Internship',
            industry: 'tech',
            salaryRange: 'low',
            description: 'Membantu pengembangan aplikasi mobile berbasis Flutter dan React Native.',
            salaryDisplay: 'IDR 2 - 3 M',
            image: '/image/job10.png',
            logo: '/image/logo-applabs.png',
            bannerImage: '/image/banner-applabs.png',
            isRecommended: true,
        },
        {
            id: 11,
            title: 'Graphic Designer',
            company: 'Artify Studio',
            location: 'Jakarta',
            jobType: 'Full-Time',
            industry: 'design',
            salaryRange: 'medium',
            description: 'Membuat materi visual seperti banner, poster, dan konten media sosial.',
            salaryDisplay: 'IDR 4 - 6 M',
            image: '/image/job11.png',
            logo: '/image/logo-artify.png',
            bannerImage: '/image/banner-artify.png',
            isRecommended: true,
        },
        {
            id: 12,
            title: 'Social Media Specialist',
            company: 'BuzzLink',
            location: 'Bekasi',
            jobType: 'Full-Time',
            industry: 'marketing',
            salaryRange: 'medium',
            description: 'Mengelola strategi dan konten media sosial untuk brand awareness dan engagement.',
            salaryDisplay: 'IDR 5 - 6 M',
            image: '/image/job12.png',
            logo: '/image/logo-buzzlink.png',
            bannerImage: '/image/banner-buzzlink.png',
            isRecommended: true,
        }
    ];

    // ⏬ Pindahkan ini ke dalam fungsi agar dummyData sudah tersedia
    const postedJobs = JobModel.getAllJobs();
    const allJobs = [...dummyData, ...postedJobs];

    const allEmpty = !keyword && !location && !jobType && !industry && !salary;

    if (allEmpty) {
      return allJobs.filter(job => job.isRecommended);
    }

    const filtered = allJobs.filter(job => {
      const keywordMatch = keyword
        ? job.title.toLowerCase().includes(keyword.toLowerCase()) ||
          job.company.toLowerCase().includes(keyword.toLowerCase())
        : true;

      const locationMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const jobTypeMatch = jobType
        ? job.jobType.toLowerCase().replace('-', '') === jobType.toLowerCase().replace('-', '')
        : true;

      const industryMatch = industry
        ? job.industry.toLowerCase() === industry.toLowerCase()
        : true;

      const salaryMatch = salary
        ? job.salaryRange.toLowerCase() === salary.toLowerCase()
        : true;

      return (
        keywordMatch &&
        locationMatch &&
        jobTypeMatch &&
        industryMatch &&
        salaryMatch
      );
    });

    return filtered;
  }
};

export default SearchModel;
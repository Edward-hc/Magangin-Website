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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo risus, auctor sed lacinia ut, rhoncus in velit. Sed iaculis vehicula lorem, vel finibus orci elementum id. Nulla dapibus fermentum nunc in pellentesque. Ut porta convallis sapien. Aliquam consequat pellentesque metus, sit amet viverra libero venenatis in. Nunc tellus metus, scelerisque ut lectus sed, imperdiet vestibulum neque. Mauris interdum cursus augue in blandit. Curabitur a leo arcu. Suspendisse finibus finibus nulla sed commodo. Vestibulum vel eros id erat lacinia condimentum. Nunc hendrerit leo sit amet quam fermentum, eget auctor massa convallis. Fusce mollis sollicitudin cursus. Quisque ac libero vitae sapien pharetra cursus vel eu tortor. Duis imperdiet augue quis dolor interdum lobortis. Morbi mattis posuere tincidunt. Etiam nec sapien non neque pellentesque dapibus. Nulla nec orci sit amet lectus aliquam tempus at ut ipsum. Pellentesque massa purus, fringilla rutrum mi eget, suscipit efficitur lorem. Fusce volutpat est sit amet nibh commodo, at elementum nulla elementum. Pellentesque vitae mi condimentum, mollis ante ut, porttitor urna. Nam luctus sem a nisl semper, viverra sollicitudin dui fermentum. Phasellus tristique gravida turpis ac interdum. Mauris diam lorem, viverra a velit vel, posuere ullamcorper nulla. Fusce ut magna id mauris tincidunt ultrices ut id orci. Donec mollis dolor in dolor congue, in viverra enim varius. Nunc sit amet dui eu sem rhoncus fermentum. Cras malesuada nisl orci, non pulvinar leo hendrerit imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce volutpat rhoncus vulputate. Vivamus vestibulum interdum tortor, a bibendum mauris bibendum sit amet. Donec vehicula justo eget justo vehicula, et maximus risus finibus. Phasellus tempor nulla sit amet erat posuere, et accumsan mi sodales. Vestibulum eget ante ut quam vulputate condimentum ultrices eu leo. Donec non sapien ut nunc vehicula suscipit. Nam venenatis dolor magna, ac tempus ligula porttitor in. Cras tristique eget metus a placerat. Phasellus porttitor turpis ac metus suscipit, vel congue tortor bibendum. In massa sem, viverra a malesuada ornare, aliquet lacinia lectus. Duis euismod placerat nisl, sed ornare eros lacinia mattis. Nam congue in turpis at finibus. Etiam pretium lacinia massa ut varius. Phasellus a justo dapibus, tincidunt orci non, fringilla tortor. Integer eu mattis diam. Suspendisse fermentum non tortor at faucibus. Suspendisse elit nisl, aliquet ac iaculis non, malesuada eu est. Sed feugiat neque a augue maximus, quis convallis purus vehicula. Nulla facilisi. Donec semper lacus eu purus accumsan, et finibus massa ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis at sem augue. Phasellus varius tincidunt nibh at mollis. Aliquam semper finibus nibh vitae malesuada. Maecenas blandit tortor vel elit suscipit sodales. Aenean in lacinia odio, ac facilisis lacus. Sed suscipit eu augue ut congue. Etiam mollis risus luctus felis condimentum, vitae ornare enim placerat. Phasellus semper quam et ligula iaculis aliquam. In vel odio nunc. Vivamus sed leo a felis dictum convallis.',
            salaryDisplay: 'IDR 2 - 3 M',
            image: '/image/google.png',
            logo: '',
            bannerImage: '/image/google2.jpg',
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

    // Jika semua filter kosong → tampilkan rekomendasi
    const allEmpty =
      !keyword && !location && !jobType && !industry && !salary;

    if (allEmpty) {
      return dummyData.filter(job => job.isRecommended);
    }

    // Jika ada filter → lakukan penyaringan
    const filtered = dummyData.filter(job => {
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

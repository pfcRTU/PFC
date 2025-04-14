// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initNavbar();
    populateGallery();
    populateEvents();
    populateTeam();
    initModal();
    setupContactForm();
    setupSmoothScrolling();

    // Initialize load more button
    document.querySelector('.load-more-btn').addEventListener('click', loadMoreGalleryItems);
});

// Navbar initialization
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Add active class to nav link on scroll
    window.addEventListener('scroll', () => {
        // Add background to navbar on scroll
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }

        // Highlight active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Gallery data - in a real site, this would come from a server or API
const galleryItems = [
    {
        type: 'image',
        src: 'images/LocalUploads/Images/Cat_Shresth.jpeg',
        title: 'Cat Potrait',
        description: 'Shreshth'
    },
    {
        type: 'video',
        src: 'images/LocalUploads/Video/shreshthtailor.mp4',
        preview: 'images/LocalUploads/Video/shreshthtailor.gif',
        title: 'City Lights',
        description: 'Aerial view of city traffic at night'
    },
    {
        type: 'image',
        src: 'images/LocalUploads/Images/gareeb 3.jpg',
        title: '3 Gareeb',
        description: 'Shreshth'
    },
    {
        type: 'video',
        src: 'images/LocalUploads/Video/ShresthLavish1.mp4',
        preview: 'images/LocalUploads/Video/ShresthLavish1.gif',
        title: 'Authentic Flavors',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'images/LocalUploads/Images/BuddhaInMetro.jpg',
        title: 'Buddha',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190157/_DSC0832_e1lhdh.jpg',
        title: 'Pandit',
        description: 'Anirudh'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191572/PXL_20230520_122205393_ier3sx.jpg',
        title: '2 Gate',
        description: 'Shreshth'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192065/20250301_133927_nhxkm8.jpg',
        title: 'Sleeping in Train',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192065/20240430_115543_i7yapw.jpg',
        title: 'Old Man',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192064/_DSC0908_2_cgkfzz.jpg',
        title: 'Ghaat',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192054/_DSC0790_we6p6m.jpg',
        title: 'Pandit 2',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192043/_DSC0782_raduk6.jpg',
        title: 'Pandits',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192041/20240429_231106_s8s9jy.jpg',
        title: 'Kriya Kand',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192037/20231027_154902_nd5vwk.jpg',
        title: 'Building Circular Opening',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192035/20230715_162454_uaqaca.jpg',
        title: 'Gate 1',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192035/20231027_163116_poak9k.jpg',
        title: 'Windows',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192035/20230921_180042_lo1dux.jpg',
        title: 'Umbrella Man',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192031/IMG_20230228_173846_zn0tpx.jpg',
        title: 'Kota Barrage',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192030/_DSC0046_aytfte.jpg',
        title: 'Omni',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192028/_DSC0035_1_e8aedc.jpg',
        title: 'Silhoutte',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192022/IMG_20221229_204940_eqtd28.jpg',
        title: 'Concert',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192021/IMG_20221228_214630_vxyjqi.jpg',
        title: 'Concert 2',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192014/_DSC0652_u1virc.jpg',
        title: 'Dusshera',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192006/anirudh-ib3d1uX1LLc-unsplash_vvkabj.jpg',
        title: 'Diwali Sky',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192003/anirudh-lQmyEr5wsog-unsplash_btwizd.jpg',
        title: 'Man Standing infront of Window',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744192003/anirudh-6MHOgxQK41Q-unsplash_w3secn.jpg',
        title: 'Motion Blurred Face',
        description: 'Anirudh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191575/DSC04006_fcjje8.jpg',
        title: 'Light Pole',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191573/PXL_20230704_141413802_ffjw6w.jpg',
        title: '2 Ways',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191571/yeellow_pot_chjf5x.jpg',
        title: 'Fort',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191568/kingfisher_4_q7uhcf.jpg',
        title: 'KingFisher',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191566/unkil_cigrete_oyhpcs.jpg',
        title: 'Cigarette',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191566/phoned_uncle_nqc91b.jpg',
        title: 'Phoned Uncle',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191565/IMG-20211215-WA0002jpg.0_fovhk6.jpg',
        title: 'Textured Shadow',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191563/kulfiwala_sirgoi.jpg',
        title: 'Shahi Lassi',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191563/myslef_mini_2_v7qq5e.jpg',
        title: 'Yellow Wall',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744191563/002563_3_tuwozp.jpg',
        title: 'Ladki',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190349/horseman_2_s3fbhd.jpg',
        title: 'Horseman',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190303/rotten_pant_2_kqdfbc.jpg',
        title: 'Barbed Pants',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190302/dukhiyara_raw_vb8awq.jpg',
        title: 'Dukhiyara',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190302/cinmeatic_me_xu4zom.jpg',
        title: 'Cinematic Shreshth',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190300/city_screen_npu4iz.jpg',
        title: 'City Screen',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190299/armii_hhvwd2.jpg',
        title: 'Army',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190298/nuezpaper_pqytqm.jpg',
        title: 'Newspaper',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190298/DSCN0512_1_jai3vs.jpg',
        title: 'Skyline',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190298/htrough_vfebf3.jpg',
        title: 'Coloured Glass',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190297/architecture_o2y1et.jpg',
        title: 'Kissing Houses',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190296/gulmandi_2_kiib6n.jpg',
        title: 'Odd One Out',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190293/aeroplane_2_oocq1t.jpg',
        title: 'Will Get There One Day',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190290/greece_b2_rcbsxm.jpg',
        title: 'Waiting',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190290/horse_3_w0ssvs.jpg',
        title: 'Thirsty',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190289/PXL_20231012_112033672_xdgsvp.jpg',
        title: 'Baba',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190288/mummy_papa_mba9pc.jpg',
        title: 'Mummy Papa',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190288/aryan_car_xy480a.jpg',
        title: 'Car',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190285/fuck_jvgvvl.jpg',
        title: 'Fuck',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190280/ayush_ka_bhai_2_lgwynz.jpg',
        title: 'Face Blurred 2',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190280/PXL_20230710_134822641_trcugz.jpg',
        title: 'Kota City',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744190279/krishnam_3_smooke_gslm35.jpg',
        title: 'Smoke Rays',
        description: 'Shreshth'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370845/IMG_6187_rpsbjc.heic',
        title: 'Power Plant',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370846/IMG_5913_mszwib.jpg',
        title: 'Train',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370846/IMG_5175_raadez.heic',
        title: 'Fest',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370847/IMG_3210_azpgvh.heic',
        title: 'Sleeping Puppy',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370847/Copy_of_IMG_2816_zdhw5v.jpg',
        title: 'Platform',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370848/IMG_3224_nitcdv.heic',
        title: 'Puppy Returns',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370848/IMG_2766_koe4go.heic',
        title: 'Catuisance',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370849/FullSizeRender_qkim3n.heic',
        title: 'Pussy Prem',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370849/IMG_8421_ldzyfk.heic',
        title: 'Bhari Varsha',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370855/IMG_5413_wq6g5v.heic',
        title: 'Evening Flight',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370856/IMG_2594_jpg_nubepw.jpg',
        title: 'Tower',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370857/IMG_3550_yspjap.heic',
        title: 'Wanderer',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370859/IMG_8693_fbhzvs.heic',
        title: 'Khet',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370860/IMG_8428_zwyxo8.heic',
        title: 'Maharana Pratap',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370862/IMG_8424_lrznct.heic',
        title: 'Bhari Varsha 2',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370863/IMG_7993_tanqge.heic',
        title: 'Night Street',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370865/IMG_4490_vjrj7x.heic',
        title: 'More Puppy',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370865/IMG_4446_a7ktgf.heic',
        title: 'Library',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370866/IMG_2215_ndv5mt.heic',
        title: 'Constitution Day',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370865/IMG_3057_cmxoe2.heic',
        title: 'Constitution Night',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370867/IMG_1829_dhrthf.heic',
        title: 'Girgit',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370868/IMG_2752_a2vo6c.heic',
        title: 'More Cats',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370868/IMG_2180_mg3jvg.heic',
        title: 'Gandakda',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370869/IMG_2308_sksnan.heic',
        title: 'Foooool',
        description: 'Varun'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370916/IMG_2745_bqfgll.jpg',
        title: 'More Billi',
        description: 'Venkatesh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370914/IMG-20250313-WA0022_iswofg.jpg',
        title: 'Hanging Bridge',
        description: 'Venkatesh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370911/IMG-20231209-WA0025_c6uukf.jpg',
        title: 'Tote',
        description: 'Venkatesh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370909/IMG-20231119-WA0008_hkbgmw.jpg',
        title: 'Eggs',
        description: 'Venkatesh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370907/IMG-20240122-WA0075_2_ptjb98.jpg',
        title: 'Deepak',
        description: 'Venkatesh'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371108/IMG-20250403-WA0017_gjnyaz.jpg',
        title: 'Thar',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371108/IMG-20250403-WA0006_fcinti.jpg',
        title: 'Purana Ghar',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371104/IMG-20250403-WA0010_mrfxte.jpg',
        title: 'KST',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371100/IMG_20241230_075538_my9zqk.jpg',
        title: 'Scattering',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371097/IMG_20241231_171740_kj3rsy.jpg',
        title: 'A Gift',
        description: 'Paras'
    },
    
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371095/IMG_E0021_kizmvt.jpg',
        title: 'A Day Out',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371094/IMG_20250101_173353_bt0rd3.jpg',
        title: 'Temple',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371090/IMG_20250316_172055_kuhtdh.jpg',
        title: 'Auto',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371082/shotxparas_14040120_165151024_tpqj1b.jpg',
        title: 'Emerging From Fog',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371080/shotxparas_14040120_165112737_jtzu0p.jpg',
        title: 'Light',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371079/shotxparas_14040120_165057456_cs5bmb.jpg',
        title: 'Bohot Saare Foool',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744371077/shotxparas_14040120_165040927_b1byqo.jpg',
        title: 'Craft',
        description: 'Paras'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370769/PSX_20241015_000949_gbb3zn.jpg',
        title: 'Kota Mela',
        description: 'Garvit Bhojak'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370769/PSX_20241125_220330_v5yuf9.jpg',
        title: 'Kartab',
        description: 'Garvit Bhojak'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370768/PSX_20240621_203803-1_pn2hsc.jpg',
        title: 'Hanging Bridge 2',
        description: 'Garvit Bhojak'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370765/IMG-20230614-WA0018__01__01_ncyids.jpg',
        title: 'Doosra Hanging Bridge',
        description: 'Garvit Bhojak'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370764/PSX_20241103_183743_plhvzm.jpg',
        title: 'Kidhar Ho Sallu Bhai',
        description: 'Garvit Bhojak'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370763/PSX_20241103_183604_gipsvp.jpg',
        title: 'BlackBucks',
        description: 'Garvit Bhojak'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/dxp3cekqz/image/upload/v1744370763/PSX_20241103_190358_yhvghh.jpg',
        title: 'Mandir',
        description: 'Garvit Bhojak'
    },

    
   
];



// Initially show only the first 4 items
let visibleGalleryItems = window.innerWidth < 768 ? 4 : 6;

// Populate the gallery with items
function populateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');

    // Clear existing gallery items
    galleryGrid.innerHTML = '';

    // Add items up to the current visible count
    for (let i = 0; i < Math.min(visibleGalleryItems, galleryItems.length); i++) {
        const item = galleryItems[i];
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', i);

        if (item.type === 'image') {
            galleryItem.innerHTML = `
                <img src="${item.src.replace('/upload/', '/upload/f_webp/')}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        } else if (item.type === 'video') {
            galleryItem.innerHTML = `
                <div class="gallery-video-preview" style="background: url('${item.preview}') no-repeat center center/cover;"></div>
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        } else if (item.type === 'iframe') {
            galleryItem.innerHTML = `
                <div class="gallery-video-preview iframe-preview">
                    <iframe src="${item.src}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        }

        galleryGrid.appendChild(galleryItem);

        // Add click event to open the modal
        galleryItem.addEventListener('click', function() {
            openModal(parseInt(this.getAttribute('data-index')));
        });
    }

    // Hide "Load More" button if all items are shown
    if (visibleGalleryItems >= galleryItems.length) {
        document.querySelector('.load-more-btn').style.display = 'none';
    } else {
        document.querySelector('.load-more-btn').style.display = 'block';
    }
}

// Load more gallery items when the button is clicked
function loadMoreGalleryItems() {
    const increment = window.innerWidth < 768 ? 4 : 6;
    visibleGalleryItems += increment;
    populateGallery();
}

// Events data
const events = {
    upcoming: [
        {
            title: 'Summer Photo Walk',
            date: 'To be announced...',
            description: 'Join us for a group photo walk through the city at golden hour.',
            image: 'images/Street Photo Summer Photowalk.jpg',
            registerLink: 'https://forms.google.com/register-photo-walk'
        }
    ],
    past: [
        {
            title: 'Graphic Design Workshop',
            date: ' December 16 - 18, 2024',
            image: 'images/Graphic Designing WS.jpg'
        }
    ]
};

// Populate the events sections
function populateEvents() {
    const upcomingEventsGrid = document.getElementById('upcomingEvents');
    const pastEventsGrid = document.getElementById('pastEvents');

    // Clear existing events
    upcomingEventsGrid.innerHTML = '';
    pastEventsGrid.innerHTML = '';

    // Add upcoming events
    events.upcoming.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-img">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-info">
                <p class="event-date">${event.date}</p>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-desc">${event.description}</p>
                <a href="${event.registerLink}" class="register-btn" target="_blank">Register</a>
            </div>
        `;
        upcomingEventsGrid.appendChild(eventCard);
    });

    // Add past events
    events.past.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-img">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-info">
                <p class="event-date">${event.date}</p>
                <h3 class="event-title">${event.title}</h3>
            </div>
        `;
        pastEventsGrid.appendChild(eventCard);
    });
}

// Team members data
const teamMembers = [
    {
        name: 'Shresth Sharma',
        position: 'Club Advisory',
        description: 'Passionate about portraits and videography, he mentors the team with a creative direction.',
        instagram: 'https://www.instagram.com/shraeshth/',
        image: 'images/Club Members/ShresthProfile.png'
    },
    {
        name: 'Garvit Sharma',
        position: 'Coordinator',
        description: 'Blender wizard who whips up cool 3D stuff and designed our awesome club tee.',
        instagram: 'https://www.instagram.com/t_rr_r_st/',
        image: 'images/Club Members/GarvitProfile.jpg'
    },
    {
        name: 'Venkatesh Kumar',
        position: 'Co-Coordinator',
        description: 'The go-to person who nails the behind-the-scenes action and snaps all the epic event moments.',
        instagram: 'https://www.instagram.com/venkatesh_singh_52/',
        image: 'images/Club Members/Venkatesh.png'
    },
    {
        name: 'Shreya Bhatt',
        position: 'Management Lead',
        description: "The team's ray of sunshine who's full of bright ideas and can totally rock a speech.",
        instagram: 'https://www.instagram.com/she_.shreya._7/',
        image: 'images/Club Members/Shreya.png'
    },
    {
        name: 'Chhayansh Porwal',
        position: 'Event Lead',
        description: 'The brain behind awesome event ideas and the ultimate crowd-controller during our workshop!',
        instagram: 'https://www.instagram.com/chhyaansh/',
        image: 'images/Club Members/Chayansh.png'
    },
    {
        name: 'Vinayak Sharma',
        position: 'Content Lead',
        description: "The wordsmith and editing guru who brought our freshers' intro video to life!",
        instagram: 'https://www.instagram.com/iam.vinayak05/',
        image: 'images/Club Members/Vinayak.png'
    },
    {
        name: 'Paras Sharma',
        position: 'Social Media Lead',
        description: "Our enthusiastic shutterbug who's also a pro at making sure events run smoothly!",
        instagram: 'https://www.instagram.com/iparax1/',
        image: 'images/Club Members/Paras.png'
    },
    {
        name: 'Garvit Bhojak',
        position: 'Graphics Lead',
        description: 'A creative powerhouse who can both design eye-catching graphics and capture awesome photos!',
        instagram: 'https://www.instagram.com/garvitbhojak/',
        image: 'images/Club Members/GarvitB.png'
    },
    {
        name: 'Abhinav Sharma',
        position: 'Web Developer',
        description: 'The tech whiz who built our awesome website and always brings fresh, creative vibes to the table!',
        instagram: 'https://www.instagram.com/abhinavherefr/',
        image: 'images/Club Members/AbhinavPP.png'
    },
    {
        name: 'Aditya Ladrecha',
        position: 'Video Editor',
        description: "Our resident cool guy who's a pro at both video editing and graphic design!",
        instagram: 'https://www.instagram.com/adityaladrecha_/',
        image: 'images/Club Members/AdityaL.png'
    },
    {
        name: 'Aditya Raj',
        position: 'Video Editor',
        description: 'A seriously talented video editor who can also bust out some killer dance moves!',
        instagram: 'https://www.instagram.com/adityaraj5045/',
        image: 'images/Club Members/AdityaR.png'
    },
    {
        name: 'Varun Kardam',
        position: 'Photographer',
        description: "A super talented and fun photographer who's filled our website gallery with amazing shots!",
        instagram: 'https://www.instagram.com/varunxkdm/',
        image: 'images/Club Members/Varun.jpg'
    },
    {
        name: 'Ashish Singhodiya',
        position: 'Photographer',
        description: 'Our go-to guy behind the camera and a Photoshop whiz who can work magic with images!',
        instagram: 'https://www.instagram.com/ashish_singodiya/',
        image: 'images/Club Members/Ashish.png'
    },
    {
        name: 'Nandini',
        position: 'Photographer',
        description: 'SOur awesome idea machine who always brings fresh perspectives to the table!',
        instagram: 'https://www.instagram.com/nandinilalwanii/',
        image: 'images/Club Members/Nandini.jpg'
    },
    {
        name: 'Tapendra Nagar',
        position: 'Photographer',
        description: "Our keen-eyed photographer who's always ready to capture the perfect moment!",
        instagram: 'https://www.instagram.com/ets_tapendra/',
        image: 'images/Club Members/Tapendra.png'
    },
    {
        name: 'Raman Rai',
        position: 'Photographer',
        description: "The idea guru who's also a master at learning from the past to make our future events even better!",
        instagram: 'https://www.instagram.com/shraeshth/',
        image: 'images/Club Members/Raman.png'
    },



];

// Populate the team section
function populateTeam() {
    const teamGrid = document.getElementById('teamGrid');

    // Clear existing team members
    teamGrid.innerHTML = '';

    // Add team members
    teamMembers.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.innerHTML = `
            <div class="member-img">
                <img src="${member.image}" alt="${member.name}" loading="lazy">
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-position">${member.position}</p>
            <p class="member-desc">${member.description}</p>
        `;
        let socialsHTML = '<div class="social-links team-socials">';
if (member.instagram) {
    socialsHTML += `<a href="${member.instagram}" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>`;
}
if (member.youtube) {
    socialsHTML += `<a href="${member.youtube}" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>`;
}
socialsHTML += '</div>';
teamMember.innerHTML += socialsHTML;
        teamGrid.appendChild(teamMember);
    });
}

// Modal functionality for gallery
let currentModalIndex = 0;

function initModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Navigation buttons
    prevBtn.addEventListener('click', function() {
        navigateModal(-1);
    });

    nextBtn.addEventListener('click', function() {
        navigateModal(1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (!modal.style.display || modal.style.display === 'none') return;

        if (event.key === 'Escape') {
            closeModal();
        } else if (event.key === 'ArrowLeft') {
            navigateModal(-1);
        } else if (event.key === 'ArrowRight') {
            navigateModal(1);
        }
    });
}

function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');

    currentModalIndex = index;
    const item = galleryItems[index];

    // Reset modal content
    modalImage.style.display = 'none';
    modalVideo.style.display = 'none';

    // Set appropriate content
    if (item.type === 'image') {
        modalImage.src = item.src.replace('/upload/', '/upload/f_webp/');
        modalImage.style.display = 'block';
    } else if (item.type === 'video') {
        modalVideoSource.src = item.src;
        modalVideo.load();
        modalVideo.style.display = 'block';
        modalVideo.play();
    }

    // Display modal
    modal.style.display = 'block';

    // Disable scrolling on body
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalVideo = document.getElementById('modalVideo');

    // Stop video if playing
    if (modalVideo.style.display === 'block') {
        modalVideo.pause();
    }

    // Hide modal
    modal.style.display = 'none';

    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

function navigateModal(direction) {
    // Calculate new index
    let newIndex = currentModalIndex + direction;

    // Handle wrapping around
    if (newIndex < 0) newIndex = galleryItems.length - 1;
    if (newIndex >= galleryItems.length) newIndex = 0;

    // Close current and open new
    closeModal();
    openModal(newIndex);
}

// Contact form setup (using FormSubmit service)
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        // FormSubmit handles the form submission
        // You can add additional validation or processing here if needed

        // Example: Display a success message (in a real implementation)
        // e.preventDefault();
        // alert('Thank you for your submission! We will contact you soon.');
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registered with scope:', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed:', err);
      });
    });
  }
  

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('dblclick', e => e.preventDefault());

let lastTouchEnd = 0;

document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault(); // Prevent pinch
  }
}, { passive: false });

document.addEventListener('touchend', function (event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault(); // Prevent double-tap just in case
  }
  lastTouchEnd = now;
}, false);

const projects = [
  {
    id: 'jra',
    title: 'JRA Tree House',
    year: '2018',
    cover: 'assets/jra/JRA_新建築.jpg',
    images: [
      'assets/jra/JRA_新建築.jpg',
      'assets/jra/IMG_8324.JPG',
      'assets/jra/IMG_8327.JPG',
      'assets/jra/IMG_8682.JPG',
      'assets/jra/IMG_8685.JPG',
      'assets/jra/IMG_9395.JPG',
      'assets/jra/IMG_0114.JPG',
      'assets/jra/IMG_1650.JPG',
    ]
  },
  {
    id: 'optical',
    title: 'optical drops',
    year: '2020',
    cover: 'assets/optical/001.jpg',
    images: [
      'assets/optical/001.jpg',
      'assets/optical/002.jpg',
      'assets/optical/003.jpg',
      'assets/optical/004.jpg',
      'assets/optical/005.jpg',
      'assets/optical/006.jpg',
      'assets/optical/007.jpg',
      'assets/optical/008.jpg',
      'assets/optical/009.jpg',
    ]
  },
  {
    id: 'artpolis',
    title: 'Kumamoto Artpolis',
    year: '2020',
    cover: 'assets/artpolis/gaikan_01.jpg',
    images: [
      'assets/artpolis/gaikan_01.jpg',
      'assets/artpolis/gaikan_02.jpg',
      'assets/artpolis/naikan_01.jpg',
      'assets/artpolis/naikan_02.jpg',
      'assets/artpolis/detailDiagram_translucent_75per.jpg',
      'assets/artpolis/structureDiagram_02-texture_0.75-pixel.jpg',
    ]
  },
  {
    id: 'nagoya',
    title: '名古屋駅再開発',
    year: '2021',
    cover: 'assets/nagoya/001.jpg',
    images: [
      'assets/nagoya/001.jpg',
      'assets/nagoya/002.jpg',
      'assets/nagoya/003.jpg',
      'assets/nagoya/004.jpg',
      'assets/nagoya/005.jpg',
    ]
  },
  {
    id: 'kagamigahara',
    title: 'かかみがはら航空宇宙博物館',
    year: '2023',
    cover: 'assets/kagamigahara/修了証.jpg',
    images: [
      'assets/kagamigahara/修了証.jpg',
      'assets/kagamigahara/IMG_0499.JPG',
      'assets/kagamigahara/IMG_0500.JPG',
      'assets/kagamigahara/IMG_0502.JPG',
      'assets/kagamigahara/IMG_0493.mp4',
    ]
  },
  {
    id: 'midicon',
    title: 'midiCon',
    year: '2023',
    cover: 'assets/midicon/IMG_2834.jpg',
    images: [
      'assets/midicon/IMG_2834.jpg',
      'assets/midicon/IMG_2833.jpg',
      'assets/midicon/IMG_2832.mov',
      'assets/midicon/IMG_2838.mp4',
    ]
  },
  {
    id: 'cg',
    title: 'CG Artwork',
    year: '2023',
    cover: 'assets/cg/240826_abstract_front.jpg',
    images: [
      'assets/cg/240826_abstract_front.jpg',
      'assets/cg/240826_abstract_pers.jpg',
      'assets/cg/0001.jpg',
      'assets/cg/0002.jpg',
      'assets/cg/0003.jpg',
      'assets/cg/230116_volumeMesher-Kasumigaseki.mp4',
      'assets/cg/002_0047.jpg',
      'assets/cg/230109_fabriccollision.mp4',
      'assets/cg/230921_keyboard_01.jpg',
      'assets/cg/001_hayonero.mp4',
      'assets/cg/230920_hayoneroTest.mp4',
      'assets/cg/230923_30keyboard_001.mp4',
    ]
  },
  {
    id: 'zine',
    title: 'zine',
    year: '2023 – 2024',
    cover: 'assets/zine/R001.jpg',
    images: [
      'assets/zine/R001.jpg',
      'assets/zine/R002.jpg',
      'assets/zine/R003.jpg',
      'assets/zine/R004.jpg',
      'assets/zine/R005.jpg',
      'assets/zine/R006.jpg',
      'assets/zine/R007.jpg',
      'assets/zine/R008.jpg',
      'assets/zine/R009.jpg',
      'assets/zine/R010.jpg',
      'assets/zine/231115_masRope_54F_glow.jpg',
      'assets/zine/231122_ropeWoman.jpg',
      'assets/zine/240523_woman01.jpg',
    ]
  },
];

// ── Build project sections ──
const main = document.getElementById('main');

projects.forEach(p => {
  const section = document.createElement('section');
  section.className = 'section project';
  section.id = p.id;
  section.innerHTML = `
    <div class="bg" style="background-image: url('${p.cover}')"></div>
    <div class="info">
      <h2>${p.title}</h2>
      <span class="year">${p.year}</span>
    </div>
  `;
  section.addEventListener('click', () => openLightbox(p.images, 0));
  main.appendChild(section);
});

// ── Scream ──
const screamAudio = new Audio('assets/scream.mp3');
function playScream() {
  screamAudio.currentTime = 0;
  screamAudio.play();
}

// ── End section ──
const endSection = document.createElement('section');
endSection.className = 'section hero';
endSection.id = 'end';
endSection.innerHTML = `
  <div class="hero-text">
    <h1 class="end-name">桝井孝暢？<span class="wakatta">おわかり<br>いただけただろうか？</span></h1>
  </div>
`;
main.appendChild(endSection);
endSection.querySelector('.end-name').addEventListener('mouseenter', playScream);

// ── Dot navigation ──
const dotNav = document.getElementById('dotNav');
const scrollContainer = document.getElementById('scroll-container');
const allSections = ['top', ...projects.map(p => p.id), 'end'];

allSections.forEach(id => {
  const a = document.createElement('a');
  a.href = '#';
  a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
  dotNav.appendChild(a);
});

// ── IntersectionObserver for active dot + parallax trigger ──
const dots = dotNav.querySelectorAll('a');
const sectionEls = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = [...sectionEls].indexOf(entry.target);
      dots.forEach(d => d.classList.remove('active'));
      if (dots[idx]) dots[idx].classList.add('active');
      if (entry.target.classList.contains('project')) {
        entry.target.classList.add('in-view');
      }
    } else {
      if (entry.target.classList.contains('project')) {
        entry.target.classList.remove('in-view');
      }
    }
  });
}, { threshold: 0.5, root: scrollContainer });

sectionEls.forEach(el => observer.observe(el));

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbVideo = document.getElementById('lbVideo');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');
const lbCounter = document.getElementById('lbCounter');

let currentImages = [];
let currentIndex = 0;

function isVideo(src) {
  return /\.(mp4|mov|MOV|webm)$/i.test(src);
}

function openLightbox(images, index) {
  currentImages = images;
  currentIndex = index;
  showItem();
  lightbox.classList.add('open');
}

function showItem() {
  const src = currentImages[currentIndex];
  lbCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;

  if (isVideo(src)) {
    lbImg.style.display = 'none';
    lbVideo.style.display = 'block';
    lbVideo.pause();
    lbVideo.src = src;
    lbVideo.load();
    lbVideo.play();
  } else {
    lbVideo.pause();
    lbVideo.src = '';
    lbVideo.style.display = 'none';
    lbImg.style.display = 'block';
    lbImg.src = src;
  }
}

function closeLightbox() {
  lbVideo.pause();
  lbVideo.src = '';
  lightbox.classList.remove('open');
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lbPrev.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showItem();
});

lbNext.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  showItem();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentImages.length; showItem(); }
  if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; showItem(); }
  if (e.key === 'Escape') closeLightbox();
});

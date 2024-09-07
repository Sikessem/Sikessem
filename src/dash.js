const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const menuToggle = document.getElementById('menuToggle');
const mainContent = document.getElementById('mainContent');
const userProfile = document.getElementById('userProfile');
const userDropdown = document.getElementById('userDropdown');
const dashboardGrid = document.querySelector('.dashboard-grid');
const chartContainer = document.querySelector('.chart-container');

let sidebarState = 'expanded'; // 'expanded', 'collapsed', 'hidden'

function toggleSidebar() {
  switch (sidebarState) {
    case 'expanded':
      sidebarState = 'collapsed';
      sidebar.classList.add('collapsed');
      mainContent.classList.add('expanded');
      sidebarToggle.textContent = '→';
      break;
    case 'collapsed':
      sidebarState = 'expanded';
      sidebar.classList.remove('collapsed');
      mainContent.classList.remove('expanded');
      sidebarToggle.textContent = '←';
      break;
    case 'hidden':
      sidebarState = 'expanded';
      sidebar.classList.remove('hidden');
      mainContent.classList.remove('full');
      sidebarToggle.textContent = '←';
      break;
  }
}

function hideSidebar() {
  sidebarState = 'hidden';
  sidebar.classList.add('hidden');
  mainContent.classList.add('full');
}

sidebarToggle.addEventListener('click', toggleSidebar);
menuToggle.addEventListener('click', () => {
  if (sidebarState === 'hidden') {
    sidebarState = 'expanded';
    sidebar.classList.remove('hidden');
    mainContent.classList.remove('full');
  } else {
    hideSidebar();
  }
});

userProfile.addEventListener('click', () => {
  userDropdown.classList.toggle('active');
});

// Fermer le menu déroulant lorsqu'on clique en dehors
document.addEventListener('click', (event) => {
  if (!userProfile.contains(event.target)) {
    userDropdown.classList.remove('active');
  }
});

// Animation d'entrée pour le dashboard
window.addEventListener('load', () => {
  dashboardGrid.classList.add('loaded');
  chartContainer.classList.add('loaded');
});

// Animation des cartes du dashboard
gsap.from('.dashboard-card', {
  duration: 0.8,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  ease: 'power3.out',
});

// ApexCharts
const options = {
  series: [
    {
      name: 'Temps de réponse',
      data: [120, 190, 130, 150, 180, 170, 160],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    fontFamily: 'Poppins, sans-serif',
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  colors: ['#00CEC9'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.2,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  xaxis: {
    categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    labels: {
      style: {
        colors: '#A4B0BE',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#A4B0BE',
      },
    },
  },
  tooltip: {
    theme: 'dark',
  },
  grid: {
    borderColor: '#2C3A47',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

const chart = new ApexCharts(
  document.querySelector('#performanceChart'),
  options,
);
chart.render();

// Animation fluide pour les liens du menu
const menuLinks = document.querySelectorAll('.sidebar-menu a');
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: e.target.getAttribute('href'),
      ease: 'power3.inOut',
    });
  });
});

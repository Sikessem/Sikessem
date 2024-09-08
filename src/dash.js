import { onLoaded } from '@/utils';

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
onLoaded(() => {
  dashboardGrid.classList.add('loaded');
  chartContainer.classList.add('loaded');
});

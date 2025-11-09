// script.js — robust dropdown handling (hover + click only)
document.addEventListener('DOMContentLoaded', function(){
  const navDropdown = document.querySelector('.nav-dropdown');
  if (!navDropdown) return;

  const dropdownToggle = navDropdown.querySelector('.dropdown-toggle');
  const dropdownMenu = navDropdown.querySelector('.dropdown-menu');
  let hideTimer = null;

  const showMenu = () => {
    clearTimeout(hideTimer);
    dropdownMenu.classList.add('show');
    dropdownToggle.setAttribute('aria-expanded', 'true');
  };

  const hideMenu = () => {
    dropdownMenu.classList.remove('show');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  };

  const delayedHide = (delay = 200) => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideMenu, delay);
  };

  // Hover: show on enter, delay hide on leave
  navDropdown.addEventListener('mouseenter', showMenu);
  navDropdown.addEventListener('mouseleave', () => delayedHide(200));

  // Click toggle (mobile/keyboard)
  dropdownToggle.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (dropdownMenu.classList.contains('show')) hideMenu();
    else showMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', (ev) => {
    if (!navDropdown.contains(ev.target)) hideMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') hideMenu();
  });
});

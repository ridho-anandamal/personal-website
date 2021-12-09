const buttonMenu = document.getElementById('buttonMenu');
const navList = document.getElementById('navList');
const navbar = document.getElementById('navbar');

const ButtonMenuNavbar = {
  MenuNavbarFunction() {
    if (this._screenMobile()) {
      this._hideNav();
    } else {
      this._showNav();
    }
    buttonMenu.addEventListener('click', () => this._showNavWhenClick());
    window.addEventListener('resize', () => this._showNavWhenResize());
  },
  _showNavWhenClick() {
    return navList.classList.contains('hidden') ? this._showNav() : this._hideNav();
  },

  _showNavWhenResize() {
    return this._screenMobile() ? this._hideNav() : this._showNav();
  },

  _screenMobile() {
    return window.matchMedia('(max-width: 500px)').matches;
  },

  _showNav() {
    navList.classList.remove('hidden');
    navbar.classList.add('scrolling');
  },

  _hideNav() {
    navList.classList.add('hidden');
  },
};

const BackgroundColorNavbar = {
  backgroundNavbarFunction() {
    if (this._screenMobile()) {
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
    window.addEventListener('scroll', () => this._changeBackgrounColor());
  },
  _changeBackgrounColor() {
    if (window.scrollY >= 0) {
      navbar.classList.remove('scrolling');
    }
    if (window.scrollY >= 1) {
      navbar.classList.add('scrolling');
    }
  },
  _screenMobile() {
    return window.matchMedia('(max-width: 500px)').matches;
  },
};

const Navbar = {
  init() {
    ButtonMenuNavbar.MenuNavbarFunction();
    BackgroundColorNavbar.backgroundNavbarFunction();
  },
};

export default Navbar;

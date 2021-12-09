import * as navLinkList from '../../data/nav.link.json';

const navLinkContainer = document.getElementById('navList');

const NavLink = {
  consumeData() {
    navLinkList.default.data.forEach((data) => {
      this.render(data);
    });
  },
  render(data) {
    if (!navLinkContainer) {
      return;
    }
    navLinkContainer.innerHTML += `
      <li><a class="link" href="${data.link}">${data.name}</a></li>
    `;
  },
};

export default NavLink;

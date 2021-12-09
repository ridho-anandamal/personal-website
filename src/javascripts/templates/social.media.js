import * as socialMediaList from '../../data/social.media.json';

const socialMediaContainer = document.getElementById('iconSocialMediaList');

const SocialMedia = {
  consumeData() {
    socialMediaList.default.data.forEach((data) => {
      this.render(data);
    });
  },
  render(data) {
    if (!socialMediaContainer) {
      return;
    }
    socialMediaContainer.innerHTML += `
      <a href="${data.link}">
        <img src="${data.urlImage}" alt="${data.alt}">
      </a>
    `;
  },
};

export default SocialMedia;

const EMBEDLINK = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0TzxbUsLx86CfdFwcce0KO%2FPortfolio-Ridho-Anandamal%3Fpage-id%3D207%253A390%26node-id%3D213%253A13524%26viewport%3D241%252C48%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D213%253A13524';
const portfolioContainer = document.getElementById('portfolioContainer');

const Portfolio = {
  async consumeData() {
    await this.render();
  },
  async render() {
    if (!portfolioContainer) {
      return;
    }

    if (!EMBEDLINK) {
      portfolioContainer.innerHTML = `
        <h3>Cannot load Figma file </h3>
      `;
    }

    portfolioContainer.innerHTML = `
    <iframe class="portfolio-view" src="${EMBEDLINK}"
      allowfullscreen></iframe>`;
  },
};

export default Portfolio;

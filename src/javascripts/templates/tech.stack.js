import * as techStackList from '../../data/tech.stack.json';

const techStackContainer = document.getElementById('techStackList');

const TechStack = {
  consumeData() {
    techStackList.default.data.forEach((data) => {
      this.render(data);
    });
  },
  render(data) {
    if (!techStackContainer) {
      return;
    }
    techStackContainer.innerHTML += `
      <div class="image">
        <img src="${data.urlImage}" alt="${data.alt}">
      </div>
    `;
  },
};

export default TechStack;

import * as clientReviewsList from '../../data/client.reviews.json';

const clientReviewsContainer = document.getElementById('reviewList');

const ClientReview = {
  consumeData() {
    clientReviewsList.default.data.forEach((data) => {
      this.render(data);
    });
  },
  render(data) {
    if (!clientReviewsContainer) {
      return;
    }
    clientReviewsContainer.innerHTML += `
      <div class="client-quote">
          <p class="quote">"${data.quote}"</p>
          <h4>${data.name}</h4>  
          <p class="body">${data.company}</p>
      </div>
    `;
  },
};

export default ClientReview;

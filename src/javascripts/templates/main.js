import ClientReview from '../templates/client.reviews';
import NavLink from '../templates/nav.link';
import SocialMedia from '../templates/social.media';
import TechStack from '../templates/tech.stack';

function runConsumeData() {
  TechStack.consumeData();
  SocialMedia.consumeData();
  ClientReview.consumeData();
  NavLink.consumeData();
}

export default runConsumeData;

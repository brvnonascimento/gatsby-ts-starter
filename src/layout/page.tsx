import { GatsbyBrowser } from 'gatsby';
import '../styles/globals.scss';

const Page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return element;
};

export default Page;

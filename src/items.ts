import Contact from "./pages/contact";
import Home from "./pages/home";
import Legal from "./pages/legal";
import NotFound from "./pages/notfound";
import Work from "./pages/work";

type Item = {
  exact: boolean;
  path: string;
  component: () => JSX.Element;
};

const items: Item[] = [{
  exact: true,
  path: '/',
  component: Home
}, {
  exact: true,
  path: '/work',
  component: Work
}, {
  exact: true,
  path: '/contact',
  component: Contact
}, {
  exact: true,
  path: '/legal',
  component: Legal
}, {
  exact: true,
  path: '',
  component: NotFound
}];

export default items;
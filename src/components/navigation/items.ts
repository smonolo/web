type Item = {
  to: string;
  content: string;
};

type Items = {
  [i: string]: Item[];
};

const items: Items = {
  left: [{
    to: '/',
    content: 'home'
  }],
  right: [{
    to: '/work',
    content: 'work'
  }, {
    to: '/contact',
    content: 'contact'
  }, {
    to: '/legal',
    content: 'legal'
  }]
};

export default items;
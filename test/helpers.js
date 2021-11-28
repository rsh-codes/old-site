const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ryan S. Hutton',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Ryan S. Hutton',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Ryan S. Hutton',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'stats | Ryan S. Hutton',
    heading: 'stats',
  },
  {
    route: '/contact',
    title: 'Contact | Ryan S. Hutton',
    heading: 'CONTACT',
  },
];

export { pages, randomString };

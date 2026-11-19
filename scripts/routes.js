// Routes published as real files. Paths and titles must match the sitemap
// and the copy in src/siteContent.js. The production build fails if they drift.
const SITE = 'https://commandtesting.com';

const PAGES = [
  {
    path: '/',
    title: 'Aerial & Ground Ladder Testing Nationwide | Command Testing',
    description: 'Based in Columbus, OH, Command Testing tests aerial devices and ground ladders for fire departments nationwide to NFPA 1910 (formerly NFPA 1911) and NFPA 1930 (formerly NFPA 1932). Fire pump testing is offered in central Ohio and at apparatus manufacturers. Work is performed by NDT Level II technicians with ASNT Level III oversight.',
    heading: 'COMMAND',
    body: 'REQUEST A QUOTE',
    // The homepage head is already written for this URL. Leave it in place.
    updateHead: false,
  },
  {
    path: '/aerial',
    title: 'Aerial Ladder Testing | Command Testing',
    description: 'On-site aerial device testing for fire departments nationwide. Command Testing, based in Columbus, OH, tests to NFPA 1910 (formerly NFPA 1911). Newer apparatus are covered by NFPA 1900. Performed by NDT Level II technicians with ASNT Level III oversight.',
    heading: 'Aerial ladder testing',
    body: 'We test in-service aerial devices',
    updateHead: true,
  },
  {
    path: '/ground-ladders',
    title: 'Ground Ladder Testing | Command Testing',
    description: 'Annual ground ladder testing for fire departments nationwide, based in Columbus, OH. Testing follows NFPA 1930 (formerly NFPA 1932).',
    heading: 'Ground ladder testing',
    body: 'We test ground ladders for fire departments nationwide',
    updateHead: true,
  },
  {
    path: '/pump',
    title: 'Fire Pump Testing in Central Ohio | Command Testing',
    description: 'Apparatus fire pump testing in central Ohio and at apparatus manufacturers, to NFPA 1910 (formerly NFPA 1911). Command Testing is based in Columbus, OH. Pump testing is not offered as a nationwide service.',
    heading: 'Fire pump testing',
    body: 'Pump testing is not a nationwide service',
    updateHead: true,
  },
  {
    path: '/ndt',
    title: 'Aerial NDT, Including 5-Year Testing | Command Testing',
    description: 'Nondestructive testing of aerial devices, including the five-year NDT called for by NFPA 1910 (formerly NFPA 1911). Performed by NDT Level II technicians with ASNT Level III oversight. Based in Columbus, OH.',
    heading: 'Non-destructive testing',
    body: 'five-year aerial NDT',
    updateHead: true,
  },
];

function canonicalUrl(pagePath) {
  return SITE + (pagePath === '/' ? '/' : pagePath);
}

module.exports = {
  SITE,
  PAGES,
  canonicalUrl,
};

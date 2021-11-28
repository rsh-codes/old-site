import dayjs from 'dayjs';

/* Keys returned by the github api. The other keys in the array below
 * are mostly jokes. These are the keys the github api query searches for.
 */
export const githubKeys = [
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues_count',
  'subscribers_count',
  'pushed_at',
];


const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: 'https://github.com/rsh-codes/',
  },
];

export default data;

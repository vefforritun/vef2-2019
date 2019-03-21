import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

const articles = [
  {
    id: 1,
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra est nibh, nec egestas mi facilisis vitae. Praesent eget augue enim. Quisque convallis gravida blandit. Phasellus vitae vehicula libero. Maecenas luctus lorem sapien, vitae finibus risus fringilla eu. Sed finibus libero eu urna semper, nec tempus massa vestibulum. ',
    details: 'Mauris sollicitudin non nisl a pharetra.',
  },
  {
    id: 2,
    title: 'Aliquam turpis est',
    text: 'Mauris pulvinar augue et vulputate finibus. Sed et leo eget ligula gravida porta sit amet eu quam. Etiam et fermentum elit, at vulputate urna. Phasellus sollicitudin posuere risus a ultrices. Vestibulum pellentesque tempus velit vitae lacinia. Aliquam nunc sem, condimentum nec magna at, hendrerit mollis augue.',
    details: 'Cras in arcu odio. Suspendisse vel ante nunc.',
  },
]

export function getArticle(id) {
  return articles.find(i => i.id === Number(id));
}

export async function getData(other) {
  const type = other ? 'lb' : 'arion';
  const url = new URL(`/currency/${type}`, apiUrl);
  console.log('fetch', url.href);
  const response = await fetch(url.href);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

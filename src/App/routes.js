import Orders from '../Orders';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Orders,
    exact: true
  }
];

function routePath(name) {
  let route = routes.find(route => route.name === name);

  if (route === undefined) return '';
  return route.path;
}

export default routes;

export { routePath };
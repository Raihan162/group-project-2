import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Enroll from '@pages/Enroll';
import NotFound from '@pages/NotFound';
import Modify from '@pages/Modify';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
  },
  {
    path: '/enroll',
    name: 'Enroll',
    protected: false,
    component: Enroll,
    layout: MainLayout,
  },
  {
    path: '/student/:id',
    name: 'Modify',
    protected: false,
    component: Modify,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;

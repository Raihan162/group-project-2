import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import MyStudent from '@pages/MyStudent';
import NotFound from '@pages/NotFound';
import allStudent from '@pages/allStudent';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/all-student',
    name: 'AllStudent',
    protected: false,
    component: allStudent,
    layout: MainLayout,
  },
  {
    path: '/my-student',
    name: 'MyStudent',
    protected: false,
    component: MyStudent,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;

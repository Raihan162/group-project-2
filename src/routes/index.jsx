import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import MyStudent from '@pages/MyStudent';
import Enroll from '@pages/Enroll';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import allStudent from '@pages/allStudent';
import Modify from '@pages/Modify';
import Register from '@pages/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
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
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;

import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue';

//import middleware
import auth from '@/middleware/auth';
import guest from '@/middleware/guest';

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue';
// Dashboard pages
const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue');
const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue');

// Pages
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue';
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue';
import Login from 'src/components/Dashboard/Views/Pages/Login.vue';
import Register from 'src/components/Dashboard/Views/Pages/Register.vue';
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue';

import PasswordReset from 'src/components/Dashboard/Views/Password/Reset.vue';
import PasswordEmail from 'src/components/Dashboard/Views/Password/Email.vue';

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue';
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue';
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue';
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue';
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue';
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue';
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue';
import Kakaos from 'src/components/Dashboard/Views/Pages/DB/Kakaos';
import EditKakao from 'src/components/Dashboard/Views/Pages/DB/EditKakao';
import Estimates from 'src/components/Dashboard/Views/Pages/DB/Estimates';
import Visits from 'src/components/Dashboard/Views/Pages/DB/Visits';
import EditEstimate from 'src/components/Dashboard/Views/Pages/DB/EditEstimate';
import EditVisit from 'src/components/Dashboard/Views/Pages/DB/EditVisit';
import Slides from 'src/components/Dashboard/Views/Pages/MainScreen/Slides';
import EditSlides from 'src/components/Dashboard/Views/Pages/MainScreen/EditSlides';
import AddSlide from 'src/components/Dashboard/Views/Pages/MainScreen/AddSlide';
import Events from 'src/components/Dashboard/Views/Pages/Event/Events';
import AddEvent from 'src/components/Dashboard/Views/Pages/Event/AddEvent';
import EditEvent from 'src/components/Dashboard/Views/Pages/Event/EditEvent';
import OwnProducts from 'src/components/Dashboard/Views/Pages/Product/OwnProducts';
import AddProduct from 'src/components/Dashboard/Views/Pages/Product/AddProduct';

// TableList pages
const RegularTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/RegularTables.vue');

// Maps pages
const GoogleMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/GoogleMaps.vue');

// Charts
const Charts = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Charts.vue');

// Example pages
const UserProfile = () => import('src/components/Dashboard/Views/Examples/UserProfile.vue');
// // User Management
const ListUserPage = () => import('src/components/Dashboard/Views/Examples/UserManagement/ListUserPage.vue');

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons,
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem,
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels,
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert,
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications,
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons,
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography,
    },
  
  ],
};

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables,
    },
  ],
};

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps,
    },
  ],
};

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User,
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine,
    },
  ],
};

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { middleware: guest },
};

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register,
  meta: { middleware: guest },
};

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock,
};
let forgotPassword = {
  path: '/password/reset',
  name: 'Password Reset',
  component: PasswordReset,
  meta: { middleware: guest },
};

let resetPassword = {
  path: '/password/email',
  name: 'Password Reset',
  component: PasswordEmail,
  meta: { middleware: guest },
};

let examplesMenu = {
  path: '/examples',
  component: DashboardLayout,
  name: 'Examples',
  children: [
    {
      path: 'user-profile',
      name: 'User Profile',
      components: { default: UserProfile },
      meta: { middleware: auth },
    },
    {
      path: 'user-management/list-users',
      name: 'List Users',
      components: { default: ListUserPage },
      meta: { middleware: auth },
    },
  ],
};

let DBMenu = {
  path: '/db',
  component: DashboardLayout,
  name: 'DB',
  children: [
    {
      path: 'kakaos',
      name: 'Kakaos',
      components: { default: Kakaos },
    },
    {
      path: 'kakaos/:id',
      name: 'EditKakao',
      components: { default: EditKakao },
      props: true,
    },
    {
      path: 'estimates',
      name: 'Estimates',
      components: { default: Estimates },
    },
    {
      path: 'estimates/:id',
      name: 'EditEstimate',
      components: { default: EditEstimate },
    },
    {
      path: 'visits',
      name: 'Visits',
      components: { default: Visits },
    },
    {
      path: 'visits/:id',
      name: 'EditVisit',
      components: { default: EditVisit },
    },
  ],
};

let mainScreenMenu = {
  path: '/main-screen',
  component: DashboardLayout,
  name: 'MainScreen',
  children: [
    {
      path: 'slides',
      name: 'Slides',
      components: { default: Slides },
    },
    {
      path: 'slides-add',
      name: 'AddSlide',
      components: { default: AddSlide },
    },
    {
      path: 'slides/:id',
      name: 'EditSlides',
      components: { default: EditSlides },
    },
  ],
};

let eventMenu = {
  path: '/events',
  component: DashboardLayout,
  name: 'EventMenu',
  children: [
    {
      path: 'events',
      name: 'Events',
      components: { default: Events },
    },
    {
      path: 'events-add',
      name: 'AddEvent',
      components: { default: AddEvent },
    },
    {
      path: 'events/:id',
      name: 'EditEvent',
      components: { default: EditEvent },
    },
  ],
};

let productMenu = {
  path: '/product',
  component: DashboardLayout,
  name: 'ProductMenu',
  children: [
    {
      path: 'own-products',
      name: 'OwnProducts',
      components: { default: OwnProducts },
    },
    {
      path: 'own-products-add',
      name: 'AddProduct',
      components: { default: AddProduct },
    }
  ],
};

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/home',
  },
  {
    path: '/home',
    component: DashboardLayout,
  },
  componentsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  forgotPassword,
  resetPassword,
  examplesMenu,
  DBMenu,
  mainScreenMenu,
  eventMenu,
  productMenu,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    meta: { middleware: auth },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: { middleware: auth },
      },
      {
        path: 'widgets',
        name: 'Widgets',
        component: Widgets,
        meta: { middleware: auth },
      },
    ],
  },
  { path: '*', component: NotFound },
];

export default routes;

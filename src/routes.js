import React from 'react';
import AddFaq from './views/custom/AddFaq';
import AddResult from './views/custom/AddResult';
import Analytics from './views/custom/Analytics';
import Analyzer from './views/custom/Analyzer';
import Faq from './views/custom/Faq';
import LeadManagement from './views/custom/LeadManagement';
import Notification from './views/custom/Notification';
import AddUser from './views/custom/AddUser';
import Users from './views/custom/Users';
import AddNotif from './views/custom/AddNotif';
import Privacy from './views/custom/Privacy';
import Plans from './views/custom/Plans';
import AddPlan from './views/custom/AddPlan';
import VmsEarning from './views/custom/VmsEarning';
import VmsInterview from './views/custom/VmsInterview';
import VmsQuestion from './views/custom/VMSQuestion';
import Calendar from './views/custom/VmsCalendar';
import VmsInterviewer from './views/custom/VmsInterviewer';

// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

// const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/base/switches/Switches'));

// const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
// const Widgets = React.lazy(() => import('./views/widgets/Widgets'));

//// custom routes // 
const AddQuest = React.lazy(() => import('./views/custom/AddNewQuest'));
const AllQuest = React.lazy(() => import('./views/custom/AllQuest'));
const Results = React.lazy(() => import('./views/custom/Results'));
// const Users = React.lazy(() => import('./view/custom/Users'));
// const AddUser = React.lazy(() => import('./view/custom/AddUser'));
const CustomerManagement = React.lazy(() => import('./views/custom/CustomerManagement'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/theme', name: 'Theme', component: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: AddUser },
  
  
  /// custom path and componnt 
  { path: '/add-quest', exact: true, name: 'Add Questions', component: AddQuest },
  { path: '/all-quest', exact: true, name: 'All Questions', component: AllQuest },
  { path: '/analyzer', exact: true, name: ' Analyzer', component: Analyzer },
  { path: '/faq', exact: true, name: 'FAQ ', component: Faq },
  { path: '/add-faq', exact: true, name: 'Add new FAQ ', component: AddFaq },
  { path: '/results', exact: true, name: 'View All Results ', component: Results },
  { path: '/result', exact: true, name: 'Single Results ', component: AddResult },
  { path: '/lms', exact: true, name: 'Lead Management ', component: LeadManagement },
  { path: '/cms', exact: true, name: 'Customer Management ', component: CustomerManagement },
  { path: '/analytics', exact: true, name: 'Analytics ', component: Analytics },
  { path: '/users', exact: true, name: 'View All Users  ', component: Users },
  { path: '/add-user', exact: true, name: 'Add A New User  ', component: AddUser },
  { path: '/notifs', exact: true, name: 'Notifications ', component: Notification },
  { path: '/add-notif', exact: true, name: 'Add a New Notifications  ', component: AddNotif },
  { path: '/privacy', exact: true, name: 'Privacy Policies ', component: Privacy },
  { path: '/plans', exact: true, name: 'View All Plans ', component: Plans },
  { path: '/add-plan', exact: true, name: 'Add a New Plan ', component: AddPlan },
  { path: '/vms-earning', exact: true, name: 'VMS Earning  ', component: VmsEarning },
  { path: '/vms-interview', exact: true, name: 'VMS Interview  ', component: VmsInterview },
  { path: '/vms-interviewer', exact: true, name: 'VMS Interviewer  ', component: VmsInterviewer },
  { path: '/vms-question', exact: true, name: 'VMS Question  ', component: VmsQuestion },
  { path: '/vms-calendar', exact: true, name: 'VMS Question  ', component: Calendar },







];

export default routes;

import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Questionnaire',
    route: '/all-quest',
    icon: 'cil-list',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New',
        to: '/add-quest',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All',
        to: '/all-quest',
      },
    ]

  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Text Analyzer',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View All',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Anazlyze Text',
        to: '/base/cards',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Carousel',
      //   to: '/base/carousels',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Forms',
      //   to: '/base/forms',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Jumbotron',
      //   to: '/base/jumbotrons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navs',
      //   to: '/base/navs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navbars',
      //   to: '/base/navbars',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Progress',
      //   to: '/base/progress-bar',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Switches',
      //   to: '/base/switches',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tabs',
      //   to: '/base/tabs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Result',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Results',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Result',
        to: '/buttons/brand-buttons',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Buttons groups',
      //   to: '/buttons/button-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Dropdowns',
      //   to: '/buttons/button-dropdowns',
      // }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Analytics',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'F A Q',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add a FAQ',
        to: '/icons/coreui-icons',
        // badge: {
        //   color: 'success',
        //   text: 'NEW',
        // },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All FAQ',
        to: '/icons/flags',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'CoreUI Brands',
      //   to: '/icons/brands',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'C M S',
    route: '/notifications',
    icon: 'cil-bell',
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Alerts',
    //     to: '/notifications/alerts',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Badges',
    //     to: '/notifications/badges',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Modal',
    //     to: '/notifications/modals',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Toaster',
    //     to: '/notifications/toaster'
    //   }
    // ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'L M S',
    to: '/lms',
    icon: 'cil-calculator',
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/pages',
    icon: 'cil-bookmark',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All plans',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Plan',
        to: '/register',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 500',
      //   to: '/500',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Plans and Pricing',
    route: '/plans',
    icon: 'cil-credit-card',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All plans',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Plan',
        to: '/register',
      },
    ],
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Settings']
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'User and Roles',
    route: '/plans',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Users',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add new User ',
        to: '/register',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Privacy Policy',
    route: '/privacy',
    icon: 'cil-file',
  },

  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
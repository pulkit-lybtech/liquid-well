import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  
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
    route: '/analyzer',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Analyzer',
        to: '/add-analyzer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Analyzer',
        to: '/analyzer',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Result',
    route: '/result',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Single Result',
        to: '/result',
        badge: {
        color: 'warning',
        text: 'testing',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View Result',
        to: '/results',
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
    to: '/',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'F.A.Q',
    route: '/faq',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add a FAQ',
        to: '/add-faq',
        // badge: {
        //   color: 'success',
        //   text: 'NEW',
        // },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'View All FAQ',
        to: '/faq',
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
    name: 'C. M. S',
    to: '/cms',
    icon: 'cil-bell',
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'L. M. S',
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
    route: '/notifs',
    icon: 'cil-bookmark',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View All',
        to: '/plans',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New',
        to: '/add-notif',
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
        to: '/plans',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Plan',
        to: '/add-plan',
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
    route: '/user',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Users',
        to: '/user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add new User ',
        to: '/add-user',
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

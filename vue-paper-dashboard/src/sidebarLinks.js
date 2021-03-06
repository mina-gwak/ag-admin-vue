export default [
  {
    name: 'Main',
    icon: 'nc-icon nc-shop',
    path: '/home',
  },
  {
    name: 'DB',
    icon: 'nc-icon nc-cloud-download-93',
    children: [
      {
        name: '카카오톡',
        path: '/db/kakaos',
      },
      {
        name: '견적문의',
        path: '/db/estimates',
      },
      {
        name: '상세견적',
        path: '/examples/user-profile',
      },
      {
        name: '방문상담',
        path: '/db/visits',
      },
    ],
  },
  {
    name: '보유차량리스트',
    icon: 'nc-icon nc-single-copy-04',
    path: '/product/own-products',
  },
  {
    name: '메인화면',
    icon: 'nc-icon nc-tv-2',
    children: [
      {
        name: '슬라이드',
        path: '/main-screen/slides',
      },
      {
        name: '상품리스트',
        path: '/pages/user',
      },
    ],
  },
  {
    name: '간편견적',
    icon: 'nc-icon nc-paper',
    children: [{
      name: '즉시출고',
      path: '/components/buttons',
    },
      {
        name: '프로모션',
        path: '/components/grid-system',
      },
      {
        name: '전차종견적',
        path: '/components/panels',
      }],
  },
  {
    name: 'Team Pincar Pick',
    icon: 'nc-icon nc-trophy',
    children: [{
      name: 'SUV',
      path: '/forms/regular',
    },
      {
        name: 'Sedan',
        path: '/forms/extended',
      },
      {
        name: '친환경',
        path: '/forms/validation',
      }],
  },
  {
    name: 'Event',
    icon: 'nc-icon nc-bell-55',
    children: [{
      name: '이벤트',
      path: '/events/events',
    },
      {
        name: '당첨자발표',
        path: '/table-list/extended',
      },
    ],
  },
];

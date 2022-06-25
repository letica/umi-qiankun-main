export default {
  npmClient: 'pnpm',
  plugins: [
    '@umijs/plugins/dist/qiankun',
    '@umijs/plugins/dist/layout',
    '@umijs/plugins/dist/antd',
  ],
  qiankun: {
    master: {},
  },
  antd: {
    import: true,
    style: 'less',
    dark: true,
  },
  layout: {
    title: 'Main app',
  },
  routes: [
    {
      path: '/',
      component: 'index',
      // component: '@/layouts/index.tsx',
      // routes: [
      //   {
      //     path: '/umi-qiankun-sub1',
      //     microApp: 'umi-qiankun-sub1'
      //   },
      //   {
      //     path: '/umi-qiankun-sub2',
      //     microApp: 'umi-qiankun-sub2'
      //   }
      // ]
    },
    {
      path: '/doc',
      icon: 'SmileFilled',
      name: 'DOC',
      component: 'docs',
    },
    {
      path: '/umi-qiankun-sub1/*',
      icon: 'SmileFilled',
      name: 'SUBAPP-1',
      microApp: 'umi-qiankun-sub1',
    },
    {
      path: '/umi-qiankun-sub2/*',
      icon: 'SmileFilled',
      name: 'SUBAPP-2',
      microApp: 'umi-qiankun-sub2',
    },
  ],
};

export default {
  npmClient: 'pnpm',
  base: 'main_app',
  plugins: [
    '@umijs/plugins/dist/qiankun'
  ],
  routes: [
    {
      path: '/',
      component: './layout',
      routes: [
        {
          path: '/docs',
          component: 'docs'
        },
      ]
    }
  ],
  qiankun: {
    master: {}
  }
};

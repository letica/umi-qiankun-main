export default {
  base: 'main_app',
  npmClient: 'pnpm',
  plugins: [
    '@umijs/plugins/dist/qiankun'
  ],
  qiankun: {
    master: {}
  }
};

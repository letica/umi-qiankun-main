export const qiankun = () => {
  // 正式环境配置，需配置正确的线上应用
  return {
    apps: [
      {
        name: "umi-qiankun-sub1",
        entry: "//localhost:8010",
      },
      {
        name: "umi-qiankun-sub2",
        entry: "//localhost:8011",
      },
    ],
    routes: [
      {
        path: '/umi-qiankun-sub1',
        microApp: 'umi-qiankun-sub1'
      },
      {
        path: '/umi-qiankun-sub2',
        microApp: 'umi-qiankun-sub2'
      }
    ]
  };
};

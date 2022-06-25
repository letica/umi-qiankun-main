import React from 'react';
import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/umi-qiakun-sub1">sub1</Link>
        </li>
        <li>
          <Link to="/umi-qiakun-sub2">sub2</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

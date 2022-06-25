import { Layout } from 'antd'
import { MicroApp, NavLink, Link, Outlet } from 'umi'

const { Header, Footer, Content } = Layout


export default function Layouts() {
  return (
    <Layout className="layout layout-1">
      <Header>
        <div className="logo" />
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/umi-qiankun-sub1"> subapp-1 </Link>
        <Link to="/umi-qiankun-sub2"> subapp-2 </Link>
      </Header>
      <Content>
        <p>Content:</p>
        <Outlet />
      </Content>
    </Layout>
  );
}

import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import '../Components/Navbar.css';
import { MenuOutlined } from '@ant-design/icons';
function Navbar() {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: '100vh', backgroundColor: 'silver' }}>
      <div
        style={{
          backgroundColor: 'black',
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: 'white', fontSize: 30 }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <span className="headerMenu">
        <AppMenu />
      </span>
      <Drawer
        placement="right"
        open={OpenMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: 'Gray' }}
      >
        <AppMenu IsInline />
      </Drawer>
    </div>
  );
}

function AppMenu({ IsInline = false }) {
  return (
    <Menu
      style={{
        color: 'white',
        backgroundColor: 'silver',
        fontSize: 20,
        border: 'none',
      }}
      mode={IsInline ? 'inline' : 'horizontal'}
      items={[
        {
          label: 'Home',
          key: 'Home',
        },
        {
          label: 'About Us',
          key: 'About',
        },
        {
          label: 'Contact Us',
          key: 'Contact',
        },
      ]}
    ></Menu>
  );
}

export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { navigationData } from '../../constants'

const { SubMenu } = Menu;

function Navigator(props) {
  const getMenu = (menuItems) => {
    return (
        menuItems.map((menuItem, index) => {
          const { href, label } = menuItem;
          return (
            <Menu.Item key={href}>
              <Link to={href}>
                {label}
              </Link>
            </Menu.Item>
          )
        })
    )
  }

  const navItem = (item) => {
    const { href, label, links } = item;
    const menu = links.length & item.displaySubLinks ? getMenu(links) : false
    return !menu ? (
        <Menu.Item key={href}>
          <Link to={href}>
            {label}
          </Link>
        </Menu.Item>
        ) : (
        <SubMenu key="SubMenu" title={label}>
          {getMenu(links)}
        </SubMenu>
    );
  }

  return (
    <Menu theme="light" mode="horizontal" style={{justifyContent: 'end'}}>
      {
        navigationData.map((item) => {
          return (
            navItem(item)
          )
        })
      }
    </Menu>
  )
}

export default Navigator;

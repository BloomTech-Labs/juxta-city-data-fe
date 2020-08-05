import React  from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const tabData = [
    { name: 'Population', icon: 'users' },
    { name: 'Climate', icon: 'thermometer quarter'},
    { name: 'Economy', icon: 'line graph'},
    { name: 'Cost of Living', icon: 'dollar sign'},
    { name: 'Health Data', icon: 'heartbeat'},
  ];

const TabItems =({activeItem, handleItemClick})=>{

    return (
        <Menu className='menu-city'compact icon='labeled'style={{ backgroundColor: '#2196F3' }}>
        {tabData.map((item, index) => (
          <Menu.Item
            key={index}
            name={item.name}
            onClick={handleItemClick}
            active={activeItem === item.name} >
            <Icon aria-hidden='false' name={item.icon} />
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
    )
}
export default TabItems;
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
        <Menu className='menu-city'compact icon='labeled' data-testid="tabs" style={{ backgroundColor: '#f2f2f2' }}>
        {tabData.map((item, index) => (
          <Menu.Item
          style={{color:"black"}}
            key={index} data-testid={item.name}
            name={item.name}
            onClick={handleItemClick}
            active={activeItem === item.name} >
            <Icon aria-hidden='false' color="white" name={item.icon} />
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
    )
}
export default TabItems;
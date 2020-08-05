import React, { useState } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import TabItems from './TabItems';

const TabBar = () => {

  const [activeItem, setValue] = useState({});

  const handleItemClick = (e, { name }) => {
    setValue({ activeItem: name });
    const ele = document.getElementById(name);
    if (ele) {const offset = ele.offsetTop;
      window.scrollTo(0, offset - 210)}
  };

  return (
    <div className='tabbar'>
      <Menu className='container-menu-city' style={{ backgroundColor: '#2196F3' }} >
        <TabItems handleItemClick={handleItemClick}  activeItem={activeItem} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchBar />
            {/* <Input icon='search' placeholder='Search...' /> */}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default TabBar;

// import React, { useState } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Tab from "@material-ui/core/Tab";
// import Tabs from "@material-ui/core/Tabs";
// import { makeStyles } from '@material-ui/core/styles';
// import Population from "./descriptions/Population";
// import Climate from "./descriptions/Climate";

// const styles = makeStyles((theme) => ({
//   container: {
//     width:"100%",
//     position: "fixed",
//     top: 80,
//     [theme.breakpoints.down("sm")]: {
//       position: "fixed",
//       top: 80,
//     },
//   },
//   Tabs: {
//     background: "#2196F3",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: 24,
//     lineHeight: 28,
//     color: "black",
//   },
// }));

// export default function TabBar(props) {
//   const [value, setValue] = useState("Population");
//   const classes = styles();
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     const ele = document.getElementById(newValue);
// console.log(ele,"ele")
//     if (ele) {
//       const offset = ele.offsetTop;
//       window.scrollTo(0, offset - 190);
//     }
//   };
//   return (
//     <div className={classes.container}>
//       <AppBar data-testid="appbar" position="sticky" className="classes.AppBar" color="default">
//         <Tabs data-testid="tabs" className={classes.Tabs} value={value} onChange={handleChange} indicatorColor="primary" variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
//           <Tab label="Population" value="Population" data-testid="population-tab" />
//           <Tab label="Climate" value="Climate" data-testid="climate-tab" />
//           <Tab label="Economy" value="Economy" />
//           <Tab label="Cost of Living" value="Cost of Living" />
//         </Tabs>
//       </AppBar>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";

const TabBar = () => {

  const [activeItem, setValue] = useState({});
  console.log(activeItem, "activeItem");
 
  const handleItemClick = (e, { name }) => {
    setValue({ activeItem: name });
    const ele = document.getElementById(name);
    console.log(ele, "ele");
    if (ele) {
      const offset = ele.offsetTop;
      window.scrollTo(0, offset - 190);
    }
  };

  return (
    <div>
      <Menu pointing className="container-menu-city">
        <Menu.Item
          name="Population"
          onClick={handleItemClick}
          active={activeItem === "Population"}
        />
        <Menu.Item
          name="Climate"
          onClick={handleItemClick}
          active={activeItem === "Climate"}
        />
        <Menu.Item
          name="Economy"
          onClick={handleItemClick}
          active={activeItem === "Economy"}
        />
        <Menu.Item
          name="Cost of Living"
          onClick={handleItemClick}
          active={activeItem === "Cost of Living"}
        />
        <Menu.Item
          name="Health Data"
          onClick={handleItemClick}
          active={activeItem === "Health Data"}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};
export default TabBar;

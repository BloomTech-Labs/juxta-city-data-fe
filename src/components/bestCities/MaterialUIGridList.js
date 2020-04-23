import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';

import CityContext from '../../contexts/CityContext';

import { getCityData } from '../../functions';
import { useStyles } from './styles/MarialUIGridListStyles';

const MaterialUiGridList = (props) => {
  const classes = useStyles();
  const gridList = props.gridList.slice(0, 4);
  const { setCityData } = useContext(CityContext);
  const history = useHistory();

  function handleClick(city) {
    getCityData(city)
      .then((city) => setCityData(city))
      .then(() => history.push('./cityview'));
  }

  return (
    <div className={classes.root}>
      <GridList cols={props.mobile ? 1.5 : 4} className={classes.gridList}>
        {gridList.map((tile) => (
          <GridListTile
            key={tile.city}
            onClick={() => handleClick(tile.city)}
            data-testid='grid-tile'
          >
            <img src={tile.photo_url} alt={tile.city} className={props.hover} />
            <GridListTileBar
              key={tile.city}
              title={`${tile.city}`}
              titlePosition='top'
              className={props.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default MaterialUiGridList;

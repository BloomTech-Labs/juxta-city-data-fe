import React, { useContext } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

import CityContext from '../../contexts/CityContext';

import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const MaterialUiGridList = props => {
  const classes = useStyles();
  const gridList = props.gridList.slice(0, 4);
  const { setCityData } = useContext(CityContext);
  const history = useHistory();

  async function handleClick(city) {
    const res = await axios.get(
      `https://junta-test.herokuapp.com/data?city=${city.city}`,
    );

    setCityData(res.data);
    routeToCity();
  }

  function routeToCity() {
    history.push('/cityview');
  }

  return (
    <div className={classes.root}>
      <GridList cols={props.mobile ? 1.5 : 4} className={classes.gridList}>
        {gridList.map(tile => (
          <GridListTile
            key={tile.city}
            onClick={() => handleClick(tile)}
            data-testid='grid-tile'
          >
            <img src={tile.photo_url} alt={tile.city} className={props.hover} />
            <GridListTileBar
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

import React from 'react';

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
  titleBar: {
    background: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

const MaterialUiGridList = props => {
  const classes = useStyles();
  const gridList = props.gridList.slice(0, 4);

  return (
    <div className={classes.root}>
      <GridList
        cols={props.mobile ? 1.5 : 4}
        spacing={100}
        cellHeight={296}
        className={classes.gridList}
      >
        {gridList.map(tile => (
          <GridListTile key={tile.city}>
            <img src={tile.photo_url} alt={tile.city} />
            <GridListTileBar
              title={`${tile.city}`}
              titlePosition='top'
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default MaterialUiGridList;

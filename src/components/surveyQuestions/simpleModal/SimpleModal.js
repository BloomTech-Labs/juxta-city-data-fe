import React from 'react';
import Modal from '@material-ui/core/Modal';

import { useStyles, getModalStyle } from './SimpleModalStyles';

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title' className={classes.heading}>
        Cost of Living Index
      </h2>
      <p id='simple-modal-description' className={classes.description}>
        Our cost of living indices are based on a US average of 100. An amount
        below 100 means the city is cheaper than the US average. A cost of
        living index above 100 means the city is more expensive.
      </p>
    </div>
  );

  return (
    <React.Fragment>
      <span onClick={handleOpen} className={classes.annotate}>
        more about cost of living index*
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </React.Fragment>
  );
}

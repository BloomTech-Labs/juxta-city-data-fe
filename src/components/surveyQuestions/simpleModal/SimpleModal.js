import React from 'react';
import {  Header, Icon, Modal } from 'semantic-ui-react';

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}> <Icon color='blue' size='small' name='info circle'/>  </div>
      <Modal closeIcon open={open} onClose={handleClose}
        aria-label='cost of living index info' size='tiny' >
        <Header icon='info circle' content='Cost of Living Index' />
        <Modal.Content>
          <p>  Our cost of living indices are based on a US average of 100. An
            amount below 100 means the city is cheaper than the US average. A
            cost of living index above 100 means the city is more expensive. </p>
        </Modal.Content>
      </Modal>
    </div>
  );
}

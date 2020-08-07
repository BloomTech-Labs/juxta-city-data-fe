import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import SignUpBox from "./SignInBox"

function exampleReducer(state, action) {
    switch (action.type) {
      case 'close':
        return { open: false }
      case 'open':
        return { open: true, size: action.size }
      default:
        throw new Error('Unsupported action...')
    }
  }
  
  const ModalSignUp = () => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
      open: false,
      size: undefined,
    })
    const { open, size } = state
  
    return (
      <>
      <Button onClick={() => dispatch({ type: 'open', size: 'mini' })}>
        Mini
      </Button>
        <Modal
          size={size}
          open={open}
          onClose={() => dispatch({ type: 'close' })}
        >
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
         {/* < SignUpBox/> */}
         <h3>hello modal</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => dispatch({ type: 'close' })}>
              No
            </Button>
            <Button positive onClick={() => dispatch({ type: 'close' })}>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    )
  }
  
  export default ModalSignUp
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 52,
    marginBottom: 52,
  },
  titleBar: {
    background: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  hover: {
    '&:hover': {
      background: '#000',
      opacity: '0.8',
    },
  },
}));

export const Heading = styled.h2`
  text-align: center;
`;

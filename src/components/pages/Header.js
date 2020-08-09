import React from 'react';
// import { useHistory } from 'react-router-dom';
import SearchBar from '../subComponents/SearchBar';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import dashboardBanner from '../../assets/dashboard-banner.jpg';

const HomeBanner = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
    url(${dashboardBanner});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 62.5rem;

  @media (max-width: 500px) {
    height: 30rem;
  }
`;

const moveInBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(30px);
}

100% {
  opacity: 1;
  transform: translate(0);
}
`;

const Heading = styled.h1`
  font-size: 4.8rem;
  color: white;
  animation: ${moveInBottom} 1s ease-out;
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 4rem;
    animation: none;
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: #fff;
`;

const Header = () => {
  // Need to move these

  // const history = useHistory();

  // function handleClick() {
  //   history.push('/survey');
  // }

  return (
    <HomeBanner>
      <Heading>Find your way home</Heading>
      <Paragraph>Discover a place you'll live and love</Paragraph>
      <SearchBar />
    </HomeBanner>
  );
};
export default Header;

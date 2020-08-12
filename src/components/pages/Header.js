import React from 'react';
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
  min-height: 90vh;
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
  font-size: 3.5rem;
  color: white;
  animation: ${moveInBottom} 1s ease-out;
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 3rem;
    animation: none;
  }
`;

const Discover = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #fff;
`;

const Header = () => {
  return (
    <HomeBanner>
      <Heading>Find your way home</Heading>
      <Discover>Discover a place you'll live and love</Discover>
      <SearchBar />
    </HomeBanner>
  );
};
export default Header;

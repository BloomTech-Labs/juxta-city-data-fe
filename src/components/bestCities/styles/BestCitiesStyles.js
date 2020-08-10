import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 3.8rem;
`;

export const CityImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CityCard = styled.div`
  margin: 2rem;
  width: 30rem;
  font-size: 1.6rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1.5rem) scale(1);
    cursor: pointer;
  }

  h3 {
    font-size: 2rem;
    margin: 1rem;
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 30rem;
    height: 20rem;
  }
`;

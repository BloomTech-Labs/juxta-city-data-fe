import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 3rem;
`;

export const CityImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CityCard = styled.div`
  margin: 1.2rem;
  width: 25rem;
  height: 20rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1.5rem) scale(1);
    cursor: pointer;
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem;
  }

  p {
    background: #0074cc;
    color: #fff;
    width: 10rem;
    padding: 0.5rem;
    margin: auto;
    font-size: 1rem;
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 25rem;
    height: 12.5rem;
  }
`;

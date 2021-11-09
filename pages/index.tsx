import type { NextPage } from 'next';
import styled from 'styled-components';

const Temp = styled.div(({ theme }) => ({
  color: theme.pallete.black,
}));

const Home: NextPage = () => <Temp>Welcome to next.js app</Temp>;

export default Home;

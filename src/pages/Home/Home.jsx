import React from 'react';
import Login from '../Shared/Login';
import Banner from './Banner';
import Container from '../../components/Container';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Container>
                <Banner></Banner>
            </Container>
            <Container>
                <Category></Category>
            </Container>
        </div>
    );
};

export default Home;
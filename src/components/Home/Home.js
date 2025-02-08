import React from 'react';
import Landing from '../Landing/Landing';
import Competitions from '../Competitions/Competitions';
import WeDo from '../WeDo/WeDo';
import Events from '../Events/Events';
import Achivment from '../Achivment/Achivment';
import Partner from '../Partner/Partner';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Competitions></Competitions>
            <WeDo></WeDo>
            <Events></Events>
            <Achivment></Achivment>
            <Partner></Partner>
            <Team></Team>
        </div>
    );
};

export default Home;
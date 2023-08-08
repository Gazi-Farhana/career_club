import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import FAQ from '../FAQ/FAQ';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Featured></Featured>
          <FAQ/>
        </div>
    );
};

export default Home;
import React from 'react';
import Logonav from '../logonav';
import SlideShow from '../SlideShow';
import MainBody from '../MainBody';
import Footer from '../footer';

const MainPage = () => {
    return (
        <div>
            <Logonav></Logonav>
            <SlideShow></SlideShow>
            <MainBody></MainBody>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;
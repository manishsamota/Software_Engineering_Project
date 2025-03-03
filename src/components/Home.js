import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import { getdata } from '../Api/Api';

import './Home.css'
import Footer from './Footer';

import Card from './Card'
import MediaSearch from './MediaSearch';

function Home() {

      return (
 
        <div className="home">
      
          <MediaSearch />
  

        </div>

    );
}

export default Home;


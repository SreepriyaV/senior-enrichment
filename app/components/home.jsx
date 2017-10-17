import React, {Component} from 'react';
import {Link } from 'react-router-dom';

const home =function(props)
{

    return(
        <div>
            <h1>Welcome to Grace Hopper University</h1>
             <Link to={'/campuses'}><button type="button">Campuses</button></Link> 
              <Link to={'/students'}><button type="button">Students</button></Link>
            </div>
    )
}

export default home;
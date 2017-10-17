import React, { Component } from 'react';
import axios from 'axios';
import { dispatchGetCampus } from '../action-creators/campus';

import store from '../store';

export default class SingleCampus extends Component {   
    
    constructor(props){
        super(props);

        this.state = store.getState();

        // this.onClick = this.onClick.bind(this);
    }

    //COMPONENTS

    componentDidMount(){

            console.log(this.props.match.params);
       // store.dispatch(dispatchGetCampus(this.props.match.params));
        

        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
            console.log(this.state.campus);
       
    }

     componentWillUnmount(){
        this.unsubscribe();
    }
   



    //RENDER

    render()
    {
       // console.log(typeof this.props.singleCampus)
        
        return(<h1>hey</h1>);
    }

    
}


import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import store from "../store";
import SingleCampus from "./SingleCampus";
import { dispatchGetCampuses } from "../action-creators/campuses";
////import AddCampus from './AddCampus';

export default class campuses extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  //COMPONENTS:

  componentDidMount() {
    store.dispatch(dispatchGetCampuses());

    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  //RENDER

  render() {
    return (
      <div className="container-fluid">
        <h1> campuses </h1>
        <ul>
          {this.state.campuses.map(campus => {
            return (
              <div className="row" key={campus.id}>
                <li>
                  
                  <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                </li>
                {/* <Route path={`/campuses/${campus.id}`} render={() => (
                                    <SingleCampus singleCampus={campus.id}/>)} /> */}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

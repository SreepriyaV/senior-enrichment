import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import store from "../store";
import SingleCampus from "./SingleCampus";
import {
  dispatchGetCampuses,
  dispatchDeleteCampus
} from "../action-creators/campuses";
import AddCampus from "./AddCampus";

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
      <div className="container is-fluid">
        <div className="notification">
          <h1>
            <b>
              <strong> Campuses</strong>
            </b>
          </h1>
          <ul>
            {this.state.campuses.map(campus => {
              return (
                <div className="row" key={campus.id}>
                  <li>
                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                    <button
                      onClick={() =>
                        store.dispatch(dispatchDeleteCampus(campus.id))}
                    >
                      X
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>

          <div>
            <h2>
              <b> Add campus </b>
            </h2>
            <AddCampus />
          </div>
          <div>
            <Link to={"/"}>
              <ul>home</ul>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

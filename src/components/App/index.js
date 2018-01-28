import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfCampers from './campers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      allTime: [],
      holdRecent: [],
      sortOrder: 'DESC'
    }

    this.changeSortOrder = this.changeSortOrder.bind(this);
    this.changeSortOrderAll = this.changeSortOrderAll.bind(this);
  }

  changeSortOrder() {
    let {
      sortOrder,
      recent,
      holdRecent
    } = this.state;
    sortOrder = sortOrder === 'DESC' ? 'ASC' : 'DESC';
    recent = holdRecent;
    recent = recent.reverse();
    this.setState({
      sortOrder,
      recent
    });
  }

  changeSortOrderAll() {
    let {
      sortOrder,
      recent,
      allTime
    } = this.state;
    sortOrder = sortOrder === 'DESC' ? 'ASC' : 'DESC';
    recent = allTime.reverse();
    this.setState({
      sortOrder,
      recent
    });
  }

  getRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  getAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  componentWillMount() {
    axios.all([this.getRecentCampers(), this.getAllTimeCampers()]).then(axios.spread((recentCampers, allTimeCampers) => {
      this.setState({
        recent: recentCampers.data,
        allTime: allTimeCampers.data,
        holdRecent: recentCampers.data
      });
    }));

  };

  render() {
    return (
      <div>
        <h1 className="app-title">React App</h1>
        <ListOfCampers
          changeSortOrder={this.changeSortOrder}
          campers={this.state}
          sortOrder={this.state.sortOrder}
          changeSortOrderAll={this.changeSortOrderAll}
          selected={this.state.selected}
        />
      </div>
    );
  }

};

import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfCampers from './campers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      allTime: []
    }
  }

  getRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  getAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  componentWillMount() {
    axios.all([this.getRecentCampers(), this.getAllTimeCampers()]).then(axios.spread((recentCampers, allTimeCampers) => {
      this.setState({recent: recentCampers.data, allTime: allTimeCampers.data});
    }));

  };

  render() {
    return (<div>
      <h1 className="app-title">Leadership Board App</h1>
      <ListOfCampers campers={[this.state]}/>
    </div>);
  }

};

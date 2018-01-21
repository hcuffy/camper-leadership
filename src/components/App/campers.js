import React from 'react';
import './style.css';
import CamperList from './campers_list';
import FontAwesome from 'react-fontawesome';

const listOfCampers = (props) => {
  const {recent, allTime} = props.campers[0];

  const items = recent.map((camper, idx) => {
    return <CamperList key={idx} number={idx + 1} camper={camper}/>
  });

  return (<table className="table table-striped">

    <thead>
      <tr>
        <th colSpan="4" className="table-header">
          <h2>Leadership Board</h2>
        </th>
      </tr>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Camper Name</th>
        <th scope="col">Points 30 Days</th>
        <th scope="col">All Time Points</th>
      </tr>
    </thead>
    <tbody>
      {items}
    </tbody>
  </table>);
}

export default listOfCampers;

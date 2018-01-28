import React from 'react';
import './style.css';
import CamperList from './campers_list';

const listOfCampers = (props) => {

  const {recent} = props.campers;
  const items = recent.map((camper, idx) => {
    return <CamperList key={idx} number={idx + 1} camper={camper}/>
  });

  return (<table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th colSpan="4" className="table-header">
          <h2>Leader Board</h2>
        </th>
      </tr>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Camper</th>
        <th onClick={props.changeSortOrder} scope="col">Points 30 Days
          <i className="fa fa-sort" aria-hidden="true"></i>
        </th>
        <th onClick={props.changeSortOrderAll} scope="col">All Time Points
          <i className="fa fa-sort" aria-hidden="true"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      {items}
    </tbody>
  </table>);
}

export default listOfCampers;

import React from 'react';


const camperList = (props) => {

  let url = props.camper.img;
  return (<tr>
    <td>{props.number}</td>
    <td><img src={url}/>
      <a href={`https://www.freecodecamp.org/${props.camper.username}`} target="_blank">{props.camper.username}</a>
    </td>
    <td>{props.camper.recent}</td>
    <td>{props.camper.alltime}</td>
  </tr>);
}

export default camperList;

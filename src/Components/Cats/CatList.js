import React, { Component } from 'react';
import CatIndex from './CatIndex';

const CatList = (props) => {
  const catArr = props.cats
  const catList = catArr.map((cat) => <li>{cat}</li>);
  return (
    <div>
      <h1>Version 1</h1>
      <h2>{props.cats.join(', ').toUpperCase()}</h2>
      <br/>
      <h1>Version 2</h1>
      <ul>{catList}</ul>
    </div>
  )
}

export default CatList;

import './Result.css';
import './Favorite.css';
import ResultVideo from './ResultVideo';
import { useState, useEffect } from 'react';
let favorites = null;

const Favorite = (props) => {
  console.log(props.fav);
  if (props.fav.length > 0) {
    favorites = props.fav.map((video) => (
      <div className="vid">
        <ResultVideo vid={video} />
      </div>
    ));
  }

  return (
    <details className="Favorite">
      <summary>Favorite Videos</summary>
      {favorites ? favorites : 'Loading'}
    </details>
  );
};

export default Favorite;

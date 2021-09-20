import React, { useState } from 'react';

const DogSearch = () => {
  const [imageUrl, setImageUrl] = useState('');


const randomFetch = () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.message)
      console.log(imageUrl)
      setImageUrl(data.message)
    })
    .catch((e) => console.error(e))
  }
  
  
  return(
    <div>
      <h1>Random Dog Image</h1>
      <button onClick={randomFetch}>Click for Random Doggo</button>
      <br/>
      <img style={{'width': "75%"}} src={imageUrl} alt="Doggo" />
    </div>
  )
}

export default DogSearch
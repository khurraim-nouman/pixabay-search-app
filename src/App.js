import React, {useState, useEffect} from 'react'
import './App.css';
import ImageCard from './components/imageCard'
import ImageSearch from './components/imageSearch';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState(['']);

  useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          setImages(data.hits)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
  }, [term])


  return (
      <div className='container'>

        <ImageSearch searchText={(text) => setTerm(text)} /> 

        {!isLoading && images.length === 0 && <h1>Image Not Found</h1>}

        {isLoading ? <h1>Loading....</h1> :  <div className='grid-system'>
            {images.map(image => (
               <ImageCard key={image.id} image={image} />
            ))}
        </div> }
      </div> 
  );
}

export default App;

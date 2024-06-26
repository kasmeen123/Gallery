import React, {useState, useEffect} from 'react'
import ImgCard from './components/imgCard'
import Search from './components/search'
import './assets/main.css'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    }
      )
    .catch(err => console.log(err));
  }, [term])
  return (
    <div className="container mx-auto">
    <Search searchText={(text) => setTerm(text)}/>
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :<div className="grid grid-cols-4 gap-2">
        {
          images.map(image => (
            <ImgCard key={image.id} image={image}/>
          ))
        }
      </div>}
    </div>
  )
}
 

export default App
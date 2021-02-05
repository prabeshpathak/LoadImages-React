import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./component/Cards";
import Search from "./component/Search";

function App() {
  const [image, setImage] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_PIXABAY}&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);
  // eslint-disable-next-line
  return (
    <div className="container mx-auto">
      <Search ser={(input) => setSearchTerm(input)} />
      {!isLoading && image.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {isLoading? <h1 className='text-6xl text-center mx-auto'>Loading....</h1>: <div className="grid grid-cols-4 gap-4">
        {image.map((dat) => (
          <Cards key={dat.id} image={dat} />
        ))}
      </div>}
    </div>
  );
}

export default App;

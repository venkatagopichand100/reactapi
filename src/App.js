import { useState } from "react";
import Searchbar from "./components/SearchBar"
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (userWish) => {
    // console.log("user is searching this", userWish);
    const result = await searchImages(userWish);
    setImages(result);
  };

  return (
    <div className="App">
        <Searchbar onSubmit = {handleSubmit}/>
        <ImageList images = {images} />
    </div>
  );
}

export default App;

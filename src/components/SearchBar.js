import "./SearchBar.css";

import { useState } from "react";

function Searchbar({onSubmit}){
    const [userwish, setUserWish] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(userwish);
    }

    const handleChange = (e) =>{
        setUserWish(e.target.value);
        console.log(e)
    }

    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Google images</label>
            <input value = {userwish} onChange={handleChange}/>
        </form>
    </div>
    
    
    )
}

export default Searchbar;
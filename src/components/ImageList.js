import "./ImageList.css"
import ImageShow from "./ImageShow";

function ImageList({images}){
    const imagesFromApi = images.map((image) => {
        return <ImageShow image = {image} />
    })

    return <div className="image-list">{imagesFromApi}</div>
}

export default ImageList;
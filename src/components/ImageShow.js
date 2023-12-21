function ImageShow({image}){
    return <div>
        <img src={image.urls.small} alt = {image.urls.alt_description} />
        <h1>{image.likes}</h1>
        
        </div>
}

export default ImageShow;
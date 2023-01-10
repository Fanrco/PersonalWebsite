function PicWithCap({pic, cap, height}){
    return (
        <div className = "captionedImg">
            <img src = {pic} alt={cap} height={height}></img>
            <p className="caption">{cap}</p>
        </div>
    )
}

function PicList({title, images, captions, height}) {
    const list = []
    for(let i = 0; i < images.length; i++){
        list.push(<PicWithCap pic = {images[i]} height={height} cap = {captions[i]} key={i}/>)
    }

    return (
        <div className = "picList">
            <h2>{title}</h2>
            <div>{list}</div>
        </div>
    )

}

export default PicList

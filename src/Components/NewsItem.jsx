 import React from 'react'
import image from '../assets/s1.webp';
const NewsItem = (
  {title,description, src, url}
  ) => {
  return (
    <div className="card  mb-3 d-inline-block my-3 mx-5 mb-5 shadow-lg bg-body-tertiary rounded" style={{maxWidth:"350px"}}>
    <img src={src ? src :image } style={{height:"144px", width:"348px"}} className="card-img-top" alt="..."  />
    <div className="card-body">
      <h5 className="card-title ">{title.slice(0,50)}</h5>
      <p className="card-text">{description ? description.slice(0,130): "this news is world best news"}</p>

    </div>
  </div>
  )
}

export default NewsItem

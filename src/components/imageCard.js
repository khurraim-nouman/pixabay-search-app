import React from 'react'
import './imageCard.css'


const ImageCard = ({ image }) => {

  const tags = image.tags.split(',');

    return (
        <div className='imageCard'>


            <img
              src={image.webformatURL}
              alt='Some Random '
            />

            <h3>Photo By {image.user} </h3>
  
  
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
            </ul>
  
         <div className='tagsDiv'>
              {tags.map( (tag,index) => (
                  <span key={index} className='tag'>#{tag}</span>
              ))}
         </div>
  
      </div>
    )
}

export default ImageCard;
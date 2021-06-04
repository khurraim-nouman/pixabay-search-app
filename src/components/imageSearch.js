import React, {useState} from 'react'
import  './imageSearch.css'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }

    return (
        <div className='formDiv'>
            <form onSubmit={onSubmit}>
               <div className='inputDIV'>
                <input onChange={e => setText(e.target.value)} type='text' placeholder='Search Image Term' />
                <button className='submit'>Search</button>
              </div>  
            </form>
        </div>
    )
}

export default ImageSearch;
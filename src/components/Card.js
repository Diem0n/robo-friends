import React from 'react';
import './Card.css'
const Card = ({name , email , id}) =>{
    return (
        <div className="card br3 dib  ">
            <img  src= {`https://robohash.org/${id}?200x200`} alt = 'Robot' ></img>
            <div className='tc'>
                <h2 className='f5 black-90 mv3'>{name}</h2>
                <p className='f5 code black-50 mt0 lh-copy'>{email}</p>
            </div>
        </div>

    );
}

export default Card
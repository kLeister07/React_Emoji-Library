import React from 'react'

const Card = (props) => {
  return (
      <div className='term'>
          <dt>
              <img className='emoji' src={props.emoji} alt='emoji' />
              <span>{props.name}</span>
          </dt>
          <dd>
              {props.meaning}
          </dd>
      </div>
  );
}

export default Card
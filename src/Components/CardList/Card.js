import React from 'react';
import './Card.css';
import user from './user.jpg';

const Card = (props) => {
	const { name, status } = props;
	return (
		   <div className='flex flex-column dib wd l2 pa2'>
		     <div className="flex-container w-100 pa3 hov">
				  <div className="flex-child1 br-100 pa0 ma0">
				    <img src={user} alt='robots' className='w-80 br-100'/>
				  </div>			  
				  <div className="flex-child2 des">
				    <p className='mt0 text'>{name}</p>
				    <p className='time text'>{status}</p>
				  </div>			  
			</div>
		    </div>
		);
}

export default Card;
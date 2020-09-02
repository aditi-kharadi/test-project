import React from 'react';
import './Card.css';

const Card2 = (props) => {
	const { name, email, id } = props;
	return (
		   <div className="upp shadow-5 b--light-gray bl br2">
		   		<p className="ma3 f4 pt3">About Classroom</p>
		   		<hr className='hrrr pa3'/>
		   </div>
		);
}

export default Card2;
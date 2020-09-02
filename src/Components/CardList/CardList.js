import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
	if (true) {
		//throw new Error('NOoooo!');
	}
	const cardComponent = people.map((user, i) =>{
		return (
		    <Card 
			   name={people[i].name} 
			   status={people[i].status}
			/>
		);
	})
	return (
		<div className="scrollbar square scrollbar-lady-lips thin">
	      {cardComponent}
	    </div>
		);

}

export default CardList;
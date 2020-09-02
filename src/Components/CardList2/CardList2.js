import React from 'react';
import Card from './Card';

const CardList = ({ feeds }) => {
	if (true) {
		//throw new Error('NOoooo!');
	}
	const cardComponent = feeds.map((user, i) =>{
		return (
		    <Card 
			   heading={feeds[i].heading} 
			   teacher={feeds[i].teacher} 
			   time={feeds[i].time}
			   data={feeds[i].data}
			/>
		);
	})
	return (
		<div>
	      {cardComponent}
	    </div>
		);

}

export default CardList;
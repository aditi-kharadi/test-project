import React from 'react';
import user from './user.jpg';
import { FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa';
import './Card.css';

const Card = (props) => {
	const { heading, teacher, time, data } = props;
	return (
		   <div className='flex flex-column bgc dib pt3 pl3 pr3 ma4 bw1 shadow-5 wd ba b--light-gray br2'>
		     <div className="flex-container w-100">
				  <div className="flex-child1 br-100 pa0 ma0">
				    <img src={user} alt='robots' className='w-80 br-100'/>
				  </div>			  
				  <div className="flex-child2 des">
				    <p className='mt0 text f3'>{heading}</p>
				    <h4 className='text'>{teacher}</h4>
				    <p className='time text'>{time}</p>
				    <div className="mar mr5">
				    <p className='text2'>{data}</p>
				    </div>
				  </div>			  
			</div>

			<hr className='hrr'/>
			<div className="flex-container w-100 mb0 pb0">
				  <div className="flex-child">
				  <center>
				    <FaThumbsUp />
				    <i class="fab fa-font-awesome"></i>
				    <a className="f6 link dim ph3 pv2 mb2 dib black" href="#0">Like</a>
				  </center>
				  </div>			  
				  <div className="flex-child">
				  <center>
				    <FaComment />
				    <a className="f6 link dim ph3 pv2 mb2 dib black" href="#0">Comment</a>
				  </center>
				  </div>
				  <div className="flex-child">
				  <center>
				    <FaShareAlt />
				    <a className="f6 link dim ph3 pv2 mb2 dib black" href="#0">Share</a>
				  </center>
				  </div>			  
			</div>
		    </div>
		);
}

export default Card;
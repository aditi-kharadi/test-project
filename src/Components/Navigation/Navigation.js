import React from 'react';
import user from './user.jpg';
import './Navigation.css';
import { FaShareAlt } from 'react-icons/fa';

const Navigation = () => {
	
	return (		   
		   <div>
		      	<div className="flex-container w-100">
				  <div className="flex-child3 br-100 pa0 ma0">
				    <img src={user} alt='robots' className=' br-100 w4'/>
				  </div>		  
				  <div className="flex-child4 des ml3">
				    <p className='mt0 p1 mb2'>Bse 1st semester All Subjects</p>
				    <p className='time f5 mt0 mb0'>by Jeet Sir</p>
						<div className="flex-container w-100 mt0">
						  <div className="w-30">
						  <center>
						    <h3>0</h3>
						    <p className='time text'>Material</p>
						    </center>
						  </div>		  
						  <div className="w-30">
						    <center>
						    <h3>15</h3>
						    <p className='time text'>Posts</p>
						    </center>
						  </div>
						  <div className="w-30">
						    <center>
						    <h3>4</h3>
						    <p className='time text'>Members</p>
						    </center>
						  </div>
						</div>
				  </div>			  
				</div>
				<div className="flex-container w-100 mt3">
				<a class="w-60 link ph3 pv2 mb2 white ml3 br3 color" href="#0"><center>Join Class</center></a>
				<FaShareAlt className="ml4 mt2" />
				</div>
			</div>
		);
}

export default Navigation;
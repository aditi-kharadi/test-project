import React,{ Component } from 'react';
import CardList from './Components/CardList/CardList';
import Card2 from './Components/CardList/Card2';
import Navigation from './Components/Navigation/Navigation';
import CardList2 from './Components/CardList2/CardList2';
import { people } from './Components/CardList/people';
import { feeds } from './Components/CardList2/feeds';
import { FaShareAlt, FaBorderAll, FaWifi, FaBookOpen, FaClipboard, FaClipboardList, FaUsers, FaAlignLeft } from 'react-icons/fa';
import './App.css';
import Flexbox from 'flexbox-react';

class App extends Component {

  fileSelectedHandler = event => {
    console.log(event);
  }

  render() {
    return (
        <div className="App"> 
          
          <div id="mySidenav" className="sidenav br">
          <Navigation />
                <div className="ml2 pl4 mr3 nav-item">
                  <FaWifi className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">TimeLine</a>
                </div>
                <div className="ml2 pl4 mr3 nav-item">
                  <FaBorderAll className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">Live Class</a>
                </div>
                <div className="ml2 pl4 mr3 nav-item">
                  <FaBookOpen className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">Notes</a>
                </div>
                <div className="ml2 pl4 mr3 nav-item">
                  <FaClipboard className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">Assignment</a>
                </div>
                <div className="ml2 pl4 mr3 nav-item">
                  <FaClipboardList className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">Test</a>
                </div>
                <div className="ml2 pl4 mr3 nav-item">
                  <FaUsers className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">Attendence</a>
                </div>
                <div className="ml2 pl4 mr3 nav-item">
                  <FaAlignLeft className="icon" />
                  <a className="f3 link dim ph3 pv2 mb2 dib black" href="#0">Apply for Leave</a>
                </div>
          </div>
          <Flexbox flexDirection="row" minHeight="100vh">
            <Flexbox width="25%" className="back">
            </Flexbox>
           
            <Flexbox  width="50%" className='back'>
              <CardList2 feeds={ feeds } />
            </Flexbox>
           
            <Flexbox width="25%" className='back right pa3'>
              <div>
              <Card2 />
              <p className='ma4 f3'>In Class </p>
              <CardList people={ people } className='ll'/>
              </div>
            </Flexbox>
          </Flexbox>
          
                  
        </div>
      );
  }
}
export default App;

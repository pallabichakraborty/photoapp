import React, {Component} from 'react';

import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../redux/actions'

import '../styles/stylesheet.css';

class Main extends Component{

    render(){
        return (
            <div>
                    <h1><Link to='/'>Photowall</Link></h1>
                    <Route exact path="/" render = {() =>(
                        <div>
                             <Photowall {...this.props}></Photowall> 
                        </div>
                    )}/>
                    
                    <Route path="/AddPhoto" render = {
                        ({history}) => (
                             <div>
                                 <AddPhoto {...this.props}></AddPhoto>
                             </div>
                        )
                    }/>
                        
             </div>
        );
    }
}

export default Main;
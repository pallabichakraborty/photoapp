import React, {Component} from 'react';

import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single from './Single';

import '../styles/stylesheet.css';

class Main extends Component{

    state ={
        loading:true
    }

    componentDidMount()
    {
        this.props.fetchPosts().then(() => {
            this.setState({loading:false})
        });
        this.props.startLoadingComments();
    }

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

                    <Route path="/single/:id" render ={(params)=> (
                        <Single loading={this.state.loading} {...this.props} {...params}></Single>
                    )}/>
                        
             </div>
        );
    }
}

export default Main;
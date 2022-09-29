import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions'

const mapStateToProps =(state)=>{
  return{
    searchField:state.searchRobots.searchField,
    isPending:state.requestRobots.isPending,
    robots:state.requestRobots.robots,
    error:state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchChange:(event)=> dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>requestRobots(dispatch)
  }
}



function APP(props) {
  // This line has been removed so the HOOks can be added
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  // componentDidMount() {
  //   
  // }
 
  console.log(props)

  // const [robots, setRobots]=useState([])
  // const [searchfield, setSearchfield]=useState('')
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> response.json())
    //     .then(users => {setRobots(users)});
    props.onRequestRobots();
  },[])
  // const onSearchChange = (event) => {
  //   setSearchfield(event.target.value)
  // }


    //const { robots, searchfield } = this.state;
    const {searchField, onSearchChange, robots, isPending}=props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
}

export default connect(mapStateToProps,mapDispatchToProps)(APP);
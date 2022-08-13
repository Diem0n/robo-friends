import React from 'react'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from  '../components/Scroll'
import {useState , useEffect} from 'react'
import {setSearchfield} from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
    return {
        searchField : state.searchField
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value))
    }
}
const App = ({searchField , onSearchChange})=>{
    const  [ robots , setRobots] = useState([])
    useEffect(()=>{
        
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    } , [])
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())

    })
   
    return !robots.length? <h1 className='tc f1 -white'>Hmmmm! Looks like it's taking longer than expected!</h1>:
        <div className='tc'>
            <h1>Robots</h1>
            <SearchBar searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>               
        </div>

    }


export default  connect(mapStateToProps , mapDispatchToProps)(App);
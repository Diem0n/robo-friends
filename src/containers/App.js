import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from  '../components/Scroll'
class App extends Component{

    constructor(){
        super()
        this.state = {
            'robots' : [],
            'searchfield' : ' '
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({'robots' : users})})
    }
    onSearchChange = (event) => {
        this.setState({'searchfield' : event.target.value})     
    
    }
    render(){
        const {robots , searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())

        })
   
        return !robots.length? <h1 className='tc f1 -white'>Hmmmm! Looks like it's taking longer than expected!</h1>:
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>               
            </div>
    
    }
}

export default App;

import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from  '../components/Scroll'
import {useState , useEffect} from 'react'
const App = ()=>{
    const  [ robots , setRobots] = useState([])
    const  [ searchField , setSearchfield] = useState('')

    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    } , [])
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)     
    
    }
    
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())

    })
   
    return !robots.length? <h1 className='tc f1 -white'>Hmmmm! Looks like it's taking longer than expected!</h1>:
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBar searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>               
        </div>

    }


export default App;
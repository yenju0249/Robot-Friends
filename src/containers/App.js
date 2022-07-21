import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBundry from '../components/ErrorBundry';
import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';

function App() {
    // replace constructor() 
    // useState need initial value
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    // replace componentDidMount()
    useEffect(() => {
        // call API to get the resources
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []) // only run if something changes

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length
        ? <h1>Loading...</h1>
        :
        (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBundry>
                        <CardList robots={filterRobots} />
                    </ErrorBundry>
                </Scroll>
            </div>
        );

}

// change to HOOK
// class App extends Component {
//     constructor() {
//         super(); //this is not allowed before super
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     };

//     onSearchChange = (event) => {
//         // React func 指定值給state，取代 = 
//         this.setState({ searchfield: event.target.value });
//     }

//     // belong to React lifecycle
//     componentDidMount() {
//         // call API to get the resources
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => this.setState({ robots: users }));
//     }

//     render() {
//         const { robots, searchfield } = this.state;
//         const filterRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//         })
//         return !robots.length
//             ? <h1>Loading...</h1>
//             :
//             (
//                 <div className='tc'>
//                     <h1 className='f1'>Robo Friends</h1>
//                     <SearchBox searchChange={this.onSearchChange} />
//                     <Scroll>
//                         <ErrorBundry>
//                             <CardList robots={filterRobots} />
//                         </ErrorBundry>
//                     </Scroll>
//                 </div>
//             );
//     };
// }

export default App;
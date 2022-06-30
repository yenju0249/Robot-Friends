import React from 'react';
import './Card.css';

function Card({ username, name, email }) {
    return (
        <div className="tc bg-light-pink dib pr3 ba3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${username}?200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// const Hello = (props) => {
//     return (
//         <div className="f1 tc">
//             <h1>Hello React 2</h1>
//             <p>{props.greeting}, welcome to React </p>
//         </div>
//     );
// }

// class Hello extends Component {
//     render() {
//       return (
//         <div className="f1 tc">
//             <h1>Hello React</h1>
//             <p>{this.props.greeting}, welcome to React </p>
//         </div>
//       );
//     }
//   }


//匯出一個值 匯出一個「值」
export default Card;
import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    // const roobotsArray = robots.map((user, i) => {
    //     return <Card key={i} username={robots[i].username} name={robots[i].name} email={robots[i].email} />
    // })
    // return (
    //     <div>
    //         {roobotsArray}
    //     </div>
    // );
    // test Error
    // if (true){
    //     throw new Error('Error Error ');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card key={i} username={robots[i].username} name={robots[i].name} email={robots[i].email} />
                })
            }
        </div>
    );
}

//匯出一個值 匯出一個「值」
export default CardList;
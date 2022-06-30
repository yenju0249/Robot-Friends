import React from 'react';

function SearchBox({ searchChange }) {
    return (
        <div className="pa2">
            <input
                className="pa3 ba bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            ></input>
        </div>
    );
}

//匯出一個值 匯出一個「值」
export default SearchBox;
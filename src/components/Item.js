import React from 'react';

function Item(props){
    const { message } = props;

    return (
        <div>
            {message}
        </div>
    )
}

export default Item;
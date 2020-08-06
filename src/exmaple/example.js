import React, { useState, useEffect } from 'react';
function Example() {
    const [count, setCount] = useState(0);

    const counterIncrement = () => {
        setCount(count+1);
    };
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;  });

        return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={counterIncrement}>
                Click me
            </button>
        </div>
    );
}

export default Example;

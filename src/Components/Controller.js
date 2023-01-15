import React from 'react'

function CounterController({ data }) {
    const [count, setCount] = data
    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default CounterController
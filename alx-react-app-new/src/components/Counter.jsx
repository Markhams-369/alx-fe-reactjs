import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
      
    return (
      <div>
        <p style={{fontSize: '20px', marginBottom: '15px', border: '1px navy', 
            backgroundColor: 'teal', borderRadius: '10px',
            padding: '10px', width: '43%', margin: 'auto'}}>
            Current Count: {count}
        </p>
        <button
        onClick={() => setCount( count + 1)}
        style={{ margin: '5px', padding: ' 8px 12px ', backgroundColor: '#0f48818c'}}>
            Increment
        </button>

        <button onClick={() => setCount( count - 1)}
        style={{ margin: '5px', padding: ' 8px 12px ', backgroundColor: '#0f48818c'}}>
            Decrement
        </button>

        <button onClick={() => setCount(0)}
        style={{ margin: '5px', padding: ' 8px 12px ', backgroundColor: '#0f48818c'}}>
            Reset
        </button>
      </div>
    );
};

export default Counter;
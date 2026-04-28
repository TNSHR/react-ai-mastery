import {useState} from 'react';
import type {CounterConfig} from '../types/counter.types';

const config:CounterConfig = {
    min:0,
    max:10,
    step:1
}
const Counter = ()=>{
    const [count, setCount] = useState<number>(0);

    const increment = (): void =>{
        setCount(prev=> Math.min(prev + config.step,config.max));
    }

    const decrement = ():void =>{
        setCount(prev=>Math.max(prev - config.step,config.min));
    }

    const reset = ():void =>{
        setCount(0);
    }
    const isMin = count === config.min;
    const isMax = count === config.max;
    return(
        <div className = "counter-card">
            <h2>Count:{count}</h2>
            <div className = "actions">
                <button onClick={decrement} disabled={isMin}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment} disabled={isMax}>Increment</button>

            </div>
            <p className={`status ${isMin || isMax? "alert":"normal"}`}>
                {isMin && "Minimum limit reached"}
                {isMax && "Maximum limit reached"}
            </p>

        </div>
    )
}
export default Counter;
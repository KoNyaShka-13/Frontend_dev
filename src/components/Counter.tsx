import React, {useState} from 'react';
import classes from './Counter.module.scss';//Чтобы текстовый редактор видел, что и откуда импортируется, как в данном случае, нужен файл global.d.ts

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;

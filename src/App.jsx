import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDecrementAction, asyncIncrementAction, decrementAction, incrementAction } from './store/countReducer';
import { fetchUsersAction } from './store/userReducer';

const App = () => {
    const count = useSelector((state) => state.countReducer.count)
    const users = useSelector((state) => state.userReducer.users)
    const dispatch = useDispatch()

    const incClick = () => dispatch(incrementAction())
    const decClick = () => dispatch(decrementAction())

    const asyncIncClick = () => dispatch(asyncIncrementAction())
    const asyncDecClick = () => dispatch(asyncDecrementAction())

    const getUsers = () => dispatch(fetchUsersAction())

    return (
        <div className="App">
            <div className={'count'}>{count}</div>
            <div className={'buttons'}>
                <button className={'btn'} onClick={incClick}>Increment</button>
                <button className={'btn'} onClick={decClick}>Decrement</button>
            </div>
            <div className={'buttons'}>
                <button className={'btn'} onClick={asyncIncClick}>Async Increment</button>
                <button className={'btn'} onClick={asyncDecClick}>Async Decrement</button>
            </div>
            <button className={'btn'} onClick={getUsers}>Get users</button>
            <div className={'users'}>
                {users.map((user) =>
                    <div key={user.id} className={'user'}>
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

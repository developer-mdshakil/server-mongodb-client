import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const submitHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data) => {
          const newUsers = [...users, data];
          users.push(newUsers);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        form.reset();
    }
    return (
        <div className='mx-28'>
            <form onSubmit={submitHandler} className='shadow p-6'>
            <input  className='border w-75' type="text" name='name' placeholder='Enter name' />
            <br />
            <input className='border w-75' type="text" name='email' placeholder='Enter email' />
            <br />
            <button type="submit" className='btn px-6'>Send</button>
            </form>
            <h2 className='text-4xl'>This site user: {users.length}</h2>
            {
                users.map(user => <h2 className='text-2xl' key={user._id}>{user.email}</h2>)
            }
        </div>
    );
};

export default Home;
import React from 'react';
import UserInfo from './Components/UserInfo';

const App = () => {
  const userInfo = {
    name: "Tomiwa",
    age: 25,
    email: 'tggraphics2@gmail.com'
  };

  return (
    <div>
      <h1>Welcome to Sail App</h1>
      <UserInfo name={userInfo.name} age={userInfo.age} email={userInfo.email} />
    </div>
  );
};

export default UserInfo
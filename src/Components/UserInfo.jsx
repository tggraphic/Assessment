import React from 'react';

const UserInfo = ({ name, age, email }) => {
  // CSS styling
  const styles = {
    container: {
      backgroundColor: 'blue',
      padding: '30px',
      borderRadius: '5px',
      margin: '10px 0',
    },
    heading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    label: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to the App</h2>
      <p>
        <span style={styles.label}>First Name: </span>
        {name}
      </p>
      <p>
        <span style={styles.label}>Last Name: </span>
        {age}
      </p>
      <p>
        <span style={styles.label}>Email: </span>
        {email}
      </p>
    </div>
  );
};

export default App;

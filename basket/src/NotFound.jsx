import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.message}>Sorry, the page you are looking for doesn't exist.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    heading: {
        fontSize: '48px',
        color: '#ff4d4d',
    },
    message: {
        fontSize: '18px',
        color: '#555',
    },
};

export default NotFound;

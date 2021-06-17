import React from 'react';
const Header = () => {
    const styles = {
        color: 'white',
        backgroundColor: 'blue',
        width: '100%',
        padding: '20px'
    }
    return (<header style={styles}>
        <h1>Pumping Iron</h1>
    </header>);
}

export default Header;
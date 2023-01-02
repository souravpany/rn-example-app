import React from 'react';
import { value } from './shared/Header';

const WebAppTitle = () => {
    return (
        <div>
            <h2 style={{ color: '#9400d3', fontSize: '32' }}>
                Hello Web App {value}
            </h2>
        </div>
    );
};

const App = () => {
    return (
        <>
            <WebAppTitle />
        </>
    );
};

export default App;
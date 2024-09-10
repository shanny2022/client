import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [aiResponse, setAiResponse] = useState('');

    useEffect(() => {
        fetch('/')
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);

    const getAiResponse = () => {
        fetch('/ai-tutor')
            .then(response => response.json())
            .then(data => setAiResponse(data));
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>{message}</p>
                <button onClick={getAiResponse}>Get AI Response</button>
                <p>{aiResponse}</p>
            </header>
        </div>
    );
}

export default App;

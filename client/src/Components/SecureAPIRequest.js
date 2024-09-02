import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [serverResponse, setServerResponse] = useState('');

    const handleSecureRequest = async () => {
        try {
            const apiUrl = "http://localhost:8000/products/products1"; // API URL from React app

            // Send the API URL to the Flask server
            const apiResponse = await axios.post('http://127.0.0.1:5000/secure_api', {
                api_url: apiUrl
            });

            setServerResponse(apiResponse.data);
        } catch (error) {
            console.error('Error during secure request:', error);
        }
    };

    return (
        <div>
            <h1>Secure API Request</h1>
            <button onClick={handleSecureRequest}>Send Secure Request</button>
            <p>Server Response: {JSON.stringify(serverResponse)}</p>
        </div>
    );
};

export default App;


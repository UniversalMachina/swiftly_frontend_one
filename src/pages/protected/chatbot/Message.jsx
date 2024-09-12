import React, { useState } from 'react';

const Footer = ({ sendMessage, streamMessage, handleMicrophoneClick, isListening }) => {
    const [input, setInput] = useState('');

    const handleSendClick = () => {
        if (input.trim()) {
            sendMessage(input, 'user');
            streamMessage(input);
            setInput('');
        }
    };

    const handleInputChange = (e) => setInput(e.target.value);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            handleSendClick();
        }
    };

    return (
        <footer>
            <input
                type="text"
                id="user-input"
                placeholder="Type a message..."
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendClick}>Send</button>
            <button id="microphone-button" onClick={handleMicrophoneClick}>
                {isListening ? '🎤 Listening...' : '🎤'}
            </button>
        </footer>
    );
};

export default Footer;

import { useState, useEffect, useRef } from 'react';

const useSpeechRecognition = (onResult, onEnd, onError) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = onResult;
      recognitionRef.current.onend = onEnd;
      recognitionRef.current.onerror = onError;
    }
  }, [onResult, onEnd, onError]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  return { isListening, toggleListening };
};

export default useSpeechRecognition;

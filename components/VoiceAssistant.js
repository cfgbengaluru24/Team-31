import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceAssistant = ({ onCommentSave }) => {
  const [comment, setComment] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleRecord = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser does not support speech recognition software! Please use Chrome desktop.");
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setComment(transcript);
    onCommentSave(transcript);
  };

  return (
    <div>
      <button onClick={handleRecord}>Start Recording</button>
      <button onClick={handleStop}>Stop Recording</button>
      <p>Original Comment: {comment}</p>
    </div>
  );
};

export default VoiceAssistant;

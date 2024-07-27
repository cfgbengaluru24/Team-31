import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [analysis, setAnalysis] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = () => {
    // Mock analysis text
    const mockAnalysis = 'Patient Progress Summary:\n\n Haemoglobin: Significant improvement observed in haemoglobin levels.\n This indicates positive response to treatment, potentially reducing fatigue and improving overall health.\n ---> Plaque: Plaque remains a concern.\n ---> Further investigation and potential interventions are necessary to address this issue.\n \n\nNEXT STEPS :Review recent lab results and imaging studies to assess the current state of plaque accumulation. \n ---> Discuss potential treatment options with the patient, including lifestyle modifications and/or medication. \n ---> Schedule a follow-up appointment to monitor progress and adjust treatment as needed. "';
    setAnalysis(mockAnalysis);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 >Doctor's Notes</h3>
        <div>
          <label>
            Select User:
            <select value={selectedLocation} onChange={handleLocationChange}>
              <option value="">--Select Location--</option>
              <option value="1">Meena</option>
              <option value="2">Pranjal</option>
              <option value="3">ABC</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        {selectedLocation && (
          <div className="box">
            
            <textarea
              rows="10"
              cols="50"
              readOnly
              value={analysis}
            ></textarea>
            <button onClick={handleSubmit}>Show</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

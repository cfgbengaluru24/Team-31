import { useState } from 'react';

const Dropdown = ({ locations, onSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].loc_id);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <>
      <select value={selectedLocation} onChange={handleChange} className="dropdown">
        {locations.map((location) => (
          <option key={location.loc_id} value={location.loc_id}>
            {location.name}
          </option>
        ))}
      </select>
      <style jsx>{`
        .dropdown {
          padding: 12px 20px;
          font-size: 16px;
          border-radius: 5px;
          border: 2px solid #0070f3;
          background-color: #fff;
          color: #0070f3;
          transition: border-color 0.3s ease;
          margin-bottom: 20px;
          width: 250px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .dropdown:hover {
          border-color: #005bb5;
        }
        .dropdown:focus {
          outline: none;
          border-color: #005bb5;
          box-shadow: 0 0 0 3px rgba(0, 91, 181, 0.2);
        }
      `}</style>
    </>
  );
};

export default Dropdown;

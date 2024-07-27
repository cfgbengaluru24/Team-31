import { useState, useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as needed
import AddPatientForm from '../components/AddPatientForm'; // Import the AddPatientForm component

export default function Visit() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationData, setLocationData] = useState([]); // Ensure it's initialized as an array
  const [loading, setLoading] = useState(false);
  const [expandedCardIndices, setExpandedCardIndices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailsRef = useRef(null);

  const items = [
    { name: 'Pochampally', id: 1 },
    { name: 'Palampeta', id: 2 },
    { name: 'Alampur', id: 3 },
    { name: 'Item 4', id: 4 },
  ];

  const fetchLocationData = async (locationId) => {
    setLoading(true);
    try {
      const q = query(collection(db, 'patient'), where('locationId', '==', locationId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => doc.data());
      setLocationData(Array.isArray(data) ? data : []); // Ensure it's always an array
    } catch (error) {
      console.error('Error fetching location data:', error);
      setLocationData([]);
    }
    setLoading(false);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    fetchLocationData(location.id);
    
    // Close the dropdown
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  const handleCardClick = (index) => {
    setExpandedCardIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index); // Remove index if already present
      } else {
        return [...prevIndices, index]; // Add index if not present
      }
    });
  };

  const handleAddPatient = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {!selectedLocation ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Visit Locations</h1>

          <details className="relative" ref={detailsRef}>
            <summary className="flex items-center justify-between bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300 w-48">
              <span>Locations</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transform transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="dropdown-content bg-white text-gray-800 rounded-lg shadow-md mt-2 absolute left-0 z-10 w-48 p-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 mb-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <ul>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li key={index} className="relative group">
                      <button
                        className="block px-4 py-2 hover:bg-gray-100 rounded w-full text-left"
                        onClick={() => handleLocationClick(item)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="block px-4 py-2 text-gray-500">No results</span>
                  </li>
                )}
              </ul>
            </div>
          </details>
        </>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">{selectedLocation.name} Data</h1>
            <button
              onClick={handleAddPatient}
              className="bg-red-900 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Patient
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationData.length > 0 ? (
                locationData.map((patient, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer relative"
                    onClick={() => handleCardClick(index)}
                  >
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{patient.name}</h2>
                    <p className="text-gray-600"><span className="font-semibold">Age:</span> {patient.age}</p>
                    <p className="text-gray-600"><span className="font-semibold">Gender:</span> {patient.gender}</p>
                    {expandedCardIndices.includes(index) && (
                      <div className="mt-2">
                        <p className="text-gray-600"><span className="font-semibold">Dosage:</span> {patient.dosage}</p>
                        <p className="text-gray-600"><span className="font-semibold">Follow-up Duration:</span> {patient.followUpDuration}</p>
                        <p className="text-gray-600"><span className="font-semibold">Comments:</span> {patient.comments}</p>
                        <p className="text-gray-600"><span className="font-semibold">Diagnosis:</span> {patient.diagnosis}</p>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${expandedCardIndices.includes(index) ? 'text-gray-700 rotate-180' : 'text-gray-500'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </div>
                  </div>
                ))
              ) : (
                <p>No patients found for {selectedLocation.name}</p>
              )}
            </div>
          )}

          {isModalOpen && (
            <AddPatientForm onClose={handleCloseModal} />
          )}
        </div>
      )}
    </div>
  );
}

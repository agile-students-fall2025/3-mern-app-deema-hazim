import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUs() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5002/api/about')
      .then(response => setAboutData(response.data))
      .catch(error => console.error('Error fetching about data:', error));
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', textAlign: 'center' }}>
      <h1>About Us</h1>
      <img
        src={aboutData.image}
        alt={aboutData.name}
        style={{ width: '200px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h2>{aboutData.name}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{aboutData.description}</p>
    </div>
  );
}

export default AboutUs;
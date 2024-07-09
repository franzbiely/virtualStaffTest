import React, { useState } from 'react';

function AddressForm({fetchData}) {
  const [ip, setIp] = useState('');
  const [label, setLabel] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const data = { ip, label }; // Create data object for the fetch request

    try {
      const response = await fetch('http://localhost:8000/api/address', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), // Convert data object to JSON string
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      alert('Address submitted successfully!'); // Success message
      // You can also handle successful responses here (e.g., clear form, show confirmation)
      setIp(''); // Clear form fields after successful submission
      setLabel('');
      fetchData();
    } catch (error) {
      console.error('Error submitting address:', error);
      // You can display an error message to the user here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ip">IP Address:</label>
      <input
        type="text"
        id="ip"
        name="ip"
        value={ip}
        onChange={(event) => setIp(event.target.value)}
        required
      />
      <br />
      <label htmlFor="label">Label:</label>
      <input
        type="text"
        id="label"
        name="label"
        value={label}
        onChange={(event) => setLabel(event.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddressForm;
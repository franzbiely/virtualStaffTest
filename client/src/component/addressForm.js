import React, { useEffect, useState } from 'react';

function AddressForm({fetchData, editFields}) {
  console.log(4, {editFields})
  const [id, setId] = useState(editFields?.editId || '');
  const [ip, setIp] = useState(editFields?.editIp || '');
  const [label, setLabel] = useState(editFields?.editLabel || '');

  const handleRemove = async (event) => {
    event.preventDefault(); 
    console.log({id})
    if(id !== '') {
      await fetch('http://localhost:8000/api/cache', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({text: `DELETED #${id} by customer ${localStorage.getItem('loggedUser')} on timestamp : ${Date.now()}`}), // Convert data object to JSON string
      });

      const response = await fetch(`http://localhost:8000/api/address/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      setIp(''); // Clear form fields after successful submission
      setLabel('');
      fetchData();
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const data = { ip, label }; // Create data object for the fetch request

    try {
      // Add
      if(id === '') {
        await fetch('http://localhost:8000/api/cache', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({text: `NEW RECORD by customer ${localStorage.getItem('loggedUser')} on timestamp : ${Date.now()}`}), // Convert data object to JSON string
        });

        const response = await fetch('http://localhost:8000/api/address', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data), // Convert data object to JSON string
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

      }
      else {
        // Edit

        await fetch('http://localhost:8000/api/cache', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({text: `UPDATED #${id} by customer ${localStorage.getItem('loggedUser')} on timestamp : ${Date.now()} | ${JSON.stringify(data)}`}), // Convert data object to JSON string
        });

        const response = await fetch(`http://localhost:8000/api/address/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data), // Convert data object to JSON string
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
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

  useEffect(() => {
    setId(editFields.editId)
    setIp(editFields.editIp)
    setLabel(editFields.editLabel)
  }, [editFields])

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
      <br />
      <button type="submit">Submit</button>
      &nbsp;
      <button onClick={() => {
        setId('')
        setIp('')
        setLabel('')
      }}>Cancel</button>
      &nbsp;
      <button onClick={handleRemove}>Delete</button>
    </form>
  );
}

export default AddressForm;
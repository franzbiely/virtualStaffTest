"use client"
import Image from "next/image";
import styles from "./../page.module.css";
import { useEffect, useState } from "react";
import AddressForm from "../../component/addressForm";
interface AddressI {
  id: string,
  label: string,
  ip: string
}

export default function Home() {
  const [data, setData] = useState<AddressI[]>([]);
  const [editId, setEditId] = useState('');
  const [editIp, setEditIP] = useState('');
  const [editLabel, setEditLabel] = useState('');

  const fetchData = async () => {


    const response = await fetch('http://localhost:8000/api/address');
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(editIp, editLabel)
  }, [setEditIP, editIp, editLabel, setEditLabel])
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <AddressForm fetchData={fetchData} editFields={{editId, editIp, editLabel}}/>
      <hr />
        <table className={styles.myTable}>
          <thead>
            <tr>
              <th>IP Address</th>
              <th>Label</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            data.length > 0 ?
            data.map((address) => (
              <tr key={address.id}>
                <td>{address.ip}</td>
                <td>{address.label}</td>
                <td><button onClick={() => {
                  console.log('here', address.ip , address.label, address.id)
                  setEditId(address.id)
                  setEditIP(address.ip)
                  setEditLabel(address.label)
                }}>Edit</button></td>
              </tr>
            ))
            :
            (<tr><td colSpan={2}>No data</td></tr>)
          }
          </tbody>
        </table>
      </div>
    </main>
  );
}

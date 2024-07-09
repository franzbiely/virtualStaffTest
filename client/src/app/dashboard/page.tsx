"use client"
import Image from "next/image";
import styles from "./../page.module.css";
import { useEffect, useState } from "react";

interface AddressI {
  id: string,
  label: string,
  ip: string
}

export default function Home() {
  const [data, setData] = useState<AddressI[]>([]);
  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/api/address');
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <table className={styles.myTable}>
          <thead>
            <tr>
              <th>IP Address</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {
            data.length > 0 ?
            data.map((address) => (
              <tr key={address.id}>
                <td>{address.ip}</td>
                <td>{address.label}</td>
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

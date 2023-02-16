import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cards() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://loveme-backend.vercel.app/api/records`
      )

      setRecords(res?.data?.records || [])
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {records
          .filter((t) => t?.show === 'x')
          .slice(0, 9)
          .map((record, index) => {
            return (
              <div className="col" key={index}>
                <div className="card h-100">
                  <div
                    className="card-body"
                    style={{ border: '10px solid #cde0ef' }}
                  >
                    <h5 className="card-title">{record.name}</h5>
                    <p className="card-text">{record.your_wish}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

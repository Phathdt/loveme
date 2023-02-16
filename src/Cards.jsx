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
        {records.slice(0, 9).map((record) => {
          return (
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
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

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Cards() {
  const [records, setRecords] = useState([])
  const [record, setRecord] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://loveme-backend.vercel.app/api/records`
      )

      setRecords(res?.data?.records || [])
    }

    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedRecords = records.filter((t) => t.show === 'x')
      const max = selectedRecords.length

      const randomNumber = randomIntFromInterval(0, max - 1)

      setRecord(selectedRecords[randomNumber])
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [records.length])

  return (
    <div className="container">
      {record && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col" />
          <div className="col">
            <div
              className="card h-100"
              style={{
                padding: 10,
                'box-shadow': '0px 2px 16.8px 3.2px rgb(0 0 0 / 8%)',
                background: 'aliceblue',
              }}
            >
              <div
                className="card-body"
                style={{ border: '10px solid #cde0ef' }}
              >
                <h5 className="card-title">{record?.name}</h5>
                <p className="card-text">{record?.your_wish}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

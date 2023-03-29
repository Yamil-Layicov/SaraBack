import {useEffect, useState} from 'react'

const Dashboard = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/floorOne')
    .then(res => res.json())
    .then(res2 => setData(res2))
  }, [])

  return (
    <div>
      {data.map(dat => 
          <div style={{ margin:"20px"}} key={dat._id}>
            <div>{dat.roomNo}</div>
            <div>{dat.companyName}</div>
            <div>{dat.owner}</div>
            <div>{dat.area}</div>
            <div>{dat.roomType}</div>
          </div>
        )}
    </div>
  )
}

export default Dashboard
import React, { useState, useEffect } from "react";
// import "./DataFetcher.css"; // Import stylesheet

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const jsonData = await response.json();
      setData(jsonData.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReload = () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="horizontal-list">
            {data.map((item, index) => (
              <li key={index} className="horizontal-item">
                <div className="card">
                  <img src={item.picture.thumbnail} alt="User" />
                  <div className="card-content">
                    <p>
                      Nama: {item.name.first} {item.name.last}
                    </p>
                    <p>Email: {item.email}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleReload}>Muat Ulang</button>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;

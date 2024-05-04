import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=United+Kingdom"
      );
      const jsonData = await response.json();
      setUniversities(jsonData);
    } catch (e) {
      console.log("The error is:", e);
    }
  };

  return (
    <>
      <div>
        {universities.map((university, index) => (
          <div key={index}>
            <h6>{university.alpha_two_code}</h6>
            <h1>{university.name} </h1>
            <h3>{university.country}</h3>
            <a
              href={university.web_pages}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website of University
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react"

// https://restcountries.com/v3.1/region/europe 


function App() {

  const [countries, setCountries] = useState();

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/region/europe")
    .then(data => data.json())
    .then(data => {
      console.log(data)
      data.sort((a,b) => {
        if(a.name.common < b.name.common) {
          return - 1
        }

        else if(a.name.common > b.name.common) {
          return 1
        }

        else {
          return 0;
        }
      })
      setCountries(data)
    })

  }, [])

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7x1 mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4x1">Europe Countries Data.</h1>
        <p className="text-gray-100 text-x1 mb-8">Click on a card to reveal a country's informations.</p>
      </div>
    </div>
  )
}

export default App

import React from 'react'

function FetchApi() {

  const API_URL = 'https://google.com/api'

  return (
    <>
      <section>
        <p>Fetch API Data</p>
        <p>{API_URL}</p>
      </section>
    </>
  )
}

export default FetchApi
import React, { useEffect, useState } from 'react';

function FetchApi() {

  const API_URL = ' http://localhost:3500/UserData';

  const [userData, setuserData] = useState([]);
  const [FetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Data Not Received !')
        const responsedata = await response.json();
        setuserData(responsedata);
        setFetchError('')
      } catch (err) {
        console.log(err);
        setFetchError(err.message)
      }
      finally {
        setIsLoading(false);
      }

    }
    setTimeout(() => {
      (async () => fetchData())();
    }, 2000);

  }, [])

  return (
    <>
      <section>

        <table border={1}>

          <thead>
            <td>UserID</td>
            <td>PassWord</td>
          </thead>

          <tbody>
            <tr>
              {isLoading && <td>Loading Data....</td>}
            </tr>
            <tr>
              {FetchError && <td>{FetchError}</td>}
            </tr>
            {userData.map((dataobj) => (
              <>
                {!isLoading && !FetchError &&
                  <tr>
                    <td>{dataobj.userId}</td>
                    <td>{dataobj.password}</td>
                  </tr>}
              </>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total : {userData.length}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  )
}

export default FetchApi
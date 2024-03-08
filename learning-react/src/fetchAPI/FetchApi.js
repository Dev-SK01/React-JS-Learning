import React, { useEffect, useState } from 'react';
import apiRequest from './crud.js';

function FetchApi() {

  const API_URL = ' http://localhost:3001/UserData';

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

  async function UpdateData() {
    const API_URL = ' http://localhost:3001/UserData';
    const data = {
      id: new Date().getSeconds().toString(),
      userId: new Date().toLocaleTimeString(),
      password: "admin@123"

    };

    const postOption = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const res = await apiRequest(API_URL ,postOption)
    if (!res) setFetchError(res);
  }
  // (async()=> await UpdateData())(); 

  async function patchData() {
    const data = 14;
    const update = {password : "I'm Updated"};
   const  patchOption ={
      method:'PATCH',
      header:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(update)
    }
    const url = `${API_URL}/${data}`;
    const res = await apiRequest(url ,patchOption)
    if (!res) setFetchError(res);
  }
  // function call
  // (async () => await patchData())();
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
              {isLoading && <td>Loading Data....</td>}  {/* && user for if the value is here*/}
            </tr>
            <tr>
              {FetchError && <td>{FetchError}</td>}
            </tr>
            {userData.map((dataobj) => (
              <>
                {!isLoading && !FetchError && /* checking the isloadig & fetcherror  falsee*/
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
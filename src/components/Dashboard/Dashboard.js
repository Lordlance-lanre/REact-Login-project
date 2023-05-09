import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import image from './assets/images/workflow-removebg-preview.png';


const Dashboard = () => {
 const [results, setResults] = useState([]);
 const [search, setSearch] = useState("");

  const searchElem = (elem) =>{
        let input = elem.target.value;
        setSearch(input);
    }

// const deleteResult = (e, result) =>{
//             e.preventDefault();
//             const filteredItems = results.filter((item) => console.log("item>>>",item.id));
//             setResults(filteredItems);
//             // console.log("clicked>>>>", filteredItems)
//     }

 useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/users")
       .then((res) => {
         setResults(res.data);
         console.log("results>>>", res.data);
     })
       // .then(results => setResults(results));
 }, [])

 const getEmailData = localStorage.getItem("Email");
 const getIndex = getEmailData.split('@');


 const iterateResultArray = results.filter((result) =>{
    return search.toLowerCase() === "" ? result : result.name.toLowerCase().includes(search) || 
    result.username.includes(search) ||
    result.email.toLowerCase().includes(search)
   }).map((result) =>{
    console.log("result>>>", result)
    return (
                  <tbody className="divide-y divide-gray-200">
                      <tr key={result.id}>
                        <td className="px-6 py-4 text-sm font-medium text-black whitespace-nowrap">
                           {result.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{result.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {result.email}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button className="text-green-500 hover:text-green-700">
                                  Edit
                            </button>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button className="text-red-500 hover:text-red-700">
                                 Delete
                            </button>
                          </td>
                      </tr>
                    </tbody>
  )})


 // console.log('getIndex>>', getIndex[0]);
  return (
      <div>
       {/* <div>
          <img src="./images/workflow-removebg-preview.png"/>
        </div>*/}
        <h3 className="text-center mt-5 text-4xl font-bold">Welcome {getIndex[0]} </h3>
        
          <div className="flex justify-center mt-10">
            <input type="text" onChange={searchElem} className="border-2 rounded py-2 px-2 font-bold tracking-wide outline-blue-400" placeholder="Search"/>
          </div>
          

          <div className="flex flex-col my-7">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {/*<tbody className="divide-y divide-gray-200">
                      <tr>
                      {results.map((result) =>{
                        <>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                           1
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Jone Doe</td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              jonne62@gmail.com
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a className="text-green-500 hover:text-green-700" href="#">
                                  Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a className="text-red-500 hover:text-red-700" href="#">
                                 Delete
                            </a>
                          </td>
                          </>
                      })}
                      </tr>
                    </tbody>*/}
                    {iterateResultArray}
                  </table>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

// Dashboard.propTypes = {};
// Dashboard.defaultProps = {};
// https://opensky-network.org/api
export default Dashboard;

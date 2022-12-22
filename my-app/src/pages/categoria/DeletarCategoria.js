// // import React from 'react';

// // import { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom';

// // // aqui e o componente 
// // function DeletarCategoria() {

// //     //********************************* Aparti daqui e para consumir a api e mosra ela em uma tabela  *************************************************************** */
// //     const [itens, setItens] = useState([])
    
// //     console.log(itens);

// //     useEffect(() => {
// //         async function fetchMyAPI() {
// //             let response = await fetch("http://localhost:3001/categories")
// //             const usuariosDaAPI = await response.json()
// //             setItens(usuariosDaAPI)

// //         }

// //         fetchMyAPI()
// //     }, [])// aqui fica as dependencias []
// //     //toda vez que o valor da dependia mudar o useEffect sera executado novamente.


// //         async function deletarCategoria (id) {
// //             let result = await fetch("http://localhost:3001/categories/" + id, { 
// //                 method: 'DELETE',
// //                 headers: { 
// //                     'Authorization': 'Bearer my-token',
// //                     'My-Custom-Header': 'foobar'
// //                 }
// //             });
// //             result = await result.json();
// //             console.warn(result)
// //         };






// //     return (
// //         <div className="App">
// //             <table style={{ border: "1px solid" }}>
// //                 <th>id</th>
// //                 <th>nome</th>
// //                 <th>Opções</th>
// //                 {itens.map(item => {
                    
// //                     return <tr style={{ border: "1px solid" }}>
// //                         <td style={{ border: "1px solid" }}>{item._id}</td>
// //                         <td style={{ border: "1px solid" }}>{item.nome}</td>
// //                         <td style={{ border: "1px solid" }}><button onClick={() => deletarCategoria(item._id)}>deletar</button> </td>

// //                     </tr>

// //                 })}
// //             </table>
// //             <Link to="/homeCategoria">Voltar</Link><br/>
// //             <Link to="/">home</Link><br />

// //         </div>

// //     );
// // }

// // export default DeletarCategoria;


// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [users, setUser] = useState([])
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [userId,setUserId]=useState(null)

//   useEffect(() => {
//     getUsers();
//   }, [])
//   function getUsers() {
//     fetch("http://localhost:4000/todo").then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
//         setMobile(resp[0].mobile)
//         setEmail(resp[0].email)
//         setUserId(resp[0].id)
//       })
//     })
//   }

//   function deleteUser(id) {
//     fetch(`http://localhost:4000/todo/${id}`, {
//       method: 'DELETE'
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
//   function selectUser(id)
//   {
//     let item=users[id-1];
//     setName(item.name)
//         setEmail(item.email)
//         setMobile(item.mobile);
//         setUserId(item.id)
//   }



//   function updateUser()
//   {
//     let item={name,mobile,email}
//     console.warn("item",item)
//     fetch(`http://localhost:4000/todo/${userId}`, {
//       method: 'PUT',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }





//   return (
//     <div className="App">
//       <h1>Update User Data With API </h1>
//       <table border="1" style={{ float: 'left' }}>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//             <td>Operations</td>
//           </tr>
//           {
//             users.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.mobile}</td>
//                 <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//                 <td><button onClick={() => selectUser(item.id)}>Update</button></td>

//               </tr>
//             )
//           }
//         </tbody>
//       </table>
//       <div>
//       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
//         <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
//         <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
//         <button onClick={updateUser} >Update User</button>  
//       </div>
//     </div>
//   );
// }
// export default App;
import "./App.css";
import Login from "./component/Login";

function App() {
	return (
		<div className='mt-20'>
			<h4>"username":"atuny0","password":"9uQFF1Lh",</h4>
			<Login />
		</div>
	);
}

export default App;

// import { useState } from "react";

// const Singnup = () => {
//   const [user, setUser] = useState();
//   const [pswd, setPswd] = useState();
//   const [token, setToken] = useState(null);

//   const submitHandler = (e) => {
//     const sendReq = async () => {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: user,
//           password: pswd,
//         }),
//       });
//       const data = await response.json();

//       setToken(data.token);
//       localStorage.setItem("token", data.token);
//       console.log(data);
//     };
//     sendReq();
//     e.preventDefault();
//   };
//   return (
//     <>
//       <h1>Question 1: signup</h1>
//       <div>
//         <h2>some valid username and pswds</h2>
//         <ul>
//           <li>"username":"atuny0","password":"9uQFF1Lh"</li>
//           <li>"username":"hbingley1","password":"CQutx25i8r"</li>
//           <li>"username":"rshawe2","password":"OWsTbMUgFc"</li>
//         </ul>
//       </div>
//       <form action="" method="post" onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => setUser(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPswd(e.target.value)}
//         />
//         <button type="submit">signup</button>
//       </form>
//       {token && <div>Token is {token}</div>}
//     </>
//   );
// };

// export default Singnup;

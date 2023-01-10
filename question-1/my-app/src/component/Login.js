import { useState } from "react";

const Login = () => {
	const [user, setUser] = useState();
	const [password, setpassword] = useState();
	const [token, setToken] = useState(null);

	const submit = (e) => {
		const apiCall = async () => {
			const response = await fetch("https://dummyjson.com/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: user,
					password: password,
				}),
			});
			const data = await response.json();
			setToken(data.token);
			localStorage.setItem("token", data.token);
			console.log(data);
		};
		apiCall();
		e.preventDefault();
	};
	return (
		<>
			<div class='w-full max-w-xs mx-auto my-auto '>
				<form
					class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
					onSubmit={submit}
				>
					<div class='mb-4'>
						<label
							class='block text-gray-700 text-sm font-bold mb-2'
							for='username'
						>
							Username
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							placeholder='Username'
							onChange={(e) => setUser(e.target.value)}
						/>
					</div>
					<div class='mb-6'>
						<label
							class='block text-gray-700 text-sm font-bold mb-2'
							for='password'
						>
							Password
						</label>
						<input
							class='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							placeholder='******************'
							onChange={(e) => setpassword(e.target.value)}
						/>
						<p class='text-red-500 text-xs italic'>Please choose a password.</p>
					</div>
					<div class='flex items-center justify-between'>
						<button
							class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Sign Up
						</button>
					</div>
				</form>
				<p class='text-center text-gray-500 text-xs'>
					<div>Token == {token}</div>
				</p>
			</div>
		</>
	);
};

export default Login;

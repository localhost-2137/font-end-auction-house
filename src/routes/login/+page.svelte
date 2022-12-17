<script>
	import Button from "../../lib/components/Button.svelte";
	import { apiUrl } from "../../lib/const";

	let email = "";
	let password = "";
	let tfa = "";

	async function Login() {
		if(!email || !password) {
			alert("TODO: Inputs not defined");
			return;
		}

		await fetch(`${apiUrl}/users/signin`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password,
				tfa: tfa
			})
		})
		.then(async (x) =>{
			if(x.status == 400) {
				tfa = prompt("Enter 2fa: ");
				await Login();
			}
			else if(x.status == 401){
				alert("BAD 2FA");
			}

			let jwtData = await x.json();
			setCookie("jwt", jwtData.token, 365);

			window.location.reload();
		})
		.catch((e) =>{
			console.log(e);
			alert("some error");
		});
	}

	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}
</script>

<div class="container">
	<div>
		<h3>Login</h3>
		<form on:submit|preventDefault={Login}>
			<input type="email" bind:value={email} placeholder="Email" />
			<input type="password" bind:value={password} placeholder="Password" id="last" />
			<Button full>Login</Button>
		</form>
		<a href="../register"><Button inverse full>Register</Button></a>
	</div>
	<a href="/profile">
		<img src="/graphics/login.svg" alt="userPhoto" />
	</a>
</div>

<style>
	.container {
		width: 100vw;
		margin-top: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 128px;
	}

	div, form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
	}

	h3 {
		text-align: center;
		font-size: 2rem;
	}

	input {
		width: 300px;
		background: rgba(236, 179, 101, 0.25);
		border: none;
		border-radius: 4px;
		font-size: 1.6rem;
		padding: 8px;
		margin: 10px 0;
	}

	#last {
		margin-bottom: 50px;
	}

	img {
		width: 500px;
		object-fit: cover;
	}
</style>

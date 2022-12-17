<script>
	import Button from "../../lib/components/Button.svelte";
</script>

<div class="container">
	<div>
		<h3>Login</h3>
		<form>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" id="last" />
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

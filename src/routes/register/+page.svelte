<script>
	import Button from '../../lib/components/Button.svelte';
</script>

<div class="container">
	<div>
		<h3>Register</h3>
		<form>
			<input type="text" placeholder="Full Name" />
			<input type="text" placeholder="User Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="password" placeholder="Reapeat Password" id="last" />

			<Button>Next</Button>
		</form>
	</div>
	<img src="/public/register-bg.svg" alt="" />
</div>

<style>
	.container {
		width: 100vw;
		margin-top: 150px;
		margin-right: 150px;
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 300px;
		margin-bottom: 20px;
	}

	h3 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 70px;
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
		margin-bottom: 20px;
		object-fit: cover;
	}
</style>

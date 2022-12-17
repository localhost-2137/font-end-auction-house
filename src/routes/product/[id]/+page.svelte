<script>
	import { page } from '$app/stores';
	import { apiUrl } from '$lib/const.js';

	let items = [];

	fetch(`${apiUrl}/users/${$page.params.id}`)
		.then((x) => x.json())
		.then((data) => {
			items = data.data;
		});

	console.log(items);
</script>

<div class="container">
	<img src="" alt="" />
	<div>
		<h3>{items.name}</h3>
		<p>Current bind: {items.top_bind}</p>
		<p>{items.top_bind} + <input type="number" /></p>
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		margin: 10px 20px;
	}

	img {
	}
</style>

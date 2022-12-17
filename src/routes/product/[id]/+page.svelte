<script>
	import { page } from '$app/stores';
	import { apiUrl } from '$lib/const.js';

	let item = {};

	console.log($page);
	fetch(`${apiUrl}/listings/${$page.params.id}`)
		.then((x) => x.json())
		.then((data) => {
			item = data;
		});

	// console.log(items);
</script>

<div class="container">
	<img src="" alt="" />
	<div>
		<h3>{item.name}</h3>
		<p>Current bind: {item.top_bind}</p>
		<p>{item.top_bind} + <input type="number" /></p>
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

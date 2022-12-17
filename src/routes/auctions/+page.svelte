<script>
	import Sidebar from '../../lib/components/Sidebar.svelte';
	import Item from '../../lib/components/Item.svelte';
	import { apiUrl } from '$lib/const.js';

	import { onMount } from 'svelte';

	let items = [];
	let lat = 0;
	let lon = 0;
	let cat = -1;

	fetch(`${apiUrl}/listings?lat=${lat}&lon=${lon}&cat=${cat}`, {
		// headers: {
		// 	"auth": "jwt",
		// 	"content-Type": "application/json"
		// }
	})
		.then((x) => x.json())
		.then((data) => {
			items = data;
		});
</script>

<div class="content">
	<Sidebar />
	<div class="container">
		{#each items as item}
			<Item product={item} />
		{/each}
	</div>
</div>

<style>
	.container {
		height: 100vh;
		width: 80%;
		overflow-y: scroll;
	}

	.content {
		display: flex;
		justify-content: space-between;
	}
</style>

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

<Sidebar />

<div class="container">
	{#each items as item}
		<Item product={item} />
	{/each}
</div>

<style>
	.container {
		width: 100%;
	}
</style>

<script>
	import Sidebar from '../../lib/components/Sidebar.svelte';
	import Item from '../../lib/components/Item.svelte';
	import { apiUrl } from '$lib/const.js';

	import { onMount } from 'svelte';

	let items = [];
	let filtredItems = [];
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
			filtredItems = items;
			console.log(items);
		});

	const handleFilters = (e) => {
		const filters = e.detail;

		if (filters.search) {
			const length = filters.search.toString().length;
			const name = filters.search;
			filtredItems = items.filter((item) => item.name.substring(0, length) == name);
		}

		if (filters.minPrice) {
			const price = parseFloat(filters.minPrice);
			filtredItems = items.filter((item) => item.price > price);
		}

		if (filters.maxPrice) {
			const price = parseFloat(filters.maxPrice);
			filtredItems = items.filter((item) => item.price < price);
		}

		if (filters.minBet) {
			const price = parseFloat(filters.minBet);
			filtredItems = items.filter((item) => item.top_bid > price);
		}

		if (filters.maxBet) {
			const price = parseFloat(filters.maxBet);
			filtredItems = items.filter((item) => item.top_bid < price);
		}

		// if (filters.time) {
		// 	const timeInput = parseInt(filters.time);
		// 	filtredItems = items.filter((item) => {
		// 		const time = new Date(item.expiration_date) * 1000;
		// 		time > timeInput;
		// 	});
		// }

		if (filters.buyNow) {
			filtredItems = items.filter((item) => item.is_auction == false);
		}

		if (filters.auction) {
			filtredItems = items.filter((item) => item.is_auction == true);
		}

		if (filters.cat != -1) {
			const cat = parseInt(filters.cat);
			console.log(cat);
			filtredItems = items.filter((item) => parseInt(item.category) === cat);
		}

		console.log(items);
	};
</script>

<Sidebar on:handleFilters={handleFilters} />

<div class="container">
	{#each filtredItems as item}
		<Item product={item} />
	{/each}
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

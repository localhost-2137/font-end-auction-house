<script>
	import Button from '../../../lib/components/Button.svelte';
	import { page } from '$app/stores';
	import { apiUrl } from '$lib/const.js';
	import { tokenJwt } from '$lib/stores.js';

	let item;
	let amount;
	let bids = [];

	console.log($page);
	fetch(`${apiUrl}/listings/${$page.params.id}`)
		.then((x) => x.json())
		.then((data) => {
			item = data;
			console.log(item);
		});

	fetch(`${apiUrl}/listings/bids/${$page.params.id}`)
		.then((x) => x.json())
		.then((data) => {
			bids = data;
			console.log(bids);
		});

	async function Bid() {
		let bidAmount = parseFloat(item.top_bid) + parseFloat(amount);

		await fetch(`${apiUrl}/listings/bids/${$page.params.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				"token": $tokenJwt
			},
			body: JSON.stringify({
				bid: bidAmount
			})
		})
			.then((x) => {
				if (!x.ok) {
					alert('bad');
					return;
				}
				alert('good');
			})
			.catch((e) => {
				alert('bad error');
			});
	}

	// fetch(`${apiUrl}/users/${$page.params.owner_id}`)
	// 	.then((x) => x.json())
	// 	.then((data) => {
	// 		person = data;
	// 		console.log(person);
	// 	});
</script>

<div class="container">
	{#if item}
		<div class="row">
			<img src={item.image_link} alt="photo of product" />
			<div>
				<h3>{item.name}</h3>

				{#if item.is_auction}
					<p>Current bind: {item.top_bid}$</p>
					<p>
						{item.top_bid}$ +
						<input type="number" placeholder="Amount" step="any" bind:value={amount} min="0" />
						= {parseFloat(item.top_bid) + parseFloat(amount)}
					</p>
					<a on:click={Bid}><Button>Bet</Button></a>
				{/if}

				<p>Buy now price: {item.price} <Button inverse>Buy now</Button></p>
				<!-- <p>Added by User</p> -->
			</div>
		</div>

		<p class="desc">{item.description}</p>

		<ul>
			{#each bids as bid}
				{JSON.stringify(bid)}
			{/each}
		</ul>
	{/if}
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 50px;
		width: 100%;
		margin: 50px 20px;
	}

	.row {
		display: flex;
		gap: 150px;
	}

	img {
		width: 300px;
		height: 300px;
	}

	h3 {
		text-align: center;
		font-size: 20px;
	}

	input {
		font-size: 16px;
		border: none;
		border-radius: 4px;
		background-color: var(--acc-200);
		padding: 8px;
	}

	p {
		font-size: 16px;
	}

	.desc {
		font-size: 18px;
	}

	input:focus,
	input:active {
		outline: none;
	}
</style>

<script>
	import Button from '../../../lib/components/Button.svelte';
	import { page } from '$app/stores';
	import { apiUrl } from '$lib/const.js';

	let item;
	let person;
	let amount;

	console.log($page);
	fetch(`${apiUrl}/listings/${$page.params.id}`)
		.then((x) => x.json())
		.then((data) => {
			item = data;
			console.log(item);
		});

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
				<p>Current bind: {item.top_bid}$</p>
				<p>
					{item.top_bid}$ + <input type="number" placeholder="Amount" bind:value={amount} min="0" />
					= {parseFloat(item.top_bid) + parseFloat(amount)}
				</p>
				<Button>Bet</Button>
				<p>Buy now price: {item.price} <Button inverse>Buy now</Button></p>
				<!-- <p>Added by User</p> -->
			</div>
		</div>

		<p class="desc">{item.description}</p>
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

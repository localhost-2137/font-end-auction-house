<script>
	import Button from '../../lib/components/Button.svelte';
	import { apiUrl } from '../../lib/const';
	import { tokenJwt } from '$lib/stores.js';

	let name = "";
	let description = "";
	let bidChecked = false;
	let bidPrice = 0;
	let buyChecked = false;
	let buyPrice = 0;
	let category = 1;


	async function AddItem() {
		await fetch(`${apiUrl}/listings`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"token": $tokenJwt
			},
			body: JSON.stringify({
				name: name,
				description: description,
				category: category,
				isAuction: bidChecked,
				bidPrice: bidPrice,
				price: buyPrice
			})
		})
		.then(async (x) =>{
			if(!x.ok){
				alert("some error");
				return;
			}

			alert("new id: " + await x.text())
			//redirect for eg.

		});
	}
</script>

<div class="container">
	<img src="/static/graphics/add-offer-bg.svg" alt="" />
	<div class="form">
		<h3>Add an offer</h3>
		<form on:submit|preventDefault={AddItem}>
			<input type="text" bind:value={name} placeholder="Product name" />
			<div class="input-field">
				<input type="checkbox" bind:checked={bidChecked} name="auction" id="auction" />
				<label for="auction">Auction</label>
				<input class="price-input" bind:value={bidPrice} type="number" step="any" disabled={!bidChecked} placeholder="Starting price" />
			</div>
			<div class="input-field">
				<input class="price-input" type="number" step="any" bind:value={buyPrice} placeholder="Buy now price" />
			</div>
			<textarea name="desc" id="desc" cols="30" rows="10" bind:value={description} placeholder="Add description..." />
			<Button>Add new offer</Button>
		</form>
	</div>
</div>

<style>
	.container {
		margin-top: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form {
		width: 600px;
	}

	h3 {
		text-align: center;
		color: var(--main-400);
		font-size: 20px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	input {
		border-radius: 4px;
		padding: 8px;
		font-size: 16px;
		border: none;
		background-color: var(--acc-200);
	}

	input:focus,
	input:active {
		outline: none;
	}

	.input-field {
		display: flex;
		align-items: center;
	}

	.input-field label {
		padding: 8px 10px;
		border-radius: 4px;
		margin: 0 10px;
		width: 100%;
		background-color: var(--acc-200);
	}

	.price-input {
		margin-left: auto;
		width: 200%;
	}

	textarea {
		resize: vertical;
		background-color: var(--acc-200);
		border: none;
		padding: 8px;
	}

	textarea:focus,
	textarea:active {
		outline: none;
	}
</style>

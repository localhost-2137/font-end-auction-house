<script>
	import Button from '../../lib/components/Button.svelte';
</script>

<div class="container">
	<img src="/static/graphics/add-offer-bg.svg" alt="" />
	<div class="form">
		<h3>Add an offer</h3>
		<form>
			<input type="text" placeholder="Product name" />
			<div class="input-field">
				<input type="checkbox" name="auction" id="auction" />
				<label for="auction">Auction</label>
				<input class="price-input" type="number" placeholder="Starting price" />
			</div>
			<div class="input-field">
				<input type="checkbox" name="buy" id="buy" />
				<label for="buy">Buy Now</label>
				<input class="price-input" type="number" placeholder="Buy now price" />
			</div>
			<textarea name="desc" id="desc" cols="30" rows="10" placeholder="Add description..." />
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

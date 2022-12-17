<script>
	import Button from './Button.svelte';
	export let product = {
		firstname: 'Headpones',
		lastname: 30,
		username: 50,
		id: 'Username',
		name: 'test',
		category: 2,
		expiration_date: 1673826696,
		top_bid: 10,
		price: 35.49,
		is_auction: false,
		localization: {
			lat: 26.4324,
			lon: -49.123
		}
	};
</script>

<div class="container">
	<img src="/graphics/Businessman 4.png" alt="" />
	<div class="desc">
		<h3>{product.name}</h3>

		<div class={!product.is_auction ? 'hidden' : 'row'}>
			<p>Current bid: {product.top_bid}$</p>
			<Button>Bid</Button>
		</div>
		<div class="row">
			<p>Buy now price: {product.price}$</p>
			<Button inverse>Buy</Button>
		</div>
		<p class="author">Added by <span class="primary">{product.username}</span></p>
	</div>
</div>

<style>
	.hidden {
		display: none;
	}

	h3 {
		text-align: center;
		font-size: 32px;
		margin-block-start: 0;
		margin-block-end: 0;
	}

	img {
		width: 300px;
		height: 300px;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 32px;
		margin-bottom: 100px;
	}

	.container p {
		display: inline-block;
	}

	.desc {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 32px;
		width: 100%;
		height: 300px;
		gap: 16px;
	}

	.row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.row > p {
		font-size: 28px;
		margin-block-start: 0;
		margin-block-end: 0;
	}

	.author {
		width: 100%;
		font-size: 16px;
	}

	.primary {
		color: var(--acc-500);
	}
</style>

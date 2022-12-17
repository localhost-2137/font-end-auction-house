<script>
	import Button from './Button.svelte';

	export let product = {
		name: 'Headpones',
		currentBid: 30,
		price: 50,
		author: 'Username'
	};
</script>

<div class="container">
	<img src="/public/headpones.svg" alt="" />
	<div class="desc">
		<h3>{product.name}</h3>
		<div class="prices">
			<div class="row">
				<p>Current bid: {product.currentBid}$</p>
				<div class="price-btn">
					<Button>Bid</Button>
				</div>
			</div>
			<div class="row">
				<p>Buy now price: {product.price}$</p>
				<div class="price-btn">
					<Button inverse>Buy</Button>
				</div>
			</div>
		</div>
		<p class="author">Added by <span class="primary">{product.author}</span></p>
	</div>
</div>

<style>
	img {
		width: 350px;
		height: 300px;
		object-fit: cover;
	}

	.container {
		margin-top: 20px;
		width: 100%;
		display: flex;
	}

	.desc {
		margin-top: 20px;
		width: 100%;
	}

	h3 {
		text-align: center;
		font-size: 2rem;
	}

	.prices {
		padding: 40px 30px 0 30px;
	}

	.row {
		margin: 20px 0;
		display: flex;
		font-size: 1.6rem;
		justify-content: space-between;
		align-items: center;
	}

	.price-btn {
		width: 100px;
	}

	.primary {
		color: var(--primary-color);
	}

	.author {
		padding-left: 30px;
		padding-top: 50px;
		font-size: 1.6rem;
	}
</style>

<script>
	import Button from './Button.svelte';
<<<<<<< HEAD

=======
>>>>>>> cc9dcb8 (almost registration)
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
<<<<<<< HEAD
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
=======
			<div class="row">
				<p>Current bid: {product.currentBid}$</p>
				<Button>Bid</Button>
			</div>
			<div class="row">
				<p>Buy now price: {product.price}$</p>
				<Button inverse>Buy</Button>
			</div>
>>>>>>> cc9dcb8 (almost registration)
		<p class="author">Added by <span class="primary">{product.author}</span></p>
	</div>
</div>

<style>
<<<<<<< HEAD
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
=======
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

	.row > p{
		font-size: 28px;
		margin-block-start: 0;
    	margin-block-end: 0;
	}

	.author {
		width: 100%;
		font-size: 12px;
	}

	.primary {
		color: var(--acc-500);
	}
</style>
>>>>>>> cc9dcb8 (almost registration)

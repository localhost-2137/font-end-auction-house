<script>
	import Button from '../../lib/components/Button.svelte';
	import Item from '../../lib/components/Item.svelte';
</script>

<div class="container">
	<div class="profile">
		<div class="photo">
			<img src="/public/profile.svg" alt="" />
		</div>
		<div class="desc">
			<h2>Username</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam ut, earum alias
				porro veniam pariatur! Magnam ipsam distinctio voluptas.
			</p>
			<div class="btn">
				<Button inverse>Change user data</Button>
			</div>
		</div>
	</div>
	<div class="offer">
		<p>User offers</p>
		<div class="offer-btn">
			<Button>Add offer</Button>
		</div>
	</div>
	<Item />
</div>

<style>
	.container {
		max-width: 900px;
		margin: 50px auto 0 auto;
	}

	.profile {
		display: flex;
		font-size: 20px;
	}

	img {
		width: 200px;
		height: 200px;
		object-fit: contain;
		margin-right: 50px;
	}

	p {
		font-size: 14px;
		margin-bottom: 25px;
	}

	.btn {
		width: 250px;
	}

	.offer {
		width: 300px;
		display: flex;
		align-items: center;
	}

	.offer p {
		font-size: 16px;
	}

	.offer-btn {
		margin-left: 20px;
	}
</style>

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
			<Button><a href="/newOffer">Add Offer</a></Button>
		</div>
	</div>
	<Item />
</div>

<style>
	.container {
        display: flex;
        flex-direction: column;
        gap: 16px;
		max-width: 900px;
		margin: 50px auto 0 auto;
	}

    .desc {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 32px 0;
    }

	.profile {
		display: flex;
		font-size: 20px;
	}

	img {
		width: 300px;
		height: 300px;
		object-fit: contain;
		margin-right: 50px;
	}

	p {
		font-size: 14px;
		margin-bottom: 25px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.btn {
		width: 250px;
	}

	.offer {
		width: 100%;
		display: flex;
		align-items: center;
        position: relative;
	}

    .offer:after {
        content: "";
        width: 80%;
        height: 1px;
        background-color: #BFB7B5;
        position: absolute;
        bottom: 0;
        left: 10%;
    }

	.offer p {
        min-width: 200px;
		font-size: 32px;
	}

	.offer-btn {
		margin-left: 20px;
	}
    
</style>

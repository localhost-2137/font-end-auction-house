<script>
    import Button from '../../../lib/components/Button.svelte';
	import Item from '../../../lib/components/Item.svelte';
    import { page } from '$app/stores';
	import { apiUrl } from '$lib/const.js';
    fetch(`${apiUrl}/users/${$page.params.username}`).then((data) => {
    console.log(data);
    });
</script>

<div class="container">
	<div class="profile">
		<div class="photo">
			<img src="/graphics/Businessman 4.png" alt="" />
		</div>
		<div class="desc">
			<h2>{$page.params.username}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam ut, earum alias
				porro veniam pariatur! Magnam ipsam distinctio voluptas.
			</p>
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
        justify-content: space-around;
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
		font-size: 24px;
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

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
<<<<<<< HEAD
=======
        display: flex;
        flex-direction: column;
        gap: 16px;
>>>>>>> cc9dcb8 (almost registration)
		max-width: 900px;
		margin: 50px auto 0 auto;
	}

<<<<<<< HEAD
=======
    .desc {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 32px 0;
    }

>>>>>>> cc9dcb8 (almost registration)
	.profile {
		display: flex;
		font-size: 20px;
	}

	img {
<<<<<<< HEAD
		width: 200px;
		height: 200px;
=======
		width: 300px;
		height: 300px;
>>>>>>> cc9dcb8 (almost registration)
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
<<<<<<< HEAD
		width: 300px;
		display: flex;
		align-items: center;
	}

	.offer p {
		font-size: 16px;
=======
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
>>>>>>> cc9dcb8 (almost registration)
	}

	.offer-btn {
		margin-left: 20px;
	}
<<<<<<< HEAD
</style>
=======
    
</style>
>>>>>>> cc9dcb8 (almost registration)

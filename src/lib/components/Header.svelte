<script>
    import Button from './Button.svelte';
    import { page } from '$app/stores';
    import { user } from "$lib/stores.js";

    function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}

    async function Logout(){
        setCookie("jwt", "", -1);
        window.location.reload();
    }
</script>

<header>
    <a href="/auctions"><h1>How Expensive</h1></a>
    <div class="nav">
    <nav>
        <a href="/auctions" class={$page.route.id == "/auctions" ? "active" : ""}>Auctions</a>
        <a href="/auctionsILike" class={$page.route.id == "/auctionsILike" ? "active" : ""}>Auctions I like</a>
    </nav>
        {#if $user}
            <a href={`/profile/${$user.data.username}`}>
                <img src="/graphics/hłopeksesiedzi.svg" alt="userPhoto">
                <p>{$user.data.username}</p>
            </a>
        {/if}
    </div>
    {#if !$user}
    <a href="/login">
        <Button>Login</Button>
    </a>
    {/if}
    {#if $user}
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a on:click={Logout}><Button inverse>Logout</Button></a>
    {/if}
</header>

<style>
    header {
        padding: 0 50px;
        margin: 10px auto;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-items: center;
        position: relative;
    }

    header::after {
        content: "";
        width: 80%;
        height: 1px;
        background-color: #BFB7B5;
        position: absolute;
        bottom: 0;
        left: 10%;
    }

    h1 {
        display: inline-block;
        font-size: 32px;
        color: var(--add2-400);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }

    .nav {
        display: flex;
        align-items: center;
        gap: 100px;
    }

    a {
        font-size: 24px;
        color: var(--add2-300);
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .active {
        color: var(--acc-500);
    }

    img {
        filter : drop-shadow(0 4px 4px rgb(0, 0, 0, .25));
        height: 32px;
    }

</style>
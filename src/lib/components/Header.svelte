<script>
    import Button from './Button.svelte';
    import { page } from '$app/stores';
    import { user } from "$lib/stores.js";
</script>

<header>
    <a href="/auctions"><h1>How Expensive</h1></a>
    <div class="nav">
    <nav>
        <a href="/auctions" class={$page.route.id == "/auctions" ? "active" : ""}>Auctions</a>
        <a href="/auctionsILike" class={$page.route.id == "/auctionsILike" ? "active" : ""}>Auctions I like</a>
    </nav>
        <a href={`/profile/${$user}`}>
            <img src="../../graphics/Businessman 4.png" alt="userPhoto">
        </a>
    </div>
    {#if !$user}
    <a href="/login">
        <Button>Login</Button>
    </a>
    {/if}
    {#if $user}
    <Button inverse>Logout</Button>
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
        color: var(--add2-200);
        text-decoration: none;
    }

    .active {
        color: var(--acc-500);
    }

    img {
        filter : drop-shadow(0 4px 4px rgb(0, 0, 0, .25));
    }

</style>
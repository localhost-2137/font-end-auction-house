<script>
    import Button from "../../lib/components/Button.svelte";
    import { user } from "$lib/stores.js";
</script>

<div>
{#if !$user}
    <h1>Seems like you're not logged in.</h1>
    <a href="/login">
        <Button>Login</Button>
    </a>
{/if}
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
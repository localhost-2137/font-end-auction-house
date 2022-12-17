<script>
	export let type = 'primary';
	export let inverse = false;
	export let full = false;
</script>

<button class={type} class:inverse class:full>
	<slot />
</button>

<style>
    button {
        appearance: none;
        padding: 8px 12px;
        font-size: 1.4rem;
        border-radius: 4px;
        min-width: 150px;
        outline: none;
        cursor: pointer;
    }

    .full {
        width: 316px;
    }

	.primary {
		color: #fff;
		border: 1px solid var(--acc-500);
		background-color: var(--acc-500);
	}

	.inverse {
		color: var(--acc-500);
		background-color: transparent;
		border: 1px solid var(--acc-500);
	}
</style>

<script>
	export let type = 'primary';
	export let inverse = false;
	export let full = false;
</script>

<button class={type} class:inverse class:full>
	<slot />
</button>

<style>
<<<<<<< HEAD
	button {
		appearance: none;
		padding: 8px 12px;
		font-size: 16px;
		border-radius: 4px;
		min-width: 150px;
		width: fit-content;
		outline: none;
	}

	.full {
		width: 100%;
	}
=======
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
>>>>>>> cc9dcb8 (almost registration)

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

<script>
	import { createEventDispatcher } from 'svelte/internal';
	import Button from './Button.svelte';

	let dispatcher = createEventDispatcher();
	let filters = {
		search: '',
		minPrice: 0,
		maxPrice: 0,
		minBet: 0,
		maxBet: 0,
		time: 0,
		buyNow: false,
		auction: false,
		cat: -1
	};
</script>

<div class="sidebar">
	<h2>Filters</h2>

	<form>
		<div class="input-field">
			<label for="search">Search</label>
			<input
				type="search"
				id="search"
				placeholder="Search"
				bind:value={filters.search}
				on:input={() => {
					dispatcher('handleFilters', filters);
				}}
			/>
		</div>
		<div class="input-field">
			<label>Buy price</label>
			<div class="double-input">
				<input
					type="number"
					id="buy-min-value"
					placeholder="min"
					min="0"
					bind:value={filters.minPrice}
					on:input={() => {
						dispatcher('handleFilters', filters);
					}}
				/>
				<input
					type="number"
					min="0"
					id="buy-max-value"
					placeholder="max"
					bind:value={filters.maxPrice}
					on:input={() => {
						dispatcher('handleFilters', filters);
					}}
				/>
			</div>
		</div>
		<div class="input-field">
			<label>Bid price</label>
			<div class="double-input">
				<input
					type="number"
					min="0"
					id="bid-min-value"
					placeholder="min"
					bind:value={filters.minBet}
					on:input={() => {
						dispatcher('handleFilters', filters);
					}}
				/>
				<input
					type="number"
					min="0"
					id="bid-max-value"
					placeholder="max"
					bind:value={filters.maxBet}
					on:input={() => {
						dispatcher('handleFilters', filters);
					}}
				/>
			</div>
		</div>
	</form>
</div>

<style>
	.sidebar {
		position: sticky;
		width: 250px;
		text-align: center;
		background-color: transparent;
		color: var(--main-400);
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
		padding: 80px 20px 0 20px;
	}

	.sidebar:after {
		content: '';
		height: 700px;
		width: 1px;
		background-color: var(--main-200);
		position: absolute;
		top: 111px;
		right: 0;
	}

	h2 {
		margin: 0;
		font-size: 1.8rem;
	}

	.input-field {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 20px;
	}

	label {
		font-size: 16px;
		margin: 10px 0;
	}

	input,
	#time {
		max-width: 100%;
	}

	input:focus,
	input:active,
	select:focus,
	select:active {
		outline: none;
	}

	input,
	select {
		box-sizing: border-box;
		border-radius: 4px;
		border: none;
		padding: 6px 10px;
		font-size: 16px;
		background-color: var(--acc-400);
	}

	select {
		width: 100%;
	}

	.double-input {
		display: grid;
		max-width: 100%;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	.double-input input {
		width: 100%;
	}

	.double-input input:first-child {
		justify-self: flex-start;
	}

	.double-input input:last-child {
		justify-self: flex-end;
	}

	.radio-option {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.radio-option label {
		margin-left: 10px;
	}
</style>

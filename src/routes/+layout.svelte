<script>
	import { onMount } from 'svelte/internal';
	import Header from '../lib/components/Header.svelte';
    import { user, tokenJwt } from '$lib/stores.js';

	function getCookie(cname) {
		let name = cname + '=';
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}

	function parseJwt(token) {
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(
			window
				.atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
				})
				.join('')
		);

		return JSON.parse(jsonPayload);
	}

	onMount(() => {
		let jwt = getCookie('jwt');
		if (jwt) {
            // console.log(parseJwt(jwt));
            tokenJwt.set(jwt);
			user.set(parseJwt(jwt));
		}
	});
</script>

<Header />

<slot />

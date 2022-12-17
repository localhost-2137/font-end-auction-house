<script>
	import Button from '../../lib/components/Button.svelte';
	import { apiUrl } from '../../lib/const';

	let firstPart = true;
	let denies;

  let locationLon;
  let locationLat;

  let firstname = "";
  let lastname = "";
  let username = "";
  let email = "";
  let password = "";
  let confirmPassword = "";

  let tfaSelected = false;

  let qrCodeUrl = "";

  async function Register(){
    if(!fullname || !username || !email || !password || !confirmPassword) {
      alert("INPUTS ARE EMPTY");
      return;
    }
    if(password != confirmPassword) {
      alert("Passwords doesn't match");
      return;
    }

    await fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        localization: {
          lon: locationLon,
          lat: locationLat
        },
        tfa: tfaSelected
      })
    })
    .then(async (x) =>{
      if(!x.ok) {
        alert("not ok!");
        return;
      }

      alert("Verification mail sent!")
      qrCodeUrl = (await x.json()).qr;
    })
    .catch(e =>{
      console.log(e);
      alert("some error");
    });
  }

	function hide() {
		firstPart = false;
		getLocation();
	}

	function showError(error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				denies = true;
				break;
			case error.POSITION_UNAVAILABLE:
				denies = true;
				break;
			case error.TIMEOUT:
				denies = true;
				break;
			case error.UNKNOWN_ERROR:
				denies = true;
				break;
		}
	}

	function showPosition(position) {
    locationLat = position.coords.latitude;
    locationLon = position.coords.longitude;
		// alert(position.coords.latitude);
		// alert(position.coords.longitude);
	}

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			alert('Geolocation is not supported by this browser.');
		}
	}
</script>

<div class={firstPart ? 'container' : 'hide'}>
	<div>
		<form>
			<h3>Register</h3>
			<div class="inputs">
				<input type="text" bind:value={firstname} placeholder="First Name" />
				<input type="text" bind:value={lastname} placeholder="Last Name" />
				<input type="text" bind:value={username} placeholder="User Name" />
				<input type="email" bind:value={email} placeholder="Email" />
				<input type="password" bind:value={password} placeholder="Password" />
				<input type="password" bind:value={confirmPassword} placeholder="Repeat Password" />
				<div>
					<input type="checkbox" bind:value={tfaSelected} placeholder="2fa" id="checkbox"/>
					<label for="checkbox">I want 2 step veryfication</label>
				</div>
			</div>
			<div class="buttons">
				<a href="../register" on:click={hide}><Button full>Next</Button></a>
				<a href="../login" class="login">Already have an account? Login</a>
			</div>
		</form>
	</div>
	<img src="/graphics/register.svg" alt="userPhoto" />
</div>

<div class={firstPart ? 'hide' : 'container'}>
	<div>
		<form>
			<h3>Let us know your location!</h3>
			<div class="inputs">
				<p class={denies ? '' : 'hide'}>Access denied! Choosed default location. (Warsaw)</p>
			</div>
			<div class="buttons">
				<a on:click={Register}><Button full>Register</Button></a>
			</div>
		</form>
	</div>
	<img src="/graphics/register2.svg" alt="userPhoto" />
</div>
{#if qrCodeUrl.length > 0}
  <div class="qr">
	<p>Use google authentificator and scan this code for 2 step veryfication!</p>
    <img width="100%" height="100%" src={qrCodeUrl}>
	<button on:click={() => (qrCodeUrl = "")} class="primary">CLOSE</button>
</div>
{/if}

<style>
	.qr {
		color: white;
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 24px;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.qr > img {
		width: 300px;
		height: 300px;
	} 

	button {
        appearance: none;
        padding: 8px 12px;
        font-size: 1.4rem;
        border-radius: 4px;
        min-width: 300px;
        outline: none;
        cursor: pointer;
    }

	.primary {
		color: #fff;
		border: 1px solid var(--acc-500);
		background-color: var(--acc-500);
	}

	.hide {
		display: none;
	}

	.inputs > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#checkbox {
		width: 25px;
		height: 25px;
		appearance: none;
		background-color: var(--acc-300);
	}

	#checkbox:checked {
		background-color: var(--acc-500);
	}

	.container {
		width: 100vw;
		margin-top: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;
	}

	.inputs {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		flex-direction: column;
	}

	input:focus,
	input:active {
		outline: none;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 64px;
	}

	.login {
		font-size: 12px;
		text-decoration: none !important;
	}

	.buttons {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 4px;
	}

	h3 {
		text-align: center;
		font-size: 2rem;
	}

	input {
		width: 300px;
		background: rgba(236, 179, 101, 0.25);
		border: none;
		border-radius: 4px;
		font-size: 1.6rem;
		padding: 8px;
	}
</style>

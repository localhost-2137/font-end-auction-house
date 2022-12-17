<script>
<<<<<<< HEAD
	import Button from '../../lib/components/Button.svelte';
</script>

<div class="container">
	<div>
		<h3>Register</h3>
		<form>
			<input type="text" placeholder="Full Name" />
			<input type="text" placeholder="User Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="password" placeholder="Reapeat Password" id="last" />

			<Button>Next</Button>
		</form>
	</div>
	<img src="/public/register-bg.svg" alt="" />
</div>

<style>
	.container {
		width: 100vw;
		margin-top: 150px;
		margin-right: 150px;
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		align-items: center;
	}

=======
	import Button from "../../lib/components/Button.svelte";

    let firstPart = true;
    let denies;
 
    function hide() {
        firstPart = false;
        getLocation();
    }

    function showError(error) {
  switch(error.code) {
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
    alert(position.coords.latitude);
    alert(position.coords.longitude);
}


    function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}
</script>

<div class={firstPart ? "container" : "hide"}>
	<div>
		<form>
     		<h3>Register</h3>       
            <div class="inputs">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="User Name" />
                <input type="email" placeholder="Email" />
			    <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat Password"/>
            </div>
            <div class="buttons">
    		    <a href="../register" on:click={hide}><Button full>Next</Button></a>
                <a href="../login" class="login">Already have an account? Login</a>
            </div>
        </form>
	</div>
		<img src="/graphics/register.svg" alt="userPhoto" />
</div>

<div class={firstPart ? "hide" : "container"}>
	<div>
		<form>
     		<h3>Let us know your location!</h3>       
            <div class="inputs">
                <p class={denies ? "" : "hide"}>Access denied! Choosed default location. (Warsaw)</p>
            </div>
            <div class="buttons">
    		    <a href="../register"><Button full>Register</Button></a>
            </div>
        </form>
	</div>
		<img src="/graphics/register2.svg" alt="userPhoto" />
</div>

<style>
    .hide {
        display: none;
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

    input:focus, input:active {
        outline: none;
    }
    
>>>>>>> cc9dcb8 (almost registration)
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
<<<<<<< HEAD
		width: 300px;
		margin-bottom: 20px;
	}

	h3 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 70px;
=======
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
>>>>>>> cc9dcb8 (almost registration)
	}

	input {
		width: 300px;
		background: rgba(236, 179, 101, 0.25);
		border: none;
		border-radius: 4px;
		font-size: 1.6rem;
		padding: 8px;
<<<<<<< HEAD
		margin: 10px 0;
	}

	#last {
		margin-bottom: 20px;
=======
	}

	img {
		width: 500px;
>>>>>>> cc9dcb8 (almost registration)
		object-fit: cover;
	}
</style>

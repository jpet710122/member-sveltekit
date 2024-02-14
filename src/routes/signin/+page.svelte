<script lang="ts">
  import { createForm } from 'felte'
  import { signIn, type SignInInput } from 'aws-amplify/auth';
  import { userLogged } from '../../authstore.js';
  import { signout } from 'aws-amplify/auth';
  import { getCurrentUser } from 'aws-amplify/auth';

  let username = '';
  let password = '';
  let isSignedIn = false;
  let registering = false;
  let code = ''; // validation code
  async function handleSignIn(username: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({username, password});
    } catch (error) {
      console.log('Error signing in: ', error);
    }
  };

  async function signOut() {
    try {
      await signOut(global: true);
      userLogged.set(null);
      // Redirect or perform other actions on successful logout
    } catch (error) {
      console.log('Error signing out:', error);
      // Handle logout error
    }
  }

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}
</script>


<div class="container">

 {#if $userLogged}
 <div>
   <p>Welcome, you are logged in!</p>
   <button on:click={() => getCurrentUser()}>GetUser</button>
   <button on:click={signOut}>Logout</button>
 </div>
  {:else}
  <div>
 <label for="username"><b>Email</b></label>
 <input type="text" placeholder="Enter email address" id="username" name="username" required bind:value={username} />

 <label for="password"><b>Password</b></label>
 <input type="password" placeholder="Enter Password" id="password" name="password" required bind:value={password} />

 <button type="submit" on:click={handleSignIn(username,password)}>SignIn</button>
    </div>
  {/if}


</div>

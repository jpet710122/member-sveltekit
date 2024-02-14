<script lang="ts">
import { signUp, autoSignIn } from 'aws-amplify/auth';
import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';
// import { userRegistering } from 'authstore';
import { resendSignUpCode } from 'aws-amplify/auth';
import { createForm } from 'felte';

let initialValues;
let onSubmit;

const { form } = createForm({
  onSubmit,
  initialValues,
})

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
  name: string;
};

async function handleSignUp({
  username,
  password,
  email,
  phone_number,
  name,
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number, // E.164 number convention
          name
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

async function handleSignUpConfirmation({
  username,
  confirmationCode
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

const handleResendCode = async ({ username }) => {
  const {
    destination,
    deliveryMedium,
    attributeName
  } = await resendSignUpCode({ username });
}

async function handleAutoSignIn() {
  try {
    const signInOutput = await autoSignIn();
    // handle sign-in steps
  } catch (error) {
    console.log(error);
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

{#if $userRegistering}
  <form use:form class="form-signin">
   <label for="code"><b>Code</b></label>
   <input type="text" placeholder="Enter code" name="code" required bind:value={code} />
   <button on:click={() => confirmSignUp(username, code)}>Verify code</button>
   <button on:click={() => resendSignUpCode(username)}>Resend code</button>
  </form>
{:else}
  <div>
    <form use:form class="form-signin">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required bind:value={username} />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required bind:value={psw} />

      <button type="submit" on:click={() => signUp(username, psw)}>Register</button>
    <button type="submit" on:click={() => Auth.signOut()}>Sign out</button>
    </form>
  </div>
{/if}

</div>

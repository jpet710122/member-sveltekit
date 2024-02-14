<script lang="ts">
	import { createForm } from 'felte'
  import { reporter, ValidationMessage } from '@felte/reporter-svelte';
  import Icon from '@iconify/svelte';
  import { validator } from '@felte/validator-yup';
  import * as yup from 'yup';

	export let initialValues;
	export let onSubmit;

/*
  const stateTerritory = [
    "Australian Capital Territory",
    "New South Wales",
    "Northern Territory",
    "Queensland",
    "South Australia",
    "Tasmania",
    "Victoria",
    "Western Australia"
  ]
*/

  const schema = yup.object({
    name: yup.string().required('Full Legal Name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    mobile: yup.string().required('Mobile is required').min(10, 'Mobile must be at least 10 digits long'),
    dob: yup.string().required('Date of Birth is required'),
    street: yup.string().required('Street is required'),
    city: yup.string().required('City/Town/Suburb is required'),
    state: yup.string().required('State is required'),
    postcode: yup.string().required('Postcode is required').min(4, 'Postcode must be exactly 4 digits long').max(4, 'Postcode must be exactly 4 digits long'),
  });

	const { form } = createForm({
    onSubmit,
    initialValues,
    extend: [
      reporter,
      validator({schema}),
    ],
  })


</script>

<div class='container h-full mx-auto flex justify-center'>
<!--<div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-surface-800-100-token">-->
  <div class='w-full space-y-4 pt-2 text-center flex flex-col items-center'>
    <h2 class='h2 text-primary-700-200-token'>My Profile</h2>
    <h3 class="h3 py-0 text-primary-700-200-token">Personal Information</h3>
    <form
        use:form
        class="w-full max-w-lg shadow-md bg-surface-200-700-token elevated-shadow-md rounded px-4 pt-4 pb-8 mb-4"
      >
      <p class="required text-surface-800-100-token">Required fields</p>
      <div class="mb-4">
        <label for='name' class='required block text-left text-surface-800-100-token text-md font-bold'>
          Full Legal Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationMessage for="name" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{message}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label for='otherNames' class='block text-left text-surface-800-100-token pt-2 text-md font-bold'>
          Previous or Other Names
        </label>
        <input
          id='otherNames'
          placeholder='If more than one separate with semicolon ;'
          name='otherNames'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <label for='email' class='required block text-left text-surface-800-100-token text-md font-bold pt-2'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='text'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationMessage for="email" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{message}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label for='mobile' class='required block text-left text-surface-800-100-token text-md font-bold pt-2'>
          Mobile
        </label>
        <input
          id='mobile'
          name='mobile'
          type='text'
          placeholder='Mobile number in 10 digits format, no spaces'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationMessage for="mobile" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{message}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label for='dob' class='required block text-left text-surface-800-100-token text-md font-bold pt-2'>
          Date of Birth
        </label>
        <input
          id='dob'
          name='dob'
          type='date'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          placeholder='DD-MM-YYYY'
        />
        <ValidationMessage for="dob" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{message}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label
          for='street'
          class='required block text-left text-surface-800-100-token text-md font-bold pt-2'
        >
          Street Address
        </label>
        <input
          id='street'
          name='street'
          type='text'
          placeholder="Everything up to the City, Town or Suburb"
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationMessage for="street" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{message}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label
          for='city'
          class='required block text-left text-surface-800-100-token text-md font-bold pt-2'
        >
          City/Town/Suburb
        </label>
        <input
          id='city'
          name='city'
          type='text'
         placeholder="Can be both Suburb & City/Town: 'Manly' or 'Manly, Sydney'"
         class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationMessage for="city" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{message}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label
          for='state'
          class='required block text-left text-surface-800-100-token text-md font-bold pt-2'
        >
          State/Territory
        </label>
        <select
          id='state'
          name='state'
          class="bg-white shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          >
          <option value="">Select State</option>
          <option value="Australian Capital Territory">Australian Capital Territory</option>
          <option value="New South Wales">New South Wales</option>
          <option value="Northern Territory">Northern Territory</option>
          <option value="Queensland">Queensland</option>
          <option value="South Australia">South Australia</option>
          <option value="Tasmania">Tasmania</option>
          <option value="Victoria">Victoria</option>
          <option value="Western Australia">Western Australia</option>
        </select>
        <ValidationMessage for="state" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{messages}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label for='postcode' class='required block text-left text-surface-800-100-token text-md font-bold pt-2'>
          Postcode
        </label>
        <input
          id='postcode'
          name='postcode'
          type='text'
          placeholder='####'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationMessage for="postcode" let:messages={messages}>
        <ul aria-live="polite">
          {#each messages ?? [] as message}
            <li class="text-left text-error-500-400-token text-sm font-bold">{messages}</li>
          {/each}
        </ul>
        </ValidationMessage>
        <label
          for='previousAddress'
          class='block text-left text-surface-800-100-token text-md font-bold pt-2'
        >
          Previous or Other Addresses
        </label>
        <input
          id='previousAddress'
          name='previousAddress'
          type='text'
          placeholder='If more than one separate with semicolon ;'
          class="shadow appearance-none border rounded w-full pt-3 py-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
        />
      <div class="flex mb-items-center justify-center mb-4">
        <button
            class="w-200 bg-blue-500 hover:bg-blue-700 text-white inline-flex items-center font-bold py-2 px-12 mt-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >
          Next&nbsp;
          <Icon icon="mdi:arrow-right"/>
        </button>
      </div>
      </div>
    </form>
  </div>
</div>

<style>
  .required:after {
    content:" *";
    color: red;
  }
</style>

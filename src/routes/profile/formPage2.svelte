<script lang="ts">
	import { createForm } from 'felte';
  import MultiSelect from 'svelte-multiselect';
  import Icon from '@iconify/svelte';
  import { Collapsible } from 'bits-ui';
  import { slide } from "svelte/transition";
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';


	export let initialValues;
	export let onSubmit;
	export let onBack;

  const popupFocusBlur: PopupSettings = {
    event: 'focus-blur',
    target: 'popupFocusBlur',
    placement: 'bottom-end'
  };

  const categories = [
    'Family',
    'Physical Attributes',
    'Origin',
    'Close Acquaintances',
    'Education/Qualifications',
    'Activities',
    'Employment',
    'Distinctions',
    'Affiliations'
  ];

  const bloodTypeOptions = [
    'O positive',
    'O negative',
    'A positive',
    'A negative',
    'B positive',
    'B negative',
    'AB positive',
    'AB negative',
  ]

  let selected = [];

	const { form, data } = createForm({ onSubmit, initialValues });
</script>

<div class='container h-full mx-auto flex justify-center'>
  <div class='w-1/2 space-y-4 pt-4 flex flex-col items-center'>
    <h2 class='h3'>My Profile</h2>
    <h3 class="h4">Other Identifying Information</h3>
    <form
      use:form
      class="w-full max-w-lg bg-surface-50-900-token shadow-md rounded px-4 pt-4 pb-2 mb-4"
    >
      <div class="flex mb-items-center justify-center space-x-4 mb-4">
        <button
          type="button"
          class="w-200 bg-blue-500 hover:bg-blue-700 text-white inline-flex items-center font-bold py-2 px-7 mt-6 rounded focus:outline-none focus:shadow-outline"
          on:click={() => onBack($data)}
        >
          <Icon icon="mdi:arrow-left"/>
          &nbsp;Previous
        </button>
      </div>
      <div class='block text-left text-surface-800-100-token text-lg font-bold mt-3'>
        Information Categories
      </div>

      <MultiSelect
				outerDivClass="bg-surface-50-900-token"
				inputClass="text-surface-800-100-token bg-surface-50-900-token"
				ulOptionsClass="text-surface-800-100-token bg-surface-50-900-token"
				liOptionClass="text-surface-800-100-token bg-surface-50-900-token"
				ulSelectedClass="text-surface-800-100-token bg-surface-50-900-token"
				liSelectedClass="text-surface-800-100-token bg-surface-50-900-token"
				liActiveOptionClass="text-surface-800-100-token bg-surface-50-900-token"
        placeholder="Select categories, then complete relevant fields"
        options="{categories}"
        bind:selected
      />

      {#if selected.length > 0}
        <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md py-2 font-bold'>
          <u>Other Identifying Information Fields:</u>
        </div>
        <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-sm pb-2'>
          Click &#8597; or press <kbd class="kbd">space</kbd> on heading to toggle fields
        </div>
      {/if}
      {#if selected.includes('Family')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold'>
            <i>Family</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
          <label for='spousePartner' class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold'>
            Spouse or Partner Name
          </label>
          <input
            id='spousePartner'
            name='spousePartner'
            type='text'
            class="shadow appearance-none border rounded w-full text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          <label for='formerSpousePartner' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-0 mt-2 text-md font-bold'>
            Former Spouse or Partner Name
          </label>
          <input
            id='formerSpousePartner'
            name='formerSpousePartner'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          <label for='parent' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Parent(s)
          </label>
          <input
            id='parent'
            name='parent'
            type='text'
            placeholder='Separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          <label for='sibling' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Sibling(s)
          </label>
          <input
            id='sibling'
            name='sibling'
            type='text'
            placeholder='Separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          <label for='pibling' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Aunt/Uncle/Pibling
          </label>
          <input
            id='pibling'
            name='pibling'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            use:popup={popupFocusBlur}
          />
          <div class="card p-4 variant-filled" data-popup="popupFocusBlur">
            <p>
              'Pibling' is a gender-neutral term for a parent's sibling.
            </p>
            <div class="arrow variant-filled"></div>
          </div>
          <label for='cousin' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Cousin
          </label>
          <input
            id='cousin'
            name='cousin'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          <label for='stepfamily' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Step Family
          </label>
          <input
            id='stepfamily'
            name='stepfamily'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          <label for='otherAncestor' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Other Ancestor
          </label>
          <input
            id='otherAncestor'
            name='otherAncestor'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Physical Attributes')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
             <i>Physical Attributes</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
          <label for='bloodGroup' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Blood Group & Type
          </label>
          <select
            id='bloodGroup'
            name='bloodGroup'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          >
            {#each bloodTypeOptions as option}
              <option value='{option}'>{option}</option>
            {/each}
          </select>
          <label for='distinguishingFeature' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Distinguishing Feature
          </label>
          <input
            id='distinguishingFeature'
            name='distinguishingFeature'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Origin')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
             <i>Origin</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
            <label for='ethnicity' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Ethnicity
            </label>
            <input
              id='ethnicity'
              name='ethnicity'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='bornIn' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Born In
            </label>
            <input
              id='bornIn'
              name='bornIn'
              type='text'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Close Acquaintances')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
             <i>Close Acquaintances</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
            <label for='friend' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Friend
            </label>
            <input
              id='friend'
              name='friend'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='godparent' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Godparent
            </label>
            <input
              id='godparent'
              name='godparent'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Education/Qualifications')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
            <i>Education/Qualifications</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
            <label for='primarySchool' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Primary School
            </label>
            <input
              id='primarySchool'
              name='primarySchool'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='secondarySchool' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Secondary School
            </label>
            <input
              id='secondarySchool'
              name='secondarySchool'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='tertiaryInstitution' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Tertiary Institution
            </label>
            <input
              id='tertiaryInstitution'
              name='tertiaryInstitution'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='tafe' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              TAFE Campus
            </label>
            <input
              id='tafe'
              name='tafe'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='degree' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Degree
            </label>
            <input
              id='degree'
              name='degree'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
          <label for='diploma' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
            Diploma
          </label>
          <input
            id='diploma'
            name='diploma'
            type='text'
            placeholder='If more than one, separate with semicolon ;'
            class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
          />
            <label for='certificate' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Certificate
            </label>
            <input
              id='certificate'
              name='certificate'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Activities')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
            <i>Activities</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
            <label for='hobby' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Hobby
            </label>
            <input
              id='hobby'
              name='hobby'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='sport' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Sport
            </label>
            <input
              id='sport'
              name='sport'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Employment')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
            <i>Employment</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
            <div>
              <label for='occupation' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
                Occupation
              </label>
              <input
                id='occupation'
                name='occupation'
                type='text'
                placeholder='If more than one, separate with semicolon ;'
                class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
              />
              <label for='employedBy' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
                Employed By
              </label>
              <input
                id='employedBy'
                name='employedBy'
                type='text'
                placeholder='If more than one, separate with semicolon ;'
                class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      {#if selected.includes('Distinctions')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
            <i>Distinctions</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
            <label for='honour' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Honour
            </label>
            <input
              id='honour'
              name='honour'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='award' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Award
            </label>
            <input
              id='award'
              name='award'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='knownFor' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Known For
            </label>
            <input
              id='knownFor'
              name='knownFor'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
            </Collapsible.Content>
          </Collapsible.Root>
      {/if}
      {#if selected.includes('Affiliations')}
        <Collapsible.Root open>
          <Collapsible.Trigger>
          <div class='block text-left text-surface-800-100-token bg-surface-50-900-token text-md font-bold mt-3'>
            <i>Affiliations</i> &#8597;
          </div>
          </Collapsible.Trigger>
          <Collapsible.Content transition={slide}>
          <div>
            <label for='honour' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Religion
            </label>
            <input
              id='religion'
              name='religion'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='club' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Club
            </label>
            <input
              id='club'
              name='club'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='association' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Association
            </label>
            <input
              id='association'
              name='association'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='institute' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Institute
            </label>
            <input
              id='institute'
              name='institute'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='group' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Group
            </label>
            <input
              id='group'
              name='group'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='union' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Union
            </label>            <input
              id='union'
              name='union'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
            <label for='otherAffiliation' class='block text-left text-surface-800-100-token bg-surface-50-900-token pt-2 text-md font-bold'>
              Other Affiliation
            </label>
            <input
              id='otherAffiliation'
              name='otherAffiliation'
              type='text'
              placeholder='If more than one, separate with semicolon ;'
              class="shadow appearance-none border rounded w-full py-3 pt-3 px-3 text-surface-800-100-token bg-surface-50-900-token leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </Collapsible.Content>
        </Collapsible.Root>
      {/if}
      <div class="flex mb-items-center justify-center space-x-4 mb-4">
        <button
            class="w-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mt-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

<styles>

</styles>

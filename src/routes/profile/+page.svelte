<script>
import formPage1 from './formPage1.svelte';
import formPage2 from './formPage2.svelte';

  const pages = [formPage1, formPage2];

  // The current page of our form.
  let page = 0;

  // The state of all of our pages
  let pagesState = [];



  // Our handlers
  function onSubmit(values) {
    if (page === pages.length - 1) {
      pagesState[page] = values;
      let personalData = pagesState[0]
      let otherData = {'otherData': pagesState[1]}
      let formData = [Object.assign(personalData, otherData)]
      // On our final page with POST our data somewhere
      console.log(JSON.stringify(formData))
    } else {
      // If we're not on the last page, store our data and increase a step
      pagesState[page] = values;
      pagesState = pagesState; // Triggering update
      page +=1;
    }
  }

  function onBack(values) {
    if (page === 0) return;
		pagesState[page] = values;
    pagesState = pagesState; // Triggering update
    page -= 1;
  }

</script>

<!-- We display the current step here -->
<svelte:component
  this={pages[page]}
  {onSubmit}
  {onBack}
  initialValues={pagesState[page]}
/>

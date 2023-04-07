<script lang="ts">
	import '../app.css';
	import Capsule from '$lib/components/svg/Capsule.svelte';
	import Fleches from '$lib/components/svg/Fleches.svelte';
	import Step0 from '$lib/components/steps/Step0.svelte';
	import Step1 from '$lib/components/steps/Step1.svelte';
	import Step2 from '$lib/components/steps/Step2.svelte';
	
	import Header from '$lib/components/Header.svelte';

  $: step = 0;
</script>

<div class="overflow-hidden lg:relative lg:h-screen">
  <Header bind:newStep={step} />

	{#if step === 0}
		<Step0 bind:newStep={step} />
  {:else if step === 1}
    <Step1 bind:newStep={step} />
  {:else if step === 2}
    <Step2 bind:newStep={step} />
	{/if}

  <div class="w-[88.3rem] h-[88.3rem] absolute -bottom-[28rem] -right-[42rem] z-10">
    <div class="absolute w-full h-full inset-0 transform -rotate-[25deg]">
      <Capsule />
    </div>
    <div class="absolute w-full h-full inset-0 motion-safe:animate-spin">
      <Fleches />
    </div>
  </div>
</div>
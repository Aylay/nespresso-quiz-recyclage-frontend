<script lang="ts">
	import '../app.css';
	import Capsule from '$lib/components/svg/Capsule.svelte';
	import Fleches from '$lib/components/svg/Fleches.svelte';
	import Step0 from '$lib/components/steps/Step0.svelte';
	import Step1 from '$lib/components/steps/Step1.svelte';
	import Step2 from '$lib/components/steps/Step2.svelte';
	import Step3 from '$lib/components/steps/Step3.svelte';
	import Step20 from '$lib/components/steps/Step20.svelte';

	import Header from '$lib/components/Header.svelte';

	$: step = 20;

	const nav2 = [
		{
			label: 'Mentions légales',
			step: 98
		},
		{
			label: 'Politique de cookie',
			step: 99
		}
	];
</script>

<div class="relative h-screen overflow-hidden {[0, 1, 2, 20].includes(step) ? 'h-screen' : 'lg:screen'}">
	<Header bind:newStep={step} />

	{#if step === 0}
		<Step0 bind:newStep={step} />
	{:else if step === 1}
		<Step1 bind:newStep={step} />
	{:else if step === 2}
		<Step2 bind:newStep={step} />
	{:else if step === 3}
		<Step3 bind:newStep={step} />
	{:else if step === 20}
		<Step20 />
	{/if}

	<ul
		class="absolute bottom-24 left-[5%] flex animate-fade-up flex-col gap-2 animate-delay-1000 animate-ease-in-out max-lg:hidden"
	>
		{#each nav2 as item}
			<li
				class="cursor-pointer text-s underline hover:no-underline {step === 0
					? 'text-white'
					: 'text-black'}"
				on:click={() => (step = item.step)}
			>
				{item.label}
			</li>
		{/each}
	</ul>

	{#if ![20, 98, 99].includes(step)}
		<div
			class="absolute -bottom-20 -right-96 h-[46rem] w-[46rem] lg:-bottom-[28rem] lg:-right-[42rem] lg:z-10 lg:h-[88.3rem] lg:w-[88.3rem] {step !==
			0
				? 'max-lg:opacity-30'
				: ''}"
		>
			<div class="absolute inset-0 h-full w-full -rotate-[25deg] transform">
				<Capsule />
			</div>
			<div class="absolute inset-0 h-full w-full motion-safe:animate-spin">
				<Fleches />
			</div>
		</div>
	{/if}
</div>

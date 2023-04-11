<script lang="ts">
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

	export let newStep: number;
	const nextStep: number = 4;

	let answer = false;
</script>

{#if !answer}
<div class="z-20 flex h-full items-center justify-center px-8">
	<div class="max-w-5xl flex flex-col items-center">
		<p class="text-h4 uppercase mb-4 animate-fade">Question 1/4</p>
		<h2 class="text-h2-m lg:text-h2 uppercase text-center animate-fade animate-delay-500">Quelle est l’empreinte carbone d’une tasse de café Nespresso Professionnel<br />de 40 ml ?</h2>
	</div>
</div>
{:else}
cou
{/if}

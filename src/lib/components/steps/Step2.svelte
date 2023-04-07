<script lang="ts">
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

  export let newStep: number;
  const nextStep: number = 3;
</script>

<div class="relative flex h-full items-center justify-center px-8 z-20">
	<div class="relative z-10 mt-[calc(100vh*0.1)] animate-fade animate-ease-in-out animate-delay-200 flex flex-col text-center">
		<h1 class="mb-8 text-h1-m uppercase text-black lg:text-h1">
			Nespresso x veolia
		</h1>
		<p class="text-m-m text-black lg:text-m">
			Découvrez toutes les étapes du traitement des capsules en aluminium dans la vidéo en partenariat avec Veolia.
		</p>
		<div class="relative overflow-hidden w-full lg:w-[calc(100vw*0.55)] pt-[56.25%] my-20 animate-fade animate-ease-in-out animate-delay-500 rounded-[2rem]">
			<iframe
				src="https://www.youtube.com/embed/s7BCO72uoeI"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="absolute w-full h-full inset-0"
			></iframe>
		</div>
		<div class="flex justify-center">
			<CTAStep label="Je teste mes connaissances, je participe  au quiz" step={nextStep} bind:newStep={newStep} />
		</div>
	</div>
</div>

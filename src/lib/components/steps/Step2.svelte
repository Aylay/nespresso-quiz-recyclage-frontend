<script lang="ts">
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

	export let newStep: number;
	const nextStep: number = 3;
</script>

<div class="relative z-20 flex h-full items-center justify-center px-8">
	<div
		class="relative z-10 flex animate-fade flex-col text-center animate-delay-200 animate-ease-in-out lg:mt-[calc(100vh*0.1)]"
	>
		<h1 class="mb-4 text-h2-m uppercase text-black lg:mb-8 lg:text-h2">Nespresso x veolia</h1>
		<p class="text-m-m text-black lg:text-m">
			Découvrez toutes les étapes du traitement des capsules en aluminium dans la vidéo en
			partenariat avec Veolia.
		</p>
		<div
			class="relative mt-8 w-full animate-fade overflow-hidden rounded-[2rem] pt-[56.25%] animate-delay-500 animate-ease-in-out lg:my-20 lg:w-[calc(100vw*0.55)]"
		>
			<iframe
				src="https://www.youtube.com/embed/Wu7B1FtmHZs"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="absolute inset-0 h-full w-full"
			/>
		</div>
		<div class="flex justify-center max-lg:hidden">
			<CTAStep
				label="Je teste mes connaissances, je participe  au quiz"
				step={nextStep}
				bind:newStep
			/>
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 z-30 flex w-full justify-center lg:hidden">
		<CTAStep
			label="Je teste mes connaissances,<br />je participe  au quiz"
			step={nextStep}
			bind:newStep
		/>
	</div>
</div>

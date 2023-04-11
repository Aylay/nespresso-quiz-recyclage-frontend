<script lang="ts">
	import ImageLoader from '$lib/components/utilities/Image/ImageLoader.svelte';
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

	export let newStep: number;
	const nextStep: number = 1;
</script>

<div class="relative flex h-full items-center justify-center px-8">
	<div class="z-5 absolute inset-0 h-full w-full">
		<ImageLoader
			src="/img/img-1.jpg"
			alt="Nespresso"
			divClass="max-lg:hidden h-full w-full"
			imgClass="h-full w-full object-cover"
		/>
		<div
			class="absolute inset-0 z-10 h-full w-full bg-opacity-70 bg-gradient-to-t from-black to-transparent lg:hidden"
		/>
		<ImageLoader
			src="/img/img-1-m.jpg"
			alt="Nespresso"
			divClass="lg:hidden h-full w-full"
			imgClass="h-full w-full object-cover"
		/>
	</div>
	<div
		class="relative z-10 lg:mt-[calc(100vh*0.05)] flex animate-fade flex-col text-center animate-delay-200 animate-ease-in-out lg:max-w-[68rem]"
	>
		<h1 class="mb-8 text-h2-m uppercase text-parchment lg:text-h1">
			Nespresso agit dans le recyclage des capsules en aluminium. Et pas que !
		</h1>
		<div class="mb-20 flex flex-col gap-4 lg:px-16">
			<p class="text-m-m text-parchment lg:text-m">
				Nespresso accompagne et forme plus de <span class="font-semibold"
					>140 000 caféiculteurs</span
				>
				partenaires aux pratiques agricoles plus durables.
				<span class="font-semibold">Près de 6 millions d'arbres plantés depuis 2014</span> dans et autour
				des fermes partenaires du Programme AAA pour une Qualité Durable™.
			</p>
			<p class="text-m-m font-semibold text-parchment lg:text-m">
				+95% du café Nespresso est acheté à un prix égal ou supérieur au seuil fixé par l'ONG du
				commerce équitable Fairtrade.
			</p>
			<p class="text-s text-parchment">(certifié par FLOCERT 2019)</p>
		</div>
		<div
			class="flex animate-fade justify-center animate-delay-500 animate-ease-in-out max-lg:hidden"
		>
			<CTAStep label="En savoir plus sur le recyclage" step={nextStep} bind:newStep />
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 z-30 flex w-full justify-center lg:hidden">
		<CTAStep label="En savoir plus sur le recyclage" step={nextStep} bind:newStep />
	</div>
</div>

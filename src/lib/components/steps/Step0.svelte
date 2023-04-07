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
			divClass="h-full w-full"
			imgClass="h-full w-full object-cover"
		/>
	</div>
	<div class="relative z-10 mt-[calc(100vh*0.05)] animate-fade animate-ease-in-out animate-delay-200 flex flex-col text-center lg:max-w-[68rem]">
		<h1 class="mb-8 text-h1-m uppercase text-parchment lg:text-h1">
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
		<div class="flex justify-center animate-fade animate-delay-500 animate-ease-in-out">
			<CTAStep label="En savoir plus sur le recyclage" step={nextStep} bind:newStep={newStep} />
		</div>
	</div>
</div>

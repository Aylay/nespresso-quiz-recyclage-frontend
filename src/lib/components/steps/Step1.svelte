<script lang="ts">
	import ImageLoader from '$lib/components/utilities/Image/ImageLoader.svelte';
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

	export let newStep: number;
	const nextStep: number = 2;
</script>

<div class="relative flex h-full items-center justify-center px-8">
	<div class="z-5 absolute inset-0 h-full w-full">
		<ImageLoader
			src="/img/img-2.png"
			alt="Nespresso"
			divClass="max-lg:hidden h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
			imgClass="h-full w-full object-cover"
		/>
		<ImageLoader
			src="/img/img-2-m.png"
			alt="Nespresso"
			divClass="lg:hidden h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
			imgClass="h-full w-full object-cover"
		/>
	</div>
	<div class="relative z-10 flex flex-col text-center lg:max-w-[68rem]">
		<p class="mb-4 animate-fade-down text-m-m lg:text-l text-black animate-ease-in-out">
			Toutes les capsules en aluminium collectées dans votre établissement ont une seconde vie.
			Elles sont collectées via les systèmes Nespresso et acheminées au centre de traitement de
			notre partenaire Veolia, dans les Hauts-de-France.
		</p>
		<p class="mb-20 animate-fade-up text-m-m lg:text-l text-black animate-ease-in-out">
			Après séparation, le marc de café est valorisé en compost, tandis que l’aluminium sera
			redirigé vers sa filière de recyclage pour servir à la création de nouveaux objets comme des
			vélos par exemple.
		</p>
		<div class="flex animate-fade justify-center animate-delay-1000 animate-ease-in-out  max-lg:hidden">
			<CTAStep label="Je découvre la vidéo" step={nextStep} bind:newStep />
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 z-30 flex w-full justify-center lg:hidden">
		<CTAStep label="Je découvre la vidéo" step={nextStep} bind:newStep />
	</div>
</div>

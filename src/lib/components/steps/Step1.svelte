<script lang="ts">
	import ImageLoader from '$lib/components/utilities/Image/ImageLoader.svelte';
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

	export let newStep: number;
	const nextStep: number = 2;
</script>

<div class="relative flex h-full items-center justify-center px-8">
	<div class="max-lg:hidden">
		<div
			class="absolute left-[35%] top-[5%] h-[14.7rem] w-[22.6rem] overflow-hidden rounded-[20px]"
		>
			<ImageLoader
				src="/img/img-2-1.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div
			class="absolute -left-[8rem] top-1/2 h-[34.2rem] w-[37.3rem] overflow-hidden rounded-[20px]"
		>
			<ImageLoader
				src="/img/img-2-2.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-[600ms] animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div
			class="absolute -bottom-[16rem] left-[15%] h-[35.4rem] w-[45.3rem] overflow-hidden rounded-[20px]"
		>
			<ImageLoader
				src="/img/img-2-3.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-700 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div
			class="absolute -right-[17rem] top-1/4 h-[75.6rem] w-[47.3rem] overflow-hidden rounded-[20px]"
		>
			<ImageLoader
				src="/img/img-2-4.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-[800ms] animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
	</div>
	<div class="lg:hidden">
		<div
			class="absolute right-[27%] top-[17%] h-[11.7rem] w-[16.6rem] overflow-hidden rounded-[7px]"
		>
			<ImageLoader
				src="/img/img-2-m-4.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="absolute right-[15%] top-[20%] h-[5.4rem] w-[8.3rem] overflow-hidden rounded-[7px]">
			<ImageLoader
				src="/img/img-2-1.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div
			class="absolute -left-[2.5rem] bottom-[18%] h-[11.2rem] w-[12.2rem] overflow-hidden rounded-[7px]"
		>
			<ImageLoader
				src="/img/img-2-2.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-[600ms] animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div
			class="absolute bottom-[7%] left-[17%] h-[11.7rem] w-[15rem] overflow-hidden rounded-[7px]"
		>
			<ImageLoader
				src="/img/img-2-3.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-700 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
	</div>
	<div class="relative z-10 flex flex-col text-center lg:max-w-[68rem]">
		<p class="mb-4 animate-fade-down text-m-m text-black animate-ease-in-out lg:text-l">
			Toutes les capsules en aluminium collectées dans votre établissement ont une seconde vie.
			Elles sont collectées via les systèmes Nespresso et acheminées au centre de traitement de
			notre partenaire Veolia, dans les Hauts-de-France.
		</p>
		<p class="mb-20 animate-fade-up text-m-m text-black animate-ease-in-out lg:text-l">
			Après séparation, le marc de café est valorisé en compost, tandis que l’aluminium sera
			redirigé vers sa filière de recyclage pour servir à la création de nouveaux objets comme des
			vélos par exemple.
		</p>
		<div
			class="flex animate-fade justify-center animate-delay-1000 animate-ease-in-out max-lg:hidden"
		>
			<CTAStep label="Je découvre la vidéo" step={nextStep} bind:newStep />
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 z-30 flex w-full justify-center lg:hidden">
		<CTAStep label="Je découvre la vidéo" step={nextStep} bind:newStep />
	</div>
</div>

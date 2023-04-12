<script lang="ts">
	import ImageLoader from '$lib/components/utilities/Image/ImageLoader.svelte';
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';

	export let newStep: number;
	const nextStep: number = 2;
</script>

<div class="relative flex h-full items-center justify-center px-8">
	<div class="max-lg:hidden">

		<div class="w-[22.6rem] h-[14.7rem] absolute top-[5%] left-[35%] rounded-[20px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-1.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="w-[37.3rem] h-[34.2rem] absolute top-1/2 -left-[8rem] rounded-[20px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-2.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-[600ms] animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="w-[45.3rem] h-[35.4rem] absolute -bottom-[16rem] left-[15%] rounded-[20px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-3.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-700 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="w-[47.3rem] h-[75.6rem] absolute top-1/4 -right-[17rem] rounded-[20px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-4.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-[800ms] animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
	</div>
	<div class="lg:hidden">
		<div class="w-[16.6rem] h-[11.7rem] absolute top-[17%] right-[27%] rounded-[7px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-m-4.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="w-[8.3rem] h-[5.4rem] absolute top-[20%] right-[15%] rounded-[7px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-1.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-500 animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="w-[12.2rem] h-[11.2rem] absolute bottom-[18%] -left-[2.5rem] rounded-[7px] overflow-hidden">
			<ImageLoader
				src="/img/img-2-2.png"
				alt="Nespresso"
				divClass="h-full w-full animate-fade animate-delay-[600ms] animate-ease-in-out"
				imgClass="h-full w-full object-cover"
			/>
		</div>
		<div class="w-[15rem] h-[11.7rem] absolute bottom-[7%] left-[17%] rounded-[7px] overflow-hidden">
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

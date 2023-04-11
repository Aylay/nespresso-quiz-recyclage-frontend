<script lang="ts">
	import CTA from '$lib/components/utilities/CTA.svelte';
	import Fleches from '../svg/Fleches.svelte';
</script>

<div class="relative z-20 flex h-full items-center justify-center px-8">
	<div
		class="relative z-10 flex max-w-4xl animate-fade flex-col text-center animate-delay-200 animate-ease-in-out"
	>
		<h1 class="mb-8 text-h1-m uppercase text-black lg:mb-20 lg:text-h1">
			Merci d’avoir participé au quiz Nespresso recycle.
		</h1>
		<div class="flex justify-center max-lg:hidden">
			<CTA label="En savoir plus sur Nespresso Agit" href="https://beavers-agency.fr" />
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 z-30 flex w-full justify-center lg:hidden">
		<CTA label="En savoir plus sur Nespresso Agit" href="https://beavers-agency.fr" />
	</div>
</div>

<div class="absolute w-[30rem] h-[30rem] top-[30%] -left-32">
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img src="/img/capsule-1.png" alt="Capsule Nespresso" class="h-auto w-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>

<div class="absolute w-[30rem] h-[30rem] -bottom-40 left-[20%]">
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img src="/img/capsule-2.png" alt="Capsule Nespresso" class="h-auto w-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>

<div class="absolute w-[30rem] h-[30rem] top-[12%] right-[10%]">
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img src="/img/capsule-3.png" alt="Capsule Nespresso" class="h-auto w-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>

<div class="absolute w-[30rem] h-[30rem] bottom-[10%] -right-[15rem]">
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img src="/img/capsule-4.png" alt="Capsule Nespresso" class="h-auto w-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>

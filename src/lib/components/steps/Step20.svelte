<script lang="ts">
	import CTA from '$lib/components/utilities/CTA.svelte';
	import Fleches from '../svg/Fleches.svelte';
</script>

<div class="relative z-20 flex h-full items-center justify-center px-8">
	<div
		class="relative z-10 flex max-w-4xl animate-fade flex-col text-center animate-delay-200 animate-ease-in-out"
	>
		<h1 class="mb-8 text-h2-m uppercase text-black max-lg:px-8 lg:mb-20 lg:text-h2">
			Merci d’avoir participé au quiz Nespresso recycle.
		</h1>
		<div class="flex justify-center max-lg:hidden">
			<CTA label="En savoir plus sur Nespresso Agit" href="https://www.nespresso.com/agit/" />
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 z-30 flex w-full justify-center lg:hidden">
		<CTA label="En savoir plus sur Nespresso Agit" href="https://www.nespresso.com/agit/" />
	</div>
</div>

<div
	class="absolute left-[10%] top-60 h-[30rem] w-[30rem] max-lg:h-[12rem] max-lg:w-[12rem] lg:-left-32 lg:top-[30%]"
>
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img
		src="/img/capsule-1.png"
		alt="Capsule Nespresso"
		class="absolute left-1/2 top-1/2 h-auto w-[25rem] -translate-x-1/2 -translate-y-1/2 transform max-lg:w-[10rem]"
	/>
</div>

<div
	class="absolute bottom-1/4 left-1/4 h-[30rem] w-[30rem] max-lg:h-[12rem] max-lg:w-[12rem] lg:-bottom-40 lg:left-[20%]"
>
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img
		src="/img/capsule-2.png"
		alt="Capsule Nespresso"
		class="absolute left-1/2 top-1/2 h-auto w-[25rem] -translate-x-1/2 -translate-y-1/2 transform max-lg:w-[10rem]"
	/>
</div>

<div
	class="absolute right-[4%] top-1/4 h-[30rem] w-[30rem] max-lg:h-[12rem] max-lg:w-[12rem] lg:right-[10%] lg:top-[12%]"
>
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img
		src="/img/capsule-3.png"
		alt="Capsule Nespresso"
		class="absolute left-1/2 top-1/2 h-auto w-[25rem] -translate-x-1/2 -translate-y-1/2 transform max-lg:w-[10rem]"
	/>
</div>

<div
	class="absolute bottom-[12%] right-[15%] h-[30rem] w-[30rem] max-lg:h-[12rem] max-lg:w-[12rem] lg:-right-[15rem] lg:bottom-[10%]"
>
	<Fleches newClass="w-full h-full motion-safe:animate-spin" />
	<img
		src="/img/capsule-4.png"
		alt="Capsule Nespresso"
		class="absolute left-1/2 top-1/2 h-auto w-[25rem] -translate-x-1/2 -translate-y-1/2 transform max-lg:w-[10rem]"
	/>
</div>

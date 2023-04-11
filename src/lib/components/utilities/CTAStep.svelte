<script lang="ts">
	import Arrow from '$lib/components/svg/ArrowRight.svelte';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let label = '';
	export let step: number;
	export let newStep: number;
</script>

<div
	class="max-lg:flex max-lg:w-full max-lg:justify-center max-lg:bg-gold max-lg:py-12"
	on:click={() => (newStep = step)}
>
	<Hoverable let:hovering={active}>
		<div
			class="z-5 flex cursor-pointer items-center gap-2 overflow-hidden lg:rounded-2xl lg:p-8 lg:transition-colors {active
				? 'lg:bg-antique-bronze'
				: 'lg:bg-gold'}"
		>
			<p class="text-m font-extrabold text-white transition-colors max-lg:text-center">
				{@html label}
			</p>
			<Arrow newClass="max-lg:transform max-lg:rotate-90" />
		</div>
	</Hoverable>
</div>

<script lang="ts">
	import Arrow from '$lib/components/svg/ArrowRight.svelte';

	export let label = '';
	export let href = '#';
</script>

<a
	class="z-5 flex cursor-pointer items-center gap-2 overflow-hidden bg-gold max-lg:flex max-lg:w-full max-lg:justify-center max-lg:bg-gold max-lg:py-12 lg:rounded-2xl lg:p-8 lg:transition-colors lg:hover:bg-antique-bronze"
	{href}
>
	<p class="text-m font-extrabold text-white transition-colors max-lg:text-center">
		{@html label}
	</p>
	<Arrow newClass="max-lg:transform max-lg:rotate-90" />
</a>

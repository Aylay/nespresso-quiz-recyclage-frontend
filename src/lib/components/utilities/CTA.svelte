<script lang="ts">
	import Arrow from '$lib/components/svg/ArrowRight.svelte';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let label = '';
	export let href = '#';
</script>

<Hoverable let:hovering={active}>
	<a
		class="z-5 flex cursor-pointer items-center gap-2 overflow-hidden rounded-2xl p-8 transition-colors {active
			? 'bg-antique-bronze'
			: 'bg-gold'}"
		{href}
	>
		<p class="text-m font-extrabold text-white transition-colors">
			{label}
		</p>
		<Arrow />
	</a>
</Hoverable>

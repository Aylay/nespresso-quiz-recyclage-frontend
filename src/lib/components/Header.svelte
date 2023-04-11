<script lang="ts">
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Logo from '$lib/components/svg/LogoNespresso.svelte';

	export let newStep: number;
	const nav = [
		{
			label: 'Nespresso recycle',
			activeStep: [0, 1],
			step: 0
		},
		{
			label: 'Nespresso x veolia',
			activeStep: [2],
			step: 2
		},
		{
			label: 'Quiz',
			activeStep: [4, 5, 6, 7, 20],
			step: 4
		}
	];

	const nav2 = [
		{
			label: 'Mentions légales',
			step: 98
		},
		{
			label: 'Politique de cookie',
			step: 99
		}
	];

	let menuOpened = false;

	function goToStep(step: any) {
		menuOpened = false;
		newStep = step;
	}
</script>

<div
	class="absolute inset-x-0 top-24 z-50 flex w-full animate-fade-down items-center justify-between px-[5%] animate-delay-1000 animate-ease-in-out lg:top-20"
>
	<div on:click={() => goToStep(0)}>
		<Logo newClass="w-full max-w-[12.5rem] lg:max-w-xs cursor-pointer" />
	</div>
	<div
		class="flex h-16 w-16 items-center justify-center rounded-2xl border border-solid bg-white lg:hidden {menuOpened
			? 'border-black border-opacity-10'
			: 'border-transparent'}"
	>
		<div class="h-12 w-12" on:click={() => (menuOpened = !menuOpened)}>
			<svg
				class="burger duration-400 cursor-pointer select-none transition-transform {menuOpened
					? 'active rotate-45 transform'
					: ''}"
				viewBox="0 0 100 100"
			>
				<path
					class="line top stroke-black"
					d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
				/>
				<path class="line middle stroke-black" d="m 70,50 h -40" />
				<path
					class="line bottom stroke-black"
					d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
				/>
			</svg>
		</div>
	</div>
	<nav class="max-lg:hidden">
		<ul class="flex items-center gap-4 rounded-[2rem] bg-white p-11">
			{#each nav as item}
				<Hoverable let:hovering={active}>
					<li
						class="cursor-pointer rounded-lg px-4 py-3 font-extrabold uppercase text-black transition-colors lg:text-s {active ||
						item.activeStep.includes(newStep)
							? 'lg:bg-black lg:text-white'
							: ''}"
						on:click={() => (newStep = item.step)}
					>
						{item.label}
					</li>
				</Hoverable>
			{/each}
		</ul>
	</nav>
</div>
{#if menuOpened}
	<div
		class="absolute z-40 flex h-screen w-full animate-fade-left items-center justify-center bg-white"
	>
		<ul class="flex flex-col items-center gap-12">
			{#each nav as item}
				<li
					class="relative px-4 py-2 text-m font-extrabold uppercase text-black before:absolute before:-bottom-6 before:left-1/2 before:h-[1.5px] before:w-6 before:-translate-x-1/2 before:transform before:bg-black before:content-[''] last:before:hidden"
					on:click={() => goToStep(item.step)}
				>
					{item.label}
				</li>
			{/each}
		</ul>
		<ul class="absolute inset-x-0 bottom-24 flex w-full flex-col items-center gap-8">
			{#each nav2 as item}
				<li class="text-s text-black underline" on:click={() => goToStep(item.step)}>
					{item.label}
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	.top,
	.bottom {
		stroke-dasharray: 40 121;
	}
	.active .top,
	.active .bottom {
		stroke-dashoffset: -68px;
	}
	.line {
		fill: none;
		transition: stroke-dasharray 300ms, stroke-dashoffset 300ms, stroke 300ms;
		stroke-width: 5.5;
		stroke-linecap: round;
	}
</style>

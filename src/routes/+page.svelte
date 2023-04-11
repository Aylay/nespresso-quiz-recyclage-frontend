<script lang="ts">
	import '../app.css';
	import Capsule from '$lib/components/svg/Capsule.svelte';
	import Fleches from '$lib/components/svg/Fleches.svelte';
	import Step0 from '$lib/components/steps/Step0.svelte';
	import Step1 from '$lib/components/steps/Step1.svelte';
	import Step2 from '$lib/components/steps/Step2.svelte';
	import Step3 from '$lib/components/steps/StepQuestion.svelte';
	import Step20 from '$lib/components/steps/Step20.svelte';

	import Header from '$lib/components/Header.svelte';

	$: step = 0;

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

	const step3Infos = {
		index: 1,
		question:
			'Quelle est l’empreinte carbone d’une tasse de café Nespresso Professionnel<br />de 40 ml ?',
		answers: [
			{
				label: '90 g CO2-eq',
				valid: true
			},
			{
				label: '120 g CO2-eq',
				valid: false
			},
			{
				label: '200 g CO2-eq',
				valid: false
			},
			{
				label: '250 g CO2-eq',
				valid: false
			}
		],
    texts: [
      "L'empreinte carbone du système Nespresso Professionnel est <strong class='font-semibold'>jusqu’à 16% inférieure</strong> à celui des machines à café à grain automatiques<sup>*</sup>.",
      "Le système de précision Nespresso Professionnel permet de <strong class='font-semibold'>limiter la quantité de café moulu utilisée par tasse</strong> et d'utiliser ainsi la dose précise de café, d’eau et d’énergie nécessaire pour vous préparer une tasse de café.",
      "Le système à grain automatique utilise en moyenne 50% de café moulu en plus pour préparer une tasse de café par rapport au système Nespresso<sup>*</sup>."
    ],
    img: {
      src: '/img/question-1.png',
      alt: 'Question 1'
    },
    ref: {
      href: '#',
      text: "<sup>*</sup> En savoir plus à travers l’étude d'impact environnemental réalisée par le cabinet expert Quantis en France en 2020 selon la norme ISO 14040/14044"
    }
	};

	const step5Infos = {
		index: 3,
		question:
			"Quelle certification reconnaît nos 30 ans d'engagements en faveur du climat, des communautés et de l'économie circulaire ?",
		answers: [
			{
				label: 'Rainforest Alliance',
				valid: false
			},
			{
				label: 'Fairtrade',
				valid: false
			},
			{
				label: 'ISO 140001',
				valid: false
			},
			{
				label: 'B Corp<sup>TM</sup>',
				valid: true
			},
			{
				label: 'Top Employer',
				valid: false
			}
		],
    texts: [
      "B Corp<sup>TM</sup> est un mouvement international qui fédère plus de <strong class='font-semibold'>6500 entreprises</strong> de toutes tailles et tous secteurs dans plus de 70 pays, dont plus de <strong class='font-semibold'>400 en France</strong>.",
      "B Corp<sup>TM</sup> est à la fois une communauté d’acteurs engagés, un outil de mesure d’impact gratuit et accessible à tous et <strong class='font-semibold'>un label certifiant</strong> les entreprises respectant des normes sociales et environnementales élevées.",
      "Pour Nespresso, cette certification vient reconnaître 30 ans d’engagements et d’actions concrètes en matière environnementale, sociale et sociétale."
    ],
    img: {
      src: '/img/question-2.png',
      alt: 'Question 2'
    },
    maxWidth: '42rem'
	};
</script>

<div
	class="relative h-screen overflow-hidden {[0, 1, 2, 20].includes(step)
		? 'h-screen'
		: 'lg:screen'}"
>
	<Header bind:newStep={step} />

	{#if step === 0}
		<Step0 bind:newStep={step} />
	{:else if step === 1}
		<Step1 bind:newStep={step} />
	{:else if step === 2}
		<Step2 bind:newStep={step} />
	{:else if step === 3}
		<Step3 bind:newStep={step} infos={step3Infos} nextStep={4} />
	{:else if step === 4}
		<Step3 bind:newStep={step} infos={step5Infos} nextStep={5} />
	{:else if step === 20}
		<Step20 />
	{/if}

	<ul
		class="absolute z-50 bottom-24 left-[5%] flex animate-fade-up flex-col gap-2 animate-delay-1000 animate-ease-in-out max-lg:hidden"
	>
		{#each nav2 as item}
			<li
				class="cursor-pointer text-s underline hover:no-underline {step === 0
					? 'text-white'
					: 'text-black'}"
				on:click={() => (step = item.step)}
			>
				{item.label}
			</li>
		{/each}
	</ul>

	{#if ![20, 98, 99].includes(step)}
		<div
			class="absolute -bottom-20 -right-96 h-[46rem] w-[46rem] lg:-bottom-[28rem] lg:-right-[42rem] lg:z-10 lg:h-[88.3rem] lg:w-[88.3rem] {step !==
			0
				? 'max-lg:opacity-30'
				: ''}"
		>
			<div class="absolute inset-0 h-full w-full -rotate-[25deg] transform">
				<Capsule />
			</div>
			<div class="absolute inset-0 h-full w-full motion-safe:animate-spin">
				<Fleches />
			</div>
		</div>
	{/if}
</div>

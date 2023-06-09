<script lang="ts">
	import '../app.css';
	import { beforeUpdate } from 'svelte';

	import Capsule from '$lib/components/svg/Capsule.svelte';
	import Fleches from '$lib/components/svg/Fleches.svelte';
	import Step0 from '$lib/components/steps/Step0.svelte';
	import Step1 from '$lib/components/steps/Step1.svelte';
	import Step2 from '$lib/components/steps/Step2.svelte';
	import StepQuestion from '$lib/components/steps/StepQuestion.svelte';
	import Step20 from '$lib/components/steps/Step20.svelte';
	import Close from '$lib/components/svg/Close.svelte';
	import Header from '$lib/components/Header.svelte';
	import StepQcm from '$lib/components/steps/StepQCM.svelte';
	import Gtm from '$lib/components/utilities/GTM.svelte';

	$: step = 0;
	let closeLegals = 0;

	const nav2 = [
		{
			label: 'Mentions légales',
			step: 98
		},
		{
			label: 'Politique des cookies',
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
			'Le système à grain automatique utilise en moyenne 50% de café moulu en plus pour préparer une tasse de café par rapport au système Nespresso<sup>*</sup>.'
		],
		img: {
			src: '/img/question-1.png',
			alt: 'Question 1'
		},
		ref: {
			href: 'https://www.nespresso.com/agit/article/environnement/quel-impact-environnemental-pour-le-systeme-nespresso/',
			text: "<sup>*</sup> <span class='underline hover:no-underline'>En savoir plus à travers l’étude d'impact environnemental réalisée par le cabinet expert Quantis en France en 2020 selon la norme ISO 14040/14044</span>"
		},
		nextLabel: 'Je découvre la question suivante'
	};

	const step4Infos = {
		index: 2,
		question:
			"L'aluminium recyclé peut servir à fabriquer de nouveaux objets, à votre avis lesquels en font partie ?",
		description: 'Plusieurs bonnes réponses à cette question',
		answers: [
			{
				label: 'Des canettes',
				valid: true
			},
			{
				label: 'Des moteurs de voitures',
				valid: true
			},
			{
				label: 'Des vélos',
				valid: true
			},
			{
				label: 'Des économes',
				valid: true
			},
			{
				label: 'Des stylos',
				valid: true
			},
			{
				label: 'Des couteaux-suisses',
				valid: true
			}
		],
		texts: [
			"L’aluminium est <strong class='font-semibold'>un matériau recyclable</strong>.<br />Celui-ci peut <strong class='font-semibold'>être refondu pour fabriquer de nouveaux objets</strong>, comme des vélos ou des canettes par exemple.",
			"<strong class='font-semibold'>Le saviez-vous ?</strong><br />Nespresso s’engage sur la provenance de l’aluminium de ses capsules et travaille à <strong class='font-semibold'>diminuer l’impact environnemental</strong> lié à sa transformation et à son utilisation en créant le premier standard d’aluminium plus responsable."
		],
		img: {
			src: '/img/question-2.png',
			alt: 'Question 2'
		},
		ref: {
			href: 'https://aluminium-stewardship.org/',
			text: 'Plus d’info sur ASI Home | Aluminium Stewardship Initiative'
		},
		maxWidth: '47rem',
		nextLabel: 'Je découvre la question suivante'
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
			'Pour Nespresso, cette certification vient reconnaître 30 ans d’engagements et d’actions concrètes en matière environnementale, sociale et sociétale.'
		],
		img: {
			src: '/img/question-3.png',
			alt: 'Question 3'
		},
		maxWidth: '42rem',
		nextLabel: 'Je découvre la question suivante'
	};

	const step6Infos = {
		index: 4,
		question:
			'Selon vous, quelle étape a le plus d’impact sur l’empreinte carbone d’une tasse de café ?',
		description: 'Sur une tasse Nespresso Professionnel de 40 ml',
		answers: [
			{
				label: 'La distribution',
				valid: false
			},
			{
				label: 'La fabrication',
				valid: false
			},
			{
				label: 'La culture et le transport du café vert',
				valid: true
			},
			{
				label: 'La production des emballages',
				valid: false
			},
			{
				label: 'La préparation du café par la machine',
				valid: false
			},
			{
				label: 'La fin de vie des capsules',
				valid: false
			}
		],
		nextLabel: "J'ai terminé le quiz",
		texts: [
			"Mesurer l’impact environnemental d’un produit nécessite d’étudier l’ensemble de son cycle de vie. Parce que <strong class='font-semibold'>ce qui a le plus d’impact dans l’empreinte environnementale d’une tasse de café sont les étapes de production et transport du café vert et la phase d’utilisation</strong>.",
			'Contrairement aux idées reçues, déguster un café en capsule Nespresso a un impact environnemental inférieur à un café préparé avec une machine à grains automatique<sup>*</sup>.'
		],
		img: {
			src: '/img/question-4.png',
			alt: 'Question 4'
		},
		maxWidth: '59rem',
		ref: {
			href: 'https://www.nespresso.com/agit/article/environnement/quel-impact-environnemental-pour-le-systeme-nespresso/',
			text: "<sup>*</sup> <span class='underline hover:no-underline'>En savoir plus à travers l’étude d'impact environnemental réalisée par le cabinet expert Quantis en France en 2020 selon la norme ISO 14040/14044</span>"
		}
	};

	beforeUpdate(() => {
		if (![98, 99].includes(step)) {
			closeLegals = step;
		}
	});
</script>

<Gtm gtmId="GTM-KH5BWJ3" />

<div class="relative {![98, 99].includes(step) ? 'overflow-hidden' : ''} {[0, 1, 2, 20].includes(step) ? 'h-screen' : 'lg:h-screen'}">
	<Header bind:newStep={step} />

	{#if step === 0}
		<Step0 bind:newStep={step} />
	{:else if step === 1}
		<Step1 bind:newStep={step} />
	{:else if step === 2}
		<Step2 bind:newStep={step} />
	{:else if step === 3}
		<StepQuestion bind:newStep={step} infos={step3Infos} nextStep={4} actualStep={3} />
	{:else if step === 4}
		<StepQcm bind:newStep={step} infos={step4Infos} nextStep={5} actualStep={4} />
	{:else if step === 5}
		<StepQuestion bind:newStep={step} infos={step5Infos} nextStep={6} actualStep={5} />
	{:else if step === 6}
		<StepQuestion bind:newStep={step} infos={step6Infos} nextStep={20} actualStep={6} />
	{:else if step === 20}
		<Step20 />
	{/if}

	<ul
		class="absolute bottom-24 left-[5%] z-50 flex animate-fade-up flex-col gap-2 animate-delay-1000 animate-ease-in-out max-lg:hidden"
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

	{#if step === 98}
	<div class="relative z-50 min-h-screen bg-white px-8 pb-16 lg:pb-32">
			<div
				class="absolute right-[5%] top-24 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-solid border-black border-opacity-10"
				on:click={() => (step = closeLegals)}
			>
				<Close newClass="w-10 h-10" />
			</div>
			<div class="mx-auto flex max-w-7xl flex-col pt-64 text-black">
				<h2 class="mb-8 text-h2-m uppercase lg:text-h2">Mentions légales</h2>
				<div class="flex flex-col gap-6">
					<p class="text-m-m lg:text-l">Le site nespressorecycle.com est la propriété de :</p>
					<p class="text-m-m lg:text-l">
						<strong class="font-semibold">Nespresso</strong> France SAS, au capital social de 1 360 000
						euros, domiciliée au 27 rue du colonel Pierre Avia,CS 21577 – 75726 PARIS CEDEX 15, immatriculée
						au RCS de Paris n°382 597 821,&nbsp;
					</p>
					<p class="text-m-m lg:text-l">TVA Intracommunautaire : FR 41 382 597 821.</p>
					<p class="text-m-m lg:text-l">
						Téléphone : 01 72 06 22 22 (coût d’un appel local depuis un poste fixe)
					</p>
					<p class="text-m-m lg:text-l">Email : contact@nespresso.com</p>
					<p class="text-m-m lg:text-l">Directeur de la publication : Jérémie HERRMANN</p>
					<p class="text-m-m lg:text-l">
						Ce site est hébergé par la société Vercel Inc. - Adresse postale : 340 S Lemon Ave #4133
						Walnut, CA 91789
					</p>
					<p class="text-m-m lg:text-l">Coordonnées du webmaster : info@nespresso.com</p>
					<p class="text-m-m lg:text-l">
						Le propriétaire de ce site se réserve le droit de modifier son contenu à tout moment et
						sans préavis. Il ne pourra être tenu responsable des conséquences de telles
						modifications. De même, il se réserve le droit d’interrompre ou de suspendre tout ou
						partie des fonctionnalités du site à tout moment et sans préavis.
					</p>
				</div>
			</div>
		</div>
	{/if}

	{#if step === 99}
		<div class="relative z-50 min-h-screen bg-white px-8 pb-16 lg:pb-32">
			<div
				class="absolute right-[5%] top-24 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-solid border-black border-opacity-10"
				on:click={() => (step = closeLegals)}
			>
				<Close newClass="w-10 h-10" />
			</div>
			<div class="mx-auto flex max-w-7xl flex-col pt-64 text-black">
				<h2 class="mb-8 text-h2-m uppercase lg:text-h2">Politique des cookies</h2>
				<div class="flex flex-col gap-6">
					<h3 class="text-h3-m lg:text-h3">
						Agrégation des données
					</h3>
					<h4 class="text-m-m lg:text-l font-semibold">
						Agrégation avec des données non personnelles
					</h4>
					<p class="text-m-m lg:text-l">
						Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à tous nos Utilisateurs ou à des groupes ou catégories spécifiques d’Utilisateurs que nous combinons de manière à ce qu’un Utilisateur individuel ne puisse plus être identifié ou mentionné) et les informations non personnelles à des fins d’analyse du secteur et du marché, de profilage démographique, à des fins promotionnelles et publicitaires et à d’autres fins commerciales.
					</p>

					<h3 class="text-h3-m lg:text-h3 pt-6">
						Cookies
					</h3>
					<h4 class="text-m-m lg:text-l font-semibold">
						Durée de conservation des cookies
					</h4>
					<p class="text-m-m lg:text-l">
						Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l’Utilisateur, tout comme la durée de la validité du consentement de l’Utilisateur à l’utilisation de ces cookies. La durée de vie des cookies n’est pas prolongée à chaque visite. Le consentement de l’Utilisateur devra donc être renouvelé à l’issue de ce délai.
					</p>
					<h4 class="text-m-m lg:text-l font-semibold">
						Finalité des cookies
					</h4>
					<p class="text-m-m lg:text-l">
						Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services rendus à l’Utilisateur, à partir du traitement des informations concernant la fréquence d’accès, la personnalisation des pages ainsi que les opérations réalisées et les informations consultées.
					</p>
					<p class="text-m-m lg:text-l">
						Vous êtes informé que l’éditeur est susceptible de déposer des cookies sur votre terminal. Le cookie enregistre des informations relatives à la navigation sur le service (les pages que vous avez consultées, la date et l’heure de la consultation…) que nous pourrons lire lors de vos visites ultérieures.
					</p>

					<h3 class="text-h3-m lg:text-h3 pt-6">
						Modification de la politique RGPD
					</h3>
					<p class="text-m-m lg:text-l">
						En cas de modification de la présente politique RGPD, l’Editeur s’engage de ne pas baisser le niveau de confidentialité de manière substantielle sans l’information préalable des personnes concernées.
					</p>
				</div>
			</div>
		</div>
	{/if}
</div>

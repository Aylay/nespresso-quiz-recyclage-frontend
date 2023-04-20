<script lang="ts">
	import moment from 'moment-timezone';

	import CTAStep from '$lib/components/utilities/CTAStep.svelte';
	import ArrowQCM from '$lib/components/svg/ArrowQCM.svelte';
	import Hoverable from '../utilities/Hoverable.svelte';

	export let newStep: number;
	export let infos: any;
	export let nextStep: number;
	export let actualStep: number;

	let answerStep = false;
	let selectedAnswer: any = [];
	let showCTA = false;
	const todayDate = moment.tz('Europe/Paris').format('YYYY-MM-DD');

	function selectAnswer(answer: string) {
		if (selectedAnswer.includes(answer)) {
			selectedAnswer = selectedAnswer.filter((a: string) => a !== answer);
		} else {
			selectedAnswer.push(answer);
		}
		if (selectedAnswer.length > 0) {
			showCTA = true;
		} else {
			showCTA = false;
		}
	}

	async function validAnswer() {
		setTimeout(() => {
			answerStep = true;
		}, 500);

		const actualDateKPIsResponse = await fetch(
			import.meta.env.VITE_STRAPI_URL + '/api/kpis/' + todayDate + '?populate=deep',
			{
				method: 'GET'
			}
		);
		const actualDateLangDataResponse = await actualDateKPIsResponse.json();
		const actualDateKPIs = actualDateLangDataResponse.data;
		const actualDateId = actualDateKPIs.id;
		const actualDateGoodBadAnswers = actualDateKPIs.attributes.goodBadAnswers;
		let newGoodBadAnswers;
		if (actualDateGoodBadAnswers.length > 0) {
			const actualDateStepGoodBadAnswers = actualDateGoodBadAnswers.find(
				(a: { step: number }) => a.step === actualStep
			);
			if (actualDateStepGoodBadAnswers) {
				newGoodBadAnswers = actualDateGoodBadAnswers.filter(
					(a: { step: number }) => a.step !== actualStep
				);
				const newGoodBadAnswer = {
					id: actualDateStepGoodBadAnswers.id,
					step: actualStep,
					good: selectedAnswer.length === infos.answers.length
						? actualDateStepGoodBadAnswers.good + 1
						: actualDateStepGoodBadAnswers.good,
					bad: selectedAnswer.length !== infos.answers.length
						? actualDateStepGoodBadAnswers.bad + 1
						: actualDateStepGoodBadAnswers.bad,
					question: infos.question.replace(/<[^>]*>/g, ' ')
				};
				newGoodBadAnswers.push(newGoodBadAnswer);
			} else {
				newGoodBadAnswers = actualDateGoodBadAnswers.slice();
				const goodBadAnswer = {
					step: actualStep,
					good: selectedAnswer.length === infos.answers.length ? 1 : 0,
					bad: selectedAnswer.length !== infos.answers.length ? 1 : 0,
					question: infos.question.replace(/<[^>]*>/g, ' ')
				};
				newGoodBadAnswers.push(goodBadAnswer);
			}
		} else {
			newGoodBadAnswers = [
				{
					step: actualStep,
					good: selectedAnswer.length === infos.answers.length ? 1 : 0,
					bad: selectedAnswer.length !== infos.answers.length ? 1 : 0,
					question: infos.question.replace(/<[^>]*>/g, ' ')
				}
			];
		}

		const data = {
			goodBadAnswers: newGoodBadAnswers
		};

		fetch(import.meta.env.VITE_STRAPI_URL + '/api/kpis/' + actualDateId, {
			method: 'PUT',
			body: JSON.stringify({ data }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

{#if !answerStep}
	<div class="relative z-20 flex h-screen items-center justify-center px-8">
		<div class="flex max-w-5xl flex-col items-center">
			<p class="mb-4 animate-fade text-h4 uppercase">Question {infos.index}/4</p>
			<h2 class="animate-fade text-center text-h2-m uppercase animate-delay-500 lg:text-h2">
				{@html infos.question}
			</h2>
			{#if infos.description}
				<p class="mt-4 animate-fade text-center text-s animate-delay-700">
					{@html infos.description}
				</p>
			{/if}
			<div
				class="mt-20 flex flex-wrap justify-center gap-8 lg:gap-4"
				style="max-width: {infos.maxWidth ? infos.maxWidth : 'none'};"
			>
				{#each infos.answers as answer, i}
					<Hoverable let:hovering={active}>
						<div
							class="flex animate-fade cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors {active ||
							selectedAnswer.includes(answer.label)
								? 'bg-black'
								: 'bg-leaf'}"
							on:click={() => selectAnswer(answer.label)}
							style="animation-delay: {750 + i * 250}ms;"
						>
							<div
								class="flex h-[16px] w-[16px] items-center justify-center rounded-lg border border-solid transition-colors {active ||
								selectedAnswer.includes(answer.label)
									? 'border-white'
									: 'border-black'}"
							>
								<div class="h-4 w-4 {active || selectedAnswer.includes(answer.label) ? 'animate-fade' : 'opacity-0'} rounded-lg bg-white animate-duration-150" />
							</div>
							<p
								class="text-n2-m transition-colors lg:text-m {active ||
								selectedAnswer.includes(answer.label)
									? 'text-white'
									: 'text-black'}"
							>
								{@html answer.label}
							</p>
						</div>
					</Hoverable>
				{/each}
			</div>

			<Hoverable let:hovering={active}>
				<div
					class="mt-20 flex items-center justify-center gap-2 {showCTA
						? 'animate-fade'
						: 'opacity-0'} cursor-pointer"
					on:click={() => validAnswer()}
				>
					<p
						class="text-m-m font-extrabold transition-colors lg:text-m {active
							? 'text-antique-bronze'
							: 'text-gold'}"
					>
						Je valide mes réponses
					</p>
					<ArrowQCM hover={active ? true : false} />
				</div>
			</Hoverable>
		</div>
	</div>
{:else}
	<div class="relative z-30 flex w-full max-lg:flex-col max-lg:pt-64 lg:h-screen">
		<div
			class="flex-1 animate-fade-right px-8 max-lg:pb-20 lg:flex lg:h-full lg:items-center lg:justify-center"
		>
			<div class="flex max-w-[45rem] flex-col items-center">
				<p class="mb-4 animate-fade text-h4 uppercase">Question {infos.index}/4</p>
				<p class="text-center text-h3-m uppercase lg:text-h3">
					{#if selectedAnswer.length === infos.answers.length}
						Bravo !<br />C'est la bonne réponse.
					{:else}
						Pas tout à fait<br />
						{selectedAnswer.length} bonne{selectedAnswer.length > 1 ? 's' : ''} réponse{selectedAnswer.length >
						1
							? 's'
							: ''} sur 6.
					{/if}
				</p>
				<div class="my-16 flex max-w-[30rem] flex-wrap justify-center gap-4 lg:my-20">
					{#each infos.answers as answer}
						<div
							class="flex animate-fade items-center gap-4 rounded-2xl p-4 transition-colors {answer.valid
								? 'bg-black'
								: 'bg-leaf bg-opacity-30'}"
						>
							<p
								class="text-n2-m transition-colors lg:text-m {answer.valid
									? 'text-white'
									: 'text-black line-through opacity-30'}"
							>
								{@html answer.label}
							</p>
						</div>
					{/each}
				</div>
				<div class="flex flex-col gap-4">
					{#each infos.texts as text}
						<p class="text-center text-m-m lg:text-m">{@html text}</p>
					{/each}
				</div>
				<div class="mt-20 flex justify-center max-lg:hidden">
					<CTAStep label={infos.nextLabel} step={nextStep} bind:newStep />
				</div>
			</div>
		</div>
		<div
			class="flex flex-1 animate-fade-left flex-col bg-crema px-8 animate-delay-500 max-lg:py-20 lg:h-full lg:items-center lg:justify-center lg:px-[5%] lg:pt-[calc(100vh*0.1)]"
		>
			<img
				src={infos.img.src}
				alt={infos.img.alt}
				class="mx-auto max-h-[60rem] w-auto animate-fade"
			/>
			{#if infos.ref}
				<p class="mx-auto max-w-[45rem] mt-12 text-s">
					<a
						href={infos.ref.href}
						target="_blank"
						rel="noopener"
						class="underline hover:no-underline"
					>
						{@html infos.ref.text}
					</a>
				</p>
			{/if}
		</div>
		<div class="lg:hidden">
			<CTAStep label={infos.nextLabel} step={nextStep} bind:newStep />
		</div>
	</div>
{/if}

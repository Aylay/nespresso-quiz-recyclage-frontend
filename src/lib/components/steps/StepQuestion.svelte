<script lang="ts">
	import { onMount } from 'svelte';
	import moment from 'moment-timezone';

	import CTAStep from '$lib/components/utilities/CTAStep.svelte';
	import Hoverable from '../utilities/Hoverable.svelte';

	export let newStep: number;
	export let infos: any;
	export let nextStep: number;
	export let actualStep: number;

	let answerStep = false;
	let selectedAnswer = '';
	let goodAnswer = false;
	const todayDate = moment.tz('Europe/Paris').format('YYYY-MM-DD');

	onMount(() => {
		if (actualStep === 3) {
			quizStarted();
		}
	});

	async function quizStarted() {
		const actualDateKPIsResponse = await fetch(
			import.meta.env.VITE_STRAPI_URL + '/api/kpis/' + todayDate + '?populate=deep',
			{
				method: 'GET'
			}
		);

		if (actualDateKPIsResponse.ok) {
			const actualDateLangDataResponse = await actualDateKPIsResponse.json();
			const actualDateKPIs = actualDateLangDataResponse.data;

			const actualDateId = actualDateKPIs.id;
			const actualDateQuizStarted = actualDateKPIs.attributes.quizStarted;

			const data = {
				quizStarted: actualDateQuizStarted + 1
			};

			fetch(import.meta.env.VITE_STRAPI_URL + '/api/kpis/' + actualDateId, {
				method: 'PUT',
				body: JSON.stringify({ data }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} else {
			createNewEntry();
		}
	}

	async function createNewEntry() {
		const data = {
			date: todayDate,
			quizStarted: 1
		};

		fetch(import.meta.env.VITE_STRAPI_URL + '/api/kpis', {
			method: 'POST',
			body: JSON.stringify({ data }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	async function choosenAnswer(answer: string, good: any) {
		selectedAnswer = answer;
		good === true ? (goodAnswer = true) : (goodAnswer = false);
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
					good: goodAnswer
						? actualDateStepGoodBadAnswers.good + 1
						: actualDateStepGoodBadAnswers.good,
					bad: !goodAnswer
						? actualDateStepGoodBadAnswers.bad + 1
						: actualDateStepGoodBadAnswers.bad,
					question: infos.question.replace(/<[^>]*>/g, ' ')
				};
				newGoodBadAnswers.push(newGoodBadAnswer);
			} else {
				newGoodBadAnswers = actualDateGoodBadAnswers.slice();
				const goodBadAnswer = {
					step: actualStep,
					good: goodAnswer ? 1 : 0,
					bad: !goodAnswer ? 1 : 0,
					question: infos.question.replace(/<[^>]*>/g, ' ')
				};
				newGoodBadAnswers.push(goodBadAnswer);
			}
		} else {
			newGoodBadAnswers = [
				{
					step: actualStep,
					good: goodAnswer ? 1 : 0,
					bad: !goodAnswer ? 1 : 0,
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
							selectedAnswer === answer.label
								? 'bg-black'
								: 'bg-leaf'}"
							on:click={() => choosenAnswer(answer.label, answer.valid)}
							style="animation-delay: {750 + i * 250}ms;"
						>
							<div
								class="flex h-6 w-6 items-center justify-center rounded-lg border border-solid transition-colors {active ||
								selectedAnswer === answer.label
									? 'border-white'
									: 'border-black'}"
							>
								{#if active || selectedAnswer === answer.label}
									<div class="h-4 w-4 animate-fade rounded-lg bg-white animate-duration-150" />
								{/if}
							</div>
							<p
								class="text-n2-m transition-colors lg:text-m {active ||
								selectedAnswer === answer.label
									? 'text-white'
									: 'text-black'}"
							>
								{@html answer.label}
							</p>
						</div>
					</Hoverable>
				{/each}
			</div>
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
					{#if goodAnswer}
						Bravo !<br />C'est la bonne réponse.
					{:else}
						Pas tout à fait
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
			class="flex flex-1 animate-fade-left flex-col gap-12 bg-crema px-8 animate-delay-500 max-lg:py-20 lg:h-full lg:items-center lg:justify-center lg:px-[5%] lg:pt-[calc(100vh*0.1)]"
		>
			<img
				src={infos.img.src}
				alt={infos.img.alt}
				class="mx-auto max-h-[60rem] w-auto animate-fade"
			/>
			{#if infos.ref}
				<p class="mx-auto max-w-[45rem] text-s">
					<a href={infos.ref.href} target="_blank" rel="noopener">
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

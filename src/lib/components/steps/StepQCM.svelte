<script lang="ts">
	import CTAStep from '$lib/components/utilities/CTAStep.svelte';
	import ArrowQCM from '$lib/components/svg/ArrowQCM.svelte';
	import Hoverable from '../utilities/Hoverable.svelte';

	export let newStep: number;
	export let infos: any;
	export let nextStep: number;

	let answerStep = false;
	let selectedAnswer: any = [];

	function selectAnswer(answer: string) {
		if (selectedAnswer.includes(answer)) {
			selectedAnswer = selectedAnswer.filter((a: string) => (a !== answer))
		} else {
			selectedAnswer.push(answer)
		}
	}

	function validAnswer() {
		setTimeout(() => {
			answerStep = true;
		}, 500);
	}
</script>

{#if !answerStep}
	<div class="relative z-20 flex items-center justify-center px-8 h-screen">
		<div class="flex max-w-5xl flex-col items-center">
			<p class="mb-4 animate-fade text-h4 uppercase">Question {infos.index}/4</p>
			<h2 class="animate-fade text-center text-h2-m uppercase animate-delay-500 lg:text-h2">
				{@html infos.question}
			</h2>
			{#if infos.description}
				<p class="mt-4 text-center text-s animate-fade animate-delay-700">{@html infos.description}</p>
			{/if}
			<div class="flex justify-center mt-20 flex-wrap gap-8 lg:gap-4" style="max-width: {infos.maxWidth ? infos.maxWidth : 'none'};">
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
								class="flex h-6 w-6 items-center justify-center rounded-lg border border-solid transition-colors {active ||
									selectedAnswer.includes(answer.label)
									? 'border-white'
									: 'border-black'}"
							>
								{#if active || selectedAnswer.includes(answer.label)}
									<div class="h-4 w-4 animate-fade rounded-lg bg-white animate-duration-150" />
								{/if}
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

			<div class="mt-20 flex justify-center items-center gap-2 animate-fade animate-delay-1000 cursor-pointer" on:click={() => validAnswer()}>
				<p class="text-m-m lg:text-m font-extrabold text-gold">
					Je valide mes réponses
				</p>
				<ArrowQCM />
			</div>
		</div>
	</div>
{:else}
	<div class="relative z-30 flex w-full max-lg:flex-col max-lg:pt-64 lg:h-screen">
		<div class="flex-1 animate-fade-right px-8 lg:flex lg:h-full lg:items-center lg:justify-center max-lg:pb-20">
			<div class="flex max-w-[45rem] flex-col items-center">
				<p class="mb-4 animate-fade text-h4 uppercase">Question {infos.index}/4</p>
				<p class="text-center text-h3-m uppercase lg:text-h3">
					{#if selectedAnswer.length === infos.answers.length}
						Bravo !<br />C'est la bonne réponse.
					{:else}
						Pas tout à fait<br />
						{selectedAnswer.length} bonne{selectedAnswer.length > 1 ? 's' : ''} réponse{selectedAnswer.length > 1 ? 's' : ''} sur 6.
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
						<p class="text-m-m lg:text-m text-center">{@html text}</p>
					{/each}
				</div>
				<div
					class="flex justify-center mt-20 max-lg:hidden"
				>
					<CTAStep label={infos.nextLabel} step={nextStep} bind:newStep />
				</div>
			</div>
		</div>
		<div class="flex-1 bg-crema px-8 lg:px-[5%] flex flex-col lg:h-full lg:items-center lg:justify-center lg:pt-[calc(100vh*0.1)] animate-fade-left animate-delay-500 gap-12 max-lg:py-20">
			<img src={infos.img.src} alt={infos.img.alt} class="mx-auto w-auto max-h-[60rem] animate-fade" />
			{#if infos.ref}
			<p class="text-s max-w-[45rem] mx-auto">
				<a href={infos.ref.href} target="_blank" rel="noopener" class="underline hover:no-underline">
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
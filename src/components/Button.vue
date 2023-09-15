<template>
	<button
		:class="mode"
		@click="$emit('on-click')"
	>
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				required: false,
				default: null,
			},
			text: {
				type: String,
				required: true,
			},
		},
		emits: ['on-click'],
	};
</script>

<style scoped>
	button {
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		font: inherit;
		background-color: #3a0061;
		border: 1px solid #3a0061;
		color: white;
		cursor: pointer;
		border-radius: 30px;
		display: inline-block;
		width: max-content;
	}

	button:hover,
	button:active {
		background-color: #270041;
		border-color: #270041;
	}

	.flat {
		background-color: transparent;
		color: #3a0061;
		border: none;
	}

	.outline {
		background-color: transparent;
		border-color: #270041;
		color: #270041;
	}

	.flat:hover,
	.flat:active,
	.outline:hover,
	.outline:active {
		background-color: #edd2ff;
	}
</style>

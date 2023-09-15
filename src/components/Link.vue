<template>
	<router-link
		:to="to"
		:class="mode"
	>
		{{ text }}</router-link
	>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				required: true,
			},
			to: {
				type: String,
				default: '/',
			},
			mode: {
				type: String,
				required: false,
				default: null,
			},
		},
	};
</script>

<style scoped>
	a {
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

	a:hover,
	a:active {
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

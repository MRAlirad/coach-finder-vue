<template>
	<div class="request-item">
		<a :href="emailLink">{{ email }}</a>
		<p>{{ message }}</p>
	</div>
</template>

<script>
	export default {
		props: ['email', 'message'],
		computed: {
			emailLink() {
				return 'mailto:' + this.email;
			},
		},
	};
</script>

<style scoped>
	.request-item {
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 1rem;
		display: grid;
		gap: 0.5rem;
	}

	a {
		color: #3d008d;
		text-decoration: none;
		font-weight: bold;
	}

	a:hover,
	a:active {
		color: #8d007a;
	}
</style>

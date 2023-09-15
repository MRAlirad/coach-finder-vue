<template>
	<header>
		<h1>
			<router-link to="/">Find a Coach</router-link>
		</h1>
		<div>
			<router-link to="/coaches">All Coaches</router-link>
			<router-link to="/requests">Requests</router-link>
		</div>
	</header>
</template>

<style scoped>
	header {
		width: 100%;
		height: 5rem;
		background-color: #3d008d;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 5%;
	}

	header a {
		text-decoration: none;
		color: #f391e3;
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border: 1px solid transparent;
	}

	a:active,
	a:hover,
	a.router-link-active {
		border: 1px solid #f391e3;
	}

	h1 a {
		color: white;
	}

	h1 a:hover,
	h1 a:active,
	h1 a.router-link-active {
		border-color: transparent;
	}

	header div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>

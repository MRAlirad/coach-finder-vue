<template>
	<section class="coach-filter-section">
		<h2>Find Your Coach</h2>
		<div class="checkbox-box">
			<div class="filter-option">
				<input
					type="checkbox"
					id="frontend"
					checked
					@change="setFilter"
				/>
				<label for="frontend">Frontend</label>
			</div>
			<div class="filter-option">
				<input
					type="checkbox"
					id="backend"
					checked
					@change="setFilter"
				/>
				<label for="backend">Backend</label>
			</div>
			<div class="filter-option">
				<input
					type="checkbox"
					id="career"
					checked
					@change="setFilter"
				/>
				<label for="career">Career</label>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				filters: {
					frontend: true,
					backend: true,
					career: true,
				},
			};
		},
		emits: ['change-filter'],
		methods: {
			setFilter(event) {
				const inputId = event.target.id;
				const isActive = event.target.checked;
				const updatedFilters = {
					...this.filters,
					[inputId]: isActive,
				};
				this.filters = updatedFilters;
				this.$emit('change-filter', updatedFilters);
			},
		},
	};
</script>

<style scoped>
	.coach-filter-section {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
		display: grid;
		gap: 15px;
	}

	.checkbox-box {
		display: flex;
		gap: 1rem;
	}

	label {
		user-select: none;
		cursor: pointer;
	}

	h2 {
		margin: 0.5rem 0;
	}

	.filter-option {
		cursor: pointer;
	}

	.filter-option label,
	.filter-option input {
		vertical-align: middle;
	}

	.filter-option label {
		margin-left: 0.25rem;
	}

	.filter-option.active label {
		font-weight: bold;
	}
</style>

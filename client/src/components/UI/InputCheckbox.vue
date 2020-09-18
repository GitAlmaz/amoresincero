<template>
	<div class="input-checkbox">
		<input 
			type="checkbox"
			:name="name"
			:id="name"
			@input="$emit('input', $event.target.checked)"
		>
		<label :for="name"></label>
		<label v-if="subText" :for="name">{{ subText }}</label>
	</div>
</template>

<script>
export default {
	props: {
		subText: {
			type: String
		},
		name: {
			type: String
		},

	}
}
</script>

<style>

</style>
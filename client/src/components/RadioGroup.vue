<template>
	<div class="radio-group">
		<div class="radio-group__item"
			v-for="(item, index) in list" 
			:key="index"
		>
			<input type="radio" 
				:name="name"
				:id="item + index"
				@input="$emit('input', $event.target.value)"
				:value="item"
				:checked="index === 0 && true"
			>
			<label 
				:for="item + index"
			>
				{{item}}
			</label>
		</div>
		

	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => ['Radio1', 'Radio2']
		},
		name: {
			type: String
		}
	}
}
</script>

<style></style>

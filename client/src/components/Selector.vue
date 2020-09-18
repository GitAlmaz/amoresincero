<template>
	<div class="select-group" :ref="name">
		<div class="select-group__header" @click="toggleClass">
			<span :ref="name + '__placeholder'">{{ placeholder }}</span>
		</div>
		<div class="select-group__body">
			<div v-for="(item, index) in list" :key="index">
				<input type="radio" :name="name" :id="item + index" :value="item" @input="$emit('input', $event.target.value)" />
				<label :for="item + index" :data-value="item" @click="changePlaceholderName">
					{{ item }}
				</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => ['Item 1', 'Item 2']
		},
		name: {
			type: String
		},
		placeholder: {
			type: String,
			default: 'Select Placeholder'
		}
	},
	methods: {
		toggleClass(e) {
			this.$refs[`${this.name}`].classList.toggle('select-group--opened')
		},
		changePlaceholderName(e) {
			this.$refs[`${this.name}__placeholder`].innerHTML = e.currentTarget.dataset.value
		}
	}
}
</script>

<style></style>

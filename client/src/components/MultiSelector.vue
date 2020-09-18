<template>
	<div class="select-group" :ref="name">
		<div class="select-group__header" @click="toggleClass">
			<span :ref="name + '__placeholder'">{{ placeholder }}</span>
		</div>
		<div class="select-group__body">
			<div v-for="(item, index) in list" :key="index">
				<input
					type="checkbox"
					:value="item"
					:name="placeholder"
					:id="item + index"
					@input="$emit('input', checkedItems)"
					@click="toggleItem"
				/>
				<label :for="item + index">{{ item }}</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		list: {
			type: Array,
			default: () => ['Item 1', 'Item 2']
		},
		placeholder: {
			type: String,
			default: 'Multi Selector'
		}
	},
	data() {
		return {
			checkedItems: []
		}
	},
	methods: {
		toggleClass(e) {
			this.$refs[`${this.name}`].classList.toggle('select-group--opened')
		},
		toggleItem(e) {
			const value = e.currentTarget.value
			let exist = false
			for (const item of this.checkedItems) {
				if (item === value) {
					exist = true
					break
				}
			}
			if (exist) {
				const filtArr = this.checkedItems.filter(item => item !== value)
				this.checkedItems = filtArr
			} else {
				this.checkedItems.push(value)
			}
			if (this.checkedItems.length) {
				this.$refs[`${this.name}__placeholder`].innerHTML = ''
				for (const item of this.checkedItems) {
					this.$refs[`${this.name}__placeholder`].insertAdjacentText('beforeend', `${item} `)
				}
			} else {
				this.$refs[`${this.name}__placeholder`].innerHTML = this.placeholder
			}
		}
	}
}
</script>

<style></style>

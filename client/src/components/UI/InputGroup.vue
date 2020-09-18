<template>
	<div class="input-group">
		<input
			:type="type"
			:name="name"
			:id="id"
			@input="$emit('input', $event.target.value)"
			placeholder=" "
			:max="type === 'date' && max"
			:ref="type === 'tel' ? 'phoneMask' : date && 'dateMask'"
		/>
		<label :for="id">{{ placeholder }}</label>
	</div>
</template>

<script>
export default {
	name: 'InputGroup',
	props: {
		type: {
			type: String,
			default: 'text'
		},
		name: {
			type: String,
			default: ''
		},
		id: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		date: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		phoneInputHandler(elem) {
			if (!elem) return
			let str = '+7 '
			elem.addEventListener('focus', e => elem.value === '' && (elem.value = '+7 '))
			elem.addEventListener('blur', e => elem.value === '+7 ' && (elem.value = ''))
			elem.addEventListener('input', e => {
				if (e.inputType === 'deleteContentBackward') {
					if (elem.value.length === 2) {
						elem.value = str
					} else {
						str = str.slice(0, -1)
					}
				} else {
					const symbol = e.data.replace(/[^\d]/g, '')
					if (symbol.length && str.length < 16) {
						if (str.length === 6 || str.length === 10 || str.length === 13) str += ' '
						str += symbol
					}
				}
				elem.value = str
			})
		},
		dateInputHandler(elem) {
			if (!elem) return
			let str = ''
			elem.addEventListener('input', e => {
				if (e.inputType === 'deleteContentBackward') {
					str = str.slice(0, -1)
					elem.value = str
				} else {
					const symbol = e.data.replace(/[^\d]/g, '')
					if (symbol.length && elem.value.length < 11) {
						if (str.length === 2 || str.length === 5) str += '.'
						str += symbol
					}
					elem.value = str
				}
			})
		}
	},
	mounted() {
		this.phoneInputHandler(this.$refs.phoneMask)
		this.dateInputHandler(this.$refs.dateMask)
	}
}
</script>

<style></style>

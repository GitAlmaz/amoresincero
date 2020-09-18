<template>
	<div class="alert" v-if="alertShown">
		<img src="@/assets/img/icons/checked.svg" alt="">
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	computed: {
		...mapGetters(['alertShown'])
	}
}
</script>

<style lang="scss">
.alert {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 150px;
	height: 150px;
	background: rgba(255,255,255,.5);
	backdrop-filter: blur(5px);
	z-index: 27;
	border-radius: 10px;
	box-shadow: 0px 5px 20px -5px rgba(0,0,0,.5);
	margin-top: -75px;
	margin-left: -75px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: fadeInUp .4s ease-in backwards;
	img {
		width: 70%;
		height: 70%;
	}
}
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
<template>
	<section class="content-section content-section--home">
		<img src="@/assets/img/home-couple.png" alt="" />
		<img src="@/assets/img/home-couple-mobile.png" alt="" />
		<div class="content-section__hero">
			<h1>Amore Sincero</h1>
			<h2>International Marriage Agency</h2>
			<h3>{{ 'Home_Title' | localize }}</h3>
			<a href="">
				<img src="@/assets/img/icons/move-down.png" alt="" />
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Home',
	components: {}
}
</script>

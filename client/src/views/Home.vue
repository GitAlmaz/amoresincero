<template>
	<section class="content-section content-section--home" id="section-home">
		<img src="@/assets/img/home-couple.png" alt="" />
		<img src="@/assets/img/home-couple-mobile.png" alt="" />
		<div class="content-section__hero">
			<h1>Amore Sincero</h1>
			<h2>International Marriage Agency</h2>
			<h3>{{ 'Home_Title' | localize }}</h3>
			<!-- <a href="">
				<img src="@/assets/img/icons/move-down.png" alt="" />
			</a> -->
			<!-- <div> -->
				<!-- <img src="@/assets/img/icons/left-arrow.svg" alt="" class="left"> -->
				<!-- <p>
					{{ 'Hero_Swipe_Pages' | localize }}
				</p> -->
				<!-- <img src="@/assets/img/icons/right-arrow.svg" alt="" class="right"> -->
			<!-- </div> -->
		</div>
	</section>
</template>

<script>
export default {
	name: 'Home',
	components: {},
	data: () => ({
		
	})
}
</script>

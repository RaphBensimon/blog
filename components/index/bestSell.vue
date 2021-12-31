<template>
	<div class="best-sell">
		<h2>Meilleurs ventes d'ordinateur</h2>
		<div class="best-sell-items">
			<NuxtLink to="/" class="best-sell-item" v-for="(item, i) in bestSell" :key="i">
				<img :src="item.img" :alt="item.title">
				<button class="btn-secondary">
					<span>{{ item.title }}</span>
				</button>
			</NuxtLink>
		</div>
	</div>
</template>
<script>
export default {
	props : {
		bestSell : {
			required : true,
			type     : Array
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
.best-sell {
	width: 100%;
	overflow: hidden;
}
.best-sell-items {
	display: flex;
	width: 100%;
	overflow: hidden;
	gap: 10px;
}
.best-sell-item {
	width: 33%;
	min-width: 230px;
	height: 200px;
	overflow: hidden;
	position: relative;
	border-radius: 15px;
	cursor: pointer;
	transition: 0.3s;
	box-shadow: rgba($black, 0.1) 0px 4px 12px;
}

@keyframes fadeIn {
	0% {
		transform: translateX(500%);
	}
	100% {
		transform: translateX(0);
	}
}
.best-sell-item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: 0.5s;
}
.best-sell-item button {
	position: absolute;
	bottom: 10px;
	z-index: 2;
	left: 50%;
	transform: translateX(-50%);
	width: fit-content;
}

@media screen and (max-width: 778px) {
	.best-sell-items {
		max-width: 100%;
		padding-bottom: 5px;
		overflow-x: auto;
	}
}
</style>
<template>
	<div class="featured-post-skeleton">
		<div class="img skeleton" />
		<div class="meta-skeleton-container">
			<div class="text skeleton" />
			<div class="tag skeleton" />
			<div class="tag skeleton" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.featured-post-skeleton {
	display: flex;
	width: 100%;
	margin-bottom: 20px;
}
.meta-skeleton-container {
	width: calc(100% - 160px);
}
.img {
	width: 140px;
	margin-right: 20px;
	height: 100px;
}
.text {
	margin-bottom: 5px;
}
.tag {
	display: inline-block;
	width: 40px;
}
</style>
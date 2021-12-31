<template>
	<div class="article-skeleton">
		<div class="img skeleton" />
		<div class="link skeleton" />
		<div class="meta-container">
			<div class="avatar skeleton" />
			<div class="meta skeleton" />
		</div>
		<div class="text-container">
			<div class="text skeleton" v-for="i in new Array(3)" :key="i" />
		</div>
		<div class="button skeleton" />
	</div>
</template>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
.article-skeleton {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
}
.img {
	height: 300px;
}
.link {
	width: 80%;
	margin: 20px 0;
}
.meta-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.meta-container .meta {
	width: 200px;
}
.avatar {
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin-right: 10px;
}
.text-container {
	width: 100%;
	margin: 10px 0;
}
.text-container .text {
	margin-bottom: 5px;
}
.button {
	width: 100px;
	height: 35px;
}

@keyframes skeleton-animate-wave {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(100%);
	}
}
</style>
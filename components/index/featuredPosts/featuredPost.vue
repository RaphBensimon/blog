<template>
	<div class="featured-post">
		<div class="featured-post-img-container">
			<img class="featured-post-img" :src="post.img">
		</div>
		<div class="featured-meta-container">
			<NuxtLink to="/" class="featured-post-link">
				{{ post.title }}
			</NuxtLink>
			<div class="featured-tags-container">
				<div class="featured-tag" v-for="(tag, i) in post.tags" :key="i">
					<span>{{ tag }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props : {
		post : {
			required : true,
			type     : Object
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
.featured-post {
	display: flex;
	align-items: flex-start;
}
.featured-post-img-container {
	height: 100px;
    box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 24%);
	border-radius: 15px;
	overflow: hidden;
	margin-right: 20px;
	transition: 0.3s ease-in-out;
	&:hover {
		transform : scale(.95)
	}
}
.featured-post-img-container:hover .featured-post-img {
	transform: scale(1.15);
}
.featured-post-img {
	height: 100%;
	transition: 0.3s ease-in-out;
}
.featured-post-link {
	text-decoration: none;
	color: $black;
	font-weight: 500;
	position: relative;
	background-position: 0 bottom;
	background-image: linear-gradient(90deg,$primary,$primary);
	background-repeat: no-repeat;
	background-size: 0% 2px;
	transition: .3s cubic-bezier(.25,.8,.25,1);
	position: relative;
	top: 0;
	&:hover {
		background-size: 100% 2px;
		top: -2px;
		color: $primary;
	}
}
.featured-tags-container {
	display: flex;
}
.featured-tags-container .featured-tag {
	margin-right: 5px;
	padding: 5px 10px;
	font-size: 0.65rem;
	background: $gray;
	color: $white;
	border-radius: 15px;
}
</style>
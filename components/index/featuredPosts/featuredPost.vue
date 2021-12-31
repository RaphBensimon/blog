<template>
	<div class="featured-post">
		<NuxtLink :to="`/article/${post.slug}`" class="featured-post-img-container">
			<img class="featured-post-img" :src="post.featured_image" :alt="post.featured_image_alt">
		</NuxtLink>
		<div class="featured-meta-container">
			<NuxtLink :to="`/article/${post.slug}`" class="featured-post-link">
				{{ post.title }}
			</NuxtLink>
			<div class="featured-tags-container">
				<NuxtLink to="/" class="featured-tag" v-for="(tag, i) in post.tags" :key="i">
					<span>{{ tag.name }}</span>
				</NuxtLink>
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
	box-shadow: 0 6px 10px 0 rgb(0 0 0 / 24%);
	border-radius: 15px;
	overflow: hidden;
	margin-right: 20px;
	transition: 0.3s ease-in-out;
	&:hover {
		transform: scale(0.95);
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
	background-image: linear-gradient(90deg, $primary, $primary);
	background-repeat: no-repeat;
	background-size: 0% 2px;
	transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
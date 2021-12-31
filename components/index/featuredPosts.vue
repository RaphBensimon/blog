<template>
	<div class="featured-posts">
		<h3>Articles tendances</h3>
		<div class="posts-skeleton" v-if="loading">
			<FeaturedPostSkeleton v-for="index in new Array(5)" :key="index" />
		</div>
		<div class="posts" v-else>
			<FeaturedPost v-for="(post, i) in posts" :key="i" :post="post" />
		</div>
	</div>
</template>
<script>
import FeaturedPostSkeleton from './featuredPosts/featuredPostSkeleton.vue'
import FeaturedPost from './featuredPosts/featuredPost.vue'
export default {
	components : {
		FeaturedPost,
		FeaturedPostSkeleton
	},
	props      : {
		posts : {
			required : true,
			type     : Array
		},
		loading : {
			required : true,
			type     : Boolean
		}
	}
}
</script>
<style lang="scss" scoped>
.featured-posts {
	margin-left: 40px;
	width: 33.33%;
}

@media screen and (max-width: 1085px) {
	.featured-posts {
		width: 100%;
		margin: 0;
	}
}
</style>
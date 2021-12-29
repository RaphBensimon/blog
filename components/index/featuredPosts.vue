<template>
	<div class="featured-posts">
		<h3>Articles tendances</h3>
		<FeaturedPost v-for="(post, i) in posts" :key="i" :post="post" />
	</div>
</template>
<script>
import FeaturedPost from './featuredPosts/featuredPost.vue'
export default {
	components : { FeaturedPost },
	props      : {
		posts : {
			required : true,
			type     : Array
		}
	}
}
</script>
<style lang="scss" scoped>
.featured-posts {
    margin-left: 40px;
}
</style>
<template>
	<div class="index">
		<News :news="news" />
		<FeaturedPosts :posts="posts" />
	</div>
</template>

<script>
import Butter from 'buttercms'
const butter = Butter('b4fb78538d7c3776ad09b9c5f5b79737a62b8d5f')
import News from '@/components/index/news.vue'
import FeaturedPosts from '@/components/index/featuredPosts.vue'
export default {
	name       : 'IndexPage',
	components : {
		News,
		FeaturedPosts
	},
	data() {
		return {
			news  : [],
			posts : []
		}
	},
	created() {
		butter.post.list({
			page      : 1,
			page_size : 10
		}).then((res) => {
			this.news = res.data.data
			console.log(this.news[0])
		})
	}
}
</script>

<style lang="scss" scoped>
.index {
	display: flex;
}
</style>
<template>
	<div class="news">
		<h2>Nouveautés</h2>
		<Article v-for="(article, index) in news" :key="index" :article="article" />
	</div>
</template>
<script>
import Article from './news/article.vue'
export default {
	components : { Article },
	props      : {
		news : {
			required : true,
			type     : Array
		}
	}
}
</script>
<style lang="scss" scoped>
.news {
    width: 66.66%;
}
</style>
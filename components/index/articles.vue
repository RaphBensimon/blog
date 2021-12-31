<template>
	<div class="articles">
		<h2>Actualités</h2>
		<div class="articles-skeleton" v-if="loading">
			<ArticleSkeleton v-for="index in new Array(1)" :key="index" />
		</div>
		<div class="articles-list">
			<Article v-for="(article, index) in articles" :key="index" :article="article" />
		</div>
	</div>
</template>
<script>
import ArticleSkeleton from './articles/articleSkeleton.vue'
import Article from './articles/article.vue'
export default {
	components : {
		Article,
		ArticleSkeleton
	},
	props      : {
		articles : {
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
.articles-list {
	display: flex;
	gap: 20px;
}
</style>
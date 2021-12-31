<template>
	<div>
		test
	</div>
</template>
<script>
import butter from '@/utils/butter.js'
export default {
	data() {
		return { article : {} }
	},
	created() {
		this.loadArticle()
	},
	methods : {
		loadArticle() {
			butter.post.retrieve(this.$route.params.id)
				.then(res => {
					this.article = res.data
					console.log(this.article)
				}).catch(res => {
					console.log(res)
				})
		}
	}
}
</script>
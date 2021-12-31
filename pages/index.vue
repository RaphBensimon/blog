<template>
	<div class="index">
		<Sidebar :menus="menusLeft" />
		<div class="main-content-index">
			<BestSell :best-sell="bestSell" />
			<Articles :articles="articles" :loading="loading" />
		</div>
		<Sidebar :menus="menusRight" />
	</div>
</template>

<script>
import butter from '@/utils/butter.js'
import BestSell from '@/components/index/bestSell.vue'
import Sidebar from '@/components/index/sidebar.vue'
import Articles from '@/components/index/articles.vue'
export default {
	name       : 'IndexPage',
	components : {
		BestSell,
		Sidebar,
		Articles
	},
	data() {
		return {
			menusLeft : [
				{
					title : 'Ordinateur par type',
					items : [
						{
							label : 'Ordinateur portable',
							link  : 'test'
						},
						{
							label : 'Ordinateur de bureau',
							link  : 'test'
						},
						{
							label : 'Ordinatuer gamer',
							link  : 'test'
						},
						{
							label : 'Mini PC',
							link  : 'test'
						},
						{
							label : 'ChromeBook',
							link  : 'test'
						},
						{
							label : 'Ordinateur tablette',
							link  : 'test'
						}
					]
				},
				{
					title : 'Marques',
					items : [
						{
							label : 'Apple',
							link  : 'test'
						},
						{
							label : 'Google',
							link  : 'test'
						},
						{
							label : 'Microsoft',
							link  : 'test'
						},
						{
							label : 'Dell',
							link  : 'test'
						},
						{
							label : 'Asus',
							link  : 'test'
						},
						{
							label : 'HP',
							link  : 'test'
						},
						{
							label : 'Thomson',
							link  : 'test'
						},
						{
							label : 'Acer',
							link  : 'test'
						},
						{
							label : 'Lenovo',
							link  : 'test'
						},
						{
							label : 'Huawei',
							link  : 'test'
						}
					]
				}
			],
			menusRight : [
				{
					title : 'Ordinateur portables',
					items : [
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						}

					]
				},
				{
					title : 'Ordinateur GAMER',
					items : [
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						},
						{
							label : 'Aspirateurs avec sacs',
							link  : 'test'
						}

					]
				}
			],
			bestSell : [
				{
					title : 'Dell XPS',
					img   : 'https://images.frandroid.com/wp-content/uploads/2020/10/dell-xps-17-test-9.jpg',
					link  : 'dell-xps'
				},
				{
					title : 'Macbook M1',
					img   : `http://dyw7ncnq1en5l.cloudfront.net/test/15/157641/
					e3889c9d-macbook-pro-13-2020-apple-fait-sa-revolution-avec-son-processeur-m1.jpeg`,
					link  : 'macbook-m1'
				},
				{
					title : 'Microsoft Surface Pro',
					img   : `https://dyw7ncnq1en5l.cloudfront.net/optim/test/16/164809/02046f18-pc-portable-microsoft-
					surface-laptop-4-13-5-une-version-intel-elegante-mais-moins-performante-que-la-version-amd__
					w1280_wtmk.jpeg`,
					link  : 'microsoft-surface-pro'
				}
			],
			articles     : [],
			posts    : [],
			loading  : false
		}
	},
	created() {
		this.loading = true
		butter.post.list({
			page      : 1,
			page_size : 10
		}).then((res) => {
			this.articles = res.data.data
			this.loading = false
			console.log(this.news[0])
		})
	}
}
</script>

<style lang="scss" scoped>
.index {
	margin-top: 50px;
	display: flex;
	gap: 30px;
}
.main-content-index {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}

.main-content-index > * {
	margin-bottom: 20px	;
}
@media screen and (max-width: 1350px){
	.index {
		flex-direction: column;
		align-items: center;
	}
	.main-content-index {
		order: -1;
	}
	::v-deep .article {
		width: 50%;
	}
	::v-deep .sidebar{
		width: 100%;
	}
}

@media screen and (max-width: 875px){
	::v-deep .article {
		width: 100%;
	}
}
</style>
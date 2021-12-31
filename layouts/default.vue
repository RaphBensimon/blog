<template>
	<div>
		<Header />
		<main>
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/default/header'
import Footer from '@/components/default/footer'
export default {
	components : {
		Header,
		Footer
	},
	head       : {
		title : 'Meilleur Ordinateur | Le comparateur des ordinateurs',
		meta  : [
			{
				hid     : 'description',
				name    : 'description',
				content : `Guide d’achat ordinateur complet et avis d’experts pour choisir
				 le meilleur ordinateur pour votre besoin : ordinateur portable, ordinateur gamer, télétravail...`
			}
		]
	}
}
</script>
<style lang="scss">
@import '@/scss/import.scss';
main {
	max-width: 1300px;
	margin: 20px auto;
}
</style>
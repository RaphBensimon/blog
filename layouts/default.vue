<template>
	<div>
		<Header />
		<main>
			<Nuxt />
		</main>
	</div>
</template>
<script>
import Header from '@/components/default/header'
export default { components : { Header } }
</script>
<style lang="scss">
@import '@/scss/import.scss';
main {
	max-width: 1000px;
	margin: 50px auto;
}
</style>
<template>
	<header>
		<h1>
			<NuxtLink to="/">
				MeilleurOrdinateur<span class="color-primary">.</span>fr
			</NuxtLink>
		</h1>
		<Nav />
	</header>
</template>
<script>
import Nav from './header/nav.vue'
export default { components : { Nav } }
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
header {
	display : flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 20px;
}
h1 a {
	text-decoration: none;
	color: $black;
	display: inline-block;
	transition: 0.3s;
}
h1 {
	font-weight: 700;
	font-style: italic;
	margin: 40px 0;
	display: inline;
	position: relative;
	&:before {
			position: absolute;
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			background: $primary;
			top: 100%;
			left: 0;
			pointer-events: none;
			transform-origin: 50% 100%;
			transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
			clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
	}
	&:hover {
		&:before {
			transform: translate3d(0, 2px, 0) scale3d(1, 3, 1);
			clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
		}
		a {
			transform: translate3d(0, -2px, 0);
			color: $primary;
		}
		a span {
			color: $black;
		}
	}
}
@media screen and (max-width: 850px){
	header {
		align-items: flex-start;
	}
	h1 {
		margin: 0;
		width: fit-content;
	}
}
</style>
<template>
	<nav :class="{'open': open}">
		<ul>
			<li>
				<NuxtLink to="/">
					Accueil
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/t">
					Guide d'achat
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/t">
					Meilleur Ordinateur
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/test">
					Comparatif
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	props : {
		open : {
			required : true,
			type     : Boolean
		}
	},
	watch : {
		$route() {
			this.$emit('close-nav')
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
ul {
	display: flex;
}
li {
	margin: 5px 10px;
}
li a {
	position: relative;
	&:before {
		position: absolute;
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background: $primary;
		top: 100%;
		left: 0;
		pointer-events: none;
		transform-origin: 50% 100%;
		transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
		clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
	}
	&:hover,
	&.nuxt-link-exact-active {
		&:before {
			transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
			clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
		}

		transform: translate3d(0, -2px, 0);
		color: $primary;
	}
}
a {
	text-decoration: none;
	color: $gray;
	display: block;
	transition: 0.3s;
	transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

@media screen and (max-width: 545px) {
	nav {
		position: fixed;
		top: 0;
		left: -240px;
		bottom: 0;
		padding: 65px 20px;
		width: 180px;
		transition: 0.3s;
		background-color: $white;
		z-index: 4;
		box-shadow: 0 0 15px 0 rgb($black, 0.5);
	}
	nav.open {
		left: 0;
	}
	nav ul {
		display: flex;
		flex-direction: column;
	}
}
</style>
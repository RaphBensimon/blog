<template>
	<footer>
		<div>
			<h3>
				<NuxtLink to="/">
					MeilleurOrdinateur<span class="color-primary">.</span>fr
				</NuxtLink>
			</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam id nam iste ipsam velit amet
			</p>
			<span>© 2021, All Rights Reserved.</span>
		</div>
		<div>
			<h4>Liens utiles</h4>
			<NuxtLink to="/test">
				Contact
			</NuxtLink>
			<NuxtLink to="/test">
				A propos
			</NuxtLink>
			<NuxtLink to="/test">
				Blog
			</NuxtLink>
		</div>
		<div>
			<h4>Categorie</h4>
			<NuxtLink to="/test">
				Guide d'achat
			</NuxtLink>
			<NuxtLink to="/test">
				Meilleur Ordinateur
			</NuxtLink>
			<NuxtLink to="/test">
				Comparatif
			</NuxtLink>
		</div>
		<div>
			<h4>Categorie</h4>
			<NuxtLink to="/test">
				Guide d'achat
			</NuxtLink>
			<NuxtLink to="/test">
				Meilleur Ordinateur
			</NuxtLink>
			<NuxtLink to="/test">
				Comparatif
			</NuxtLink>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
footer {
	display: flex;
	margin: 0 auto;
	width: 90%;
	gap: 10px;
	padding: 50px 0;
	max-width: 1400px;
}
footer > div {
	width: 25%;
	display: flex;
	flex-direction: column;
}

@media screen and (max-width: 1000px) {
	footer {
		width: 100%;
		flex-direction: column;
	}
	footer > div {
		margin-bottom: 15px;
		width: 100%;
	}
}
a {
	position: relative;
	width: fit-content;
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
	&:hover {
		&:before {
			transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
			clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
		}

		transform: translate3d(0, -2px, 0);
		color: $primary;
	}
}
h4,
h3 {
	margin-bottom: 5px;
}
p {
	margin: 0;
}
</style>
<template>
	<nav>
		<ul>
			<li>
				<NuxtLink to="/">
					Home page
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/">
					Home page
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
ul {
    display: flex;
}
li {
    margin: 5px 10px;
}
li {
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
	&:hover {
		&:before {
			transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
			clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
		}
		a {
			transform: translate3d(0, -2px, 0);
			color: $primary;
		}
    }
}
a {
	text-decoration: none;
	color: $gray;
	display: block;
	transition: 0.3s;
	transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

@media screen and (max-width: 850px){
	nav {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
}
</style>
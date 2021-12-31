<template>
	<header>
		<h1>
			<NuxtLink to="/">
				MeilleurOrdinateur<span class="color-primary">.</span>fr
			</NuxtLink>
		</h1>
		<label class="hamburger" for="hamburger-checkbox">
			<input type="checkbox" id="hamburger-checkbox" v-model="openNav">
			<span />
			<span />
			<span />
		</label>
		<Nav :open="openNav" @close-nav="openNav = false" />
		<div class="overlay" :class="{'show': openNav}" @click="openNav = false" />
	</header>
</template>
<script>
import Nav from './header/nav.vue'
export default {
	components : { Nav },
	data() {
		return { openNav : false }
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20px 0;
	width: 100%;
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
	margin: 0;
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
.overlay {
	display: none;
}
.hamburger {
	cursor: pointer;
	width: 35px;
	display: none;
	position: absolute;
	top: 28px;
	left: 20px;
	input[type='checkbox']:checked ~ span:nth-of-type(1) {
		transform-origin: bottom;
		transform: rotateZ(45deg) translate(2px, -2px);
	}
	input[type='checkbox']:checked ~ span:nth-of-type(2) {
		transform-origin: top;
		transform: rotateZ(-45deg);
	}
	input[type='checkbox']:checked ~ span:nth-of-type(3) {
		transform-origin: bottom;
		width: 50%;
		transform: translate(16px, -3px) rotateZ(45deg);
	}
}
.hamburger input {
	display: none;
}
.hamburger > span {
	transition: 0.4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
	position: relative;
	content: '';
	display: block;
	height: 3px;
	margin: 5px 0;
	border-radius: 12px;
	background-color: $black;
	&:nth-of-type(1) {
		width: 50%;
	}
	&:nth-of-type(2) {
		width: 100%;
	}
	&:nth-of-type(3) {
		width: 75%;
	}
}

@media screen and (max-width: 545px) {
	.hamburger {
		display: block;
		z-index: 5;
	}
	.header-wrapper {
		width: 100%;
		max-width: 1000px;
		margin: 20px 60px;
	}
	.overlay {
		content: '';
		position: fixed;
		top: 0;
		transition: 0.5s opacity;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: $black;
		z-index: -999;
		opacity: 0;
		cursor: pointer;
	}
	.overlay.show {
		display: block;
		opacity: 0.5;
		z-index: 3;
	}
}

@media screen and (max-width: 1000px) {
	header {
		flex-direction: column;
	}
}

@media screen and (max-width: 518px) {
	h1 {
		font-size: 1.4rem;
	}
}
</style>
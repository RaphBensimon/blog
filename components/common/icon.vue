<template>
	<div
		v-html="require(`!html-loader!@/assets/icons/${icon.toLowerCase()}.svg`)"
		:class="`icon icon-${icon} ${size}`" />
</template>
<script>
export default {
	name  : 'SvgIcon',
	props : {
		icon : {
			type    : String,
			default : null
		},
		size : {
			type     : String,
			required : false,
			default  : 'md'
		}
	},
	methods : {
		removeFillRecursivly(el) {
			if(el.hasAttribute('fill') && el.getAttribute('fill') !== 'none') {
				el.removeAttribute('fill')
			}
			if(el.children.length) {
				for (let i = 0; i < el.children.length; i++) {
					const child = el.children[i]
					this.removeFillRecursivly(child)
				}
			}
		}
	},
	mounted() {
		if (this.$el.firstElementChild.nodeName === 'svg') {
			const svg = this.$el.firstElementChild
			this.removeFillRecursivly(svg)
			svg.setAttribute('height', '1.4em')
			svg.setAttribute('width', '1.4em')
			svg.classList.add('svg-class')
		}
	}
}
</script>
<style scoped>
.icon {
	display: inline-flex;
	fill: currentColor;
}
.icon.lg svg {
	height: 1.5rem;
	width: 1.5rem;
}
</style>
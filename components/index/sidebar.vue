<template>
	<div class="sidebar">
		<div class="sidebar-menu" v-for="(menu, i) in menus" :key="i">
			<h3>{{ menu.title }}</h3>
			<ul>
				<li v-for="(item, index) in menu.items" :key="index">
					<nuxt-link :to="item.link">
						{{ item.label }}
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props : {
		menus : {
			type     : Array,
			required : true

		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
.sidebar {
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: fit-content;
}
.sidebar-menu {
	border-radius: 8px;
	padding: 10px 20px;
	white-space: nowrap;
	border: 1px solid darken($light-gray, 5%);
}
a {
	padding: 10px 20px;
	display: block;
	padding-left: 0;
	transition: 0.3s;
	&:hover {
		color: $primary;
		&:after {
			background-color: $primary;
		}
	}
	&:after {
		content: '';
		transition: 0.3s;
		display: block;
		width: 100%;
		height: 1px;
		background-color: darken($light-gray, 5%);
	}
}
</style>
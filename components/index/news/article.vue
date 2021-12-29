<template>
	<article class="article">
		<div class="article-img-container">
			<img :src="article.featured_image" class="article-img">
		</div>
		<NuxtLink to="/" class="article-link">
			{{ article.title }}
		</NuxtLink>
		<div class="article-meta-container">
			<img :src="article.author.profile_image">
			<span>Par {{ article.author.first_name }}</span>
			•
			<span>{{ formatDate(article.created) }}</span>
		</div>
		<p>{{ article.summary }}</p>
		<button class="button-secondary">
			<span>Lire plus</span>
		</button>
	</article>
</template>
<script>
import moment from 'moment'
export default {
	props : {
		article : {
			required : true,
			type     : Object
		}
	},
	methods : {
		formatDate(date) {
			return moment(date).format('DD/MM/YYYY')
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';
.article {
	margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.article-img-container {
    width: 100%;
    box-shadow: 0px 10px 25px 4px rgb(23 25 32 / 21%);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    width: 100%;
    cursor: pointer;
    &:hover .article-img {
            transform: scale(1.1);
    }
}
.article-img {
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
    object-fit: cover;
}
.article-link {
    text-decoration: none;
    color: $black;
    font-weight: 500;
    font-size: 1.2rem;
    display: inline-block;
    position: relative;
    margin: 20px 0;
    transition: 0.3s;
    &:hover {
        color: $primary;
		transform: translate3d(0, -2px, 0);
		&:before {
			transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
			clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
		}
    }
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
			transition: clip-path 0.5s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
			clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
	}
}
.article-meta-container {
    display: flex;
    align-items: center;
}

.article-meta-container > * {
    margin: 0 5px;
}
.article-meta-container img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
p {
    text-align: center;
}
</style>
<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section class="about">
			<div class="container">
				<h1 class="title">About my blog:</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
					illum commodi rem quod autem, culpa error! Ad asperiores tempore
					impedit.
				</p>
				<Intro title="Intro" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
					illum commodi rem quod autem, culpa error! Ad asperiores tempore
					impedit.
				</p>
				<img src="@/assets/img/about.jpg" alt="" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
					illum commodi rem quod autem, culpa error! Ad asperiores tempore
					impedit.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
					illum commodi rem quod autem, culpa error! Ad asperiores tempore
					impedit.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
					illum commodi rem quod autem, culpa error! Ad asperiores tempore
					impedit.
				</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	head() {
		const title = 'About My SSR Blog'
		const descr = 'About My SSR Blog! With Nuxt.js'
		const type = 'site'
		return {
			title,
			meta: [
				{ hid: 'og:title', name: 'og:title', content: title },
				{ hid: 'description', name: 'description', content: descr },
				{ hid: 'og:description', name: 'og:description', content: descr },
				{ hid: 'og:type', name: 'og:type', content: type }
			]
		}
	}
}
</script>

<style lang="scss">
.about {
	h1 {
		text-align: center;
	}
	p {
		margin-bottom: 10px;
	}
}
</style>

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
import Intro from '@/components/UI/Intro.vue'

export default {
	components: {
		Intro
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

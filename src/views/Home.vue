<template>
    <div class="container-fluid p-0">
		<Features />
		<div class="container">
			<AboutSection />
		</div>
		<div class="container">
			<News />
		</div>
		<div class="container">
			<Clients />
		</div>
    </div>
</template>

<script>
	import { Vue, Component } from 'vue-property-decorator';

	import Slider from '@/components/Home/Slider.vue';
	import Features from '@/components/Home/Features.vue';
	import AboutSection from "@/components/Home/About";
	import News from '@/components/Home/News.vue';
	import Reviews from '@/components/Home/Reviews';
	import Clients from "@/components/Home/Clients";

	@Component({
		components: {
		    Slider,
			Features,
            AboutSection,
			News,
            Reviews,
			Clients,
		}
	})
	export default class Home extends Vue{


	}
</script>

<style scoped>

</style>

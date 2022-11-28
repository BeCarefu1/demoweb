<template>
	<div id="app">
		<div class="container">
			<div class="headerWrapper">
				<div class="headerLogo">
					<a href="https://kursufa.ru">
						<img src="@/assets/logo.png" width="200px"/>
					</a>
				</div>
				<div class="headerPhone">
					<PhoneHeader class="ml-3"/>
				</div>
				<div class="headerButton" v-on:click="goToContacts">
					<OutlineButton label="Задать вопрос" class="mr-5" />
				</div>
			</div>
			<hr class="mb-0"/>
			<MainMenu class="menu-component"/>
		</div>
		<Slider />
		<router-view></router-view>
		<Footer class="mt-3"/>
	</div>
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';

	import MainMenu from '@/components/MainMenu.vue';
	import OutlineButton from '@/components/Common/OutlineButton.vue';
	import PhoneHeader from "@/components/Common/PhoneHeader.vue";
	import Footer from '@/components/Common/Footer.vue';
	import Slider from "@/components/Home/Slider.vue";

	import Loader from "@/components/Common/Loader.vue";
	import Empty from "@/components/Common/Empty.vue";
	Vue.component("Loader", Loader);
	Vue.component("Empty", Empty);

	@Component({
		components:{
            Slider,
            MainMenu,
		    OutlineButton,
			PhoneHeader,
            Footer,
		}
	})
	export default class App extends Vue {
        goToContacts(){
            this.$router.push("/page/contacts");
		}
	}
</script>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap');

	body {
		padding: 0;
		margin: 0;
	}

	#app {
		font-family: 'Manrope', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 0;
		margin: 0;
		color: #000000;
	}

	.header{
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.headerWrapper {
		display: grid;
		grid-template-columns: 2fr 1fr 190px;
		grid-gap: 10px;
		padding: 0.5rem;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.headerWrapper > div {
		display: flex;
		align-items: center;
	}

	.headerLogo{
		grid-area: 1 / 1 / 2 / 2;
	}

	.headerPhone{
		grid-area: 1 / 2 / 2 / 3;
		padding-top: 8px;
	}

	.headerButton{
		grid-area: 1 / 3 / 2 / 4;
		padding-bottom: 5px;
		padding-right: 5px;
	}

	.headerButton > div{
		width: 100%;
		margin: 0 30px;

	}

	/* header break points */
	@media (max-width: 992px) {
		.headerText{
			visibility: hidden;
		}
		.headerPhone{
			grid-area: 1 / 2 / 2 / 4;
		}
	}

	@media (max-width: 576px) {
		.headerWrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			margin-top: 20px;
			margin-bottom: 20px;
		}

		.headerLogo { grid-area: 1 / 1 / 2 / 2; }
		.headerText {
			grid-area: 1 / 2 / 2 / 3;
			visibility: visible;
		}
		.headerPhone { grid-area: 2 / 1 / 3 / 2; }
		.headerButton { grid-area: 2 / 2 / 3 / 3; }
	}

	.menu-component{
		margin-bottom: 1px;
	}
</style>

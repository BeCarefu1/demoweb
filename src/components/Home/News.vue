<template>
	<div>
		<TextHeader text="Новости" />
		<Loader v-if="loadingState" />
		<div v-else class="parent">
			<div class="div1" v-on:click="slidePrev">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px"
					 height="20px" viewBox="0 0 13.99 8.62" style="enable-background:new 0 0 13.99 8.62;" xml:space="preserve" >
					<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="7376.7397" y1="7547.3438" x2="7385.4727" y2="7547.3438" gradientTransform="matrix(0.0226 -0.9997 -0.9997 -0.0226 7385.3145 7554.4756)">
						<stop  offset="0" style="stop-color:#54595D"/>
						<stop  offset="0.3232" style="stop-color:#616363"/>
						<stop  offset="1" style="stop-color:#79766D"/>
					</linearGradient>
					<polyline class="st0" points="0,8.58 0.01,3.74 7.01,0 13.99,3.78 13.97,8.62 7,4.84 0,8.58 "/>
				</svg>
			</div>
			<div class="div2" v-on:click="slideNext">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px"
					 height="20px" viewBox="0 0 13.99 8.62" style="enable-background:new 0 0 13.99 8.62;" xml:space="preserve" class="clickable">
					<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="7376.7397" y1="7547.3438" x2="7385.4727" y2="7547.3438" gradientTransform="matrix(0.0226 -0.9997 -0.9997 -0.0226 7385.3145 7554.4756)">
						<stop  offset="0" style="stop-color:#54595D"/>
						<stop  offset="0.3232" style="stop-color:#616363"/>
						<stop  offset="1" style="stop-color:#79766D"/>
					</linearGradient>
					<polyline class="st0" points="0,8.58 0.01,3.74 7.01,0 13.99,3.78 13.97,8.62 7,4.84 0,8.58 "/>
				</svg>
			</div>
			<div class="div3"> </div>
			<div class="div4">
				<hooper :itemsToShow="3" vertical ref="hooper" v-if="items && items.length" :infiniteScroll="true">
					<slide v-for="(item, indx) in items" :key="indx" :index="indx">
						<h3 class="mb-0">{{ item.value.Date }}</h3>
						<span>{{ item.value.Text }}</span>
					</slide>
				</hooper>
				<Empty v-else />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import { Vue, Component, Mixins } from 'vue-property-decorator';

	import TextHeader from '@/components/Common/TextHeader.vue';
    import {Controller} from "@/plugins/Controller";
    import BaseComponent from "@/plugins/BaseComponent";

    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

	@Component({
		components:{
		    TextHeader,
            Hooper,
			Slide,
		}
	})
	export default class News extends Mixins(BaseComponent) {
        private items: any[] = [];
        private controller: Controller = new Controller();

        mounted(){
            this.showLoader();
            this.controller.GetNews()
                .then(this.gotData)
                .catch(this.hideLoader)
        }

        gotData(response:any){
            this.hideLoader()
            this.items = response?.data;
        }

        slideNext(){
			(this.$refs.hooper as any).slideNext()
		}

		slidePrev(){
            (this.$refs.hooper as any).slidePrev()
		}
	}
</script>

<style scoped>
	.block {
		padding-left: 200px;
	}

	.newsControl {
		border-right: 1px solid rgb(204, 203, 196);
	}

	.parent {
		display: grid;
		grid-template-columns: 20px 1fr;
		grid-template-rows: 20px 1fr 20px;
		grid-column-gap: 40px;
		grid-row-gap: 0px;
		margin-left: 35px;
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 3 / 1 / 4 / 2;
		transform: rotate(180deg);
		padding-right: 26px;
	}
	.div3 {
		grid-area: 1 / 2 / 4 / 3;

		border-left: 3px solid rgba(0,0,0,0.6);
	}
	.div4 {
		grid-area: 2 / 2 / 3 / 3;
		padding-left: 40px;
	}

	.st0{
		opacity:0.6;
		fill-rule:evenodd;
		clip-rule:evenodd;
		cursor: pointer;
		fill:#000000;
	}

	.st0:hover{
		fill: #E95C27;
	}

</style>
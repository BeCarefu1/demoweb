<template>
	<Loader v-if="loadingState" />
	<hooper v-else class="bannerHooper"  :infiniteScroll="true" :playSpeed="2000" ref="hooper">
		<template v-for="item in items" >
			<slide class="bannerSlide" >
				<div class="jumbotron jumbotron-fluid bannerJumbotron mt-0" :style="`background-image: url(${getImageUrl(item)});`">

					<div class="container h-100 visible-small">
						<div class="parent ">
							<div ></div>
							<div class="bannerContent">
								<h1 class="bannerText" v-html="item.value.Title"></h1>
							</div>
						</div>
					</div>
					<div class="parent visible-large h-100 ">
						<div ></div>
						<div class="bannerContent">
							<h1 class="bannerText  pr-5" v-html="item.value.Title"></h1>
						</div>
					</div>
				</div>
			</slide>
		</template>

		<hooper-pagination slot="hooper-addons"></hooper-pagination>
	</hooper>
</template>

<script lang="ts">
    import {Vue, Component, Mixins, Prop, Watch} from 'vue-property-decorator';
	import Loader from '@/components/Common/Loader.vue';
    import BaseComponent from "@/plugins/BaseComponent";
    import { Controller} from "@/plugins/Controller";
    import {AxiosResponse} from "axios";

    import { Hooper, Slide, Pagination as HooperPagination, } from 'hooper';
    import {Endpoints} from "@/plugins/endpoints";

    @Component({
		components:{
		    Loader,
            Hooper,
			Slide,
            HooperPagination
        }
	})
	export default class SliderPage extends Mixins(BaseComponent) {
        @Prop()
		pageUrl: string;

        private controller: Controller = new Controller();
	    private items: any[] = [];

        mounted(){
            this.getItem();
		}

		getItem(){
            this.showLoader();
            this.controller.GetBanner().then(this.gotItem);
		}

		gotItem(response: AxiosResponse){
            this.items = [];
            this.items = response.data;
            this.hideLoader();
            this.pageUrlHandler();
		}

		getImageUrl(item: any): string{
            return Endpoints.File_Download(JSON.parse(item.value.Image).id);
		}

        @Watch('$route', { immediate: true, deep: true })
		pageUrlHandler(){
            if(this.$route.name == "PageViewer"){
                let index = this.items.findIndex(i => i.value.URL == this.$route.params.identifier);
                if(index != -1){
					(this.$refs.hooper as any).slideTo(index);
				}
                else{
					(this.$refs.hooper  as any).slideTo(0);
				}

			}

		}

	}
</script>

<style scoped>
	.baseContainer{
		max-height: 400px;
		height: 400px;
	}

	.bannerHooper{
		max-height: 400px;
		height: 400px;
	}

	.bannerHooper:focus{
		outline: none;
	}

	.bannerSlide{
		max-height: 400px;
		height: 400px;
		overflow: hidden;
	}

	.bannerJumbotron{
		max-height: 400px;
		height: 400px;
		background-size: cover;
		background-position: center, center;
		box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);
	}

	.bannerContent{
		display: flex;
		text-align: right;
	}

	.bannerText{
		font-size: 29px;
		color: white;
		align-self: flex-end;
		text-transform: uppercase !important;
		width: 100%;
		padding-bottom: 40px;
		font-family: 'Manrope Regular', sans-serif;
		font-weight: normal;
	}



	.parent {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		height: 100%;
	}

	.visible-large{
		visibility: hidden;
	}

	@media (min-width: 1200px){
		.visible-large{
			visibility: visible;
		}

		.visible-small{
			visibility: hidden;
			max-height: 0px;
			height: 0px;
		}
	}
</style>
<style>
	.hooper-indicator{
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='40px' viewBox='0 0 10.55 16.99' style='enable-background:new 0 0 10.55 16.99;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bopacity:0.88;fill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bopacity:0.88;fill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='0' y1='8.493' x2='10.5461' y2='8.493'%3E%3Cstop offset='0' style='stop-color:%2354595D'/%3E%3Cstop offset='0.3232' style='stop-color:%23616363'/%3E%3Cstop offset='1' style='stop-color:%2379766D'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='6.17,0.12 0.33,0 4.7,8.53 0,16.87 5.84,16.99 10.55,8.64 '/%3E%3C/svg%3E%0A");
		background-repeat: no-repeat;
		background-color: transparent;
		width: 20px;
		height: 40px;
		margin: 0 3px;
	}

	.hooper-indicator:hover{
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='40px' viewBox='0 0 14.44 23.25' style='enable-background:new 0 0 14.44 23.25;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='-1576.1211' y1='1886.2856' x2='-1558.1078' y2='1886.2856' gradientTransform='matrix(0.8702 0.4927 -0.4927 0.8702 2297.3264 -857.6364)'%3E%3Cstop offset='0.6457' style='stop-color:%23E95C27'/%3E%3Cstop offset='0.7566' style='stop-color:%23EA642E'/%3E%3Cstop offset='0.9268' style='stop-color:%23EE7942'/%3E%3Cstop offset='1' style='stop-color:%23F0854C'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='8.45,0.16 0.46,0 6.44,11.67 0,23.09 7.99,23.25 14.44,11.83 '/%3E%3C/svg%3E%0A");
		background-color: transparent;
	}

	.hooper-indicator:focus{
		outline: none;
	}

	.hooper-indicator.is-active{
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='40px' viewBox='0 0 14.44 23.25' style='enable-background:new 0 0 14.44 23.25;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='-1576.1211' y1='1886.2856' x2='-1558.1078' y2='1886.2856' gradientTransform='matrix(0.8702 0.4927 -0.4927 0.8702 2297.3264 -857.6364)'%3E%3Cstop offset='0.6457' style='stop-color:%23E95C27'/%3E%3Cstop offset='0.7566' style='stop-color:%23EA642E'/%3E%3Cstop offset='0.9268' style='stop-color:%23EE7942'/%3E%3Cstop offset='1' style='stop-color:%23F0854C'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='8.45,0.16 0.46,0 6.44,11.67 0,23.09 7.99,23.25 14.44,11.83 '/%3E%3C/svg%3E%0A");
		background-color: transparent;
	}
</style>
<template>
	<div v-if="visible">
		<Loader v-if="loadingState" />
		<div class="jumbotron jumbotron-fluid bannerJumbotron mt-0" :style="`background-image: url(${getImageUrl(data.Image)});`">
			<div class="container">
				<div class="row ">
					<div class="col-xl">
						<div class="bannerLink" v-on:click="clickItem" v-if="!!data.Link">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px"
								 height="80px" viewBox="0 0 47.47 49.27" style="enable-background:new 0 0 47.47 49.27;" xml:space="preserve">
								<defs>
</defs>
								<g>
	<polygon class="st0" points="37.77,11.75 26.02,0 0,0 0,48.68 37.77,48.68 	"/>
									<g class="st1">
		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="7.5537" y1="18.4646" x2="30.2147" y2="18.4646">
			<stop  offset="0" style="stop-color:#474747"/>
			<stop  offset="0.6451" style="stop-color:#262222"/>
			<stop  offset="1" style="stop-color:#191313"/>
		</linearGradient>
										<path class="st3" d="M8.39,19.3h20.98c0.46,0,0.84-0.38,0.84-0.84c0-0.46-0.38-0.84-0.84-0.84H8.39c-0.46,0-0.84,0.38-0.84,0.84
			C7.55,18.93,7.93,19.3,8.39,19.3z"/>
										<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="7.5537" y1="11.7502" x2="17.6253" y2="11.7502">
			<stop  offset="0" style="stop-color:#474747"/>
											<stop  offset="0.6451" style="stop-color:#262222"/>
											<stop  offset="1" style="stop-color:#191313"/>
		</linearGradient>
										<path class="st3" d="M8.39,12.59h8.39c0.46,0,0.84-0.38,0.84-0.84s-0.38-0.84-0.84-0.84H8.39c-0.46,0-0.84,0.38-0.84,0.84
			S7.93,12.59,8.39,12.59z"/>
										<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="7.5537" y1="25.1789" x2="30.2147" y2="25.1789">
			<stop  offset="0" style="stop-color:#474747"/>
											<stop  offset="0.6451" style="stop-color:#262222"/>
											<stop  offset="1" style="stop-color:#191313"/>
		</linearGradient>
										<path class="st4" d="M29.38,24.34H8.39c-0.46,0-0.84,0.38-0.84,0.84c0,0.46,0.38,0.84,0.84,0.84h20.98c0.46,0,0.84-0.38,0.84-0.84
			C30.21,24.71,29.84,24.34,29.38,24.34z"/>
										<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="7.5537" y1="31.8933" x2="30.2147" y2="31.8933">
			<stop  offset="0" style="stop-color:#474747"/>
											<stop  offset="0.6451" style="stop-color:#262222"/>
											<stop  offset="1" style="stop-color:#191313"/>
		</linearGradient>
										<path class="st5" d="M29.38,31.05H8.39c-0.46,0-0.84,0.38-0.84,0.84s0.38,0.84,0.84,0.84h20.98c0.46,0,0.84-0.38,0.84-0.84
			S29.84,31.05,29.38,31.05z"/>
										<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="7.5537" y1="38.6077" x2="30.2147" y2="38.6077">
			<stop  offset="0" style="stop-color:#474747"/>
											<stop  offset="0.6451" style="stop-color:#262222"/>
											<stop  offset="1" style="stop-color:#191313"/>
		</linearGradient>
										<path class="st6" d="M29.38,37.77H8.39c-0.46,0-0.84,0.38-0.84,0.84c0,0.46,0.38,0.84,0.84,0.84h20.98c0.46,0,0.84-0.38,0.84-0.84
			C30.21,38.14,29.84,37.77,29.38,37.77z"/>
	</g>
									<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="26.0182" y1="5.8751" x2="37.7684" y2="5.8751">
		<stop  offset="0" style="stop-color:#474747"/>
										<stop  offset="0.6451" style="stop-color:#262222"/>
										<stop  offset="1" style="stop-color:#191313"/>
	</linearGradient>
									<polygon class="st7" points="26.02,0 26.02,11.75 37.77,11.75 	"/>
									<g>
		<polygon class="st8" points="29.48,41.31 29.48,41.31 27.81,47.43 31.71,43.53 		"/>
										<path class="st9" d="M45.64,29.6l-1.05-1.05c-0.65-0.65-1.71-0.65-2.36,0l-3.01,3.01l2.22,2.22L45.64,29.6z"/>

										<rect x="28.58" y="35.97" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.1586 36.0772)" class="st10" width="13.78" height="3.15"/>
										<polygon class="st11" points="34.22,46.06 34.23,46.05 31.71,43.53 27.81,47.43 27.7,47.84 		"/>
										<path class="st12" d="M43.98,36.31l3.01-3.01c0.65-0.65,0.65-1.71,0-2.36l-1.34-1.34l-4.18,4.18L43.98,36.31z"/>

										<rect x="30.95" y="38.13" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -17.1428 38.4512)" class="st13" width="13.78" height="3.57"/>
										<path class="st14" d="M27.1,49.27c-0.21,0-0.43-0.08-0.59-0.25c-0.33-0.33-0.33-0.86,0-1.19l1.85-1.85c0.33-0.33,0.86-0.33,1.19,0
			c0.33,0.33,0.33,0.86,0,1.19l-1.85,1.85C27.53,49.19,27.32,49.27,27.1,49.27z"/>
	</g>
</g>
</svg>

						</div>
					</div>
					<div class="col-xl bannerContent">
						<h1 class="bannerText">{{ data.Text }}</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Vue, Component, Mixins, Prop, Watch} from 'vue-property-decorator';
	import Loader from '@/components/Common/Loader.vue';
    import BaseComponent from "@/plugins/BaseComponent";
    import { Endpoints } from "@/plugins/endpoints";
    import { BannerData } from "@/models/BannerData";

    @Component({
		components:{
		    Loader,
        }
	})
	export default class Slider extends Mixins(BaseComponent) {
	    private visible: boolean = false;

	    @Prop()
		data: BannerData;

	    @Watch("data", { immediate:  true })
	    handleDataChange(){
	        if(this.data && this.data.Text && this.data.Image){
	            this.visible = true;
			}
	        else{
	            this.visible = false;
			}
		}

		getImageUrl(item: any): string{
            return Endpoints.File_Download(JSON.parse(item).id);
		}

        clickItem(){
            window.location.href = this.data.Link;
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

	.bannerSlide{
		max-height: 400px;
		height: 400px;
		overflow: hidden;
	}

	.bannerJumbotron{
		max-height: 400px;
		height: 400px;
		background-size: cover;
	}

	.bannerContent{
		text-align: right;
		margin-top: 300px;
		padding-right: 40px;
	}

	.bannerText{
		font-size: 36px;
		color: white;
	}

	.bannerLink{
		position: absolute;
		bottom: 30px;
		left: 30px;
		min-width: 80px;
		min-height: 80px;
		cursor: pointer;
	}
	.st0{opacity:0.3;fill:#DDDDD9;}
	.st1{opacity:0.8;}
	.st2{opacity:0.9;fill:url(#SVGID_1_);}
	.st3{opacity:0.9;fill:url(#SVGID_2_);}
	.st4{opacity:0.9;fill:url(#SVGID_3_);}
	.st5{opacity:0.9;fill:url(#SVGID_4_);}
	.st6{opacity:0.9;fill:url(#SVGID_5_);}
	.st7{opacity:0.7;fill:url(#SVGID_6_);}
	.st8{opacity:0.7;fill:#EDDCC7;}
	.st9{opacity:0.7;fill:#D75A4A;}
	.st10{opacity:0.7;fill:#F29C21;}
	.st11{opacity:0.7;fill:#D6C4B1;}
	.st12{fill:#A34740;}
	.st13{opacity:0.7;fill:#E18C25;}
	.st14{opacity:0.7;fill:#5E5E5E;}
	.st15{opacity:0.9;fill:url(#SVGID_7_);}
	.st16{opacity:0.9;fill:url(#SVGID_8_);}
	.st17{opacity:0.9;fill:url(#SVGID_9_);}
	.st18{opacity:0.9;fill:url(#SVGID_10_);}
	.st19{opacity:0.9;fill:url(#SVGID_11_);}
	.st20{opacity:0.7;fill:url(#SVGID_12_);}
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

	.hooper-indicator.is-active{
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='40px' viewBox='0 0 14.44 23.25' style='enable-background:new 0 0 14.44 23.25;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='-1576.1211' y1='1886.2856' x2='-1558.1078' y2='1886.2856' gradientTransform='matrix(0.8702 0.4927 -0.4927 0.8702 2297.3264 -857.6364)'%3E%3Cstop offset='0.6457' style='stop-color:%23E95C27'/%3E%3Cstop offset='0.7566' style='stop-color:%23EA642E'/%3E%3Cstop offset='0.9268' style='stop-color:%23EE7942'/%3E%3Cstop offset='1' style='stop-color:%23F0854C'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='8.45,0.16 0.46,0 6.44,11.67 0,23.09 7.99,23.25 14.44,11.83 '/%3E%3C/svg%3E%0A");
		background-color: transparent;
	}
</style>
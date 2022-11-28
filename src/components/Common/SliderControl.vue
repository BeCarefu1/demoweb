<template>
	<div class="row justify-content-center w-100" v-if="size && size > 0">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px"
			 height="30px" viewBox="0 0 14.44 23.25" style="enable-background:new 0 0 14.44 23.25;" xml:space="preserve"
			v-for="(n, index) in parseInt(size)" class="clickable" v-on:click="setSlide(index)"
		>
			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-1576.1211" y1="1886.2856" x2="-1558.1078" y2="1886.2856" gradientTransform="matrix(0.8702 0.4927 -0.4927 0.8702 2297.3264 -857.6364)">
				<stop  offset="0.6457" style="stop-color:#E95C27"/>
				<stop  offset="0.7566" style="stop-color:#EA642E"/>
				<stop  offset="0.9268" style="stop-color:#EE7942"/>
				<stop  offset="1" style="stop-color:#F0854C"/>
			</linearGradient>
			<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="8.493" x2="10.5461" y2="8.493">
				<stop  offset="0" style="stop-color:#54595D"/>
				<stop  offset="0.3232" style="stop-color:#616363"/>
				<stop  offset="1" style="stop-color:#79766D"/>
			</linearGradient>
			<polygon points="8.45,0.16 0.46,0 6.44,11.67 0,23.09 7.99,23.25 14.44,11.83 " class="shev" :class="{active: index == activeTab}"/>
		</svg>
	</div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from "vue-property-decorator";

	@Component({})
	export default class SliderControl extends Vue{
	    @Prop()
		size: number;

	    @Prop()
		active: number;

	    @Watch("active")
		activeTabHandler(){
	        if(this.active){
                this.activeTab = this.active;
            }
		}

	    private activeTab: number = 0;

	    setSlide(index: number){
	        if(index > this.size){
	            this.activeTab = this.size;
	            return;
			}

	        this.activeTab = index;

	        this.$emit("change", this.activeTab);
		}

	}
</script>

<style scoped>
	.clickable{
		cursor: pointer;
	}

	.shev{
		opacity:0.88;
		fill-rule:evenodd;
		clip-rule:evenodd;
		fill:url(#SVGID_2_);
	}
	.shev:hover{
		fill:url(#SVGID_1_);
	}

	.active{
		fill:url(#SVGID_1_);
	}
</style>
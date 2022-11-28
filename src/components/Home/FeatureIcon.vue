<template>
	<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48.93px"
		 height="49.67px" viewBox="0 0 48.93 49.67" style="enable-background:new 0 0 48.93 49.67;" xml:space="preserve">
		<g>
			<path class="st0" d="M9.79,12.97c-2.7,0-4.89-2.19-4.89-4.89c0-2.7,2.19-4.89,4.89-4.89c2.7,0,4.89,2.19,4.89,4.89
				C14.68,10.78,12.49,12.97,9.79,12.97z M9.79,4.82c-1.8,0-3.26,1.46-3.26,3.26c0,1.8,1.46,3.26,3.26,3.26c1.8,0,3.26-1.46,3.26-3.26
				C13.05,6.28,11.59,4.82,9.79,4.82z"/>
			<path class="st0" d="M29.36,35.81v4.89h-8.97V29.51l-4.89-1.63V19.5h7.34c2.25,0,4.07-1.83,4.08-4.08v-1.63H4.08
			C1.83,13.79,0,15.62,0,17.87v8.97c0,1.35,1.1,2.45,2.45,2.45h1.63v14.68H0v5.71h1.63v-4.08h11.42v4.08h1.63v-7.34h14.68v7.34h1.63
			V37.44H47.3v12.23h1.63V35.81H29.36z M4.08,18.68v8.97H2.45c-0.45,0-0.82-0.37-0.82-0.82v-8.97c0-1.35,1.1-2.45,2.45-2.45h21.2
			c0,1.35-1.1,2.45-2.45,2.45h-8.97v11.19l4.89,1.63V40.7h-2.45v-8.72l-8.16-3.06v15.04H5.71V18.68H4.08z M13.05,40.7v3.26H9.79
			V31.28l4.89,1.83v7.59H13.05z"/>
			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="31.1607" y1="16.6805" x2="47.1285" y2="16.6805">
				<stop  offset="0.6457" style="stop-color:#E95C27"/>
				<stop  offset="0.7566" style="stop-color:#EA642E"/>
				<stop  offset="0.9268" style="stop-color:#EE7942"/>
				<stop  offset="1" style="stop-color:#F0854C"/>
			</linearGradient>
			<path class="st1" d="M35.88,33.36h6.52V12.97h4.72L39.14,0l-7.98,12.97h4.72V33.36z M34.08,11.34l5.06-8.23l5.06,8.23h-3.43v20.39h-3.26V11.34H34.08z"/>
		</g>
	</svg>

</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class FeatureIcon extends Vue{
        @Prop()
		icon: string;
        
	}
</script>

<style scoped>
	.st0{fill:#FFFFFF;}
	.st1{fill:url(#SVGID_1_);}
	.st2{fill:url(#SVGID_2_);}
</style>
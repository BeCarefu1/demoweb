<template>
	<div>
		<div class="container">
			<TextHeader text="ПО АИИС КУЭ «КУРС»" hideUnderline/>
		</div>

		<SoftwareVideo />

		<SoftwareGallery class="p-3 px-4"/>

		<div class="container">
			<TextHeader text="ЛИЧНЫЙ КАБИНЕТ" hideUnderline/>
			<p class="indent">WEB-Кабинет предоставляет абоненту данные с приборов учёта с помощью интенет - браузера на любых
				устройствах с поддержкой web - интерфейса.</p>
			<p class="indent">В программном обеспечении предусмотрен автоматический экспорт показаний полезного отпуска в
				Энергосбытовую компанию.</p>
		</div>

		<div class="container text-center mb-5">
			<a href="http://aiiscue.kursufa.ru" rel="noopener noreferrer nofollow">
				<img class="scale" src="data:image/png;base64,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">
			</a>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue} from "vue-property-decorator";
	import TextHeader from "@/components/Common/TextHeader.vue";
	import SoftwareVideo from '@/components/Software/SoftwareVideo.vue';
	import SoftwareGallery from "@/components/Software/SoftwareGaller.vue";
	@Component({
		components: {
		    TextHeader,
            SoftwareVideo,
            SoftwareGallery,
		}
	})
	export default class SoftwarePage extends Vue{


	}
</script>

<style scoped>
	ul {
		list-style-type: none;
		list-style-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='13px' height='13px' viewBox='0 0 6.03 9.71' style='enable-background:new 0 0 6.03 9.71;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bopacity:0.95;fill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bopacity:0.95;fill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='0' y1='4.8548' x2='6.0284' y2='4.8548'%3E%3Cstop offset='0' style='stop-color:%2354595D'/%3E%3Cstop offset='0.3232' style='stop-color:%23616363'/%3E%3Cstop offset='1' style='stop-color:%2379766D'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='3.53,0.07 0.19,0 2.69,4.87 0,9.64 3.34,9.71 6.03,4.94 '/%3E%3C/svg%3E%0A");
	}

	ul::before{
		content: "";
		color: #E95C27;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='6.03px' height='9.71px' viewBox='0 0 6.03 9.71' style='enable-background:new 0 0 6.03 9.71;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bopacity:0.95;fill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bopacity:0.95;fill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='0' y1='4.8548' x2='6.0284' y2='4.8548'%3E%3Cstop offset='0' style='stop-color:%2354595D'/%3E%3Cstop offset='0.3232' style='stop-color:%23616363'/%3E%3Cstop offset='1' style='stop-color:%2379766D'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='3.53,0.07 0.19,0 2.69,4.87 0,9.64 3.34,9.71 6.03,4.94 '/%3E%3C/svg%3E%0A");
	}

	u{
		font-weight: 700;
		border-bottom: 2px solid #e95c27;
		text-decoration: none;
	}

	.indent{
		text-indent: 20px;
	}

	.topLink{
		cursor: pointer;
		transition: all .2s ease-in-out;
	}

	.topLink:hover{
		transform: scale(1.02) !important;
	}

	.floatLeft{
		float: left;
	}

	.scale{
		transition: all .2s ease-in-out;
	}
	.scale:hover{
		transform: scale(1.02) !important;
	}
</style>
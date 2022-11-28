<template>
	<div class="playback-container">
		<video width="100%" autoplay muted loop>
			<source src="https://kursufa.ru/js/static/softwareDemo.mp4" type="video/mp4">
		</video>
		<div class="playback-button" v-on:click="goToVideo">
			<div class="play-btn"></div>
			<span class="play-text">Смотреть</span>
		</div>
	</div>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';

	@Component({})
    export default class SoftwareVideo extends Vue{
        goToVideo(){
         	window.location.href = "https://www.youtube.com/watch?v=vdwzLHDgIP0";
		}
	}
</script>

<style scoped>
	.playback-container{
		position: relative;
	}

	.playback-container:before {
		content:"";
		position: absolute;
		top:0;
		right:0;
		left:0;
		bottom:0;
		z-index:1;
		background: rgba(255, 255, 255, .5);
	}


	.playback-button{
		width: 300px;
		height: 300px;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;
		margin-left: -150px;
		margin-top: -150px;
		align-items: center;
		transition: all .2s ease-in-out;
		cursor: pointer;
	}

		.playback-button:hover{
			transform: scale(1.1);
		}

	.play-btn{
		position: absolute;
		width: 200px;
		height: 200px;
		top: 0;
		left: 50%;
		margin-left: -80px;
		border-top: 100px solid transparent;
		border-bottom: 100px solid transparent;

		border-left: 180px solid white;

	}

	.play-text{
		position: absolute;
		bottom: 0;
		font-size: 60px;
		font-weight: bold;
		width: 100%;
		text-align: center;
	}
</style>
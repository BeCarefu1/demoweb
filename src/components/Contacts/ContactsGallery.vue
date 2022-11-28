<template>
	<div class="gallery-container">
		<div v-for="image in images" v-bind:key="image.id"
				class="gallery-image" v-on:click="previewImage(image)">
			<img :src="getUrl(image)" />
		</div>
		<ModalWindow :visible="dialogVisible" :image="activeImage" @close="dialogVisible=false"/>
	</div>
</template>

<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	import ModalWindow from "@/components/Common/ModalWindow.vue";

	@Component({
		components: {
		    ModalWindow,
		}
	})
    export default class ContactsGallery extends Vue{
	    private imageBaseUrl: string = "https://kursufa.ru/js/static/certs/";

	    private activeImage: string = "";
	    private dialogVisible: boolean = false;

	    private images: Image[] = [
	        new Image("1s", "1"),
            new Image("2s", "2"),
            new Image("3s", "3"),
		]

		private getUrl(image: Image, full?: boolean){
	        if(full){
	            return `${this.imageBaseUrl}${image.Full}.png`
			}
            return `${this.imageBaseUrl}${image.Small}.png`
		}

        previewImage(image: Image){
	        this.activeImage = this.getUrl(image, true);
	        this.dialogVisible = true;
		}
	}

	export class Image{
	    constructor(small: string, full: string) {
        	this.Full = full;
        	this.Small = small;
	    }

        Small: string;
	    Full: string;
	}
</script>

<style scoped>
	.gallery-container{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.gallery-image{
		width: 150px;
		height: 212px;
		transition: all .2s ease-in-out;
		cursor: pointer;
		margin-right: 10px;
		-webkit-box-shadow: 21px 26px 51px -25px rgba(0,0,0,0.75);
		-moz-box-shadow: 21px 26px 51px -25px rgba(0,0,0,0.75);
		box-shadow: 21px 26px 51px -25px rgba(0,0,0,0.75);
	}

	.gallery-image:hover{
		transform: scale(1.1);
	}

</style>
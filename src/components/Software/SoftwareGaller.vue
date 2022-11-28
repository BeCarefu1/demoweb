<template>
	<div class="gallery-container">
		<div class="gallery-btn btn-prev" v-on:click="prevSlide()">
			&#60;
		</div>
		<div class="gallery-btn btn-next" v-on:click="nextSlide()">
			&#62;
		</div>
		<div v-for="image in images"
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
    export default class SoftwareGallery extends Vue{
	    private imageBaseUrl: string = "https://kursufa.ru/js/static/slides/";

	    private activeImage: string = "";
	    private activeIndex: number = -1;
	    private dialogVisible: boolean = false;

	    private images: Image[] = [
	        new Image("1s", "1"),
            new Image("2s", "2"),
            new Image("3s", "3"),
            new Image("4s", "4"),
            new Image("5s", "5"),
            new Image("6s", "6"),
		]

		private getUrl(image: Image, full?: boolean){
	        if(full){
	            return `${this.imageBaseUrl}${image.Full}.png`
			}
            return `${this.imageBaseUrl}${image.Small}.png`
		}

        previewImage(image: Image){
	        this.activeImage = this.getUrl(image, true);
	        this.activeIndex = this.images.findIndex(x => x == image);
	        this.dialogVisible = true;
		}

        prevSlide(){
	        if(this.activeIndex != -1){
	            let image = this.images[this.activeIndex - 1];

	            if(image) this.previewImage(image);
			}
		}

		nextSlide(){
            if(this.activeIndex != -1){
                let image = this.images[this.activeIndex + 1];

                if(image) this.previewImage(image);
            }
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
		justify-content: space-between;
	}

	.gallery-image{
		width: 280px;
		height: 194px;
		transition: all .2s ease-in-out;
		cursor: pointer;
	}

	.gallery-image:hover{
		transform: scale(1.1);
	}

	.gallery-btn{
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 80px;
		height: 200px;
		margin-top: -100px;
		z-index: 1000;
		font-weight: bold;
		font-size: 100px;
		color: white;
		opacity: 0.3;
		cursor: pointer;
	}

	.gallery-btn:hover{
		opacity: 1;
		background-color: rgba(254, 254, 254, 0.1);
	}

	.btn-next{
		top: 50%;
		right: 0;
	}

	.btn-prev{
		top: 50%;
		left: 0;
	}

</style>
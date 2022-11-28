<template>
	<div v-if="visible" class="modal" @click="closeDialog">
		<div class="gallery-btn btn-prev" @click.stop="prevSlide()">
			&#60;
		</div>
		<div class="gallery-btn btn-next" @click.stop="nextSlide()">
			&#62;
		</div>

		<span class="close" @click="closeDialog">&times;</span>

		<img class="modal-content" :src="image">
	</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component({})
	export default class ModalWindow extends Vue{

    @Prop()
	visible: boolean;

    @Prop()
	image: string;

    closeDialog(){
        this.$emit("close");
	}

    prevSlide(){
        this.$emit("prevSlide");
	}

	nextSlide(){
        this.$emit("nextSlide");
	}

}
</script>

<style scoped>

	/* The Modal (background) */
	.modal {
		position: fixed; /* Stay in place */
		z-index: 100; /* Sit on top */
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
	}

	/* Modal Content (Image) */
	.modal-content {
		margin: auto;
		display: block;
		width: 90%;
		max-width: 100vw;
		max-height: 100vh;
		object-fit: contain;
	}

	/* Add Animation - Zoom in the Modal */
	.modal-content, #caption {
		animation-name: zoom;
		animation-duration: 0.6s;
	}

	@keyframes zoom {
		from {transform:scale(0)}
		to {transform:scale(1)}
	}

	/* The Close Button */
	.close {
		position: absolute;
		top: 15px;
		right: 35px;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
		z-index: 1000;
	}

	.close:hover,
	.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}

	/* 100% Image Width on Smaller Screens */
	@media only screen and (max-width: 700px){
		.modal-content {
			width: 100%;
		}
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
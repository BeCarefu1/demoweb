<template>
	<div >
		<Loader v-if="loadingState" />
		<div v-else>
			<Empty v-if="!items || items.length == 0"/>
			<hooper v-else :itemsToShow="6" ref="hooper" @slide="slideHandler" :infiniteScroll="true" style="height: 190px" class="reviews-hooper">
				<slide v-for="(item, indx) in items" :key="indx" :index="indx" >
					<div class="parent">
						<div class="div1 clickable" v-on:click="showImage(item)">
							<img :src="getUrl(item)" class="galleryImage">
						</div>
						<div class="div2">
							<h4 class="my-0">{{ item.value.Name }}</h4>
							<h4 class="my-0">{{ item.value.City }}</h4>
						</div>
					</div>
				</slide>
			</hooper>
		</div>
		<ModalWindow :visible="dialogVisible" :image="activeImage" @close="dialogVisible=false"/>
	</div>
</template>

<script lang="ts">
    import { Vue, Component, Mixins } from 'vue-property-decorator';

	import TextHeader from '@/components/Common/TextHeader.vue';
	import IconPdf from '@/components/Icons/IconPdf.vue';
    import BaseComponent from "@/plugins/BaseComponent";
    import { Controller} from "@/plugins/Controller";
    import {Endpoints} from "@/plugins/endpoints";

    import SliderControl from "@/components/Common/SliderControl.vue";

    import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
    import 'hooper/dist/hooper.css';
    import ModalWindow from "@/components/Common/ModalWindow.vue";

    @Component({
		components: {
		    TextHeader,
			IconPdf,
            Hooper,
			Slide,
            HooperPagination,
			SliderControl,
            ModalWindow,
        }
	})
	export default class Reviews extends Mixins(BaseComponent) {
	    private items: any[] = [];
	    private controller: Controller = new Controller();
        private activeImage: string = "";
        private dialogVisible: boolean = false;
	    private currentSlide: number = 0;

	    mounted(){
	        this.showLoader();
	        this.controller.GetReviews()
				.then(this.gotData)
				.catch(this.hideLoader)
		}

		gotData(response:any){
	        this.hideLoader()
			this.items = response?.data;
	        console.log(response);
		}

        showImage(item:any){
	        let data = JSON.parse(item.value.File);
            this.activeImage = Endpoints.File_Download(data.id);
            this.dialogVisible = true;
		}

		getUrl(item: any){
            let data = JSON.parse(item.value.File);
            return Endpoints.File_Download(data.id);
		}

		navigate(index: number){
			(this.$refs.hooper as any).slideTo(index);
		}

		slideHandler(event: any){
	        this.currentSlide = event.currentSlide;
		}
	}
</script>

<style scoped>
	.parent {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 50px;
		grid-column-gap: 10px;
		grid-row-gap: 0px;
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
		text-align: center;
	}
	.div2 {
		grid-area: 2 / 1 / 3 / 2;
		text-align: center;
	}

	.div2 > h4{
		font-weight: 400;
	}

	.clickable{
		cursor: pointer;
	}

	.reviews-hooper:focus{
		outline: none;
	}

	.galleryImage{
		max-width: 100px;
		cursor: pointer;
		-webkit-box-shadow: 21px 26px 51px -25px rgba(0,0,0,0.5);
		-moz-box-shadow: 21px 26px 51px -25px rgba(0,0,0,0.5);
		box-shadow: 21px 26px 51px -25px rgba(0,0,0,0.5);
	}
</style>
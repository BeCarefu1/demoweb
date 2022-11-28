<template>
	<div>
		<TextHeader text="Нам доверяют" v-if="!outlined"/>
		<Loader v-if="loadingState" />
		<div v-else>
			<Empty v-if="!items || items.length == 0"/>
			<hooper v-else :itemsToShow='7' :infiniteScroll="true" style="height: 140px" :settings="breakpoints">
				<slide v-for="(item, index) in items"  :key="index" :index="index">
					<div class="parent">
						<div class="logo">
							<div v-if="outlined" class="outlined"></div>
							<img :src="getImageUrl(item)" width="160px" :title="item.value.Name">
						</div>
					</div>
				</slide>
			</hooper>
		</div>
	</div>
</template>

<script lang="ts">
    import {Vue, Component, Mixins, Prop} from 'vue-property-decorator';

	import TextHeader from '@/components/Common/TextHeader.vue';
	import IconPdf from '@/components/Icons/IconPdf.vue';
	import LogoRosneft from '@/components/Icons/LogoRosneft.vue';
    import BaseComponent from "@/plugins/BaseComponent";

    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';
    import {Controller} from "@/plugins/Controller";
    import {Endpoints} from "@/plugins/endpoints";

	@Component({
		components: {
		    TextHeader,
            Hooper,
			Slide
		}
	})
	export default class Clients extends Mixins(BaseComponent) {
		@Prop({type: Boolean, default: false})
		outlined: boolean;

        private items: any[] = [];
        private controller: Controller = new Controller();
        private breakpoints = {breakpoints: {
                200: {
                    itemsToShow: 1,
                },
				400: {
					itemsToShow: 2,
				},
				800: {
					itemsToShow: 4,
				},
				1000: {
					itemsToShow: 6,
				}
        	}
        }

        mounted(){
            this.showLoader();
            this.controller.GetClients()
                .then(this.gotData)
                .catch(this.hideLoader)
        }

        gotData(response:any){
            this.hideLoader()
            this.items = response?.data;
            console.log(response);
        }

        getImageUrl(item: any): string{
            return Endpoints.File_Download(JSON.parse(item.value.Logo).id);
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

	.logo {
		grid-area: 1 / 1 / 2 / 2;
		text-align: center;
		max-width: 160px;
		height: 100px;
		width: 160px;
		max-height: 100px;
		overflow: hidden;
	}
	.div2 {
		grid-area: 2 / 1 / 3 / 2;
		text-align: center;
	}

	.div2 > h4{
		font-weight: 400;
	}

	.outlined{
		position: absolute;
		height: 100px;
		width: 160px;
		opacity: 0.3;
		border-radius: 10px;
		background: rgb(213,213,215);
		background: linear-gradient(90deg, rgba(213,213,215,1) 0%, rgba(242,242,243,1) 100%);
	}
</style>
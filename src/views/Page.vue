<template>
	<div class="pt-4">
		<div v-if="identifier=='solarPower'" class="container-fluid p-0">
			<SolarPage></SolarPage>
		</div>
		<div v-else-if="identifier=='software'" class="container-fluid p-0">
			<SoftwarePage></SoftwarePage>
		</div>
		<div v-else-if="identifier=='contacts'" class="container-fluid p-0">
			<ContactsPage></ContactsPage>
			<Contacts />
		</div>
		<div v-else-if="identifier=='clients'" class="container-fluid p-0">
			<ClientsPage />
		</div>
		<div v-else-if="identifier=='aiiscue2'" class="container-fluid p-0">
			<AIISCUEPage />
		</div>
		<div v-else-if="identifier=='job'" class="container-fluid p-0">
			<VacancyPage />
		</div>
		<div v-else-if="identifier=='doubleTr'" class="container p-0">
			<DoubleTrPage />
		</div>
		<div v-else-if="identifier=='singleTr'" class="container p-0">
			<SingleTrPage />
		</div>
		<div v-else-if="identifier=='distributionPoint'" class="container p-0">
			<DistributionPointPage />
		</div>
		<div v-else-if="identifier=='doubleLevelTr'" class="container p-0">
			<DoubleLevelTrPage />
		</div>
		<div v-else-if="identifier=='sandwichTr'" class="container p-0">
			<SandwitchTr />
		</div>
		<div v-else class="container-fluid p-0">
			<div class="container">
				<div class="loader-con">
					<Loader v-if="loading"></Loader>
				</div>
				<editor-content :editor="editor" class="site_content" v-if="!loading" />
			</div>

		</div>
	</div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator';

    import { Controller} from "../plugins/Controller";

    import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
    import Loader from '@/components/Common/Loader.vue'
	import Contacts from '@/components/PageSections/Contacts.vue';
	import { BannerData} from "@/models/BannerData";
	import SolarPage from '@/components/Solar/SolarPage.vue';
	import SoftwarePage from "@/components/Software/SoftwarePage.vue";
	import ContactsPage from "@/components/Contacts/ContactsPage.vue";
	import ClientsPage from "@/components/ClientsPage/ClientsPage.vue";
	import AIISCUEPage from "@/components/Software/AIISCUEPage.vue";
	import DoubleTrPage from '@/components/SubstationPage/DoubleTrPage.vue';
	import SingleTrPage from '@/components/SubstationPage/SingleTrPage.vue';

    import {
        Heading,
        Bold,
        Underline,
        Italic,
        OrderedList,
        BulletList,
        Link,
        HardBreak,
        Blockquote,
        CodeBlock,
        ListItem,
        TodoItem,
        TodoList,
        Code,
        Strike,
        Image,
        Focus,
        History,
        Table,
        TableHeader,
        TableCell,
        TableRow,
	} from 'tiptap-extensions';
    import VacancyPage from "@/components/VacancyPage/VacancyPage.vue";
    import DistributionPointPage from "@/components/SubstationPage/DistributionPointPage.vue";
    import DoubleLevelTrPage from "@/components/SubstationPage/DoubleLevelTrPage.vue";
    import SandwitchTr from "@/components/SubstationPage/sandwitchTr.vue";

    @Component({
        components: {
            SandwitchTr,
            DoubleLevelTrPage,
            DistributionPointPage,
            VacancyPage,
            SolarPage,
            SoftwarePage,
            ContactsPage,
            EditorContent,
            Loader,
			Contacts,
            ClientsPage,
			AIISCUEPage,
            DoubleTrPage,
            SingleTrPage,
        }
    })
    export default class PageViewer extends Vue{
        @Prop()
        identifier: string;

        private editor: Editor = new Editor();
        private content: string = "";
        private header: string = "";
        private loading: boolean = false;
        private bannerData:  BannerData = new BannerData("", "", "");

        controller: Controller = new Controller();

        mounted(){
            this.editor = new Editor({
                editable: false,
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ levels: [1, 2, 3] }),
                    new ListItem(),
                    new OrderedList(),
                    new TodoItem(),
                    new TodoList(),
                    new Link(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Strike(),
                    new Underline(),
                    new Table({
                        resizable: true,
                    }),
                    new TableHeader(),
                    new TableCell(),
                    new TableRow(),
                    new Image(),
                    new History(),
                ],
            });
        }

        @Watch("identifier", { immediate: true })
        getPage(){
            if(!!this.identifier){
                if(this.identifier == 'about'){
                    this.$router.push({name: 'Home'});
				}

                this.loading = true;
                this.controller.GetPageByName(this.identifier)
                    .then(this.gotPage)
                    .catch((error) => { console.log(error); this.$router.push("/notFound"); this.loading = false;});
            }
		}

        gotPage(response: any){
            let responseValue = response.data?.value;
            if(responseValue){
                this.header = responseValue.header;
                this.content = responseValue.content;
                this.editor.setContent(JSON.parse(this.content));

                this.bannerData = new BannerData(responseValue.bannerImage, responseValue.bannerText, responseValue.bannerLink);

                document.title = `${this.header} - ООО "КУРС"`
            }
            this.loading = false;
        }

    }
</script>

<style>

	.site_content:focus{
		outline: none;
	}

	.ProseMirror:focus{
		outline: none;
	}

	h1, h2, h3 {
		text-transform: uppercase;
		font-size: 1.2em;
		color: #3f3f3f;
	}

	h1{
		text-transform: uppercase;
	}

	h2{
		text-transform: uppercase;
	}

	h3{
		text-transform: uppercase;
	}

	h1::before{
		content: "   ";
		margin-right: 10px;
		min-width: 40px;
		width: 30px;
		height: 30px;
		min-height: 40px;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 9.63 15.5' style='enable-background:new 0 0 9.63 15.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='187.3098' y1='-648.1915' x2='199.321' y2='-648.1915' gradientTransform='matrix(0.8702 0.4927 -0.4927 0.8702 -484.7817 476.5472)'%3E%3Cstop offset='0.6457' style='stop-color:%23E95C27'/%3E%3Cstop offset='0.7566' style='stop-color:%23EA642E'/%3E%3Cstop offset='0.9268' style='stop-color:%23EE7942'/%3E%3Cstop offset='1' style='stop-color:%23F0854C'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='5.64,0.11 0.31,0 4.3,7.78 0,15.4 5.33,15.5 9.63,7.89 '/%3E%3C/svg%3E%0A");
	}

	h2::before{
		content: "   ";
		margin-right: 5px;
		min-width: 40px;
		width: 40px;
		height: 40px;
		min-height: 40px;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 9.63 15.5' style='enable-background:new 0 0 9.63 15.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='187.3098' y1='-648.1915' x2='199.321' y2='-648.1915' gradientTransform='matrix(0.8702 0.4927 -0.4927 0.8702 -484.7817 476.5472)'%3E%3Cstop offset='0.6457' style='stop-color:%23E95C27'/%3E%3Cstop offset='0.7566' style='stop-color:%23EA642E'/%3E%3Cstop offset='0.9268' style='stop-color:%23EE7942'/%3E%3Cstop offset='1' style='stop-color:%23F0854C'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='5.64,0.11 0.31,0 4.3,7.78 0,15.4 5.33,15.5 9.63,7.89 '/%3E%3C/svg%3E%0A");
	}
	h3::before{
		content: "   ";
		margin-right: 5px;
		min-width: 40px;
		width: 40px;
		height: 40px;
		min-height: 40px;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 9.63 15.5' style='enable-background:new 0 0 9.63 15.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_1_);%7D .st1%7Bfill-rule:evenodd;clip-rule:evenodd;fill:url(%23SVGID_2_);%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='187.3098' y1='-648.1915' x2='199.321' y2='-648.1915' gradientTransform='matrix(0.8702 0.4927 -0.4927 0.8702 -484.7817 476.5472)'%3E%3Cstop offset='0.6457' style='stop-color:%23E95C27'/%3E%3Cstop offset='0.7566' style='stop-color:%23EA642E'/%3E%3Cstop offset='0.9268' style='stop-color:%23EE7942'/%3E%3Cstop offset='1' style='stop-color:%23F0854C'/%3E%3C/linearGradient%3E%3Cpolygon class='st0' points='5.64,0.11 0.31,0 4.3,7.78 0,15.4 5.33,15.5 9.63,7.89 '/%3E%3C/svg%3E%0A");
	}


	.ProseMirror > p{
		text-indent: 30px;
	}

	.ProseMirror u{
		font-weight: bold;
		border-bottom: 2px solid #E95C27;
		text-decoration: none;
	}

	.ProseMirror a{
		display: inline-block;
		transition: all .5s ease-in-out;
	}

	.ProseMirror a:hover{
		transform: scale(1.05) !important;
	}

	td > p{
		text-indent: 0px;
	}

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

	table{
		width: 100%;
	}

	img{
		max-width: 100%;
	}

	/* KURS TABLE */
	table.kursTable{
		width: 100%;
	}

	table.kursTable th{
		text-align: left;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		border-left: 1px solid #F5F5F5;
		border-right: 1px solid #F5F5F5;
		background-color: #F5F5F5;
	}

	table.kursTable th > p{
		margin-left: 10px;
	}

	table.kursTable tr{
		border-bottom: 1px solid #F5F5F5;
	}

	table.kursTable td{
		vertical-align: top;
		text-align: left;
		border-bottom: 1px solid #F5F5F5;
	}

	table.kursTable td > p{
		margin: 8px;
	}

	/* FLOAT TABLE */
	table.floatTable td > p > img{
		float: left;
		margin-left: 10px;
		margin-bottom: 10px;
	}

	/* CENTER TABLE */
	table.centerTable td > p{
		text-align: center;
	}

	/* hero TABLE */
	table.heroTable{
		background: rgb(71,71,71);
		background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(25,19,19,1) 100%);
	}

	table.heroTable h1{
		color: white;
		text-transform: uppercase;
	}

	table.heroTable h1::before{
		content: "";
	}

	table.heroTable h2{
		color: white;
		text-transform: uppercase;
	}

	table.heroTable h2::before{
		content: "";
	}

	table.heroTable h3{
		color: white;
		text-transform: uppercase;
	}

	table.heroTable h3::before{
		content: "";
	}

	.loader-con{
		position: absolute;
		top: 200px;
		left: 50%;
	}

</style>

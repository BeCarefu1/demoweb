<template>
	<div>
		<div class="container">
			<TextHeader text="КОНТАКТЫ" hideUnderline/>
			<div class="row no-gutters">
				<div class="col-6 pl-3">
					<p class="py-2"><b>ООО “КУРС”</b></p>

					<p style="text-align:justify line-height: 25px !important;">Компания ООО «КУРС» специализируется на поставке оборудования и услуг в области электроэнергетики с 2007 года. компания имеет в своем составе квалифицированных специалистов, современную материально-техническую базу, что позволяет качественно выполнять комплексные проекты энергетических объектов.</p>
					<br>
					<p><b>Вакансии</b></p>
					<div class="jobBlock scale" v-on:click="navigateJobs('engineer')">
						<h3>Инженер-проектировщик</h3>
						<p align="right">до 50 000 руб. на руки</p>
					</div>
					<!--div class="jobBlock scale mt-2" v-on:click="navigateJobs('buch')">
						<h3>Бухгалтер материального стола</h3>
						<p align="right">от 25 000 до 30 000 руб. на руки</p>
					</div-->
				</div>
				<div class="col-6">
					<ContactsTable/>
				</div>
			</div>
		</div>

		<div class="container">
			<TextHeader text="Телефонные номера" />
			<div class="row ml-3 px-3 no-gutters">
				<div class="col">
					<div class="row phoneNumberRow">
						<div class="col">Отдел кадров</div>
						<div class="col">+7 (347) 216-36-10</div>
					</div>

					<div class="row phoneNumberRow">
						<div class="col">Начальник отдела материально-технического снабжения</div>
						<div class="col">+7 (917) 427-78-39</div>
					</div>

					<div class="row phoneNumberRow">
						<div class="col">Ведущий инженер по снабжению</div>
						<div class="col">+7 (917) 448-39-21</div>
					</div>
				</div>
				<div class="col">
					<div class="row phoneNumberRow">
						<div class="col">Начальник отдела продаж</div>
						<div class="col">+7 (937) 484-60-61</div>
					</div>

					<div class="row phoneNumberRow">
						<div class="col">По тендерным вопросам</div>
						<div class="col">+7 (917) 367-39-35</div>
					</div>

					<div class="row phoneNumberRow">
						<div class="col">По вопросам акта допуска</div>
						<div class="col">+7 (917) 480-32-67</div>
					</div>

					<!--div class="row phoneNumberRow">
						<div class="col">По вопросам опломбирования счетчиков</div>
						<div class="col">+7 (987) 250-69-14</div>
					</div-->
				</div>
			</div>

			<TextHeader text="СРО, ИСО" hideUnderline/>
			<div class="row no-gutters mb-5">
				<div class="col">
					<ContactsGallery/>
				</div>
				<div class="col pl-4 pt-2">
					<a href="https://kursufa.ru/js/static/present/about.pdf">
						<div class="row align-items-center my-3">
							<IconPdf class="mr-4" />
							О Компании «КУРС»
						</div>
					</a>
					<a href="https://kursufa.ru/js/static/present/tp.pdf">
						<div class="row align-items-center my-3">
							<IconPdf class="mr-4" />
							Блочные комплектные трансформаторные подстанции
						</div>
					</a>
					<a href="https://kursufa.ru/js/static/present/software.pdf">
						<div class="row align-items-center my-3">
							<IconPdf class="mr-4" />
							Программный комплекс АИИС КУЭ «КУРС»
						</div>
					</a>
				</div>
			</div>
		</div>


	</div>
</template>

<script lang="ts">
	import { Component, Vue} from "vue-property-decorator";
	import TextHeader from "@/components/Common/TextHeader.vue";
	import ContactsTable from '@/components/Contacts/ContactsTable.vue';
	import ContactsGallery from "@/components/Contacts/ContactsGallery.vue";
    import IconPdf from '@/components/Icons/IconPdfSmall.vue';
	@Component({
		components: {
		    TextHeader,
            ContactsTable,
            ContactsGallery,
            IconPdf,
		}
	})
	export default class ContactsPage extends Vue{
        navigateJobs(job: string){
            this.$router.push({name: "PageViewer", params: {identifier: "job"}, hash: `#${job}`});
		}
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

	a{
		text-decoration: none;
		color: inherit;
	}

	.jobBlock{
		border-radius: 3px;
		border-left: 15px solid #FEEEE7;
		padding: 5px 14px;
		cursor: pointer;
		box-shadow: 0 0 0 1px #e0dfde;
	}

	.jobBlock > h3{
		line-height: 10px;
	}

	.phoneNumberRow:not(:last-child){
		margin-bottom: 10px !important;
	}

</style>
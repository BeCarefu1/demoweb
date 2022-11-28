<template>
	<div class="container">
		<span class="number">404 😪</span>
		<span class="text">Страница не найдена </span>
	</div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';


    @Component({
        components: {
        }
    })
    export default class NotFound extends Vue{

    }
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 50vh;
		text-align: center;
	}
	.number{
		font-weight: bold;
		color: #E95C27;
		font-size: 200px;
	}

</style>

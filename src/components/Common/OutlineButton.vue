<template>
	<div class="outlineButton">
		{{ label }}
	</div>
</template>
<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component({})
	export default class OutlineButton extends Vue {
		@Prop()
		label: string;
	}
</script>

<style scoped>
	.outlineButton {
		outline: 2px solid rgb(217, 105, 59);
		text-transform: uppercase;
		text-align: center;
		color: rgb(179, 179, 179);
		padding: 4px;
		font-size: 12px;
		cursor: pointer;
		min-width: 40px;
		min-height: 12px;
		transition: all 0.3s ease;
	}

		.outlineButton:hover {
			color: black;
			box-shadow: inset 0 0 0 5px rgb(217, 105, 59);
		}
</style>
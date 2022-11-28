<template>
	<li class="menu-item" :class="{ 'has-children': item.childs && item.childs.length}">
		<router-link :to="{ name: 'PageViewer', params: { identifier: item.url }}" >
			{{ item.name }}
			<span v-if="item.childs && item.childs.length"  class="dropdown-icon"></span>
		</router-link>
		<ul class="sub-menu" v-if="item.childs && item.childs.length">
			<MenuItemControl v-for="itemCh in item.childs" :item="itemCh" />
		</ul>
	</li>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import {MenuItem} from "@/models/MenuItem";

    @Component({
		name: "MenuItemControl"
	})
	export default class MenuItemControl extends Vue{
		@Prop()
		item: MenuItem;
    }
</script>
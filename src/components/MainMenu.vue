<template>
	<nav class="nav nav--cen">
		<ul class="menu">
			<MenuItemControl v-for="item in items" :item="item" class="top-menu"/>
		</ul>
	</nav>
</template>

<script lang="ts">
    import { Vue, Component, Mixins } from "vue-property-decorator";
	import { Controller } from "@/plugins/Controller";
    import BaseComponent from "@/plugins/BaseComponent";
    import { MenuItem } from "@/models/MenuItem";

    import MenuItemControl from "@/components/MenuItem.vue";

	@Component({
		components: {
		    MenuItemControl,
		}
	})
    export default class MainMenu extends Mixins(BaseComponent){

	    private controller: Controller = new Controller();
	    private items: MenuItem[] = [];

	    mounted(){
	        this.showLoader()
	        this.controller.GetEntry(this.MENU_ID)
				.then(this.gotMenu);
	    }

		gotMenu(response: any){
	        this.hideLoader();
	        this.items = JSON.parse(response.data.value.MenuContent);
		}
	}

</script>

<style lang="scss">
	.nav{
		width: 100%;
	}

	//
	// Variable definitions
	//
	// 1. Background-color for the top-level menu
	// 2. Color for the top-level menu
	// 3. Border-color settings for the top-level menu and items
	// 4. Background-color for the sub-menus
	// 5. Color for the sub-menus
	// 6. Border-color settings for the sub-menus and items
	// 7. Spacing/sizing for the items across the menu
	//

	// 1 //
	$menu-bg: white;
	$menu-bg-hover: #EA642E;

	// 2 //
	$menu-co: black;
	$menu-co-hover: #fff;

	// 3 //
	$menu-bo: rgba(white, .1);

	// 4 //
	$sub-menu-bg: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(25,19,19,1) 100%);
	$sub-menu-bg-hover: linear-gradient(90deg, rgba(233,92,39,1) 0%, rgba(233,92,39,1) 62%, rgba(240,133,76,1) 100%);

	// 5 //
	$sub-menu-co: white;
	$sub-menu-co-hover: white;

	// 6 //
	$sub-menu-bo: rgba(black, .1);

	// 7 //
	$menu-link-padding: 0.7em;

	$sub-menu-link-padding: 0.8em;

	// Zero-down the margin and the padding for menu-lists if not done
	// in the base reset
	.menu,
	.sub-menu {
		margin: 0;
		padding: 0;
	}

	// Quick border settings
	.menu-item,
	.sub-menu,
	.dropdown-icon {
		border: 0 solid;
	}

	//
	// The Menu-list
	//
	// Below goes the set-up for our menu-list, carrying several menu-items
	// (`.menu-items) as well as sub-menus (`.sub-menu`).
	//
	// 1. Make the menu-item take all available space
	// 2. Make the menu-items handle the fly-outs smoothly by not allowing
	//    break the flow
	// 3. Add a separation border except for the last menu-item
	// 4. Size-up, align, and make the hyperlinks acquire all the
	//    available space
	// 5. Add a seperating border to the sub-menu
	// 6. Make the sub-menu hidden
	// 7. Give a transition (fade-in/fade-out effect) to the fly-outs
	// 8. Hide the menu-items inside a hidden sub-menu to avoid
	//    border-flickering
	// 9. Make the sub-menu visible on hovering, selecting, or focusing the
	//    parent menu-item
	//10. Make the menu-items inside a hidden sub-menu visible and
	//    available when its parent menu-item is hovered, selected, or
	//    focused.
	//11. Add some rotation to the dropdown icon when the parent menu item
	//    gets hovered, selected, or focused
	//12. Make the dropdown icon size-up equally as the containing
	//    menu-item, and then fit it properly inside the menu-item
	//13. Populate the dropdown-icon element with the help of CSS
	//    pseudo-elements
	//14. Adjust the direction and dropdown-icon positioning for the
	//    right-to-left menu
	//

	.top-menu > a{
		text-transform: uppercase;
		padding: 1em !important;
	}

	.top-menu {
		margin-right: 10px;
		margin-left: 10px;
	}

	.menu {

		// 1 //
		.menu-item {
			display: block;

			// 2 //
			&.has-children {
				&, .menu-item {
					position: relative;
				}
			}

			// 3 //
			&:not(:last-child) {
				border-width: 0 0 1px;
			}

			// 4 //
			a {
				font-family: 'Manrope', sans-serif;
				font-weight: lighter;
				padding: $menu-link-padding;
				display: flex;
				justify-content: space-between;
				white-space: nowrap;
			}
		}

		// 5 //
		.sub-menu {
			border-width: 1px 0 0;

			// 6 //
			visibility: hidden;
			opacity: 0;
			height: 0;
			width: 0;

			// 7 //
			transition: visibility .25s, opacity .25s ease-in-out;

			// 8 //
			.menu-item {
				visibility: hidden;
			}
		}

		// 9 //
		.menu-item {
			&:hover,
			&:active,
			&:focus {
				> .sub-menu {
					opacity: 1;
					height: auto;
					width: auto;

					// 10 //
					&,
					.menu-item {
						visibility: visible;
					}
				}
			}

			// 11 //
			> a {
				&:hover,
				&:active,
				&:focus {
					.dropdown-icon {
						&:after {
							transform: rotate(-180deg);
						}
					}
				}
			}
		}

		.dropdown-icon {

			// 12 //
			padding: $menu-link-padding $menu-link-padding * 1.25;
			margin: -1em -1em -1em .5em;
			border-width: 0 0 0 1px;

			// 13 //
			&:after {
				content: "\2039";
				display: block;
				transition: transform .25s ease-in-out;
				transform: rotate(-90deg);
			}
		}
	}

	// 14 //
	.nav--rtl {
		direction: rtl;
		unicode-bidi: bidi-override;

		.menu {
			.dropdown-icon {
				margin: -1em .5em -1em -1em;
				border-width: 0 1px 0 0;
			}
		}
	}

	//
	// Settings for different screens
	//
	// Breakpoints or media queries to make our navigation menu adapt according
	// to the available screen width.
	//
	// 1. Make the top-level menu look horizontal on bigger screens
	// 2. Adjust the seperating border for the top-level horizontal menu
	// 3. Remove the left padding from the dropdown-icon in the top-level menu
	//    to maintain the proper whitespace.
	// 4. Give fly-outs (sub-menus) a width on hovering, selecting, focusing
	//    of parent menu-item
	// 5. Throw the sub-menus out of the flow to make them appear as fly-outs
	// 6. Make the sub-menu start just from below the parent element
	// 7. Zero-down the border-width as we don't really need separation here
	// 8. This makes the second sub-menu fly-out on the top-right side of their
	//    parent sub-menu
	// 9. Zero-down the border-width of the dropdown-icon
	//10. Adjust the padding and spacing for the dropdown-icon in right-to-left
	//    navigation menu
	//11. Align the sub-menu fly-outs from right to left instead of left to
	//    right
	//12. Align the top-level menu to the center for bigger screens
	//
	@media only screen and (min-width: 1024px) {
		.nav {
			// 1 //
			.menu {
				display: flex;
				flex-flow: row wrap;

				// 2 //
				> .menu-item {
					border-width: 0 1px 0 0;

					// 3 //
					> a {
						.dropdown-icon {
							padding-left: 0;
						}
					}
				}

				.menu-item {
					&:hover,
					&:active,
					&:focus {

						// 4 //
						> .sub-menu {
							width: 370px;
						}
					}
				}
				// 5 //
				.sub-menu {
					position: absolute;
					z-index: 3000;

					// 6 //
					top: 100%;
					left: 0;

					// 7 //
					border-width: 0;

					// 8 //
					.sub-menu {
						top: 0;
						left: 100%;
					}
				}

				// 9 //
				.dropdown-icon {
					border-width: 0;
					padding: 1em;
				}
			}
		}

		.nav--rtl {
			.menu {
				> .menu-item {

					// 10 //
					> a {
						.dropdown-icon {
							padding-left: $menu-link-padding;
							padding-right: 0;
						}
					}
				}

				.sub-menu {

					// 11 //
					top: 100%;
					left: auto;
					right: 0;

					.sub-menu {
						left: auto;
						right: 100%;
					}
				}
			}
		}

		// 12 //
		.nav--cen {
			.menu {
				justify-content: center;
			}
		}
	}

	//
	// Theming (applying cosmetics)
	//
	// 1. Background for the top-level menu
	// 2. Border-color for the top-level menu and items
	// 3. Text and link color for the top-level menu
	// 4. Hover effects for the links in top-level menu
	// 5. Background for the sub-menus
	// 6. Border-color for the sub-menus and items
	// 7. Text and link color for the sub-menus
	// 8. Hover effects for the links in the sub-menus
	//
	.nav {
		// 1 //
		background-color: $menu-bg;

		.menu {
			> .menu-item {
				// 2 //
				&,
				.dropdown-icon {
					border-color: $menu-bo;
				}
			}
			> .menu-item {
				// 3 //
				&,
				& > a {
					color: $menu-co;
					font-weight: bold;
					text-decoration: none;
				}

				// 4 //

				& > a {
					&:hover,
					&:active,
					&:focus {
						background-color: $menu-bg-hover;
						color: $menu-co-hover;
					}
				}
			}
		}

		.sub-menu {
			// 5 //
			background: $sub-menu-bg;

			// 6 //
			&,
			.menu-item {
				&,
				.dropdown-icon {
					border-color: $sub-menu-bo;
				}
			}

			.menu-item {
				// 7 //
				&,
				a {
					color: $sub-menu-co;
					text-decoration: none;
				}

				// 8 //
				a {
					&:hover,
					&:active,
					&:focus {
						background: $sub-menu-bg-hover;
						color: $sub-menu-co-hover;
					}
				}
			}
		}
	}
</style>
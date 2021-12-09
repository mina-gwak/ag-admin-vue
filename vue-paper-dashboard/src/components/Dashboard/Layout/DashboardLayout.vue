<template>
	<div class="wrapper">
		<side-bar :sidebar-links="sidebarLinks" title="ADMIN"></side-bar>

		<div class="main-panel">
			<top-navbar></top-navbar>

			<dashboard-content @click.native="toggleSidebar"></dashboard-content>

			<content-footer></content-footer>
		</div>
	</div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from './TopNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import DashboardContent from './Content.vue';
import UserMenu from 'src/components/UIComponents/SidebarPlugin/UserMenu.vue';
import SidebarItem from '../../UIComponents/SidebarPlugin/SidebarItem.vue';
import SidebarShare from './SidebarSharePlugin';
import sidebarLinks from 'src/sidebarLinks';

export default {
	components: {
		TopNavbar,
		ContentFooter,
		DashboardContent,
		UserMenu,
		SidebarItem,
		SidebarShare,
	},
	data() {
		return {
			backgroundColor: 'black',
			activeColor: 'success',
			sidebarLinks: sidebarLinks,
		};
	},

	methods: {
		toggleSidebar() {
			if (this.$sidebar.showSidebar) {
				this.$sidebar.displaySidebar(false);
			}
		},
	},
};
</script>

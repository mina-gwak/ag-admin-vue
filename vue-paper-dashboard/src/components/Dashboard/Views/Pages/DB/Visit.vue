<template>
	<ShowDBTable title="방문상담 상담접수 목록"
							 :url="url"
							 :index="index"
							 routerName="EditVisit"
	></ShowDBTable>
</template>

<script>
import ShowDBTable from './ShowDBTable';
import tableIndex from 'src/assets/data';

export default {
	name: 'Visit',
	components: {
		ShowDBTable,
	},
	data() {
		return {
			url: 'visit-consults',
			index: tableIndex.visit,
		};
	}
};
</script>

<style scoped lang="scss">

</style>
<template>
	<ShowDBTable title="견적문의 상담접수 목록"
							 :url="url"
							 :index="index"
							 routerName="EditEstimateInquiries"
	></ShowDBTable>
</template>

<script>
import ShowDBTable from './ShowDBTable';
import tableIndex from 'src/assets/data';

export default {
	name: 'EstimateInquiries',
	components: {
		ShowDBTable,
	},
	data() {
		return {
			url: 'estimate-inquiries',
			index: tableIndex.estimateInquiry,
		};
	}
};
</script>

<style scoped lang="scss">

</style>
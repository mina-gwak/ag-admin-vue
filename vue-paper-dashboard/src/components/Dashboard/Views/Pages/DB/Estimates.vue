<template>
	<ShowDBTable title="견적문의 상담접수 목록"
							 :url="url"
							 :index="index"
							 routerName="EditEstimate"
							 arrayName="estimateInquiryResList"
	></ShowDBTable>
</template>

<script>
import ShowDBTable from './ShowDBTable';
import tableIndex from 'src/assets/data';

export default {
	name: 'Estimates',
	components: {
		ShowDBTable,
	},
	data() {
		return {
			url: 'estimates',
			index: tableIndex.estimate,
		};
	}
};
</script>

<style scoped lang="scss">

</style>
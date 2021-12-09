<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<DBTableHeader title="카카오톡 상담접수 목록" @get-filtered-data="getFilteredData"></DBTableHeader>
				<Table :data="consultData" :index="index"></Table>
			</div>
		</div>
	</div>
</template>

<script>
import { getKakaoConsults, filterKakaoConsults } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';
import DBTableHeader from 'src/components/Dashboard/Views/Templates/DBTableHeader';
import tableIndex from 'src/assets/data';

export default {
	name: 'Kakao',
	components: {
		Table,
		DBTableHeader
	},
	data() {
		return {
			consultData: [],
			index: tableIndex.kakao,
		};
	},
	methods: {
		async getConsultData() {
			try {
				const { data } = await getKakaoConsults();
				this.consultData = data.result;
			} catch (error) {
				console.log(error.response);
			}
		},
		async getFilteredData(dateArray) {
			try {
				const { data } = await filterKakaoConsults(...dateArray);
				this.consultData = data.result;
			} catch (error) {
				console.log(error.response);
			}
		}
	},
	created() {
		this.getConsultData();
	},
	emit: ['get-filtered-data'],
};
</script>

<style scoped>

</style>
<template>
	<Table title="카카오톡 상담접수 목록" :data="consultData" :index="index"></Table>
</template>

<script>
import { getKakaoConsults } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';

export default {
	name: 'Kakao',
	components: {
		Table,
	},
	data() {
		return {
			consultData: {},
			index: [
				{
					label: '카카오톡ID',
					property: 'kakaotalkId',
				},
				{
					label: '문의차량',
					property: 'inquiryVehicle',
				},
				{
					label: '배분여부',
					property: 'isDistribution',
				},
				{
					label: '배분일자',
					property: 'distributionDate',
				},
			],
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
		}
	},
	created() {
		this.getConsultData();
	}
};
</script>

<style scoped>

</style>
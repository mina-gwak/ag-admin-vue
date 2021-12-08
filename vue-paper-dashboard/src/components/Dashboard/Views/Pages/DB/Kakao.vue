<template>
	<Table title="카카오톡 상담접수 목록" :data="consultData" :index="index"></Table>
</template>

<script>
import { getKakaoConsults } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';
import tableIndex from 'src/assets/data';

export default {
	name: 'Kakao',
	components: {
		Table,
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
		}
	},
	created() {
		this.getConsultData();
	}
};
</script>

<style scoped>

</style>
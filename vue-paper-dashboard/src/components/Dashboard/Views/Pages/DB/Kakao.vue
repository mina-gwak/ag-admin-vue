<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<DBTableHeader title="카카오톡 상담접수 목록"
											 @get-filtered-data="getFilteredData"
											 @complete-distribution="completeDistribution"
				>
				</DBTableHeader>
				<Table :data="consultData"
							 :index="index"
							 @change-selection="changeSelection"
				>
				</Table>
			</div>
		</div>
	</div>
</template>

<script>
import { getKakaoConsults, filterKakaoConsults, completeDistribution } from 'src/api';
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
			selections: [],
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
		},
		changeSelection(selections) {
			this.selections = selections;
		},
		async completeDistribution() {
			try {
				for (let i = 0; i < this.selections.length; i++) {
					await completeDistribution(this.selections[i].idx);
				}
				alert('배분완료되었습니다');
				await this.getConsultData();
			} catch (error) {
				console.log(error.message);
			}
		}
	},
	created() {
		this.getConsultData();
	},
	emit: ['get-filtered-data', 'complete-distribution'],
};
</script>

<style scoped>

</style>
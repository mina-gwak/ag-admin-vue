정
<template>
	<div class="table-header">
		<div class="mt-2 mb-4 col-sm-12 card-header">
			<h5 class="title">{{ title }}</h5>
		</div>
		<div class="col-sm-12 pt-2 table-menu">
			<div class="date-container">
				<span class="demonstration">접수일자</span>
				<el-date-picker
						v-model="dateArray"
						type="daterange"
						size="small"
						class="date-picker"
						range-separator="-"
						start-placeholder="Start date"
						end-placeholder="End date">
				</el-date-picker>
				<p-button type="success" @click="getFilteredDate">조회</p-button>
			</div>
			<div class="table-btn-group">
				<p-button type="default" @click="completeDistribution">배분 완료</p-button>
				<p-button type="default">수정</p-button>
			</div>
		</div>
	</div>
</template>
<script>
import { DatePicker } from 'element-ui';
import Vue from 'vue';

Vue.use(DatePicker);
export default {
	name: 'DBTableHeader',
	props: {
		title: String,
	},
	data() {
		return {
			dateArray: Array,
		};
	},
	methods: {
		convertDate(date) {
			const offset = new Date().getTimezoneOffset() * 60000;
			const newDate = new Date(date - offset);
			return newDate.toISOString().split('T')[0];
		},
		setDefaultDate() {
			const endDate = new Date();
			const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 6);
			return [startDate, endDate];
		},
		getFilteredDate() {
			const convertedDate = this.dateArray.map((date) => this.convertDate(date));
			this.$emit('get-filtered-data', convertedDate);
		},
		completeDistribution() {
			this.$emit('complete-distribution');
		},
	},
	created() {
		this.dateArray = this.setDefaultDate();
		this.getFilteredDate();
	},
};
</script>

<style scoped>

button {
	padding: 8px 20px;
	margin: 5px;
}

.card-header {
	width: fit-content;
}

.table-menu {
	display: flex;
	justify-content: space-between;
}

.date-container {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.demonstration {
	margin-right: 10px;
}

.date-picker {
	width: 220px;
	margin-right: 5px;
}

.table-btn-group {
	display: flex;
	justify-content: flex-end;
}

.table-btn-group button:first-child {
	margin-right: 5px;
}
</style>
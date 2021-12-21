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
				<Button type="success" @click="setDateArray">조회</Button>
			</div>
			<div class="table-btn-group">
				<Button type="default" @click="completeDistribution">배분 완료</Button>
				<Button type="default" @click="goEditPage">수정</Button>
			</div>
		</div>
	</div>
</template>
<script>
import { DatePicker } from 'element-ui';
import { Button } from 'src/components/UIComponents';
import Vue from 'vue';

Vue.use(DatePicker);

export default {
	name: 'DBTableHeader',
	props: {
		title: String,
	},
	components: {
		Button
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
		setDateArray() {
			const convertedDate = this.dateArray.map((date) => this.convertDate(date));
			this.$emit('set-date-array', convertedDate);
		},
		completeDistribution() {
			this.$emit('complete-distribution');
		},
		goEditPage() {
			this.$emit('go-edit-page');
		},
	},
	created() {
		this.dateArray = this.setDefaultDate();
		this.setDateArray();
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
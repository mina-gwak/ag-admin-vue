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
				<Button type="default" @click="goAddPage">등록</Button>
				<Button type="default" @click="goEditPage">수정</Button>
				<Button type="default" @click="deleteEvent">삭제</Button>
			</div>
		</div>
	</div>
</template>
<script>
import { DatePicker } from 'element-ui';
import { Button } from 'src/components/UIComponents';
import Vue from 'vue';
import { convertDate } from 'src/util/date';

Vue.use(DatePicker);

export default {
	name: 'EventTableHeader',
	props: {
		title: String,
	},
	components: {
		Button,
	},
	data() {
		return {
			dateArray: Array,
		};
	},
	methods: {
		setDefaultDate() {
			const endDate = new Date();
			const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 6);
			return [startDate, endDate];
		},
		setDateArray() {
			const convertedDate = this.dateArray.map((date) => convertDate(date));
			this.$emit('set-date-array', convertedDate);
		},
		goAddPage() {
			this.$emit('go-add-page');
		},
		goEditPage() {
			this.$emit('go-edit-page');
		},
		deleteEvent() {
			this.$emit('delete-event');
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
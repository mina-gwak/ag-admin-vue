<template>
	<div class="card-body table-responsive table-full-width">
		<el-table :data="data" @selection-change="handleSelectionChange">
			<el-table-column type="selection"></el-table-column>
			<el-table-column type="index" label="NO" width="70"></el-table-column>
			<el-table-column v-for="item in index" :label="item.label" :property="item.property"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import Vue from 'vue';
import { Table, TableColumn } from 'element-ui';

Vue.use(Table);
Vue.use(TableColumn);
export default {
	name: 'Table',
	props: {
		data: Array,
		index: Array,
	},
	methods: {
		handleSelectionChange(val) {
			this.$emit('change-selection', val);
		}
	}
};
</script>

<style scoped>
.el-table tr {
	background-color: #909399;
}

.el-table .cell {
	word-break: break-word;
}

.card .card-body {
	padding: 5px 15px 10px;
}
</style>
<template>
	<div class="card-body table-responsive table-full-width">
		<el-table :data="data" @selection-change="handleSelectionChange" @row-dblclick="showModal">
			<el-table-column type="selection"></el-table-column>
			<el-table-column type="index" label="NO" width="70"></el-table-column>
			<el-table-column v-for="item in index"
											 v-if="!item.hide"
											 :label="item.label"
											 :property="item.property"
											 :key="item.id"
			></el-table-column>
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
		},
		showModal(data) {
			if (data.id) {
				this.$emit('show-modal', data.id);
			} else {
				Object.keys(data).forEach((key) => {
					if (key.includes('Id') || key.includes('id')) {
						this.$emit('show-modal', data[key]);
					}
				})
			}
		},
	},
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
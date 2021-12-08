<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
					<h5 class="title">{{ title }}</h5>
				</div>
				<div class="card-body table-responsive table-full-width">
					<el-table :data="data">
						<el-table-column type="selection"></el-table-column>
						<el-table-column type="index" label="NO" width="70"></el-table-column>
						<el-table-column v-for="item in index" :label="item.label" :property="item.property"></el-table-column>
					</el-table>
				</div>
			</div>
		</div>
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
		title: String,
		data: Array,
		index: Array,
	},
};
</script>

<style scoped>

</style>
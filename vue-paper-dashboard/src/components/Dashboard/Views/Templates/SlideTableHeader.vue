<template>
	<div class="table-header">
		<div class="mt-2 col-sm-12 card-header">
			<h5 class="title">{{ title }}</h5>
		</div>
		<div class="col-sm-12 table-menu">
			<div class="table-btn-group">
				<Button type="default" @click="goAddPage">신규 등록</Button>
				<Button type="default" @click="goEditPage">수정</Button>
				<Button type="default" @click="endPosting">종료</Button>
			</div>
		</div>
	</div>
</template>
<script>
import { DatePicker } from 'element-ui';
import Vue from 'vue';
import { Button } from 'src/components/UIComponents';

Vue.use(DatePicker);

export default {
	name: 'SlideTableHeader',
	components: {
		Button
	},
	props: {
		title: String,
	},
	methods: {
		endPosting() {
			this.$emit('end-posting');
		},
		goAddPage() {
			this.$emit('go-add-page');
		},
		goEditPage() {
			this.$emit('go-edit-page');
		},
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
	justify-content: flex-end;
}

.table-btn-group {
	display: flex;
	justify-content: flex-end;
}

.table-btn-group button:first-child {
	margin-right: 5px;
}
</style>
<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 mb-4 col-sm-12 card-header">
					<h5 class="title">견적문의 상담내역 수정</h5>
				</div>
				<div class="card-body">
					<EditForm page="estimateInquiries"></EditForm>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { FgInput, Checkbox, Select, Radio } from 'src/components/UIComponents';
import EditForm from './EditForm';

export default {
	name: 'EditEstimateInquiries',
	components: {
		FgInput,
		Checkbox,
		Select,
		Radio,
		EditForm
	},
};
</script>

<style scoped>
</style>
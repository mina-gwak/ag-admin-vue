<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 mb-4 col-sm-12 card-header">
					<h5 class="title">카카오톡 상담내역 수정</h5>
				</div>
				<div class="card-body">
					<form @submit.prevent="onSubmit">
						<fg-input class="col-sm-6 col-12" v-for="data in filteredConsultData"
											:label="data.label"
											v-model="data.value"
											:disabled="data.type === 'date'"
											:type="data.type">
						</fg-input>
						<div class="form-group col-sm-6 col-12 has-label">
							<label>배분여부</label>
							<Checkbox v-if="consultData[3]" v-model="consultData[3].value"></Checkbox>
						</div>
						<p-button nativeType="submit">수정</p-button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { showDetail } from 'src/api';
import { FgInput, Checkbox } from 'src/components/UIComponents';
import { updateKakaoConsults } from 'src/api';

export default {
	name: 'EditKakaoConsult',
	components: {
		FgInput,
		Checkbox
	},
	data() {
		return {
			consultData: [],
		};
	},
	methods: {
		convertDate(date) {
			const offset = new Date().getTimezoneOffset() * 60000;
			const newDate = new Date(new Date(date) - offset);
			return newDate.toISOString().split('T')[0];
		},
		async onSubmit() {
			console.log(this.consultData[3].value)
			const updatedData = {
				inquiryVehicle: this.consultData[2].value,
				isDistribution: this.consultData[3].value,
				kakaotalkId: this.consultData[1].value,
			}
			try {
				await updateKakaoConsults(this.$route.params.id, updatedData);
				alert('수정이 완료되었습니다');
				window.location = '/db/kakao-consults';
			} catch (error) {
				console.log(error.response);
			}
			console.log(updatedData);
		},
	},
	async created() {
		const { data } = await showDetail(this.$route.params.id);
		this.consultData = [
			{
				label: '접수일자',
				value: this.convertDate(data.result.receiptDate),
				type: 'date',
			},
			{
				label: '카카오톡ID',
				value: data.result.kakaotalkId,
				type: 'text',
			},
			{
				label: '문의차량',
				value: data.result.inquiryVehicle,
				type: 'text',
			},
			{
				label: '배분여부',
				value: data.result.isDistribution === '완료',
				type: 'checkbox',
			},
		];
	},
	computed: {
		filteredConsultData: function() {
			return this.consultData.filter((data, index) => index !== this.consultData.length - 1);
		}
	}
};
</script>

<style scoped>
.form-group .form-check {
	top: -15px;
}
</style>
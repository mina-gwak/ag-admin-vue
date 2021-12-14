<template>

</template>

<script>
import { showDetail } from 'src/api';
import { FgInput, Checkbox } from 'src/components/UIComponents';
import { updateConsults } from 'src/api';

export default {
	name: 'EditVisit',
	components: {
		FgInput,
		Checkbox
	},
	data() {
		return {
			url: window.location.pathname.split('/')[2],
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
				await updateConsults(this.url, this.$route.params.id, updatedData);
				alert('수정이 완료되었습니다');
				window.location = `/db/${this.url}`;
			} catch (error) {
				console.log(error.response);
			}
			console.log(updatedData);
		},
	},
	async created() {
		const { data } = await showDetail(this.url, this.$route.params.id);
		this.consultData = [
			{
				label: '접수일자',
				value: this.convertDate(data.result.receiptDate),
				type: 'date',
			},
			{
				label: '카카오톡ID',
				value: data.result.kakaotalkId,
				type: 'select',
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

</style>
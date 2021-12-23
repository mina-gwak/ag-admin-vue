<template>
	<form @submit.prevent="onSubmit">
		<template v-for="data in consultData">

			<fg-input v-if="data.type === 'text' && data.property === 'phoneNumber'"
								class="col-sm-6 col-12"
								:label="data.label"
								v-model="data.value"
								:type="data.type"
								:auto-hypen="autoHypen">
			</fg-input>

			<fg-input v-else-if="data.type === 'text'"
								class="col-sm-6 col-12"
								:label="data.label"
								v-model="data.value"
								:type="data.type">
			</fg-input>

			<fg-input v-else-if="data.type === 'date' && data.property !== 'distributionDate'"
								class="col-sm-6 col-12"
								:label="data.label"
								v-model="data.value"
								:disabled="true"
								:type="data.type">
			</fg-input>

			<div v-else-if="data.type === 'checkbox' && options[data.property]"
					 class="form-group col-sm-6 col-12 has-label">
				<label>{{ data.label }}</label>
				<div v-for="option in options[data.property]">
					<Radio v-model="data.value" :value="option.value" :label="option.value" :inline="true" >{{ option.label }}</Radio>
				</div>
			</div>

			<div v-else-if="data.type === 'checkbox'"
					 class="form-group col-sm-6 col-12 has-label">
				<label>{{ data.label }}</label>
				<div>
					<Checkbox v-model="data.value" :inline="true" >동의</Checkbox>
				</div>
			</div>

			<div v-else-if="data.type === 'select'"
					 class="form-group col-sm-6 col-12 has-label select">
				<label>{{ data.label }}</label>
				<Select :options="options[data.property]" v-model="data.value"></Select>
			</div>
		</template>

		<Button nativeType="submit">수정</Button>
	</form>
</template>

<script>
import { getDetailData, updateData } from 'src/api';
import { FgInput, Checkbox, Select, Radio, Button } from 'src/components/UIComponents';
import options from 'src/assets/data/options';
import tableIndex from 'src/assets/data';
import { convertDate } from 'src/util/date';

export default {
	name: 'EditForm',
	components: {
		FgInput,
		Checkbox,
		Select,
		Radio,
		Button
	},
	props: {
		page: String,
	},
	data() {
		return {
			url: window.location.pathname.split('/')[2],
			consultData: tableIndex[this.page],
			options: options,
		};
	},
	methods: {
		autoHypen(event) {
			let str = event.target.value;
			str = str.replace(/[^0-9]/g, '');
			if (str.length < 4) {
				event.target.value = str;
			} else if (str.length < 7) {
				event.target.value = `${str.substr(0, 3)}-${str.substr(3)}`;
			} else if (str.length < 11) {
				event.target.value = `${str.substr(0, 3)}-${str.substr(3, 3)}-${str.substr(6)}`;
			} else {
				event.target.value = `${str.substr(0, 3)}-${str.substr(3, 4)}-${str.substr(7)}`;
			}
		},
		async onSubmit() {
			const updatedData = {};
			this.consultData.map((data) => updatedData[data.property] = data.value);
			try {
				await updateData(this.url, this.$route.params.id, updatedData);
				alert('수정이 완료되었습니다');
				window.location = `/db/${this.url}`;
			} catch (error) {
				alert(error.response.data.message);
			}
		},
	},
	async created() {
		const { data } = await getDetailData(this.url, this.$route.params.id);
		this.consultData = this.consultData.map((item) => {
			if (item.type === 'date') {
				const value = convertDate(data.result[item.property]);
				return {
					...item,
					value: value,
				};
			} else if (item.type === 'checkbox' && options[item.property]) {
				return {
					...item,
					value: data.result[item.property],
				};
			} else if (item.type === 'checkbox') {
				const value = (data.result[item.property] === '완료' || data.result[item.property] === '동의');
				return {
					...item,
					value: value,
				};
			} else {
				return {
					...item,
					value: data.result[item.property],
				};
			}
		});
	},
};
</script>

<style scoped>
</style>
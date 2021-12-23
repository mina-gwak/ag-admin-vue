<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 mb-4 col-sm-12 card-header">
					<h5 class="title">이벤트 수정</h5>
				</div>
				<div class="card-body">
					<EventForm type="수정" :event="eventData"></EventForm>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EventForm from './EventForm';
import { getDetailData } from 'src/api';

export default {
	name: 'EditEvent',
	components: {
		EventForm,
	},
	data() {
		return {
			eventData: {},
		};
	},
	async created() {
		const { data } = await getDetailData('events', this.$route.params.id);
		this.eventData = data.result;
	},
};
</script>

<style scoped></style>
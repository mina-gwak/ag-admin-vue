<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 mb-4 col-sm-12 card-header">
					<h5 class="title">이벤트 등록</h5>
				</div>
				<div class="card-body">
					<EventForm type="등록" :event="eventData"></EventForm>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EventForm from './EventForm';

export default {
	name: 'AddEvnet',
	components: {
		EventForm,
	},
	data() {
		return {
			eventData: {},
		};
	},
};
</script>

<style scoped></style>
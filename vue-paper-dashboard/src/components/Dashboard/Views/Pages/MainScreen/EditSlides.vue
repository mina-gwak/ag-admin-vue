<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 mb-4 col-sm-12 card-header">
					<h5 class="title">슬라이드 게시물 상세</h5>
				</div>
				<div class="card-body">
					<SlideForm type="수정" :slide="slideData"></SlideForm>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SlideForm from './SlideForm';
import { showDetail } from 'src/api';

export default {
	name: 'EditSlides',
	components: {
		SlideForm,
	},
	data() {
		return {
			slideData: {},
		};
	},
	async created() {
		const { data } = await showDetail('slides', this.$route.params.id);
		this.slideData = data.result;
		console.log(this.slideData);
	},
};
</script>

<style scoped></style>
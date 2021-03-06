<template>
	<form>
		<div class="form-row">
			<fg-input class="col-12"
								label="제목"
								v-model="eventData.title"
								type="text">
			</fg-input>
		</div>

		<div class="form-row">
			<label class="col-12">이벤트 썸네일</label>
			<ImageUploader property="mainImagePath" :data-props="eventData" @handle-change="handleChange"></ImageUploader>
		</div>

		<div class="form-row">
			<fg-input class="col-12"
								label="내용"
								v-model="eventData.content"
								type="text">
			</fg-input>
		</div>

		<div class="form-row">
			<fg-input class="col-12"
								label="링크"
								v-model="eventData.link"
								type="text">
			</fg-input>
		</div>

		<div class="form-row">
			<label class="col-12">게시일자</label>

			<div class="date-container col-5">
				<label class="demonstration">시작일</label>
				<el-date-picker
						v-model="eventData.startAt"
						type="date"
						size="small"
						class="date-picker"
						placeholder="Start date">
				</el-date-picker>
			</div>
			<div class="col-1"></div>

			<div class="date-container col-5">
				<label class="demonstration">종료일</label>
				<el-date-picker
						v-model="eventData.endAt"
						type="date"
						size="small"
						class="date-picker"
						placeholder="End date">
				</el-date-picker>
			</div>
		</div>

		<div class="form-row">
			<label class="col-12">이벤트 상세페이지 적용 이미지</label>
			<ImageUploader property="detailImagePath" :data-props="eventData" @handle-change="handleChange"></ImageUploader>
		</div>

		<div class="button-group">
			<Button nativeType="submit" @click.prevent="onSubmit">임시저장</Button>
			<Button nativeType="submit" @click.prevent="onSubmit">{{ submitType }}</Button>
		</div>
	</form>
</template>

<script>
import { addData, updateData } from 'src/api';
import { Button, ImageUploader } from 'src/components/UIComponents';
import { uploadImage } from 'src/util/uploadImage';
import { convertDate } from 'src/util/date';

export default {
	name: 'EventForm',
	props: {
		type: String,
		event: Object,
	},
	components: {
		Button,
		ImageUploader,
	},
	data() {
		return {
			url: 'events',
			eventData: {},
			submitType: this.type === '등록' ? '등록' : '수정',
		};
	},
	methods: {
		setDefaultDate() {
			const startDate = new Date();
			const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 13);
			return [startDate, endDate];
		},
		checkStatus(startDate, endDate) {
			const start = new Date(startDate);
			const end = new Date(endDate);
			const today = new Date();
			if (today < start) return 'STAND_BY';
			if (today >= start && today <= end) return 'PROCEEDING';
			if (today > end) return 'PROCEEDING';
		},
		async onSubmit(event) {
			const saveType = event.target.textContent === '임시저장' ? 'TEMPORARY' : 'SAVE';
			const eventStatus = this.checkStatus(this.eventData.startAt, this.eventData.endAt);
			const updatedData = {
				...this.eventData,
				startAt: this.eventData.startAt ? convertDate(this.eventData.startAt) : '',
				endAt: this.eventData.endAt ? convertDate(this.eventData.endAt) : '',
				saveType,
				eventStatus,
			};

			try {
				if (this.type === '등록') {
					await addData(this.url, updatedData);
					alert('등록이 완료되었습니다');
				} else {
					await updateData(this.url, this.$route.params.id, updatedData);
					alert('수정이 완료되었습니다');
				}
				window.location = `/events/${this.url}`;
			} catch (error) {
				alert(error.response.data.message);
			}
		},
		handleChange(event) {
			const that = this;
			uploadImage(event, this.eventData).then((newData) => {
				that.eventData = newData;
			});
		},
	},
	created() {
		if (this.type === '등록') {
			const [ startAt, endAt ] = this.setDefaultDate();
			this.eventData = {
				startAt,
				endAt,
			};
		}
	},
	watch: {
		event() {
			this.eventData = { ...this.event };
		},
	},
};
</script>

<style scoped lang="scss">

.form-row {
	margin-bottom: 10px;
}

.date-container {
	display: flex;
	align-items: center;
	margin-bottom: 1rem;

	label {
		position: relative;
		top: 3px;
		display: flex;
		align-items: center;
		flex-shrink: 0;
		height: 100%;
		border: 1px solid #DCDFE6;
		border-radius: 4px;
		padding: 0 20px;
		margin-right: 15px;
	}
}

.button-group {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
</style>
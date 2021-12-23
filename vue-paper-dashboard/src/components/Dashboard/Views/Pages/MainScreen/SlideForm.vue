<template>
	<form>
		<div class="form-row">
			<fg-input class="col-12"
								label="제목"
								v-model="slideData.title"
								type="text">
			</fg-input>
		</div>

		<div class="form-row">
			<fg-input class="col-6"
								label="링크페이지"
								v-model="slideData.link"
								type="text">
			</fg-input>
			<fg-input class="col-6"
								label="내용"
								v-model="slideData.content"
								type="text">
			</fg-input>
		</div>

		<div class="form-row">
			<label class="col-12">게시일자</label>

			<div class="date-container col-5">
				<label class="demonstration">시작일</label>
				<el-date-picker
						v-model="slideData.startDate"
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
						v-model="slideData.endDate"
						type="date"
						size="small"
						class="date-picker"
						placeholder="End date">
				</el-date-picker>
			</div>
		</div>

		<div class="form-row">
			<label class="col-12">이미지 업로드</label>
			<ImageUploader property="image" :data-props="slideData" @handle-change="handleChange"></ImageUploader>
		</div>
		<div class="button-group">
			<Button nativeType="submit" @click.prevent="onSubmit">임시저장</Button>
			<Button nativeType="submit" @click.prevent="onSubmit">{{ submitType }}</Button>
		</div>
	</form>
</template>

<script>
import { addData, updateConsults } from 'src/api';
import { Button, ImageUploader } from 'src/components/UIComponents';
import { uploadImage } from 'src/util/uploadImage';

export default {
	name: 'SlideForm',
	props: {
		type: String,
		slide: Object,
	},
	components: {
		Button,
		ImageUploader,
	},
	data() {
		return {
			url: 'slides',
			slideData: {},
			submitType: this.type === '등록' ? '등록' : '수정',
		};
	},
	methods: {
		convertDate(date) {
			const offset = new Date().getTimezoneOffset() * 60000;
			const newDate = new Date(new Date(date) - offset);
			return newDate.toISOString().split('T')[0];
		},

		async onSubmit(event) {
			const saveType = event.target.textContent === '임시저장' ? 'TEMPORARY' : 'SAVE';

			const updatedData = {
				...this.slideData,
				startDate: this.slideData.startDate ? this.convertDate(this.slideData.startDate) : '',
				endDate: this.slideData.endDate ? this.convertDate(this.slideData.endDate) : '',
				saveType: saveType,
			};

			try {
				if (this.type === '등록') {
					await addData(this.url, updatedData);
					alert('등록이 완료되었습니다');
				} else {
					await updateConsults(this.url, this.$route.params.id, updatedData);
					alert('수정이 완료되었습니다');
				}
				window.location = `/main-screen/${this.url}`;
			} catch (error) {
				alert(error.response.data.message);
			}
		},
		handleChange(event) {
			const that = this;
			uploadImage(event, this.slideData).then((newData) => {
				that.slideData = newData;
			});
		},
	},
	watch: {
		slide() {
			this.slideData = { ...this.slide };
		},
	},
};
</script>

<style scoped lang="scss">
input[type=file] {
	display: none;
}

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

.image-container {
	position: relative;
	width: 100%;
	height: 30vh;
	border: 1px solid #DDD;
	border-radius: 4px;
	margin: 0 5px;
	overflow: hidden;

	label {
		width: 100%;
		height: 100%;
		cursor: pointer;
		z-index: 3;
	}

	.upload-text {
		color: #66615b;
		cursor: pointer;
		z-index: 1;
	}

	img {
		height: 100%;
	}
}

.button-group {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.absolute-center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
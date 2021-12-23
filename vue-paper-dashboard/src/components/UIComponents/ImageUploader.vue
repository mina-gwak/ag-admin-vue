<template>
	<div class="image-container">
		<label :for="property" class="absolute-center"></label>
		<input :id="property" type="file" accept="image/*" @change="handleChange($event)" />
		<div class="upload-text absolute-center" v-if="dataObj[property] === undefined">Upload</div>
		<img v-else :src="dataObj[property]" class="absolute-center" alt="미리보기" />
	</div>
</template>

<script>
export default {
	name: 'ImageUploader',
	props: {
		property: String,
		dataProps: Object,
	},
	data() {
		return {
			dataObj: {},
		};
	},
	methods: {
		handleChange(event) {
			this.$emit('handle-change', event);
		},
	},
	watch: {
		dataProps() {
			this.dataObj = { ...this.dataProps };
		},
	},
};
</script>

<style scoped lang="scss">
input[type=file] {
	display: none;
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

.absolute-center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
<template>
	<div class="round-image-radio">
		<input :id="id" :name="name" type="radio" />
		<label :for="id">
			<img src="https://ag-admin-image.s3.ap-northeast-2.amazonaws.com/brand/brand_benz.png" alt="" />
			<span>{{ label }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'RoundImageRadio',
	props: {
		name: String,
		id: String,
		label: String,
	},
};
</script>

<style scoped lang="scss">
.round-image-radio {
	display: inline-block;
	margin-right: 10px;
}

input {
	display: none;
}

input:checked + label {
	color: #fff !important;
	background-color: #66615B;
}

label {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	color: #66615B !important;
	font-weight: 600;
	border: 1px solid #66615B;
	border-radius: 50%;
	cursor: pointer;
	transition: all 150ms linear;

	span {
		position: relative;
		top: -8px;
	}
}

img {
	width: 60px;
}
</style>
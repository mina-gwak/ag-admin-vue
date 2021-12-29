<template>
	<div class="square-radio">
		<input :id="id" :name="name" type="radio" />
		<label :for="id">
			<img src="https://ag-admin-image.s3.ap-northeast-2.amazonaws.com/car/BENZ_E350.png" alt="" />
			<span>{{ label }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'SquareRadio',
	props: {
		name: String,
		id: String,
		label: String,
	},
};
</script>

<style scoped lang="scss">
.square-radio {
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
	width: 130px;
	height: 130px;
	color: #66615B !important;
	font-weight: 600;
	border: 1px solid #66615B;
	border-radius: 3px;
	cursor: pointer;
	transition: all 150ms linear;
}

img {
	width: 120px;
}
</style>
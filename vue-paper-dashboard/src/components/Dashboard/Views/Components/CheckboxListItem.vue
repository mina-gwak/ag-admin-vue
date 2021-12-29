<template>
	<li class="checkbox-list-item">
		<input :id="id" :name="name" type="checkbox" />
		<label :for="id">
			<span>{{ label }}</span>
			<span>{{ price }}</span>
		</label>
	</li>
</template>

<script>
export default {
	name: 'CheckboxListItem',
	props: {
		name: String,
		id: String,
		label: String,
		price: String,
	},
};
</script>

<style scoped lang="scss">
.checkbox-list-item {
	position: relative;
	display: flex;
	align-items: center;
	list-style: none;
	width: 400px;
	margin-bottom: 5px;
}

input {
	display: none;
	margin: 10px;
}

input:checked + label {
	color: #fff !important;
	background-color: #66615B;

	&:before {
		content: '';
		background-image: url('https://ag-admin-image.s3.ap-northeast-2.amazonaws.com/form/checking-mark.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
}

label {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	width: 400px;
	height: 35px;
	border: 1px solid #66615B;
	border-radius: 3px;
	color: #66615B !important;
	transition: all 150ms linear;
	padding: 0 10px 0 30px;
	margin-bottom: 0 !important;
	cursor: pointer;

	&:before {
		position: absolute;
		left: 10px;
		content: '';
		width: 13px;
		height: 13px;
		background-color: #fff;
		border: 1px solid #66615B;
		border-radius: 2px;
	}

	span {
		position: relative;
		top: 1px;
	}
}
</style>
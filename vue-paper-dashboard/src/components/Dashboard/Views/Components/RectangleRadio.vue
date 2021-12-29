<template>
	<div class="rectangle-radio">
		<input :id="id" :name="name" type="radio" />
		<label :for="id">{{ label }}</label>
	</div>
</template>

<script>
export default {
	name: 'RectangleRadio',
	props: {
		name: String,
		id: String,
		label: String,
	}
};
</script>

<style scoped lang="scss">
.rectangle-radio {
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
	color: #66615B !important;
	font-weight: 600;
	border: 1px solid #66615B;
	border-radius: 3px;
	padding: 4px 40px;
	cursor: pointer;
	transition: all 150ms linear;
}
</style>
<template>
	<el-select
						 placeholder="Single Select"
						 v-model="model">
		<el-option v-for="option in options"
							 :value="option.value"
							 :label="option.label"
							 :key="option.label">
		</el-option>
	</el-select>
</template>

<script>
export default {
	name: 'Select',
	props: {
		options: Array,
		value: String,
	},
	computed: {
		model: {
			get () {
				return this.value
			},
			set (value) {
				this.$emit('input', value)
			}
		},
		inlineClass () {
			if (this.inline) {
				return `form-check-inline`
			}
			return ''
		}
	},
}
</script>

<style lang="scss">

.card-body {
	.form-group.select .el-input__inner {
		background-color: #fff!important;

		&::placeholder {
			color: #ccc!important;
		}

		&:hover::placeholder {
			color: #ccc!important;
		}
	}

	.el-select .el-input.is-focus .el-input__inner {
		border-color: #9A9A9A;
	}

	.el-select .el-input:hover .el-input__icon, .el-select .el-input:hover input {
		color: #66615B!important;
	}
}

</style>
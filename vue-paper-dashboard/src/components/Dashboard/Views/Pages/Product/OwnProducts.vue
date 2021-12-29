<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 col-sm-12 card-header">
					<h5 class="title">보유 차량 리스트</h5>
				</div>
				<div class="card-body">
					<div class="content-header">
						<Tabs :tabs="tabs" @active-tab="activeTab" :align-left="true"></Tabs>
						<Button type="default">등록</Button>
					</div>
					<div class="content">
						<ProductItem></ProductItem>
						<ProductItem></ProductItem>
						<ProductItem></ProductItem>
						<ProductItem></ProductItem>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Button, Tabs } from 'src/components/UIComponents';
import ProductItem from './ProductItem';

export default {
	name: 'OwnProduct',
	components: {
		Button,
		Tabs,
		ProductItem,
	},
	data() {
		return {
			tabs: [
				{
					title: '전체',
					active: true,
				},
				{
					title: 'SUV',
					active: false,
				},
				{
					title: 'SEDAN',
					active: false,
				},
				{
					title: '친환경',
					active: false,
				},
			],
		};
	},
	methods: {
		activeTab(tab) {
			console.log(tab);
		},
	},
	emit: ['active-tab'],
};
</script>

<style scoped lang="scss">
.content-header {
	position: relative;

	button {
		position: absolute;
		top: 0;
		right: 10px;
		margin: 0;
	}
}

.card .card-body {
	padding-top: 0;
}

@media screen and (min-width: 1400px) {
	.content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}
</style>
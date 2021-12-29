<template>
	<div class="product-item">
		<img
				src="https://ag-admin-image.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-12-20+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.39.28.png"
				alt="">
		<div class="product-item-content">
			<div class="product-item-info">
				<h6>벤츠</h6>
				<p>43,880,000원</p>
				<ul class="option-group">
					<li class="option">48개월</li>
					<li class="option">보증금 0원</li>
					<li class="option">선납금 0원</li>
					<li class="option">연간 주행거리 2만km</li>
				</ul>
			</div>
			<div class="rental-fee">
				<h6>렌탈료</h6>
				<p>1,050,000원</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
};
</script>

<style scoped lang="scss">
.product-item {
	display: flex;
	width: 100%;
	border: 1px solid #F1EAE0;
	padding: 20px;
	margin-bottom: 20px;

	h6 {
		margin-bottom: 0.2em;
	}

	img {
		width: 140px;
		height: 100px;
		object-fit: cover;
		margin-right: 20px;
	}
}

.product-item-content {
	display: flex;

	div:first-child {
		padding-right: 30px;
		border-right: 1px solid #F1EAE0;
	}

	.product-item-info {
		width: fit-content;
		p {
			margin-bottom: 5px;
		}
	}

	.rental-fee {
		position: relative;
		top: 5px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin-left: 30px;

		h6 {
			font-size: 1.25em;
		}

		p {
			color: #6bd098;
			font-weight: 700;
			font-size: 2em;
			margin-bottom: 0;
			word-break: keep-all;
		}
	}
}

.option-group {
	padding: 0;
	margin-bottom: 0;

	.option {
		text-transform: uppercase;
		display: inline-block;
		padding: 0.35rem 0.375rem;
		font-size: 66%;
		font-weight: 600;
		line-height: 1;
		text-align: center;
		white-space: nowrap;
		border-radius: 0.375rem;
		background-color: #e5e5e5;
		margin: 0 5px 5px 0;
	}
}

@media screen and (min-width: 1400px) {
	.product-item {
		max-width: 49%;
	}
}
</style>
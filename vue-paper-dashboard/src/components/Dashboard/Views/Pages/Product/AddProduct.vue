<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="mt-2 col-sm-12 card-header">
					<h5 class="title">보유 차량 등록</h5>
				</div>
				<div class="card-body">
					<form>
						<section>
							<h6>희망차량</h6>
							<div>
								<RectangleRadio name="countryType" id="domestic" label="국산"></RectangleRadio>
								<RectangleRadio name="countryType" id="imported" label="수입"></RectangleRadio>
							</div>
						</section>
						<section>
							<h6>브랜드</h6>
							<div>
								<RoundImageRadio name="brand" id="benz" label="벤츠"></RoundImageRadio>
								<RoundImageRadio name="brand" id="bmw" label="BMW"></RoundImageRadio>
							</div>
						</section>
						<section>
							<h6>차종</h6>
							<div>
								<SquareRadio name="product" id="car1" label="차량"></SquareRadio>
								<SquareRadio name="product" id="car2" label="차량"></SquareRadio>
								<SquareRadio name="product" id="car3" label="차량"></SquareRadio>
								<SquareRadio name="product" id="car4" label="차량"></SquareRadio>
								<SquareRadio name="product" id="car5" label="차량"></SquareRadio>
								<SquareRadio name="product" id="car6" label="차량"></SquareRadio>
							</div>
						</section>
						<section>
							<h6>라인업(트림)</h6>
							<ul>
								<CheckboxListItem name="trim" id="trim1" label="2.5 가솔린 터보 캘리그라피" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="trim" id="trim2" label="2.5 가솔린 터보 캘리그라피" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="trim" id="trim3" label="2.5 가솔린 터보 캘리그라피" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="trim" id="trim4" label="2.5 가솔린 터보 캘리그라피" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="trim" id="trim5" label="2.5 가솔린 터보 캘리그라피" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="trim" id="trim6" label="2.5 가솔린 터보 캘리그라피" price="1,000,000원"></CheckboxListItem>
							</ul>
						</section>
						<section>
							<h6>옵션</h6>
							<ul>
								<CheckboxListItem name="option" id="option1" label="UVO" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="option" id="option2" label="파노라마 썬루프" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="option" id="option3" label="파퓰러패키지 II" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="option" id="option4" label="UVO" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="option" id="option5" label="파노라마 썬루프" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="option" id="option6" label="파퓰러패키지 II" price="1,000,000원"></CheckboxListItem>
							</ul>
						</section>
						<section>
							<h6>외장</h6>
							<ul>
								<CheckboxListItem name="exterior" id="exterior1" label="UVO" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="exterior" id="exterior2" label="파노라마 썬루프" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="exterior" id="exterior3" label="파퓰러패키지 II" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="exterior" id="exterior4" label="UVO" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="exterior" id="exterior5" label="파노라마 썬루프" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="exterior" id="exterior6" label="파퓰러패키지 II" price="1,000,000원"></CheckboxListItem>
							</ul>
						</section>
						<section>
							<h6>내장</h6>
							<ul>
								<CheckboxListItem name="interior" id="interior1" label="UVO" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="interior" id="interior2" label="파노라마 썬루프" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="interior" id="interior3" label="파퓰러패키지 II" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="interior" id="interior4" label="UVO" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="interior" id="interior5" label="파노라마 썬루프" price="1,000,000원"></CheckboxListItem>
								<CheckboxListItem name="interior" id="interior6" label="파퓰러패키지 II" price="1,000,000원"></CheckboxListItem>
							</ul>
						</section>
						<section>
							<h6>계약기간</h6>
							<div>
								<RectangleRadio name="contractPeriod" id="24month" label="24개월"></RectangleRadio>
								<RectangleRadio name="contractPeriod" id="36month" label="36개월"></RectangleRadio>
								<RectangleRadio name="contractPeriod" id="48month" label="48개월"></RectangleRadio>
								<RectangleRadio name="contractPeriod" id="60month" label="60개월"></RectangleRadio>
							</div>
						</section>
						<section>
							<h6>연간 주행거리</h6>
							<div>
								<RectangleRadio name="yearMileage" id="20000" label="2만KM"></RectangleRadio>
								<RectangleRadio name="yearMileage" id="30000" label="3만KM"></RectangleRadio>
								<RectangleRadio name="yearMileage" id="40000" label="4만KM"></RectangleRadio>
								<RectangleRadio name="yearMileage" id="infinite" label="무제한"></RectangleRadio>
							</div>
						</section>
						<section>
							<h6>보증금</h6>
							<div>
								<RectangleRadio name="deposit" id="deposit0" label="무보증금"></RectangleRadio>
								<RectangleRadio name="deposit" id="deposit10" label="10%"></RectangleRadio>
								<RectangleRadio name="deposit" id="deposit20" label="20%"></RectangleRadio>
								<RectangleRadio name="deposit" id="deposit30" label="30%"></RectangleRadio>
							</div>
						</section>
						<section>
							<h6>선납금</h6>
							<div>
								<RectangleRadio name="prepayment" id="prepayment0" label="무보증금"></RectangleRadio>
								<RectangleRadio name="prepayment" id="prepayment10" label="10%"></RectangleRadio>
								<RectangleRadio name="prepayment" id="prepayment20" label="20%"></RectangleRadio>
								<RectangleRadio name="prepayment" id="prepayment30" label="30%"></RectangleRadio>
							</div>
						</section>
						<Button nativeType="submit">저장</Button>
					</form>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import RectangleRadio from 'src/components/Dashboard/Views/Components/RectangleRadio';
import RoundImageRadio from 'src/components/Dashboard/Views/Components/RoundImageRadio';
import SquareRadio from 'src/components/Dashboard/Views/Components/SquareRadio';
import CheckboxListItem from 'src/components/Dashboard/Views/Components/CheckboxListItem';
import { Button } from 'src/components/UIComponents';

export default {
	name: 'AddProduct',
	components: {
		RectangleRadio,
		RoundImageRadio,
		SquareRadio,
		CheckboxListItem,
		Button
	},
};
</script>

<style scoped lang="scss">
section {
	margin-bottom: 25px;

	h6 {
		margin-bottom: 15px;
	}
}

ul {
	width: 415px;
	height: 120px;
	overflow: scroll;
	overflow-x: hidden;
	padding: 0;

	&::-webkit-scrollbar {
		width: 1px;
	}
	
	&::-webkit-scrollbar-thumb {
		background-color: #66615B;
	}
	
	&::-webkit-scrollbar-track {
		background-color: #ddd;
	}
}
</style>
<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<SlideTableHeader title="슬라이드 게시 현황"
													@end-posting="endPosting"
													@go-edit-page="goEditPage"
													@go-add-page="goAddPage"
				></SlideTableHeader>
				<Table :data="consultData"
							 :index="index"
							 @change-selection="changeSelection"
							 @show-modal="showModal"
				></Table>
			</div>
		</div>
		<Modal :show="isModalOpen" @close-modal="closeModal">
			<h1 slot="header">상세 내역 조회</h1>
			<ul class="content-list">
				<li v-for="data in index">
					<p>{{ data.label }}</p>
					<p v-if="data.type !== 'img'">{{ modalContent[data.property] ? modalContent[data.property] : '-' }}</p>
					<img v-else :src="modalContent[data.property]" :alt="data.label" />
				</li>
			</ul>
		</Modal>
	</div>
</template>

<script>
import { getData, getDetailData, endPosting } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';
import SlideTableHeader from 'src/components/Dashboard/Views/Templates/SlideTableHeader';
import Modal from 'src/components/UIComponents/Modal';
import router from 'src/main';
import tableIndex from 'src/assets/data';

export default {
	name: 'Slides',
	props: {
		title: String,
		routerName: String,
	},
	components: {
		Table,
		SlideTableHeader,
		Modal,
	},
	data() {
		return {
			consultData: [],
			selections: [],
			isModalOpen: false,
			modalContent: {},
			url: 'slides',
			index: tableIndex.slides,
		};
	},
	methods: {
		async setData() {
			try {
				const { data } = await getData(this.url);
				this.consultData = data.result.slideListResList;
			} catch (error) {
				console.log(error.response);
			}
		},
		changeSelection(selections) {
			this.selections = selections;
		},
		async endPosting() {
			try {
				if (this.selections.length === 0) {
					alert('선택된 데이터가 없습니다');
				} else {
					for (let i = 0; i < this.selections.length; i++) {
						const response = await endPosting(this.url, this.selections[i].idx);
						if (response.data.status !== '200') {
							alert(response.data.message);
							await this.setData();
							return;
						}
					}
					alert('배분완료되었습니다');
					await this.setData();
				}
			} catch (error) {
				console.log(error.message);
			}
		},
		async showModal(idx) {
			this.isModalOpen = true;
			const { data } = await getDetailData(this.url, idx);
			this.modalContent = data.result;
		},
		closeModal() {
			this.isModalOpen = false;
		},
		async goEditPage() {
			if (this.selections.length === 0) {
				alert('수정할 상담내역을 선택해주세요');
				return;
			}

			if (this.selections.length > 1) {
				alert('한 개의 상담내역만 선택해주세요');
				await this.setData();
				return;
			}

			await router.push({
				name: 'EditSlides',
				params: {
					id: this.selections[0].id,
				},
			});
		},
		goAddPage() {
			router.replace({
				name: 'AddSlide',
			});
		},
	},
	created() {
		this.setData();
	},
	computed: {
		changeSelect() {
			return this.selections;
		},
	},
	emit: ['get-filtered-data', 'complete-distribution', 'show-modal', 'close-modal', 'go-edit-page', 'go-add-page'],
};
</script>

<style scoped lang="scss">
.modal-header h1 {
	font-size: 18px;
	font-weight: 700;
	line-height: 27px;
	margin-bottom: 0;
}

.content-list {
	padding: 0;

	li {
		display: flex;
		align-items: center;
		margin-bottom: 10px;

		p {
			padding: 0 10px;
			word-break: break-word;
			border-left: 1px solid #DDD;
		}

		p:first-child {
			flex-shrink: 0;
			width: 100px;
			font-weight: 600;
			text-align: right;
			border: none;
		}
	}
}
</style>
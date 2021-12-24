<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<DBTableHeader :title="title"
											 @set-date-array="setDateArray"
											 @complete-distribution="completeDistribution"
											 @go-edit-page="goEditPage"
				></DBTableHeader>
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
					<p>{{ modalContent[data.property] ? modalContent[data.property] : '-' }}</p>
				</li>
			</ul>
		</Modal>
	</div>
</template>

<script>
import { getDetailData, filterData, completeDistribution } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';
import DBTableHeader from 'src/components/Dashboard/Views/Templates/DBTableHeader';
import Modal from 'src/components/UIComponents/Modal';
import router from 'src/main';

export default {
	name: 'ShowDBTable',
	props: {
		title: String,
		url: String,
		index: Array,
		routerName: String,
	},
	components: {
		Table,
		DBTableHeader,
		Modal,
	},
	data() {
		return {
			date: [],
			consultData: [],
			selections: [],
			isModalOpen: false,
			modalContent: {},
		};
	},
	methods: {
		setDateArray(dateArray) {
			this.date = dateArray;
			this.getFilteredData();
		},
		async getFilteredData() {
			try {
				const { data } = await filterData(this.url, ...this.date);
				this.consultData = data.result;
			} catch (error) {
				console.log(error.response);
			}
		},
		changeSelection(selections) {
			this.selections = selections;
		},
		async completeDistribution() {
			try {
				if (this.selections.length === 0) {
					alert('선택된 데이터가 없습니다');
				} else {
					for (let i = 0; i < this.selections.length; i++) {
						const response = await completeDistribution(this.url, this.selections[i].idx);
						if (response.data.status !== '200') {
							alert(response.data.message);
							await this.getFilteredData();
							return;
						}
					}
					alert('배분완료되었습니다');
					await this.getFilteredData();
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
				await this.getConsultData();
				return;
			}

			await router.push({
				name: this.routerName,
				params: {
					id: this.selections[0].idx,
				},
			});
		},
	},
	computed: {
		changeSelect() {
			return this.selections;
		},
	},
	emit: ['set-date-array', 'complete-distribution', 'show-modal', 'close-modal', 'go-edit-page'],
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
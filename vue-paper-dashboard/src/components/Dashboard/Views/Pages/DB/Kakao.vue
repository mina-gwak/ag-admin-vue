<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<DBTableHeader title="카카오톡 상담접수 목록"
											 @get-filtered-data="getFilteredData"
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
					<p>{{ modalContent[data.property] ? modalContent[data.property] : '-'  }}</p>
				</li>
			</ul>
		</Modal>
	</div>
</template>

<script>
import { getKakaoConsults, filterKakaoConsults, completeDistribution, showDetail } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';
import DBTableHeader from 'src/components/Dashboard/Views/Templates/DBTableHeader';
import Modal from 'src/components/UIComponents/Modal';
import tableIndex from 'src/assets/data';
import router from 'src/main';

export default {
	name: 'Kakao',
	components: {
		Table,
		DBTableHeader,
		Modal,
	},
	data() {
		return {
			consultData: [],
			index: tableIndex.kakao,
			selections: [],
			isModalOpen: false,
			modalContent: {},
		};
	},
	methods: {
		async getConsultData() {
			try {
				const { data } = await getKakaoConsults();
				this.consultData = data.result;
			} catch (error) {
				console.log(error.response);
			}
		},
		async getFilteredData(dateArray) {
			try {
				const { data } = await filterKakaoConsults(...dateArray);
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
						const response = await completeDistribution(this.selections[i].idx);
						if (response.data.status !== '200') {
							alert(response.data.message);
							await this.getConsultData();
							return;
						}
					}
					alert('배분완료되었습니다');
					await this.getConsultData();
				}
			} catch (error) {
				console.log(error.message);
			}
		},
		async showModal(idx) {
			this.isModalOpen = true;
			const { data } = await showDetail(idx);
			this.modalContent = data.result;
		},
		closeModal() {
			this.isModalOpen = false;
		},
		goEditPage() {
			router.push({
				name: 'EditKakaoConsult',
				params: {
					id: this.selections[0].idx,
				}
			})
		}
	},
	created() {
		this.getConsultData();
	},
	emit: ['get-filtered-data', 'complete-distribution', 'show-modal', 'close-modal', 'go-edit-page'],
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
			width: 90px;
			font-weight: 600;
			text-align: right;
			border: none;
		}
	}
}
</style>
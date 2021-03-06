<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<EventTableHeader title="이벤트"
													@set-date-array="setDateArray"
													@go-add-page="goAddPage"
													@go-edit-page="goEditPage"
													@delete-event="deleteEvent"
				></EventTableHeader>
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
				<li v-for="data in index" v-if="data.property !== 'eventStatus'">
					<p>{{ data.label }}</p>
					<p v-if="data.type !== 'img'">{{ modalContent[data.property] ? modalContent[data.property] : '-' }}</p>
					<img v-else :src="modalContent[data.property]" :alt="data.label" />
				</li>
			</ul>
		</Modal>
	</div>
</template>

<script>
import { getData, getDetailData, deleteData } from 'src/api';
import Table from 'src/components/Dashboard/Views/Templates/Table';
import EventTableHeader from 'src/components/Dashboard/Views/Templates/EventTableHeader';
import Modal from 'src/components/UIComponents/Modal';
import router from 'src/main';
import tableIndex from 'src/assets/data';

export default {
	name: 'Event',
	props: {
		title: String,
		routerName: String,
	},
	components: {
		Table,
		EventTableHeader,
		Modal,
	},
	data() {
		return {
			date: [],
			consultData: [],
			selections: [],
			isModalOpen: false,
			modalContent: {},
			url: 'events',
			index: tableIndex.events,
		};
	},
	methods: {
		setDateArray(dateArray) {
			this.date = dateArray;
			this.setData();
		},
		async setData() {
			try {
				const { data } = await getData(this.url, ...this.date);
				this.consultData = data.result.eventListResList;
			} catch (error) {
				console.log(error.response);
			}
		},
		changeSelection(selections) {
			this.selections = selections;
		},
		async showModal(id) {
			this.isModalOpen = true;
			const { data } = await getDetailData(this.url, id);
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
				name: 'EditEvent',
				params: {
					id: this.selections[0].eventIdx,
				},
			});
		},
		goAddPage() {
			router.replace({
				name: 'AddEvent',
			});
		},
		async deleteEvent() {
			try {
				if (this.selections.length === 0) {
					alert('선택된 데이터가 없습니다');
				} else {
					if (!confirm('정말 삭제하시겠습니까?')) return;
					for (let i = 0; i < this.selections.length; i++) {
						const response = await deleteData(this.url, this.selections[i].eventIdx);
						if (response.data.code !== 'OK') {
							alert(response.data.message);
							await this.setData();
							return;
						}
					}
					alert('이벤트가 삭제되었습니다');
					await this.setData();
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {
		changeSelect() {
			return this.selections;
		},
	},
	emit: ['set-date-array', 'go-add-page', 'go-edit-page', 'delete-event', 'change-selection', 'show-modal', 'close-modal'],
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
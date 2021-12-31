<template>
	<ShowDBTable title="카카오톡 상담접수 목록"
							 :url="url"
							 :index="index"
							 routerName="EditKakao"
	></ShowDBTable>
</template>

<script>
import ShowDBTable from './ShowDBTable';
import tableIndex from 'src/assets/data';

export default {
	name: 'Kakaos',
	components: {
		ShowDBTable,
	},
	data() {
		return {
			url: 'kakaos',
			index: tableIndex.kakao,
		};
	}
};
</script>

<style scoped lang="scss">

</style>
<template>
	<div class="aside-search">
		<select v-model="selected" class="form-select">
			<option disabled value="">선택</option>
			<option value="hashtag">#</option>
			<option value="user">사용자</option>
		</select>
		<input
			v-model="search"
			@keyup.enter="toSearchPage"
			type="text"
			class="form-control"
			placeholder="검색하기"
		/>
		<button class="btn btn-dark" :disabled="!vaild">
			<i @click="toSearchPage" class="bi bi-search" />
		</button>
	</div>
</template>

<script>
import customAlert from '@/utils/customAlert'

export default {
	data() {
		return {
			selected: '',
			search: ''
		}
	},

	computed: {
		vaild() {
			return this.selected && this.search
		}
	},

	methods: {
		toSearchPage() {
			if (this.vaild) {
				this.$router.push(`/${this.selected}/${this.search}`)
				this.selected = ''
				this.search = ''
			} else {
				customAlert('검색 항목 또는 검색어가 필요합니다!')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.aside-search {
	display: flex;
	gap: 5px;
	:nth-child(1) {
		flex-basis: 150px;
	}
}
</style>

<template>
	<div class="container profile-container">
		<div class="profile-box">
			<ProfileCard />
			<ProfileImgCard />
		</div>
		<PostCard v-for="index in 5" :key="index" />
	</div>
</template>

<script>
import ProfileCard from '@/components/users/ProfileCard'
import ProfileImgCard from '@/components/users/ProfileImgCard'
import PostCard from '@/components/posts/PostCard'

export default {
	components: {
		ProfileCard,
		ProfileImgCard,
		PostCard
	}
}
</script>

<style lang="scss" scoped>
.profile-container {
	margin-top: 40px;
	.profile-box {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		:first-child {
			flex: 1 1 0;
		}
		:last-child {
			flex: 2 1 0;
		}
		@include media-breakpoint-down(sm) {
			display: block;
			:first-child {
				margin-bottom: 30px;
			}
		}
	}
}
</style>

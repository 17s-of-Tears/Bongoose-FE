d
<template>
	<div class="container">
		<div class="profile-box">
			<ProfileCard />
			<ProfileImgCard />
		</div>
		<ContentCard v-for="index in 5" :key="index" />
	</div>
</template>

<script>
import ProfileCard from '@/components/users/ProfileCard'
import ProfileImgCard from '@/components/users/ProfileImgCard'
import ContentCard from '@/components/home/ContentCard'

export default {
	components: {
		ProfileCard,
		ProfileImgCard,
		ContentCard
	}
}
</script>

<style lang="scss" scoped>
.container {
	margin-top: 40px;
	.profile-box {
		display: flex;
		justify-content: space-between;
		height: 370px;
	}
}
</style>

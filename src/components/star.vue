<template>
	<div class="star">
		<ul>
			<li v-for="(item, index) in evaluate" :key="index"><img :src=item alt=""></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "star",
		props: {
			//			size:{
			//				type:String,
			//				default:'xs'
			//			},
			num: {
				type: Number,
				default: 5
			},
			eval: {
				type: Number,
				default: 3.5
			}
		},
		computed: {
			evaluate() {
				let result = [];
				let score = Number(this.eval);
				while(result.length < Math.floor(this.eval)) {
					result.push(require('@/assets/img/xinxin-2@2x.png'));
				}
				if(score % 1 !== 0) {

					result.push(require('@/assets/img/xinxin-10@2x.png'));
				}

				while(result.length < this.num) {

					result.push(require('@/assets/img/xinxin-4@2x.png'));
				}
				return result
			}
		}
	}
</script>

<style scoped lang="less">
	.star {
		width: 50%;
		display: inline-block;
		ul {
			display: flex;
			li {
				margin-left: .05rem;
				img{
					width: 0.25rem;
				}
			}
		}
	}
</style>
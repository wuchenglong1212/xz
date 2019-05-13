<template>
	<div id="">
		<div class="top">
			<h1>星座伴侣</h1>
			<ul v-if="myjson">
				<li><img :src=myjson[num].Img /></li>
				<li>
					<h2>{{consName}}({{ename}})</h2></li>
				<li>
					<p>{{time}}</p>
				</li>
			</ul>
			<img class="fh" src="../assets/img/tuceng-5@2x.png" @click="fh" />
		</div>
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<div class="swiper-pagination" slot="pagination"></div>
			<swiper-slide>
				<div class="yunshi">
					<ul>
						<li>综合指数：
							<star :eval=all></star>
						</li>
						<li>健康指数：
							<star :eval=health></star>
						</li>
						<li>爱情指数：
							<star :eval=love></star>
						</li>
						<li>财运指数：
							<star :eval=money></star>
						</li>
						<li>工作指数：
							<star :eval=work></star>
						</li>
						<li>速配星座：<span>{{shuju.QFriend}}</span></li>
						<li>幸运颜色：<span>{{shuju.color}}</span></li>
						<li>幸运数字：<span>{{shuju.number}}</span></li>

					</ul>
					<div class="article">
						<h1><img src="../assets/img/yunshi@2x.png"><span>今日概述</span></h1>
						<p>{{shuju.summary}}</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/gongzuo@2x.png"><span>工作</span></h1>
						<p>内心有焦躁，但身体拒绝劳求舒适，容易有胃部不适。</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/huangguang@2x.png"><span>每日推荐</span></h1>
						<p><img src="../assets/img/guangg.png"></p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="yunshi">
					<ul>
						<li>综合指数：
							<star :eval=all></star>
						</li>
						<li>健康指数：
							<star :eval=health></star>
						</li>
						<li>爱情指数：
							<star :eval=love></star>
						</li>
						<li>财运指数：
							<star :eval=money></star>
						</li>
						<li>工作指数：
							<star :eval=work></star>
						</li>
						<li>速配星座：<span>{{shuju.QFriend}}</span></li>
						<li>幸运颜色：<span>{{shuju.color}}</span></li>
						<li>幸运数字：<span>{{shuju.number}}</span></li>

					</ul>
					<div class="article">
						<h1><img src="../assets/img/yunshi@2x.png"><span>今日概述</span></h1>
						<p>{{shuju.summary}}</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/gongzuo@2x.png"><span>工作</span></h1>
						<p>内心有焦躁，但身体拒绝劳求舒适，容易有胃部不适。</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/huangguang@2x.png"><span>每日推荐</span></h1>
						<p><img src="../assets/img/guangg.png"></p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="set-main">
					<div class="article">
						<h1><img src="../assets/img/jiangkang@2x.png"><span>健康</span></h1>
						<p>1</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/qiuzhi@2x.png"><span>求职</span></h1>
						<p>2</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/aiqingyun@2x.png"><span>恋情</span></h1>
						<p>3</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/ys@2x.png"><span>财运</span></h1>
						<p>4</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/gongzuo@2x.png"><span>工作</span></h1>
						<p>5</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/huangguang@2x.png"><span>每日推荐</span></h1>
						<p><img src="../assets/img/guangg.png"></p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="set-main">
					<div class="article" >
						<h1><img src="../assets/img/jiangkang@2x.png"><span>健康</span></h1>
						<p>1</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/qiuzhi@2x.png"><span>求职</span></h1>
						<p>2</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/aiqingyun@2x.png"><span>恋情</span></h1>
						<p>3</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/ys@2x.png"><span>财运</span></h1>
						<p>4</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/gongzuo@2x.png"><span>工作</span></h1>
						<p>5</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/huangguang@2x.png"><span>每日推荐</span></h1>
						<p><img src="../assets/img/guangg.png"></p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="set-main">
					<div class="article" >
						<h1><img src="../assets/img/jiangkang@2x.png"><span>健康</span></h1>
						<p>1</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/qiuzhi@2x.png"><span>求职</span></h1>
						<p>2</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/aiqingyun@2x.png"><span>恋情</span></h1>
						<p>3</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/ys@2x.png"><span>财运</span></h1>
						<p>4</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/gongzuo@2x.png"><span>工作</span></h1>
						<p>5</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/huangguang@2x.png"><span>每日推荐</span></h1>
						<p><img src="../assets/img/guangg.png"></p>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="set-main">
					<div class="article" >
						<h1><img src="../assets/img/jiangkang@2x.png"><span>健康</span></h1>
						<p>1</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/qiuzhi@2x.png"><span>求职</span></h1>
						<p>2</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/aiqingyun@2x.png"><span>恋情</span></h1>
						<p>3</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/ys@2x.png"><span>财运</span></h1>
						<p>4</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/gongzuo@2x.png"><span>工作</span></h1>
						<p>5</p>
					</div>
					<div class="article">
						<h1><img src="../assets/img/huangguang@2x.png"><span>每日推荐</span></h1>
						<p><img src="../assets/img/guangg.png"></p>
					</div>
				</div>
			</swiper-slide>

			<!-- Optional controls -->

		</swiper>
		<footer>
                <div>
                    <img alt="indexlogo" src="../assets/img/shouye@3x.png">
                    <p>首页</p>
                </div>
                <div>
                    <img alt="touiao" src="../assets/img/toutiao-(2)@2x.png"/>
                    <p>头条</p>
                </div>
            </footer>
		
		<!--<div class="yunshi">
			<ul>
				<li>综合指数：
					<star :eval=all></star>
				</li>
				<li>健康指数：
					<star :eval=health></star>
				</li>
				<li>爱情指数：
					<star :eval=love></star>
				</li>
				<li>财运指数：
					<star :eval=money></star>
				</li>
				<li>工作指数：
					<star :eval=work></star>
				</li>
				<li>速配星座：<span>{{shuju.QFriend}}</span></li>
				<li>幸运颜色：<span>{{shuju.color}}</span></li>
				<li>幸运数字：<span>{{shuju.number}}</span></li>

			</ul>
		</div>-->
	</div>
</template>

<script>
	var text
	import star from '@/components/star.vue'
	export default {

		data() {
			return {
				shuju: "",
				consName: "",
				ename:"",
				time:"",
				type: 'tomorrow',
				key: '0db4a6757ed64712b97d60238e8c6bf1',
				swiperOption: {
					// some swiper options/callbacks
					// 所有的参数同 swiper 官方 api 参数
					// ...
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet: function(index, className) {
							switch(index) {
								case 0:
									text = '今日';
									break;
								case 1:
									text = '明日';
									break;
								case 2:
									text = '本周';
									break;
								case 3:
									text = '下周';
									break;
								case 4:
									text = '本月';
									break;
								case 5:
									text = '本年';
									break;
									//          					case 2:text='叁';break;
									//          					case 3:text='肆';break;
									//          					case 4:text='伍';break;
							}
							return '<span class="' + className + '">' + text + '</span>';
						},
					}
				},
			}
		},
		computed: {
			all() {
				let dt = parseInt(this.shuju.all)
				return dt / 20

			},
			health() {
				let dt = parseInt(this.shuju.health)
				//				console.log(dt/20)
				return dt / 20

			},
			love() {
				let dt = parseInt(this.shuju.love)
				//				console.log(dt/20)
				return dt / 20

			},
			money() {
				let dt = parseInt(this.shuju.money)
				//				console.log(dt/20)
				return dt / 20

			},
			work() {
				let dt = parseInt(this.shuju.work)
				//				console.log(dt/20)
				return dt / 20

			},
			swiper() {
				return this.$refs.mySwiper.swiper
			}

		},
		props: ['myjson'],
		components: {
			star
		},
		created() {

			let date = new Date();
			let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
			this.num = date.getDate() < arr[date.getMonth()] ? date.getMonth() - 3 : date.getMonth() - 2;
			//			console.log(this.myjson)
			if(this.myjson) {
				console.log(123)
				if(this.$route.query.name){
					this.consName=this.$route.query.name
					this.ename=this.$route.query.ename
					this.time=this.$route.query.time
					
				}else{
					this.consName = this.myjson[this.num].Name
					this.ename=this.myjson[this.num].EnglishName
					this.time=this.myjson[this.num].Time
				}
				
				
//				this.consName = this.myjson[this.num].Name
				console.log(this.consName)
				this.$axios.get('/api/constellation/getAll?consName=' + this.consName + '&type=' + this.type + '&key=' + this.key)
					.then((res) => {

						this.shuju = JSON.parse(res.request.responseText);
						console.log(this.shuju);
					})
				//				this.shuju = JSON.parse(res.request.responseText);
			}
			//			this.consName=this.myjson[this.num].Name
			//			this.name=this.myjson[this.num].Name
			//if(this.consName){console.log(123)}
			
			console.log(this.$route.query.name)
		},
		watch: {
			myjson() {
				if(this.$route.query.name){
					this.consName=this.$route.query.name
					this.ename=this.$route.query.ename
					this.time=this.$route.query.time
				}else{
					this.consName = this.myjson[this.num].Name
					this.time=this.myjson[this.num].Time
					this.ename=this.myjson[this.num].EnglishName
				}
				
				
				console.log(this.consName)
				this.$axios.get('/api/constellation/getAll?consName=' + this.consName + '&type=' + this.type + '&key=' + this.key)
					.then((res) => {

						this.shuju = JSON.parse(res.request.responseText);
						console.log(this.shuju);
					})
				
			}
			
		},
		methods:{
			fh(){
				this.$router.push({path:'/index'})
			}
		},	
		mounted() {
			// current swiper instance
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			console.log('this is current swiper instance object', this.swiper)
			this.swiper.slideTo(0, 1000, false)
		}

	}
</script>

<style scoped lang="less">
	.top {
		background-image: url(../assets/img/today.png);
		background-size: 100%;
		background-repeat: no-repeat;
		text-align: center;
		h1 {
			color: #fff;
			font-size: 0.34rem;
			padding-top: 1.04rem;
			padding-bottom: 0.55rem;
		}
		img {
			width: 1.3rem;
			padding-bottom: 0.26rem;
		}
		h2 {
			padding-bottom: 0.11rem;
			font-size: 0.26rem;
			color: #313030;
		}
		p {
			padding-bottom: 0.42rem;
			font-size: 0.22rem;
			color: #6a6a6a;
		}
		.fh{
			position: absolute;
			width: 0.9rem;
			top: 0.5rem;
			left: 0.5rem;
		}
	}
	
	.yunshi {
		ul {
			display: flex;
			width: 6.66rem;
			margin: 0 auto;
			font-size: 0.26rem;
			justify-content: space-between;
			flex-wrap: wrap;
			color: #4e4e4e;
			margin-top: 0.94rem;
			li {
				width: 50%;
				margin-bottom: 0.4rem;
				span {
					font-size: 0.22rem;
					color: #8f8d8e;
				}
			}
		}
		.article {
			/*width: 43.0625rem;*/
			padding-left: .42rem;
			padding-top: .82rem;
			padding-right: .42rem;
			h1 {
				font-size: .28rem;
				color: #5c5c5c;
				img {
					vertical-align: middle;
					width: .5rem;
				}
				span {
					margin-left: .13rem
				}
			}
			p {
				margin-top: .16rem;
				font-size: .24rem;
				color: #828281;
				img {
					width: 100%;
				}
			}
		}
	}
	footer {
            display: flex;
            justify-content: space-around;
            position: fixed;
            bottom: 0;
            width: 100%;
            background: #fff;
            padding: 0;
            font-size: .35rem;
            padding-top: .1rem;
            padding-bottom: .77rem;
            z-index: 1;

            img {
                width: .5rem;
            }
        }
</style>
<style lang="less">
	.swiper-wrapper {
		padding-top: .5rem !important;
	}
	
	.swiper-pagination {
		top: 0;
		bottom: unset !important;
		display: flex;
		justify-content: space-around;
	}
	
	.swiper-pagination-bullet {
		width: auto !important;
		font-size: .3rem;
		height: .5rem !important;
		line-height: .5rem;
		border-radius: 0 !important;
		background-color: transparent !important;
		margin: 0 !important;
	}
	
	.swiper-pagination-bullet-active {
		position: relative;
		background: transparent !important;
		color: #b73ed6;
	}
	
	.swiper-pagination-bullet-active::after {
		position: absolute;
		content: '';
		background: #b73ed6;
		display: inline-block;
		width: 100%;
		height: .03rem;
		top: 100%;
		left: 0;
	}
	.article {
			/*width: 43.0625rem;*/
			padding-left: .42rem;
			padding-top: .82rem;
			padding-right: .42rem;
			h1 {
				font-size: .28rem;
				color: #5c5c5c;
				img {
					vertical-align: middle;
					width: .5rem;
				}
				span {
					margin-left: .13rem
				}
			}
			p {
				margin-top: .16rem;
				font-size: .24rem;
				color: #828281;
				img {
					width: 100%;
				}
			}
		}
</style>
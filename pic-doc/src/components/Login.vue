<template>
	<el-container class="loginBody">
		<img src = "../assets/logo.png" class="center-card2" width="30%" height="30%"/>
			<button class="limiaobtn" @click="Login()" >Document</button>
			<button class="searchbtn" @click="jump()">Explore Data</button>
	</el-container>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			Login() {
				this.$router.push({
					name: 'pmimic'
				});
			},
			jump(){
				window.location.href='http://pic.nbscn.org/chartsview'
			},
			apply() {
				this.$router.push({
					name: 'applypage'
				});
			}
		}
	}
</script>
<style>
    .center-card2 {
		position: absolute;
		top: 30%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.center-card {
		text-align: center;
		width: 150px;
		height: 50px;
		position: absolute;
		top: 70%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		padding: 0 15px;
		box-sizing: border-box;
	}

	.limiaobtn{
		position:absolute;
		top:70%;
		left:50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width:130px;
		height:50px;
		border-radius: 10px;
	}

		.searchbtn{
		position:absolute;
		top:60%;
		left:50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width:130px;
		height:50px;
		border-radius: 10px;
	}

		.displaybtn{
		position:absolute;
		top:80%;
		left:50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width:130px;
		height:50px;
		border-radius: 10px;
	}

	.loginBody {
		background: #444;
		width:100%;
		height:100%;
	}
</style>

<template>
	<div class="main">
		<el-container class="mybody">
			<el-header id="logo">
				<span class="title">PIC Database Documents</span>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<sidenavi :menuItems="menuItem" @changeRoute="addTab"></sidenavi>
				</el-aside>
				<el-container>
					<div style="width:100%;height:100%;overflow:auto">
					<div class='col-md-10' >
					<el-main class='sysMain'>
						<router-view />
					</el-main>
					</div>
					</div>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import sidenavi from '@/components/SideNavi';
	export default {
		data() {
			return {
				username: '',
				tabs: [],
				menuItem:
				[
					{name:'1',title:'About',children:[
						{name:'1-1',title:'PIC',path:'about/pmimic'},
						{name:'1-2',title:'Roadmap',path:'about/roadmap'},
					]},
					{name:'2',title:'Getting started',children:[
						{name:'2-1',title:'Overview',path:'gettingstarted/overview'}
					]},
					{name:'3',title:'Tables in PIC',children:[
						{name:'3-1',title:'ADMISSIONS',path:'pmimictables/admissions'},
						{name:'3-2',title:'CHARTEVENTS',path:'pmimictables/chartevents'},
						{name:'3-3',title:'D_ICD_DIAGNOSES',path:'pmimictables/d_icd_diagnoses'},
						{name:'3-4',title:'D_ITEMS',path:'pmimictables/d_items'},
						{name:'3-5',title:'D_LABITEMS',path:'pmimictables/d_labitems'},
						{name:'3-6',title:'DIAGNOSES_ICD',path:'pmimictables/diagnoses_icd'},
						{name:'3-7',title:'EMR_SYMPTOMS',path:'pmimictables/emr_symptoms'},
						{name:'3-8',title:'ICUSTAYS',path:'pmimictables/icustays'},
						{name:'3-9',title:'LABEVENTS',path:'pmimictables/labevents'},
						{name:'3-10',title:'MICROBIOLOGYEVENTS',path:'pmimictables/microbiologyevents'},
						{name:'3-11',title:'OR_EXAM_REPORTS',path:'pmimictables/or_exam_report'},
						{name:'3-12',title:'OUTPUTEVENTS',path:'pmimictables/outputevents'},
						{name:'3-13',title:'PATIENTS',path:'pmimictables/patients'},
						{name:'3-14',title:'PRESCRIPTIONS',path:'pmimictables/prescriptions'},
						{name:'3-15',title:'SURGERY_VITAL_SIGNS',path:'pmimictables/surgery_vital_sign'},
					]},
					{name:'4',title:'Data details',children:[
						{name:'4-1',title:'Data sources',path:'pmimictables/datasources'},
						{name:'4-2',title:'Patient identifiers',path:'pmimictables/patientidentifiers'},
						{name:'4-3',title:'Times',path:'pmimictables/times'}
					]}
					],
				nowTab: '0'
			}
		},
		created() {
			var data = JSON.parse(sessionStorage.getItem('loginInfo'));
			this.$ajax.username = data.username;
			this.$ajax.token = data.token;
			this.username = this.$ajax.username;
			this.$ajax.check();
		},
		mounted() {
		},
		computed: {
			tabHash() {
				let result = {}
				let len = this.tabs.length
				for (let i = 0; i < len; i++) {
					let tab = this.tabs[i]
					result[tab.name] = tab
				}
				return result
			},
			titleHash() {
				let result = {}
				for (let first of this.menuItem){
					for(let second of first.children){
						result[second.path] = {title:second.title,name:second.name}
					}
				}
				return result
			},
		},
		methods: {
			addTab(item) {
				if (!this.tabHash[item.name]) {
					this.tabs.push(item)
				}
				this.nowTab = item.name
				this.$router.replace({
					path: '/' + item.path
				})
			},
			removeTab(targetName) {
				let tabs = this.tabs
				let activeName = this.nowTab
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1]
							if (nextTab) {
								activeName = nextTab.name
								this.$router.replace({
									path: '/' + this.tabHash[activeName].path
								})
							}
						}
					});
				}
				this.tabs = tabs.filter(tab => tab.name !== targetName)
				this.nowTab = activeName
				if (this.tabs.length === 0) {
					this.$nextTick(() => {
						this.$router.replace({
							path: '/'
						})
					});
				}
			},
			switchTab(source) {
				//TODO HZH 防止反复点击同一路由造成闪烁
				this.$router.replace({
					path: '/' + this.tabHash[source.name].path
				})
			}
		},
		components: {
			sidenavi
		}
	}
</script>
<style>
	.main,
	.mybody {
		width: 100%;
		height: 100%;
	}

	span.title {
		font-size: 38px;
		font-family: 微软雅黑;
		color: #fff;
		font-weight: bold;
	}

	.el-header {
		height: 70px !important;
		background-color: #000;
		position: relative;
		line-height: 70px;
	}

	#logo>img {
		position: absolute;
		height: 80px;
		top: 10px;
	}

	.userDIV {
		float: right;
		height: 65px;
	}

	.el-dropdown {
		height: 65px;
	}
</style>

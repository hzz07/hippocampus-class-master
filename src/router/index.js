import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/signIn',
			name: 'signIn',
			component: (resolve) => require(['../view/SignIn'], resolve)
		},
		{
			path: '/registration',
			name: 'registration',
			component: (resolve) => require(['../view/Registration'], resolve),
			meta: {
				requiresAuth:true,
				title: '注册'
			}
		},
		{
			path: '/forgetPassword',
			name: 'forgetPassword',
			component: (resolve) => require(['../view/ForgetPassword'], resolve),
			meta: {
				title: '忘记密码'
			}
		},
		{
			path: '/essentialInformationInput',
			name: 'essentialInformationInput',
			component: (resolve) => require(['../view/EssentialInformation'], resolve),
			meta: {
				requiresAuth:true,
				title: '填写信息'
			}
		},
		{
			path: '/home',
			name: 'home',
			component: (resolve) => require(['../view/Home'], resolve),
			meta: {
				title: '首页'
			}
		},
		{
			path: '/classList',
			name: 'classList',
			component: (resolve) => require(['../view/ClassList'], resolve),
			meta: {
				title: '课程'
			}
		},
		{
			path: '/classDetails',
			name: 'classDetails',
			component: (resolve) => require(['../view/class/ClassDetails'], resolve),
			meta: {
				title: '课程详情'
			}
		},
		{
			path: '/classWriteComment',
			name: 'classWriteComment',
			component: (resolve) => require(['../view/class/ClassWriteComment'], resolve),
			meta: {
				title: '写评论'
			}
		},
		{
			path: '/classTests',
			name: 'classTests',
			component: (resolve) => require(['../view/class/ClassTests'], resolve),
			meta: {
				title: '课程习题'
			}
		},
		{
			path: '/sharePage',
			name: 'sharePage',
			component: (resolve) => require(['../view/SharePage'], resolve),
			meta: {
				title: '一起来学习'
			}
		},
		{
			path: '/buy',
			name: 'buy',
			component: (resolve) => require(['../view/Buy'], resolve),
			meta: {
				title: '购物车'
			}
		},
		{
			path: '/confirmationInformation',
			name: 'confirmationInformation',
			component: (resolve) => require(['../view/buy/ConfirmationInformation'], resolve),
			meta: {
				title: '确认信息'
			}
		},
		{
			path: '/my',
			name: 'my',
			component: (resolve) => require(['../view/My'], resolve),
			meta: {
				title: '我的'
			}
		},
		{
			path: '/jobDetails',
			name: 'jobDetails',
			component: (resolve) => require(['../view/my/JobDetails'], resolve),
			meta: {
				title: '作业详情'
			}
		},
		{
			path: '/homeworkRemaining',
			name: 'homeworkRemaining',
			component: (resolve) => require(['../view/my/HomeworkRemaining'], resolve),
			meta: {
				title: '留作业'
			}
		},
		{
			path: '/learningTaskReminder',
			name: 'learningTaskReminder',
			component: (resolve) => require(['../view/my/LearningTaskReminder'], resolve),
			meta: {
				title: '学习任务提醒'
			}
		},
		{
			path: '/personalData',
			name: 'personalData',
			component: (resolve) => require(['../view/my/PersonalData'], resolve),
			meta: {
				title: '个人中心'
			}
		},
		{
			path: '/learningSituation',
			name: 'learningSituation',
			component: (resolve) => require(['../view/my/LearningSituation'], resolve),
			meta: {
				title: '学习情况'
			}
		},
		{
			path: '/detailsOfLearning',
			name: 'detailsOfLearning',
			component: (resolve) => require(['../view/my/DetailsOfLearning'], resolve),
			meta: {
				title: '学习情况'
			}
		},
		{
			path: '/rollBag',
			name: 'rollBag',
			component: (resolve) => require(['../view/my/RollBag'], resolve),
			meta: {
				title: '卷包'
			}
		},
		{
			path: '/bindingChildrenAccounts',
			name: 'bindingChildrenAccounts',
			component: (resolve) => require(['../view/my/BindingChildrenAccounts'], resolve),
			meta: {
				title: '绑定孩子账号'
			}
		}
	]
})

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
	console.log(token)
  //判断要去的路由有没有requiresAuth
  if (!to.meta.requiresAuth) {
    if (token) {
      next();
    } else {
		
				if (to.name === 'signIn') {
					next()
				} else {
					next({
						path:'/signIn',
						query: { redirect: to.fullPath } 
					})
					
				}
			}
	}else{
		next()
	}
});

export default router;

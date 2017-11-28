import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import index from '@/components/index'
import course from '@/components/course'
import LuffyX from '@/components/LuffyX'
import deepScience from '@/components/deepScience'
import CourseDetail from '@/components/CourseDetail'
import CourseChapter from '@/components/CourseChapter'
import CourseComment from '@/components/CourseComment'
import CourseQuestion from '@/components/CourseQuestion'
import CourseSummary from '@/components/CourseSummary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/LuffyX',
      name: 'LuffyX',
      component: LuffyX
    },
    {
      path: '/deepScience',
      name: 'deepScience',
      component: deepScience
    },
    {
      path: '/CourseDetail/:pk',
      name: 'CourseDetail',
      component: CourseDetail,
      children: [
        {
          path: '/',
          name: 'CourseDetailDefault',
          component: CourseSummary
        },
        {
          path: 'CourseSummary',
          name: 'CourseSummary',
          component: CourseSummary
        },
        {
          path: 'CourseChapter',
          name: 'CourseChapter',
          component: CourseChapter
        },
        {
          path: 'CourseComment',
          name: 'CourseComment',
          component: CourseComment
        },
        {
          path: 'CourseQuestion',
          name: 'CourseQuestion',
          component: CourseQuestion
        },
      ]

    }
  ]
})

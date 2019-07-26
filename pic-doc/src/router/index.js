//首页
import Login from '@/components/Login'
//主框架
import Main from '@/components/Main'
//各个页面
import overview from '@/components/Pages/overview'
import pmimic from '@/components/Pages/pmimic'
import roadmap from '@/components/Pages/roadmap'

import admissions from '@/components/Pages/admissions'
import chartevents from '@/components/Pages/chartevents'
import d_icd_diagnoses from '@/components/Pages/d_icd_diagnoses'
import d_items from '@/components/Pages/d_items'
import d_labitems from '@/components/Pages/d_labitems'
import diagnoses_icd from '@/components/Pages/diagnoses_icd'
import icustays from '@/components/Pages/icustays'
import emr_symptoms from '@/components/Pages/emr_symptoms'
import labevents from '@/components/Pages/labevents'
import microbiologyevents from '@/components/Pages/microbiologyevents'
import or_exam_report from '@/components/Pages/or_exam_report'
import outputevents from '@/components/Pages/outputevents'
import patients from '@/components/Pages/patients'
import prescriptions from '@/components/Pages/prescriptions'
import surgery_vital_sign from '@/components/Pages/surgery_vital_sign'

import datasources from '@/components/Pages/datasources'
import patientidentifiers from '@/components/Pages/patientidentifiers'
import times from '@/components/Pages/times'

import applypage from '@/components/applypage'
import agreepage from '@/components/agreepage'

import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'LoginIndex',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/applypage',
      name: 'applypage',
      component: applypage
    },
    {
      path: '/agreepage',
      name: 'agreepage',
      component: agreepage
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [{
          path: '/gettingstarted/overview',
          name: 'overview',
          component: overview
        },
        {
          path: '/about/pmimic',
          name: 'pmimic',
          component: pmimic
        },
        {
          path: '/about/roadmap',
          name: 'roadmap',
          component: roadmap
        },
        {
          path: '/pmimictables/admissions',
          name: 'admissions',
          component: admissions
        },
        {
          path: '/pmimictables/chartevents',
          name: 'chartevents',
          component: chartevents
        },
        {
          path: '/pmimictables/d_icd_diagnoses',
          name: 'd_icd_diagnoses',
          component: d_icd_diagnoses
        },
        {
          path: '/pmimictables/d_items',
          name: 'd_items',
          component: d_items
        },
        {
          path: '/pmimictables/d_labitems',
          name: 'd_labitems',
          component: d_labitems
        }, 
        {
          path: '/pmimictables/diagnoses_icd',
          name: 'diagnoses_icd',
          component: diagnoses_icd
        },
        {
          path: '/pmimictables/emr_symptoms',
          name: 'emr_symptoms',
          component: emr_symptoms
        },
        {
          path: '/pmimictables/icustays',
          name: 'icustays',
          component: icustays
        },
        {
          path: '/pmimictables/labevents',
          name: 'labevents',
          component: labevents
        },
        {
          path: '/pmimictables/microbiologyevents',
          name: 'microbiologyevents',
          component: microbiologyevents
        },
        {
          path: '/pmimictables/or_exam_report',
          name: 'or_exam_report',
          component: or_exam_report
        },
        {
          path: '/pmimictables/outputevents',
          name: 'outputevents',
          component: outputevents
        },
        {
          path: '/pmimictables/patients',
          name: 'patients',
          component: patients
        },
        {
          path: '/pmimictables/prescriptions',
          name: 'prescriptions',
          component: prescriptions
        }, 
        {
          path: '/pmimictables/surgery_vital_sign',
          name: 'surgery_vital_sign',
          component: surgery_vital_sign
        },
        {
          path: '/pmimictables/datasources',
          name: 'datasources',
          component: datasources
        },
        {
          path: '/pmimictables/patientidentifiers',
          name: 'patientidentifiers',
          component: patientidentifiers
        }, 
        {
          path: '/pmimictables/times',
          name: 'times',
          component: times
        }
      
      ]
    }
  ]
})

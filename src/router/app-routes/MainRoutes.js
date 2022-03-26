import HomeComponent from '@/components/HelloWorld'

export default [
    { path: '*', redirect: '/'},
    { path: '/', name: 'Home', component: HomeComponent },
]

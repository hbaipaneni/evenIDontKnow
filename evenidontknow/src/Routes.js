import Home from './pages/Home'
import CourseDetail from './pages/CourseDetail'
import Course from './pages/Course'

const routes = [
    { path: '/', name:'home', component: Home },
    { path: '/course-detail/:courseId', name:'courseDetail', component: CourseDetail },
    { path: '/courses/:subject', name:'courses', component: Course },
]

export default routes;
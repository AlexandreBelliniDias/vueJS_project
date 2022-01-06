export default [
    {
        path: '/create',
        name: 'Create',
        component: () => import(/* webpackChunkName: "login" */ './Create')
    }
]
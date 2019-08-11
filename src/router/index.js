import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'home', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '修改密码', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/item',
    component: Layout,
    redirect: '/item/index',
    name: 'Item',
    meta: { title: '项目管理' },
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/item/index'),
        name: 'ItemIndex',
        meta: { title: '项目申请书', icon: 'education' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/profile',
    alwaysShow: true, // will always show the root menu
    name: 'User',
    meta: { title: '项目完成人', icon: 'peoples' },
    children: [
      {
        path: 'profile',
        component: () => import('@/views/user/profile'),
        name: 'UserProfile',
        meta: { title: '个人资料', icon: 'user' }
      },
      {
        path: 'project',
        component: () => import('@/views/user/project'),
        name: 'UserProject',
        meta: { title: '个人科研项目', icon: 'education', affix: true, roles: ['user'] }
      }
    ]
  },
  {
    path: '/Manager',
    component: Layout,
    alwaysShow: true,
    name: 'Manager',
    meta: { title: '单位管理', icon: 'star' },
    children: [
      {
        path: 'profile',
        component: () => import('@/views/manager/profile'),
        name: 'ManagerProfile',
        meta: { title: '单位信息', icon: 'form' }
      },
      {
        path: 'users',
        component: () => import('@/views/manager/users'),
        name: 'ManagerUsers',
        meta: { title: '申报人账号', icon: 'peoples' }
      },
      {
        path: 'unitinfo',
        component: () => import('@/views/manager/unitinfo'),
        name: 'UnitInfo',
        meta: { title: '申报单位审核', icon: 'tree' }
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    alwaysShow: true,
    name: 'Project',
    meta: { title: '科研项目管理', icon: 'component' },
    children: [
      {
        path: 'declaration',
        component: () => import('@/views/project/declaration'),
        name: 'Declaration',
        meta: { title: '申报书审核', icon: 'edit' }
      },
      {
        path: 'agreement',
        component: () => import('@/views/project/agreement'),
        name: 'Areement',
        meta: { title: '合同书审核', icon: 'excel' }
      },
      {
        path: 'change',
        component: () => import('@/views/project/change'),
        name: 'Change',
        meta: { title: '合同变更审核', icon: 'form' }
      },
      {
        path: 'search',
        component: () => import('@/views/project/search'),
        name: 'Search',
        meta: { title: '项目查询', icon: 'search' }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['ywk1470'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/',
        meta: { title: '中文文档', icon: 'link' }
      }
    ]
  },
  {
    path: 'perview',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin',
        meta: { title: '演示', icon: 'link' }
      }
    ]
  },
  {
    path: 'element',
    component: Layout,
    children: [
      {
        path: 'https://element.eleme.cn/#/zh-CN/component/installation',
        meta: { title: '组件', icon: 'link' }
      }
    ]
  },
  {
    path: 'vuejs',
    component: Layout,
    children: [
      {
        path: 'https://cn.vuejs.org/v2/guide/',
        meta: { title: 'vueJs', icon: 'link' }
      }
    ]
  },
  {
    path: 'iciba',
    component: Layout,
    children: [
      {
        path: 'https://www.iciba.com/',
        meta: { title: '爱词霸', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

// import Loadable from "react-loadable"
// import Loading from "../common/Loading"

// const Indexpage = Loadable({
//     loader:()=>import('../components/index')
//     //loading:Loading,
// })

import Indexpage from '../App'
import Homepage from "../pages/Home/index"
import Searchpage from "../pages/Search/Search"
import Loginpage from '../pages/Login/Login'
import Putinpage from '../pages/Putin/Putin'
import Rentingpage from '../pages/Renting/Renting'
import Hottopicpage from '../pages/Hottopic/Hottopic'
import Findroompage from '../pages/Findroom/Findroom'
import EnhanceDemo from '../pages/measurement'
import Page404 from '../pages/page404/page404'
import Messagepage from '../pages/Message/Message'
import TestPage from '../pages/Test'

export default {
    routes:[{
        path:'/',
        component:Indexpage,
        children:[{
            path:'/index',
            component:Homepage
        },{
            path:'/search',
            component:Searchpage
        },{
            path:'/login',
            component:Loginpage
        },{
            path:'/putin',
            component:Putinpage
        },{
            path:'/renting',
            component:Rentingpage
        },{
            path:'/tottopic',
            component:Hottopicpage
        },{
            path:'/enhanceDemo',
            component:EnhanceDemo
        },{
            path:'/findroom',
            component:Findroompage
        },{
            path:'/message',
            component:Messagepage
        },{
            path:'/page404',
            component:Page404
        },{
            path:'/test',
            component:TestPage
        }]
    }]
}
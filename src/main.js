import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import RouterView from "./router/RouterView"
import config from "./router/Router.config"

import {Provider} from "react-redux"
import store from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RouterView routes={config.routes}></RouterView>
        </Router>
    </Provider>,
    document.querySelector('#app')
)
import { AcmHeader, NavItemE } from '@open-cluster-management/ui-components'
import '@patternfly/react-core/dist/styles/base.css'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ClusterManagement } from './Pages/ClusterManagement/ClusterManagement'

function App() {
    return (
        <AcmHeader activeItem={NavItemE.clusterManagement}>
            <Router>
                <Switch>
                    <Route path="/home">TODO</Route>
                    <Route path="/cluster-management">
                        <ClusterManagement />
                    </Route>
                    <Route path="/">
                        <Redirect to="/cluster-management" />
                    </Route>
                </Switch>
            </Router>
        </AcmHeader>
    )
}

export default App

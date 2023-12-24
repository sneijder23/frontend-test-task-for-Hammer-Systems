import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
    <Suspense fallback={<Loading cover="content" />}>
        <Switch>
            <Route path={`${match.url}/list`} component={lazy(() => import(`./user-list`))} />
            <Route path={`${match.url}/setting`} component={lazy(() => import(`./setting`))} />
            <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
        </Switch>
    </Suspense>
);

export default Pages;

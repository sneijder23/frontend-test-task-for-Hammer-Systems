import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/dashboards/catalog`} component={lazy(() => import(`./catalog`))} />
        <Route path={`${APP_PREFIX_PATH}/dashboards/planner`} component={lazy(() => import(`./pages/planner`))} />
        <Route path={`${APP_PREFIX_PATH}/dashboards/clients`} component={lazy(() => import(`./pages/user-list`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);

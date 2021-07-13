interface iRoute {
    path: string,
    name: string,
    exact: boolean,
    component: any,
    props?: any,
}

export default iRoute;


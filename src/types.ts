export type Item = {
    exact: boolean;
    path: string;
    component: () => JSX.Element;
};
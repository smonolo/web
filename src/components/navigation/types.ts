export type Item = {
    to: string;
    content: string;
};

export type Items = {
    [i: string]: Item[];
};
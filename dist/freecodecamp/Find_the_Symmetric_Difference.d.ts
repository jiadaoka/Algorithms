interface Item {
    [key: string]: boolean;
}
declare function symCall(result: number[], args: number[][]): number[] | Function;
declare function sym(...args: number[][]): number[];

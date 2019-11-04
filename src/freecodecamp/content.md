# 记录题目

## 找到对称差异
* Find_the_Symmetric_Difference.ts
* [github链接](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/chinese/08-coding-interview-prep/algorithms/find-the-symmetric-difference.chinese.md)
> 创建一个带有两个或更多数组的函数，并返回所提供数组的*对称差* （ `△`或`⊕` ）数组。给定两个集合（例如集合`A = {1, 2, 3}`并且集合`B = {2, 3, 4}` ），两个集合的数学术语“对称差异”是在任一集合中的元素集合。两组，但两者都没有（ `A △ B = C = {1, 4}` ）。对于你所采取的每一个额外的对称差异（比如在集合`D = {2, 3}` ），你应该得到具有两个集合中的任何一个但不是两个集合的元素的集合（ `C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}` ）。结果数组必须仅包含唯一值（ **不重复** ）。

### 注意
1. 输入多个数组时，后一个数组和前两个数组的返回值做对比。
```text
  输入：[1, 2, 5], [2, 3, 5], [3, 4, 5]
  输出：[1,4] ×
  输出：[1,4,5] √
```

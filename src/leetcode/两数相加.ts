/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
  const re = new ListNode()
  let item1: ListNode | null = l1
  let item2: ListNode | null = l2
  let flag = true
  let ten = 0
  let cur = re
  while (flag) {
    let n = item1.val + item2.val + ten
    ten = n > 9 ? 1 : 0
    n %= 10
    cur.next = new ListNode(n)
    cur = cur.next

    if (item1.next !== null && item2.next === null) {
      if (ten === 1) {
        item2 = new ListNode()
        item1 = item1.next
      } else {
        cur.next = item1.next
        flag = false
      }
    } else if (item1.next === null && item2.next !== null) {
      if (ten === 1) {
        item1 = new ListNode()
        item2 = item2.next
      } else {
        cur.next = item2.next
        flag = false
      }
    } else if (item1.next === null && item2.next === null) {
      if (ten === 1) {
        item1 = new ListNode()
        item2 = new ListNode()
      } else {
        flag = false
      }
    } else if (item1.next !== null && item2.next !== null) {
      item1 = item1.next
      item2 = item2.next
    }
  }

  return re.next
}

export default addTwoNumbers

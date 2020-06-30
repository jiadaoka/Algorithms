"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ListNode = function ListNode(val, next) {
  _classCallCheck(this, ListNode);

  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

function addTwoNumbers(l1, l2) {
  var re = new ListNode();
  var item1 = l1;
  var item2 = l2;
  var flag = true;
  var ten = 0;
  var cur = re;

  while (flag) {
    var n = item1.val + item2.val + ten;
    ten = n > 9 ? 1 : 0;
    n %= 10;
    cur.next = new ListNode(n);
    cur = cur.next;

    if (item1.next !== null && item2.next === null) {
      if (ten === 1) {
        item2 = new ListNode();
        item1 = item1.next;
      } else {
        cur.next = item1.next;
        flag = false;
      }
    } else if (item1.next === null && item2.next !== null) {
      if (ten === 1) {
        item1 = new ListNode();
        item2 = item2.next;
      } else {
        cur.next = item2.next;
        flag = false;
      }
    } else if (item1.next === null && item2.next === null) {
      if (ten === 1) {
        item1 = new ListNode();
        item2 = new ListNode();
      } else {
        flag = false;
      }
    } else if (item1.next !== null && item2.next !== null) {
      item1 = item1.next;
      item2 = item2.next;
    }
  }

  return re.next;
}

exports["default"] = addTwoNumbers;
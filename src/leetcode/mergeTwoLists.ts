// Problem Source: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const insert = (data: number[]): ListNode => {
  let listNodeStart: ListNode | undefined;
  let prevNode: ListNode | undefined;

  data.forEach((num: number) => {
    if (!prevNode) {
      prevNode = new ListNode(num);
      listNodeStart = prevNode;
    } else {
      const currNode = new ListNode(num);
      prevNode.next = currNode;
      prevNode = currNode;
    }
  });

  return listNodeStart!;
};

/**
 * Example:
 *  Input: list1 = [1,2,4], list2 = [1,3,4]
 *  Output: [1,1,2,3,4,4]
 *
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  const mergedSortedListHead = new ListNode();
  let mergedSortedListTail = mergedSortedListHead;

  let list1Pointer: ListNode | null = list1;
  let list2Pointer: ListNode | null = list2;

  while (true) {
    const elementList1: ListNode | null = list1Pointer;
    const elementList2: ListNode | null = list2Pointer;

    if (elementList1 === null) {
      mergedSortedListTail.next = elementList2;
      break;
    }

    if (elementList2 === null) {
      mergedSortedListTail.next = elementList1;
      break;
    }

    if (elementList1.val < elementList2.val) {
      // tail of mergedSortedList = element of list1
      mergedSortedListTail.next = elementList1;
      mergedSortedListTail = mergedSortedListTail.next;

      list1Pointer = elementList1.next;
    } else {
      mergedSortedListTail.next = elementList2;
      mergedSortedListTail = mergedSortedListTail.next;

      list2Pointer = elementList2.next;
    }
  }

  return mergedSortedListHead.next;
}

/**
 * Example:
 *  Input: list1 = [1,2,4], list2 = [1,3,4]
 *  Output: [1,1,2,3,4,4]
 */
export function mergeTwoArrays(array1: number[], array2: number[]): number[] {
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  const mergedSortedArray: number[] = [];

  let a1Index = 0;
  let a2Index = 0;

  while (true) {
    const elementA1 = array1[a1Index];
    const elementA2 = array2[a2Index];

    if (elementA1 === undefined) {
      mergedSortedArray.push(...array2.slice(a2Index));
      break;
    }
    if (elementA2 === undefined) {
      mergedSortedArray.push(...array1.slice(a1Index));
      break;
    }

    if (elementA1 < elementA2) {
      mergedSortedArray.push(elementA1);
      a1Index++;
    } else {
      mergedSortedArray.push(elementA2);
      a2Index++;
    }
  }

  return mergedSortedArray;
}

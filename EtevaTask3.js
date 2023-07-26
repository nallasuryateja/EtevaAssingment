let list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan']
let list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav']

// a. Get a unique set of users from List1 which are not in List2
let uniqueList1 = list1.filter(user => !list2.includes(user))
console.log(uniqueList1)

// b. Get a unique set of users from List2 which are not in List1
let uniqueList2 = list2.filter(user => !list1.includes(user))
console.log(uniqueList2)

// c. Get a set of users who are present in both List1 and List2 (intersection of list1 & list2)
let commonUsers = list1.filter(user => list2.includes(user))
console.log(commonUsers)

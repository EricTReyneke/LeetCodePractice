var addTwoNumbers = function(l1, l2) {
    let ListNode = [];
    
    for(let i = l1.length - 1; i >= 0; i--){
        if(l1[i] + l2[i] > 9){
            ListNode.push(0)
            l1[i - 1] += 1
        }else{
            ListNode.push(l1[i] + l2[i]);
        }
    }
    return ListNode;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))
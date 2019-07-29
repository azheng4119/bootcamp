let hash = {};
let answer = [];
let findDuplicateSubtrees = function(root) {
    hash = {};
    answer = [];
    searchTree(root,answer);
    return answer;
};

function searchTree(node){
    if (node === null) return "#";
    let unique = node.val + "," + searchTree(node.left) + "," + searchTree(node.right);
    hash[unique] = (unique in hash) ? hash[unique]+1 : 1;
    if(hash[unique] == 2) answer.push(node);
    return unique;
}





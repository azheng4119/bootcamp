#include <iostream>
#include <string>

using namespace std;
//Definition for a binary tree node.
  struct TreeNode {
      int val;
      TreeNode *left;
      TreeNode *right;
      TreeNode(int x) : val(x), left(NULL), right(NULL) {}
  };
 
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        return (uniqueId(p) == uniqueId(q));
    }
    
    string uniqueId(TreeNode * root) {
        if (root == nullptr) return "null";
        string idString = to_string(root->val);
        idString += uniqueId(root->left) + uniqueId(root->right);
        return idString;
    }
}
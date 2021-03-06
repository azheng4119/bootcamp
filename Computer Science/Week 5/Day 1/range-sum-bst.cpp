class Solution {
public:
    int rangeSumBST(TreeNode* root, int L, int R) {
        if (root == nullptr) return 0;
        int val = 0;
        if (root->val >= L && root->val <= R) val = root->val;
        return val + rangeSumBST(root->left,L,R) + rangeSumBST(root->right,L,R);
    }
};
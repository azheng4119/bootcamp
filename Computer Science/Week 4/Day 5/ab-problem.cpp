class Solution {
public:
   bool find132pattern(vector<int>& nums) {
       if (nums.size() == 0) return false;
       int min = nums[0];
       stack<int> stacks;
       vector<int> mins;
       for (auto i : nums){
           if (i < min) min = i;
           mins.push_back(min);
       }
       for (int i = nums.size()-1;i >= 0 ; i--){
           if (stacks.empty()) {
               stacks.push(nums[i]);
           }
           else if (nums[i] < stacks.top()){
               stacks.push(nums[i]);
           } else if( nums[i] > stacks.top()){
               while(!stacks.empty() && stacks.top() < nums[i] ) {
                   if (mins[i] < nums[i] && stacks.top() < nums[i] && stacks.top() > mins[i]){
                       return true;
                   }
                   stacks.pop();
               }
               stacks.push(nums[i]);
           }
           //mins[i] first
           //nums[i] middle
           //stack.top last
       }
       return false;
   }
};
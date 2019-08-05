#include <iostream>
#include <vector>

void remove_duplicates(std::vector<int> & numbers) {
    int index = 1;
    for (int i = 1; i < numbers.size();i++){
        if (numbers[i] != numbers[i-1]){
            numbers[index] = numbers[i];
            index++;
        }
    }
    numbers.resize(index);
}

int main(){
    std::vector<int> nums;
    nums.push_back(0);
    nums.push_back(0);
    nums.push_back(1);
    nums.push_back(1);
    nums.push_back(2);
    nums.push_back(2);
    nums.push_back(3);
    remove_duplicates(nums);
    for (auto i : nums){
        std::cout << i << std::endl;
    }
}
#include <queue>

using namespace std;
class RecentCounter {
    queue<int> pings;
    int count;
public:
    RecentCounter() {
        count = 0;
    }
    
    int ping(int t) {
        count++;
        pings.push(t);
        while (abs(pings.front()-t) > 3000){
            pings.pop();
            count--;
        }
        return count;
    }
    
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */
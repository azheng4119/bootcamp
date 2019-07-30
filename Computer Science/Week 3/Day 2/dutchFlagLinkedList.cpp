#include <iostream>

struct SinglyLinkedListNode{
    SinglyLinkedListNode* next;
    int data;
}

SinglyLinkedListNode* linked_list_pivot(SinglyLinkedListNode* lst, int key) {
    vector<SinglyLinkedListNode*> lists = {nullptr,nullptr,nullptr};
    vector<SinglyLinkedListNode*> listHeads = {nullptr,nullptr,nullptr};
    SinglyLinkedListNode* curr = lst;
    while(curr != nullptr){
        if (curr->data > key){
            if(lists[2] == nullptr) {
                lists[2] = curr;
                listHeads[2] = curr;
            }
            else{
                lists[2]->next = curr;
                lists[2] = lists[2]->next;
            }
        }
        if (curr->data == key){
            if(lists[1] == nullptr) {
                lists[1] = curr;
                listHeads[1] = curr;
            }
            else{
                lists[1]->next = curr;
                lists[1] = lists[1]->next;
            }
        }
        if (curr->data < key){
            if(lists[0] == nullptr) {
                lists[0] = curr;
                listHeads[0] = curr;
            }
            else{
                lists[0]->next = curr;
                lists[0] = lists[0]->next;
            }
        }
    curr = curr->next;
    }
    if(lists[0]!=nullptr){
        lists[0]->next = listHeads[1];
        lists[1]->next = listHeads[2];
        lists[2]->next = nullptr;
        return listHeads[0];
    }else{
        lists[1]->next = listHeads[2];
        lists[2]->next = nullptr;
        return listHeads[1];
    }
    return listHeads[2];
}
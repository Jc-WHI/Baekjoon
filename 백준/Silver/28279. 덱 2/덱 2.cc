#include <deque>
#include <iostream>

using namespace std;

void push_front(deque<int>& q, int a) {
    q.push_front(a);
}

void push_back(deque<int>& q, int a) {
    q.push_back(a);
}

void pop_front(deque<int>& q) {
    if (!q.empty()) {
        int temp = q.front();
        q.pop_front();
        printf("%d\n", temp);
    } else {
        printf("%d\n", -1);
    }
}

void pop_back(deque<int>& q) {
    if (!q.empty()) {
        int temp = q.back();
        q.pop_back();
        printf("%d\n", temp);
    } else {
        printf("%d\n", -1);
    }
}

void len(deque<int>& q) {
    printf("%d\n", q.size());
}

int main() {
    deque<int> q;

    int N;
    cin >> N;

    for (int i = 0; i < N; i++) {
        int m, s = 0;
        scanf("%d", &m);  // m에 대한 scanf 수정
        if (m == 1 || m == 2) {
            scanf("%d", &s);  // s에 대한 scanf 수정
        }

        if (m == 1) {
            push_front(q, s);
        } else if (m == 2) {
            push_back(q, s);
        } else if (m == 3) {
            pop_front(q);
        } else if (m == 4) {
            pop_back(q);
        } else if (m == 5) {
            len(q);
        } else if (m == 6) {
            if (q.empty()) {
                printf("%d\n", 1);
            } else {
                printf("%d\n", 0);
            }
        } else if (m == 7) {
            if (!q.empty()) {
                printf("%d\n", q.front());
            } else {
                printf("%d\n", -1);
            }
        } else if (m == 8) {
            if (!q.empty()) {
                printf("%d\n", q.back());
            } else {
                printf("%d\n", -1);
            }
        }
    }
}

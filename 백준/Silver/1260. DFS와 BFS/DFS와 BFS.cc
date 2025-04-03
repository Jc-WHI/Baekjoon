#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Graph {
public:
    int N, M, idx;
    vector<vector<int>> vec;
    vector<bool> visited;
    queue<int> q;

    Graph(int n, int m, int idx) : N(n), M(m), idx(idx), vec(n, vector<int>(n, 0)), visited(n, false) {}

    void addEdge(int a, int b) {
        vec[a][b] = 1;
        vec[b][a] = 1;
    }

    void init() {
        for (int i = 0; i < M; i++) {
            int a, b;
            cin >> a >> b;
            addEdge(a - 1, b - 1);  // 입력 노드 번호를 0-based로 변환
        }
    }

    void BFS() {
        q.push(idx);
        visited[idx] = true;
        while (!q.empty()) {
            int cur = q.front();
            q.pop();
            cout << cur + 1 << " ";  // 출력 노드 번호를 1-based로 변환
            for (int i = 0; i < N; i++) {
                if (vec[cur][i] == 1 && !visited[i]) {
                    q.push(i);
                    visited[i] = true;
                }
            }
        }
        cout << endl;
    }

    void DFS(int node) {
        visited[node] = true;
        cout << node + 1 << " ";  // 출력 노드 번호를 1-based로 변환
        for (int i = 0; i < N; i++) {
            if (vec[node][i] == 1 && !visited[i]) {
                DFS(i);
            }
        }
    }

    void re() {
        fill(visited.begin(), visited.end(), false);
    }
};

int main() {
    int N, M, idx;
    cin >> N >> M >> idx;
    idx -= 1;  // 입력 노드 번호를 0-based로 변환
    Graph g(N, M, idx);
    g.init();
    g.DFS(idx);
    cout << endl;
    g.re();
    g.BFS();
    cout << endl;
    return 0;
}



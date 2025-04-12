import java.util.*

fun dfs(node: Int, adj: Array<MutableList<Int>>, visited: BooleanArray, cnt: IntArray) {
    visited[node] = true
    cnt[0]++

    for (next in adj[node]) {
        if (!visited[next]) {
            dfs(next, adj, visited, cnt)
        }
    }
}

fun main() {
    val scanner = Scanner(System.`in`)
    val n = scanner.nextInt()
    val p = scanner.nextInt()

    val adj = Array(n + 1) { mutableListOf<Int>() }
    val visited = BooleanArray(n + 1) { false }

    for (i in 0 until p) {
        val a = scanner.nextInt()
        val b = scanner.nextInt()
        adj[a].add(b)
        adj[b].add(a)
    }

    val cnt = IntArray(1) { 0 }
    dfs(1, adj, visited, cnt)
    println(cnt[0] - 1)  // 1번 컴퓨터를 제외한 감염된 컴퓨터 수 출력
}

import java.util.ArrayList;
import java.util.List;

class nChooseK {

  public static ArrayList<ArrayList<Integer>> combine(int n, int k) {
    ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();

    if (n <= 0 || n < k)
      return result;

    ArrayList<Integer> item = new ArrayList<Integer>();
    dfs(n, k, 1, item, result); // because it need to begin from 1

    return result;
  }

  private static void dfs(int n, int k, int start, ArrayList<Integer> item,
      ArrayList<ArrayList<Integer>> result) {

    if (item.size() == k) {
      result.add(new ArrayList<Integer>(item));
      return;
    }

    if(start > n) {
      return;
    }


      dfs(n, k, start + 1, item, result);
      item.add(start);
      dfs(n, k, start + 1, item, result);
      item.remove(item.size() - 1);


  }

}

class Main {
  public static void main(String[] args) {
     System.out.println(nChooseK.combine(4,2));
  }

}

class Main
{
  public static void main (){
    System.out.println(SortColors.compute([0, 1, 1, 2, 0, 2, 1, 0]));
  }
}

class SortColors
{
  private static int[] count = [0, 0, 0];


  public static int [] compute(int [] arr){

    for(int i = 0; i < arr.length; i = i + 1) {
      count[arr[i]] += 1;
    }

    return count
  }

}

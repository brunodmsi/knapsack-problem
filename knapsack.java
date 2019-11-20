
public class DynamicProgramming {

  public int[][] emptyMatrix(int M, int n) {
    int B[][] = new int[n + 1][M + 1];

    for (int i = 0; i <= n; i += 1) {
      for (int j = 0; j <= M; j += 1) {
        B[i][j] = 0;
      }
    }

    return B;
  }

  public static void printMatrix(int B[][], int M, int n) {
    for (int i = 0; i <= n; i += 1) {
      for (int j = 0; j <= M; j += 1) {
        System.out.print(B[i][j] + " ");
      }
      System.out.print("\n");
    }
  }

  public void knapsack(int W[], int V[], int M, int n) {
    int B[][] = emptyMatrix(M, n);

    for (int i = 1; i <= n; i += 1) {
      for (int j = 0; j <= M; j += 1) {
        System.out.println("\n");
        B[i][j] = B[i - 1][j];
        System.out.println("Board [" + i + "][" + j + "]" + " = B[" + (i - 1) + "][" + j + "] results in " + B[i][j]);

        if ((j >= W[i - 1])
                && (B[i][j] < B[i - 1][j - W[i - 1]] + V[i - 1])) {
          System.out.println("B at J ("+j+") is greater than W["+(i-1)+" = "+W[i - 1]);
          System.out.print("B["+i+"]["+j+"] = "+B[i][j]+" is lower than B at");
          System.out.print("["+(i-1)+"]["+ (j - W[i - 1] + V[i - 1]+"] = "+B[i - 1][j - W[i - 1]] + V[i - 1])+"\n");
          System.out.println("Condition is true, so...");

          B[i][j] = B[i - 1][j - W[i - 1]] + V[i - 1];
          System.out.println("B["+i+"]["+j+"] = "+B[i - 1][j - W[i - 1]] + V[i - 1]);

        }
      }
      System.out.println("\n");
    }

    System.out.println();

    printMatrix(B, M, n);

    System.out.println("Max Value:\t" + B[n][M]);

    System.out.println("Selected Packs: ");
    while (n != 0) {
      if (B[n][M] != B[n - 1][M]) {
        System.out.println("\tPackage " + n + " with W = " + W[n - 1] + " and Value = " + V[n - 1]);

        M = M - W[n - 1];
      }
      n--;
    }
  }

  public void run() {
    /*
      * Pack and Weight - Value
     */
    //int W[] = new int[]{3, 4, 5, 9, 4};
    int W[] = new int[]{12, 2, 1, 1, 4};

    //int V[] = new int[]{3, 4, 4, 10, 4};
    int V[] = new int[]{4, 2, 1, 2, 10};

    /*
		 * Max Weight
     */
    //int M = 11;
    int M = 15;
    int n = V.length;

    /*
      * Run the algorithm
     */
    knapsack(W, V, M, n);
  }

  public static void main(String[] args) {
    DynamicProgramming program = new DynamicProgramming();
    program.run();
  }
}

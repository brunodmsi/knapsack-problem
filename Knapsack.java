import java.util.ArrayList;
import java.util.List;

public class Knapsack {
  // itens do problema
  private Item[] items;

  // capacidade da mochila
  private int capacity;

  public Knapsack(Item[] items, int capacity) {
    this.items = items;
    this.capacity = capacity;
  }

  public void display() {
    if (items != null  &&  items.length > 0) {
      System.out.println("Problema da Mochila");
      System.out.println("Capacidade: " + capacity);
      System.out.println("Itens:");

      for (Item item : items) {
        System.out.println("- " + item.str());
      }
    }
  }

  // algoritmo para solucionar (retornando um Solution)
  public Solution solve() {
    int NB_ITEMS = items.length;

    // usamos uma matriz para guarda o valor máximo de cada n item
    int[][] matrix = new int[NB_ITEMS + 1][capacity + 1];

    // primeira linha é inicializada com 0
    for (int i = 0; i <= capacity; i++)
      matrix[0][i] = 0;

    // iteramos nos items
    for (int i = 1; i <= NB_ITEMS; i++) {
      // iteramos por cada capacidade
      for (int j = 0; j <= capacity; j++) {
        if (items[i - 1].weight > j)
          matrix[i][j] = matrix[i-1][j];
        else
          // maximizamos o valor neste rank na matriz
          matrix[i][j] = Math.max(matrix[i-1][j], matrix[i-1][j - items[i-1].weight] 
				  + items[i-1].value);
      }
    }

    int res = matrix[NB_ITEMS][capacity];
    int w = capacity;
    List<Item> itemsSolution = new ArrayList<>();

    for (int i = NB_ITEMS; i > 0  &&  res > 0; i--) {
      if (res != matrix[i-1][w]) {
        itemsSolution.add(items[i-1]);

        // removemos o valor e peso dos itens
        res -= items[i-1].value;
        w -= items[i-1].weight;
      }
    }

    return new Solution(itemsSolution, matrix[NB_ITEMS][capacity]);
  }

  public static void main(String[] args) {
    Item[] items = {
      new Item("Cobre Mel", 1400, 70), 
      new Item("Chumbo", 260, 65), 
			new Item("Inox", 60, 24), 
			new Item("Metal", 350, 35),
      new Item("Bronze", 100, 10)
    };

    Knapsack knapsack = new Knapsack(items, 200);
    knapsack.display();
    Solution solution = knapsack.solve();
    solution.display();
  }
}

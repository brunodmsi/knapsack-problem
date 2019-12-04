import java.util.List;

public class Solution {
	
	// lista dos items para por na mochila para ter o valor máximo
	public List<Item> items;
  
  // valor maximo possível
	public int value;
	
	public Solution(List<Item> items, int value) {
		this.items = items;
		this.value = value;
	}
	
	public void display() {
		if (items != null  &&  !items.isEmpty()){
			System.out.println("\nSolução");
			System.out.println("Valor = R$ " + value);
			System.out.println("Itens para pegar:");
			
			for (Item item : items) {
				System.out.println("- " + item.str());
			}
		}
	}

}
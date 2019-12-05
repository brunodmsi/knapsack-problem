# Programação Dinâmica

## Como rodar?
Para rodar no Ubuntu, é necessário rodar apenas um comando no terminal:
```sh
java Knapsack
```
E pronto! Você deve receber o seguinte resultado:
```sh
Problema da Mochila
Capacidade: 200
Itens:
- Cobre Mel [valor = 1400, peso = 70]
- Chumbo [valor = 260, peso = 65]
- Inox [valor = 60, peso = 24]
- Metal [valor = 350, peso = 35]
- Bronze [valor = 100, peso = 10]

Solução
Valor = R$ 2110
Itens para pegar:
- Bronze [valor = 100, peso = 10]
- Metal [valor = 350, peso = 35]
- Chumbo [valor = 260, peso = 65]
- Cobre Mel [valor = 1400, peso = 70]

```

### Quero alterar o código
Caso queira fazer alguma alteração nos valores, pode acessar no código e faze-lôs manualmente.   
Após isso será necessário rodar um comando para re-compilar o código e depois pode rodá-lo novamente com o mesmo código da seção anterior
```sh
javac Knapsack.java
java Knapsack
```
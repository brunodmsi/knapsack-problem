class Approximation {
  getKnapsackSolution(weight, value, capacity, totalValue) {
    const n = weight.length;
    const cost = Array.from(Array(n), () => new Array(totalValue + 1))

    for (let i = 1; i <= totalValue; i += 1) {
      const currWeight = weight[n - 1];
      const currValue = value[n - 1];
      cost[n - 1][i] = i === currValue ? currWeight : (Number.MAX_VALUE / 2);
    }

    for (let i = n - 2; i >= 0; i -= 1) {
      const currWeight = weight[i];
      const currValue = value[i];

      for (let j = 0; j <= totalValue; j += 1) {
        cost[i][j] = j < currValue
          ? cost[i + 1][j]
          : Math.min(
            cost[i + 1][j],
            cost[i + 1][j - currValue] + currWeight
          );
      }
    }

    return this.getPickedItem(cost, weight, value, capacity, totalValue);
  }

  getPickedItem(cost, weight, value, capacity, totalValue) {
    const n = cost.length;
    let j = totalValue;
    const isPicked = Array(n).fill(false);

    while (cost[0][j] > capacity) j -= 1;

    for (let i = 0; i < n - 1; i += 1) {
      if (cost[i][j] !== cost[i + 1][j]) {
        isPicked[i] = true;
        j -= value[i];
      }
    }

    isPicked[n - 1] = cost[n - 1][j] === weight[n - 1];
    return isPicked;
  }

  solve(n, capacity, epsilon) {
    let weight = Array(n);
    let value = Array(n);
    let valueApprox = Array(n);

    for (let i = 0; i < n; i += 1) {
      weight[i] = parseInt(Math.random() * capacity)
      value[i] = parseInt(Math.random() * 100);
    }

    const debugWeight = weight.map(w => ` ${w} `).join('|');
    const debugValue = value.map(v => ` ${v} `).join('|');

    const ak = new Approximation();
    let totalValue = value.reduce((a, b) => a + b, 0);

    const isPickedAccurate = ak.getKnapsackSolution(
      weight, value, capacity, totalValue
    );

    totalValue = 0;
    for (let i = 0; i < n; i += 1) {
      if (isPickedAccurate[i]) {
        totalValue += value[i];
      }
    }

    const debugMaxAccurate = totalValue;

    let maxValue = 0;
    const k = n / epsilon;
    for (let i = 0; i < n; i += 1)
      if (value[i] > maxValue) maxValue = value[i];

    totalValue = 0;
    for (let i = 0; i < n; i += 1) {
      valueApprox[i] = parseInt(Math.floor(value[i] * k / maxValue));
      totalValue += valueApprox[i];
    }

    const debugRoundingValue = valueApprox.map(value => ` ${value} `).join('|')

    const startTime = new Date().getTime();
    const isPickedApprox = ak.getKnapsackSolution(weight, value, capacity, totalValue);
    const endTime = new Date().getTime();

    totalValue = 0;
    for (let i = 0; i < n; i += 1)
      if (isPickedApprox[i]) totalValue += value[i];

    const debugMaxValueApprox = totalValue;
    const debugTotalTime = `${endTime - startTime}ms`

    return {
      debugWeight,
      debugValue,
      debugRoundingValue,
      debugTotalTime,
      debugMaxValueApprox,
      debugMaxAccurate
    }
  }

}

export default Approximation;

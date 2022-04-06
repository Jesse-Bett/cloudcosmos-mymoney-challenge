const dfd = require("danfojs-node")
class commands{
    constructor(equity,debt,gold){
        this.equity = equity;
        this.debt = debt;
        this.gold = gold;
        this.sipEquity = 0;
        this.sipDebt = 0;
        this.sipGold = 0;
        this.equityAlloc = equity * 100 / (equity + debt + gold);
        this.debtAlloc = debt * 100 / (equity + debt + gold);
        this.goldAlloc = gold * 100 / (equity + debt + gold);
        this.moneyDf = new dfd.DataFrame({"columns": ["equity", "debt", "gold", "month", "total"]});
        //self.money_df = pd.DataFrame(columns=['equity', 'debt', 'gold', 'month', 'total'])
    };
    
    // Coding the input commands as methods.

    sip(sipEquity, sipDebt, sipGold) {
        this.sipEquity = sipEquity;
        this.sipDebt = sipDebt;
        this.sipGold = sipGold;
      };

    change(equityPercent, debtPercent, goldPercent, month, monthCount) {
        let total;
        if (monthCount === 0) {
            this.equity = Number.parseInt(this.equity * (1 + equityPercent / 100));
            this.debt = Number.parseInt(this.debt * (1 + debtPercent / 100));
            this.gold = Number.parseInt(this.gold * (1 + goldPercent / 100));
          } 
        else {
            this.equity = Number.parseInt((this.equity + this.sipEquity) * (1 + equityPercent / 100));
            this.debt = Number.parseInt((this.debt + this.sipDebt) * (1 + debtPercent / 100));
            this.gold = Number.parseInt((this.gold + this.sipGold) * (1 + goldPercent / 100));
          };

          total = this.equity + this.debt + this.gold;
          this.moneyDf = moneyDf.append(new dfd.DataFrame([[this.equity, this.debt, this.gold, month, total]], {
            "columns": ["equity", "debt", "gold", "month", "total"]
          }));

          if (month === "JUNE\n" || month === "DECEMBER\n") {
            this.moneyDf = moneyDf.append(new dfd.DataFrame([[Number.parseInt(this.equityAlloc * total / 100), Number.parseInt(this.debtAlloc * total / 100), Number.parseInt(this.goldAlloc * total / 100), "REBALANCE", total]], {
              "columns": ["equity", "debt", "gold", "month", "total"]
            }));
          }
   }


   balance(month) {
    let res, result;
    res = this.moneyDf[this.moneyDf["month"] === month].tail(1);
    result = res["equity"].astype(str)[0] + " " + res["debt"].astype(str)[0] + " " + res["gold"].astype(str)[0];
    console.log(result);
  }


   rebalance() {
    let res, results;
    results = this.moneyDf[moneyDf["month"] === "REBALANCE"].copy({
      "deep": true
    });

    if (results.length > 0) {
      results["output"] = results["equity"].toString() + " " + results["debt"].toString() + " " + results["gold"].toString();
      res = results["output"].toArray();

      for (var r, _pj_c = 0, _pj_a = res, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        r = _pj_a[_pj_c];
        console.log(r);
      }
    } 
    
    else {
      console.log("CANNOT_REBALANCE");
    }

  }


};



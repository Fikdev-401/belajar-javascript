const { json } = require("stream/consumers");
const { Income, Expense } = require("./IncomeExpense.js");
const fs = require("fs");

class Note {
  //   constructor(list) {
  //     this.list = list || [];
  //   }

  //   addIncome(name, total) {
  //     let income = new Income(name, total, 'Income');
  //     this.list.push(income);
  //   }
  //   addExpense(name, total) {
  //     let expense = new Expense(name, total, 'Expense');
  //     this.list.push(expense);
  //   }
  //   listIncome() {
  //     console.log("List Income :");
  //     this.list.forEach((item) => {
  //       if (item.category == "Income") {
  //         console.log(`${item.name} : IDR. ${item.total}`);
  //       }
  //     });
  //   }
  //   listExpense() {
  //     console.log("List Expense :");
  //     this.list.forEach((item) => {
  //       if (item.category == "Expense") {
  //         console.log(`${item.name} : IDR. ${item.total}`);
  //       }
  //     });
  //   }
  //   balance() {
  //     let totalIncome = 0;
  //     let totalExpense = 0;
  //     this.list.forEach((item) => {
  //       if (item.category == "Income") {
  //         totalIncome += item.total;
  //       } else if (item.category == "Expense") {
  //         totalExpense += item.total;
  //       }
  //     });
  //     // buat status : plus, minus, balance
  //     let total = totalIncome - totalExpense;
  //     if (total == 0) {
  //       console.log("Status : Balance" + " IDR. " + total);
  //     } else if (total > 0) {
  //       console.log("Status : Selamat! pendapatan kamu profit!" + " IDR. " + total);
  //     } else if (total < 0) {
  //       console.log("Status : Minus!! Belajar manage uang lagi!!" + " IDR. " + total);
  //     }
  //   }

  static listIncome() {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    console.log("List Income :");
    temp.Incomes.forEach((item) => {
      if (item.category == "Income") {
        console.log(`${item.name} : IDR. ${item.total}`);
      }
    });
  }
  static listExpense() {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    console.log("List Expense :");
    temp.Expenses.forEach((item) => {
      if (item.category == "Expense") {
        console.log(`${item.name} : IDR. ${item.total}`);
      }
    });
  }

  static addIncome(name, total) {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    let income = new Income(name, total, "Income");
    temp.Incomes.push(income);
    this.save(temp);
  }
  static addExpense(name, total) {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    let expense = new Expense(name, total, "Expense");
    temp.Expenses.push(expense);
    this.save(temp);
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }

  static balance() {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    let totalIncome = 0;
    let totalExpense = 0;
    temp.Incomes.forEach((item) => {
      if (item.category == "Income") {
        totalIncome += item.total;
      }
    });
    temp.Expenses.forEach((item) => {
      if (item.category == "Expense") {
        totalExpense += item.total;
      }
    });
    let total = totalIncome - totalExpense;
    if (total == 0) {
      console.log("Status : Balance" + " IDR. " + total);
    } else if (total > 0) {
      console.log("Status : Selamat! pendapatan kamu profit!" + " IDR. " + total);
    } else if (total < 0) {
      console.log("Status : Minus!! Belajar manage uang lagi!!" + " IDR. " + total);
    }
  }
}

module.exports = Note;

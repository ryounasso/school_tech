import React, { useState, useContext, useEffect } from "react";
import { db } from "../firebase/Firebase";
import { AuthContext } from "../auth/AuthProvider";
import firebase from "firebase/app";
import "firebase/firestore";

function Home() {
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [type, setType] = useState("inc");
  const [date, setDate] = useState(new Date());

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getIncomeData();
    getExpenseData();
  }, []);

  useEffect(() => {
    getIncomeData();
    getExpenseData();
  }, [date]);

  //for Header
  const setPrevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const day = date.getDate();
    setDate(new Date(year, month, day));
  };

  const setNextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setDate(new Date(year, month, day));
  };

  //get first date of the month
  const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  //get last date of this month
  const endOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  //operate add form and income/expense list
  const selectedMonth = date.getMonth() + 1;
  const today = new Date();
  const thisMonth = today.getMonth() + 1;

  //firebase IncomeData
  const getIncomeData = () => {
    const incomeData = db.collection("incomeItems");
    incomeData
      .where("uid", "==", currentUser.uid)
      .orderBy("date")
      .startAt(startOfMonth(date))
      .endAt(endOfMonth(date))
      .onSnapshot((query) => {
        const incomeItems = [];
        query.forEach((doc) =>
          incomeItems.push({ ...doc.data(), docId: doc.id })
        );
        setIncomeItems(incomeItems);
      });
  };

  const addIncome = (text, amount) => {
    const docId = Math.random().toString(32).substring(2);
    const date = firebase.firestore.Timestamp.now();
    db.collection("incomeItems")
      .doc(docId)
      .set({
        uid: currentUser.uid,
        text,
        amount,
        date,
      })
      .then((response) => {
        setIncomeItems([
          ...incomeItems,
          { text: inputText, amount: inputAmount, docId: docId, date: date },
        ]);
      });
  };

  const deleteIncome = (docId) => {
    db.collection("incomeItems").doc(docId).delete();
  };

  //firebase Expense data
  const getExpenseData = () => {
    const expenseData = db.collection("expenseItems");
    expenseData
      .where("uid", "==", currentUser.uid)
      .orderBy("date")
      .startAt(startOfMonth(date))
      .endAt(endOfMonth(date))
      .onSnapshot((query) => {
        const expenseItems = [];
        query.forEach((doc) =>
          expenseItems.push({ ...doc.data(), docId: doc.id })
        );
        setExpenseItems(expenseItems);
      });
  };

  const addExpense = (text, amount) => {
    const docId = Math.random().toString(32).substring(2);
    const date = firebase.firestore.Timestamp.now();
    db.collection("expenseItems")
      .doc(docId)
      .set({
        uid: currentUser.uid,
        text,
        amount,
        date,
      })
      .then((response) => {
        setExpenseItems([
          ...expenseItems,
          { text: inputText, amount: inputAmount, docId: docId, date: date },
        ]);
      });
  };

  const deleteExpense = (docId) => {
    db.collection("expenseItems").doc(docId).delete();
  };

  // calculate % and show total
  //   const incomeTotal = totalCalc(incomeItems);

  return <div className="container">ようこそ</div>;
}

export default Home;

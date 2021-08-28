import { db, firebase } from "../firebase/Firebase";

export const addAnswer = async (answer) => {
  return db.collection("answer").add({
    problem_id: answer.problem_id,
    answer: answer.answer,
    createdAt: firebase.firestore.Timestamp.now(),
  });
};

export const getQuestion = async () => {
  const snapShot = await db
    .collection("answer")
    .orderBy("createAt", "desc")
    .get();
  const data = snapShot.docs.map((doc) => ({
    problem_id: doc.data().id,
    answer: doc.data().answer,
    createdAt: doc.data().createAt.toDate(),
    id: doc.id,
  }));
  return data;
};

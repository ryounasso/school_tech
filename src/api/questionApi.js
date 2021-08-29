import { db, firebase } from "../firebase/Firebase";

export const addQuestion = async (question) => {
  return db.collection("question").add({
    problem: question.problem,
    choiceA: question.choiceA,
    choiceB: question.choiceB,
    choiceC: question.choiceC,
    choiceD: question.choiceD,
    result: question.result,
    createAt: firebase.firestore.Timestamp.now(),
  });
};

export const getQuestion = async () => {
  const snapShot = await db
    .collection("question")
    .orderBy("createAt", "desc")
    .get();
  const data = snapShot.docs.map((doc) => ({
    problem: doc.data().problem,
    choiceA: doc.data().choiceA,
    choiceB: doc.data().choiceB,
    choiceC: doc.data().choiceC,
    choiceD: doc.data().choiceD,
    result: doc.data().result,
    good_point: doc.data().good_point,
    createdAt: doc.data().createAt.toDate(),
    id: doc.id,
  }));
  return data;
};

export const getQuestionFilterdById = async (id) => {
  // const snapShot = await db.collection("question").doc(id).get();
  const snapShot = await db.collection("question").doc(id).get();
  return snapShot.data().result;
  // snapShot.then((doc) => {
  //   result = doc.data().result;
  //   return result;
  // });
  // console.log(result);
  // console.log(snapShot.docs);
  // const data = snapShot.docs.map({
  //   problem: doc.data().problem,
  //   choiceA: doc.data().choiceA,
  //   choiceB: doc.data().choiceB,
  //   choiceC: doc.data().choiceC,
  //   choiceD: doc.data().choiceD,
  //   result: doc.data().result,
  //   good_point: doc.data().good_point,
  //   createdAt: doc.data().createAt.toDate(),
  //   id: doc.id,
  // });
  // return result;
};

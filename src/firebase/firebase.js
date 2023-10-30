import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGi7F33izxmfGCAXVOLTQFDlEWpMcuyE8",
  authDomain: "pos-system-c0083.firebaseapp.com",
  projectId: "pos-system-c0083",
  storageBucket: "pos-system-c0083.appspot.com",
  messagingSenderId: "932660191215",
  appId: "1:932660191215:web:76ec5893347dba449aa01a",
};

initializeApp(firebaseConfig);
export const db = getFirestore();

export const postOrder = async (orderData) => {
  try {
    const orderCollectionRef = collection(db, "order");

    const newOrderRef = await addDoc(orderCollectionRef, orderData);

    return newOrderRef;
  } catch (error) {
    console.log("Error making order", error.message);
    return null;
  }
};

export const postItem = async (itemData) => {
  try {
    const itemCollectionRef = collection(db, "items");

    for (const item of itemData.items) {
      await addDoc(itemCollectionRef, item);
    }

    return true;
  } catch (error) {
    console.log("Error posting items", error.message);
    return false;
  }
};

export const getItemByName = async (itemName) => {
  try {
    const itemsCollectionRef = collection(db, "items");

    const querySnapshot = await getDocs(
      query(itemsCollectionRef, where("item", "==", itemName))
    );

    const items = querySnapshot.docs.map((doc) => ({
      item: doc.data().item,
      quantity: doc.data().quantity,
    }));

    const sumOfQuantities = items.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);

    return items;
  } catch (error) {
    console.error("Error getting item:", error.message);
    return null;
  }
};

export const getItemQuantitiesByName = async (itemName) => {
  try {
    const itemsCollectionRef = collection(db, "items");

    const querySnapshot = await getDocs(
      query(itemsCollectionRef, where("item", "==", itemName))
    );

    const items = querySnapshot.docs.map((doc) => ({
      item: doc.data().item,
      quantity: doc.data().quantity,
    }));

    const sumOfQuantities = items.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);

    return sumOfQuantities;
  } catch (error) {
    console.error("Error getting item:", error.message);
    return null;
  }
};

export const totalEarnings = async () => {
  try {
    const orderCollection = collection(db, "order");
    const querySnapshot = await getDocs(orderCollection);

    const items = querySnapshot.docs.map((doc) => ({
      totalAmount: doc.data().totalAmount,
    }));

    const total = items.reduce(
      (acc, currentItem) => acc + currentItem.totalAmount,
      0
    );

    const orderCount = querySnapshot.size;

    return { total, orderCount };
    
  } catch (error) {
    console.error("Error getting total earnings:", error.message);
    return null;
  }
};

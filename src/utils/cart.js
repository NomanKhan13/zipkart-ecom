import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firestoreDB } from '../firebase';

export const cartAddItemLocal = async (productInfo) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    localCart.push(productInfo);
    localStorage.setItem("cart", JSON.stringify(localCart));
    return localCart;
}

export const cartAddItem = async (userId, productInfo) => {
  // get cart refrence
  // get cart snap - to know if it exists or not
  // if exist then run cartUpdateItem
  // else add the doc

 

  const cartRef = doc(firestoreDB, 'carts', userId);
  const cartSnap = await getDoc(cartRef);

  if (!cartSnap.exists()) {
    await setDoc(cartRef, { userId, items: [productInfo] });
  } else {
    const cartData = cartSnap.data();
    const existingItem = cartData.items.find(
      (item) => item.productId == productInfo.productId
    );

    if (!existingItem) {
      await updateDoc(cartRef, { items: arrayUnion(productInfo) });
    } else {
      const updatedItems = cartData.items.map((item) =>
        item.productId == productInfo.productId
          ? {
              ...item,
              quantity: item.quantity + productInfo.quantity,
              total: (item.quantity + productInfo.quantity) * item.price,
            }
          : item
      );
      await updateDoc(cartRef, { items: updatedItems });
    }
  }
};

export const cartUpdateItem = async (userId, productId, newQuantity) => {
  const cartRef = doc(firestoreDB, 'carts', userId);
  const cartSnap = await getDoc(cartRef);
  if (!cartSnap.exists()) {
    return;
  } else {
    const cartData = cartSnap.data();
    const updatedItems = cartData.items.map((item) =>
      item.productId == productId
        ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
        : item
    );
    await updateDoc(cartRef, { items: updatedItems });
  }
};
export const cartUpdateItemLocal = async (productId, newQuantity) => {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const updatedCart = localCart.map(item => item.productId == productId ? {...item, quantity: newQuantity} : item);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const cartRemoveItemLocal = (productId) => {
  // get localstorage
  // filter items with productId != given id
  // update localstrogae

  const localCart = JSON.parse(localStorage.getItem("cart"));
  const updatedCart = localCart.filter(item => item.productId != productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
}

export const cartRemoveItem = async (userId, productId) => {
  const cartRef = doc(firestoreDB, 'carts', userId);
  const cartSnap = await getDoc(cartRef);
  if (!cartSnap.exists()) {
    return;
  } else {
    const cartData = cartSnap.data();
    const itemToRemove = cartData.items.find(
      (item) => item.productId == productId
    );

    if (itemToRemove) {
      await updateDoc(cartRef, { items: arrayRemove(itemToRemove) });
    }
  }
};

export const cartGetItems = async (userId) => {
  const cartRef = doc(firestoreDB, 'carts', userId);
  const cartSnap = await getDoc(cartRef);

  if (!cartSnap.exists()) {
    return;
  } else {
    const cartData = cartSnap.data();
    return cartData;
  }
};

export const cartClear = async (userId) => {
  const cartRef = doc(firestoreDB, 'carts', userId);
  await updateDoc(cartRef, { items: [] });
};

export const cartSync = async (userId, callback) => {
  const cartRef = doc(firestoreDB, 'carts', userId);
  onSnapshot(cartRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data());
    } else {
      callback({ items: [] });
    }
  });
};

// Definition - The doc() function in Firestore is used to reference a specific document in a collection. It can take the following arguments:

// Syntax - doc(database, collectionPath, [documentPath])
// database is firestore instance
// collectionPath is name of collection
// [documentPath] - specific ID of doc (OPTIONAL)

// ------------------

// 1. addDoc()
// Purpose: Adds a new document to a collection with an automatically generated unique ID.
// syntax - await addDoc(collection(db, "products"), {
//            name: "Lipstick",
//            price: 14.99,
//            category: "beauty"
//            });

// 2. setDoc()
// Purpose: Adds a new document or overwrites an existing document with a specific ID.
// Syntax - await setDoc(doc(db, "carts", userId), {
//            userId: userId,
//            items: cart
//            });

// 3. getDoc()
// Purpose: Retrieves a single document by its ID.
// const docRef = doc(db, "carts", userId);
// const docSnap = await getDoc(docRef);
// docSnap.exists()
// docSnap.data()

// 4. getDocs()
// Purpose: Retrieves all documents in a collection.
// const querySnapshot = await getDocs(collection(db, "products"));
// querySnapshot.forEach((doc) => {
// console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });

// 5. updateDoc()
// Purpose: Updates specific fields of an existing document without overwriting the entire document.

// const cartRef = doc(db, "carts", userId);
// await updateDoc(cartRef, {
//  "items": items.map(i => i.productId === productId ? { ...i, quantity: newQuantity } : i)
// });

// 6. deleteDoc()
// Purpose: Deletes an entire document from a collection.
//  await deleteDoc(doc(db, "carts", userId));

// 7. arrayUnion() and arrayRemove()
// Purpose: Modifies arrays within documents by adding or removing elements.
// await updateDoc(cartRef, {
// items: arrayUnion(item)
// });

// await updateDoc(cartRef, {
// items: arrayRemove(item)
// });

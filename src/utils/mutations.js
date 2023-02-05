import { addDoc, collection, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
}

export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
   });
}

export async function editEntry(entry) {
   // TODO: Create Mutation to Edit Entry
   const seekedEntry = doc(db, "entries", entry.id)

   await updateDoc(seekedEntry, entry);
}

export async function deleteEntry(entry) {
   // TODO: Create Mutation to Delete Entry
   await deleteDoc(doc(db, "entries", entry.id));
}
// Prototype code to store and retrieve notes in Chrome's local storage

// Create note objects
let note_object1 = {
    noteId: 1, 
    title: "Note 1", 
    content: "Content 1"
};

let note_object2 = {
    noteId: 2, 
    title: "Note 2", 
    content: "Content 2"
};

console.log("Final value", final)
// Store the notes in Chrome's local storage
chrome.storage.local.set({ notes: [note_object1, note_object2] }).then(() => {
    console.log("Value is set");
});

// Retrieve the notes from Chrome's local storage
chrome.storage.local.get(["notes"]).then((result) => {
    console.log("Value is ", result.notes);
    console.log("Value (stringified) is ", JSON.stringify(result.notes, null, 2));
});

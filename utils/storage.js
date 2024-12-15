// utils/storage.js

// Get all notes from Chrome's local storage
export async function getNotes() {
    const result = await chrome.storage.local.get("notes");
    return result.notes || []; // Return an empty array if no notes exist
}

// Save a new note to storage
export async function saveNote(note) {
    const notes = await getNotes();
    notes.push(note);
    await chrome.storage.local.set({ notes });
}

// Update an existing note
export async function updateNote(noteId, updatedNote) {
    const notes = await getNotes();
    const index = notes.findIndex(note => note.noteId === noteId);
    if (index !== -1) {
        notes[index] = updatedNote;
        await chrome.storage.local.set({ notes });
    }
}

// Delete a note by ID
export async function deleteNote(noteId) {
    const notes = await getNotes();
    const filteredNotes = notes.filter(note => note.noteId !== noteId);
    await chrome.storage.local.set({ notes: filteredNotes });
}

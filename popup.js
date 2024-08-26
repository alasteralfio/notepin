// sample notes
function generateNotes() {
    let notes = [];
    for (let i = 0; i < 10; i++) {
        let note = {
            noteId: i,
            title: 'Note ' + i,
            content: 'Content ' + i
        };
        notes.push(note);
    }
    return notes;
}

notes = generateNotes();

// Function to generate and display notes in the HTML
function displayNotes() {
    let noteArea = document.getElementById('note-area');
    
    // Clear any existing content in the note-area
    noteArea.innerHTML = '';

    // Loop through the notes array and create div elements for each note
    notes.forEach(note => {
        // Create a new div element for the note
        let noteDiv = document.createElement('div');
        noteDiv.id = `note-${note.noteId}`;
        noteDiv.classList.add('note-div');
        noteDiv.classList.add(`note-color-${note.noteId % 3}`); // Assigns 1 of 3 colors to the note
        
        // Create title element
        let titleElement = document.createElement('p');
        titleElement.id = `note-title-${note.noteId}`;
        titleElement.innerHTML = `${note.title}`;
        titleElement.classList.add('note-title');
        
        // Create content element
        let contentElement = document.createElement('p');
        contentElement.id = `note-content-${note.noteId}`;
        contentElement.innerText = note.content;
        contentElement.classList.add('note-content');

        // Append title and content to the note div
        noteDiv.appendChild(titleElement);
        noteDiv.appendChild(contentElement);

        // Append the note div to the note-area
        noteArea.appendChild(noteDiv);

        // Add click event listener to the note div
        noteDiv.addEventListener('click', () => {
            NoteClicked(noteDiv, note);
        })
    });
}

function NoteClicked(noteDiv, note) {
    console.log(note.noteId);
}

document.addEventListener('DOMContentLoaded', displayNotes);

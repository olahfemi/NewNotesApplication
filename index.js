
function NotesApplication() {
	
}

NotesApplication.prototype.create(note_content){
		this.notes.push(note_content);
		return this.notes;
	}
module.exports = NotesApplication;
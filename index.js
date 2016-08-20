
function NotesApplication(author) {
	this.author = author;
	this.notes = [];
	
	this.create = function(note_content){
		this.note_content = note_content;
		this.notes.push(note_content);
		return this.notes;
		
	};
	
	this.getNote = function(note_id){
		
		return String(this.notes[note_id]);
	};
	
	this.remover = function(note_id){
		
		this.notes.splice(note_id);
		return (this.notes);
	};
	this.modifyNote = function(note_id, new_content){
		this.notes[note_id] = new_content;
		return this.notes;
	}
}
module.exports = NotesApplication;
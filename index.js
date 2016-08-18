
function NotesApplication(author) {
	this.author = author;
	this.notes = [];
	
	this.create = function(note_content){
		this.note_content = note_content;
		this.notes.push(note_content);
		return "Success";
		
	};
	
	this.getNote = function(note_id){
		
		return String(this.notes[note_id]);
	};
}
module.exports = NotesApplication;

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
	
	this.remover = function(note_id){
		for (var i = 0; i < this.notes.length; i++) { 
			delete this.notes[i];
			return (this.notes);
			}
	};
}
module.exports = NotesApplication;
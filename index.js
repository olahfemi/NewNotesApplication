
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
	};
	this.search = function(search_text){
			if(this.notes.includes(search_text)){
				console.log("Showing results for", "[ "+ "< " +search_text +" >" + " ]");
				console.log("Note ID: ", i );
				console.log(this.notes[i]);
				console.log("By Author", [this.author]);
			}
			else{
				return "No note to show";
			}
	}
}
module.exports = NotesApplication;
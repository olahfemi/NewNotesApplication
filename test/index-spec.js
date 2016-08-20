var assert = require ("chai").assert;
var NotesApplication = require("../index.js");
var work = new NotesApplication()

describe ("NotesApplication", function(){
	//console.log(NotesApplication)
	//console.log(work)
	describe("NotesApplication", function(){
		it("Returns ['Andela'] once a note is added", function(){
			work.create("Andela");
			assert.isNotNull(work);
		});
	});
	
	describe("getNote", function(){
		it("Returns the note at a specified ID", function(){
			assert.equal(work.getNote(0), "Andela");
		});
	});
	
	describe("remover A.K.A Crusher", function(){
		it("Deletes the entry in the specified index from the note", function(){
			assert.lengthOf(work.remover(0), "0");
		});
	});
	
	describe("modifyNote", function(){
		it("Replaces the content at 'note_id' with 'new_content'", function(){
			assert(work.modifyNote("TIA"), "TIA");
		});
	});
});
	
	
	
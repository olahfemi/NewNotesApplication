var expect = require ("chai").expect;
var NotesApplication = require("../index.js");
var work = new NotesApplication("Femi")

describe ("This class called NotesApplication", function(){
	//console.log(NotesApplication)
	//console.log(work)
	describe("has a function called 'create'", function(){
		it("that a return a note in an array", function(){
			
			expect(work.create("Andela")).to.equal("Success");
		});
	});
	
	describe("has a function 'getNote'", function(){
		it("that returns the note at a specified ID", function(){
			
			var made = work.create("Lorem");
			//var caught = work.getNote()
			expect(work.getNote(1)).to.equal("Lorem");
		});
	});
	
});

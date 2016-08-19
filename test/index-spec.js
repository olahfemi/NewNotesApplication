var expect = require ("chai").expect;
var NotesApplication = require("../index.js");
var work = new NotesApplication("Femi")

describe ("NotesApplication", function(){
	//console.log(NotesApplication)
	//console.log(work)
	describe("NotesApplication", function(){
		it("Returns 'Success' once a note is added", function(){
			
			expect(work.create("Andela")).to.equal("Success");
		});
	});
	
	describe("getNote", function(){
		it("Returns the note at a specified ID", function(){
			
			//work.create("Lorem");
			expect(work.getNote(0)).to.equal("Andela");
		});
	
	describe("hey", function(){
		it("Hi", function(){
			
			//work.remover
			expect(work.remover(0)).to.equal(undefined);
		});
	});
	
});

	});
	
	
	
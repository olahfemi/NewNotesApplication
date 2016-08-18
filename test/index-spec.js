var chai = require ("chai");
var NotesApplication = require("../index.js");
var expect = chai.expect;
var work = new NotesApplication("Femi")

describe ("A class called NotesApplication", function(){
	//console.log(NotesApplication)
	//console.log(work)
	describe("A function called 'create'", function(){
		it("should return a note", function(){
			//var made = work.create("Andela");
			expect(work.create("Andela")).to.equal(["Andela"]);
		});
		
	});
	
});
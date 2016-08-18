var chai = require ("chai");
var NotesApplication = require("../index.js");
var expect = chai.expect;
var work = new NotesApplication("Femi")

describe ("This class called NotesApplication", function(){
	//console.log(NotesApplication)
	//console.log(work)
	describe("has a function called 'create'", function(){
		it("that a return a note in an array", function(){
			//var made = work.create("Andela");
			expect(work.create('Andela')).to.equal(['Andela']);
		});
		
	});
	
});
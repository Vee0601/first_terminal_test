import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Vee correctly', function(){
        assert.equal('Hello, Vee', greet('Vee'));
    });
    it('should greet Gadisi correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Gadisi', greet('Gadisi'));
    });
});
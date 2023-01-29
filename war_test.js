var expect = chai.expect;
describe("War Tests" , function(){
        describe('#shuffle', function(){
            it('should mix up cards in a random fashion',function(){
                var x = shuffle(cards);
                    expect(x).to.equal('mixed deck of cards');
            });
        });
});
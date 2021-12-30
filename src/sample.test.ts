import * as chai from 'chai';
import { sample } from './sample';

const expect = chai.expect;

describe('Sample', () => {

    it('should return a generic string', () => {
        expect(sample()).to.be.a('string');
    });

});
import chai from "chai";
import chaiHttp from "chai-http";
import { server } from '../server';
import { before, describe, it } from 'node:test';
import { ISentence } from '../interfaces/sentences.interface';
import { sentencesEqual } from '../tools/sentences.tool';
import { removeDBAllSentences } from '../controllers/sentences.controller';

chai.use(chaiHttp);

before(async done => {
    await removeDBAllSentences();
    done();
});

describe('Suite de pruebas sentences', () => {

    const added: number[] = [];
    const expectedBody: ISentence[] = [
        {
            id: 1,
            sentence: 'sentence1',
            keyword: 'keyword1',
            sentence_start: 'start1',
            sentence_end: 'end1',
            answer: 'answer1'
        },
        {
            id: 2,
            sentence: 'sentence2',
            keyword: 'keyword2',
            sentence_start: 'start2',
            sentence_end: 'end2',
            answer: 'answer2'
        }
    ];

    it('should return all the sentences in the database', done => {
        chai.request(server)
            .post('/sentences')
            .set('content-type', 'application/json')
            .send(expectedBody[0])
            .end((err, res) => {
                chai.assert.equal(res.status, 201);
                added.push(res.body.insertId);
                chai.request(server)
                    .post('/sentences')
                    .set('content-type', 'application/json')
                    .send(expectedBody[1])
                    .end((err, res) => {
                        chai.assert.equal(res.status, 201);
                        added.push(res.body.insertId);
                        chai.request(server)
                            .get('/sentences')
                            .end((err, res) => {
                                chai.assert.equal(res.status, 200);
                                chai.assert.equal(res.body.length, expectedBody.length);
                                for (let i = 0; i < expectedBody.length; i++) {
                                    chai.assert.isTrue(sentencesEqual(res.body[i], expectedBody[i]));
                                }
                                done();
                            });
                    });
            });
    });
})

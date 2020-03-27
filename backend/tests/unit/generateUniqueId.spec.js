const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Should Generate An unique Id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
});
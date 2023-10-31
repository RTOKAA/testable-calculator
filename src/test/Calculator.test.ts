import { Calculator } from "../app/Calculator";


describe('Calculator test suite', ()=>{
    test('1足す2は3', ()=>{
        const result = Calculator.add(1,2);
        expect(result).toBe(3);
    });
})

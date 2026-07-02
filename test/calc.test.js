import { sum } from "../src/calc.js"
import {it, describe} from "node:test"

describe("calc function", function(){
    it("should not calc string", {
        expectFailure: /parameter\(s\) should be a number/
    }, function(){
        sum(1,"2")
    })
})
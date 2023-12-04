import Ajv, {_, KeywordCxt} from "ajv"
import {JTDDataType} from "ajv/dist/jtd"
const ajv = new Ajv();

ajv.addKeyword({
  keyword: "even",
  type: "string",
  schemaType: "string",
  // $data: true // to support [$data reference](./guide/combining-schemas.md#data-reference), ...
//   code(cxt: KeywordCxt) {
//     const {data, schema} = cxt
//     const op = schema ? _`!==` : _`===`
//     cxt.fail(_`${data} %2 ${op} 0`) // ... the only code change needed is to use `cxt.fail$data` here
//   },
})

// const schema = {even: "sdafsdf"}
const schema = {
    type: "object",
    properties: {
        key: {
            type: "string",
            even: "sdfs"
        }
    }
}
const validate = ajv.compile(schema)
console.log(validate({
    key: "sdf"
})) // true
console.log(validate("asdas")) // false

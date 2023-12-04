import Ajv, {JTDDataType, KeywordCxt, _} from "ajv/dist/jtd"
const ajv = new Ajv()
// // ajv.addFormat()
// ajv.addKeyword({
//   keyword: "nonsense",
//   type: "string",
//   schemaType: "string",
//   errors: false,
// })

// const schema = {
//   properties: {
//     foo: {
//       type: "int32"
//     }
//   },
//   optionalProperties: {
//     bar: {
//       type: "string",
//     }
//   }
// } as const

// type MyData = JTDDataType<typeof schema>

// // type inference is not supported for JTDDataType yet
// const validate = ajv.compile<MyData>(schema)

// const validData = {
//   foo: 1,
//   bar: "abc"
// }

// if (validate(validData)) {
//   // data is MyData here
//   console.log(validData.foo)
// } else {
//   console.log(validate.errors)
// }

ajv.addKeyword({
  keyword: "even",
  type: "number",
  schemaType: "boolean",
  // $data: true // to support [$data reference](./guide/combining-schemas.md#data-reference), ...
  code(cxt: KeywordCxt) {
    const {data, schema} = cxt
    const op = schema ? _`!==` : _`===`
    cxt.fail(_`${data} %2 ${op} 0`) // ... the only code change needed is to use `cxt.fail$data` here
  },
})

const schema = {even: true}
const validate = ajv.compile(schema)
console.log(validate(2)) // true
console.log(validate(3)) // false
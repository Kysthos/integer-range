**intRange(bits[, signed])**

* `bits` \<integer>
* `signed` \<boolean> [default: `false`]
* Returns \<Object> with following properties:
> * `min` \<integer> | \<BigInt> [lowest possible value]
> * `max` \<integer> | \<BigInt> [highest possible value]
> * `safe` \<Boolean> [indicates if all possible values are safe integers]
> * `signed` \<Boolean>
> * `bits` \<integer>

`min` and `max` will be `BigInt` when they are not safe js integers (as tested using `Number.isSafeInteger`). `safe` will be set to `false` in such case.
```js
console.log(intRange(8))
console.log(intRange(8, true))
console.log(intRange(16))
console.log(intRange(16, true))
console.log(intRange(32))
console.log(intRange(32, true))
console.log(intRange(64))
console.log(intRange(64, true))

// { min: 0, max: 255, safe: true, signed: false, bits: 8 }
// { min: -128, max: 127, safe: true, signed: true, bits: 8 }
// { min: 0, max: 65535, safe: true, signed: false, bits: 16 }
// { min: -32768, max: 32767, safe: true, signed: true, bits: 16 }
// { min: 0, max: 4294967295, safe: true, signed: false, bits: 32 }
// {
//   min: -2147483648,
//   max: 2147483647,
//   safe: true,
//   signed: true,
//   bits: 32
// }
// {
//   min: 0n,
//   max: 18446744073709551615n,
//   safe: false,
//   signed: false,
//   bits: 64
// }
// {
//   min: -9223372036854775808n,
//   max: 9223372036854775807n,
//   safe: false,
//   signed: true,
//   bits: 64
// }
```

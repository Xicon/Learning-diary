const main = (args, target) => {
  for (let arg in args) {
    let start = args[0]
    if (start + args[arg] === target) {
      return [args.indexOf(start), args.indexOf(args[arg])]
    }
    start++

    if (start === args.length) {
      return -1
    }
  }
}

const result = main([1, 8, 4, 6, 9 ], 15)
console.log(result)
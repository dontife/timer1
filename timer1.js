// declare a varaiable to hold the input argument from the user
const args = process.argv.slice(2);
//sorting the array from ascending order
args.sort((a,b) => a-b);


for (let arg of args) {
  // perform a system sound only if the input from the user is a positive number
  if (Number(arg) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(arg) * 1000)
  }
};
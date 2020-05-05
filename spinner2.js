for (let i = 0; i < 3; i++){
  const str = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let count = [100, 300, 500, 700];
  for (let j = 0; j < str.length; j++){
    setTimeout(() => {
      process.stdout.write(str[j]);
    }, i * 800 + count[j]);
  }
}
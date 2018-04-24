let commands = {
  pwd: require('./pwd.js'),
  ls: require('./ls.js')
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();
  commands[cmd]()
  // process.stdout.write('\nprompt > ');
});

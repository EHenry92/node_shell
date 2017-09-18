var fs = require('fs');
var request = require('request');
function pwd (str, done)   {
    done(process.cwd());
}

function date (str, done)    {
    done(Date());
}

function ls (str, done)    {
  var output = "";
    fs.readdir('.', function (err, files)   {
        if (err) {process.stdout.write('Error');}
        files.forEach(function(file)    {
            output += file.toString() + '\n';
        });
        done(output);
    })
}


function echo(str, done)  {
    done(str);
}

function cat(str, done) {
  fs.readFile(str, function read(err, data) {
    if(err) { throw "error";}
    else {
      done(data);
    }
  });

}

function head(str, done) {
  var output = "";
  fs.readFile(str, function read(err, data) {
    if(err) {
      throw "error";
    } else {
      var lines = data.toString().split("\n");
      for(var i = 0; i < 5; i++) {
        output += lines[i] + "\n";
      }
      done(output);
    }
  });

}

function tail(str, done) {
  var output = "";
  fs.readFile(str, function read(err, data) {
    if (err) {
      throw "error";
    } else {
      var lines = data.toString().split("\n");
      for(var i = lines.length - 5; i < lines.length; i++) {
        output += lines[i] + "\n";
      }
      done(output);
    }
  });

}
function sortIt(str, done) {
  var output = "";
  fs.readFile(str, function read(err, data)  {
    if (err) {
      throw 'error';
    } else {
      var lines = data.toString().split('\n');
      var sorted = lines.sort();
      output += sorted.join('\n');
    }
    done(output);
  })

}
function wc (str, done)  {
  fs.readFile(str, function read(err, data)  {
    if (err) {
      throw 'error';
    } else {
      var lines = data.toString().split('\n');
      done(lines.length.toString());
    }
  })
}
function uniq(str, done)  {
  fs.readFile(str, function read(err, data)  {
    if (err) {
      throw 'error';
    } else {
      var lines = data.toString().split('\n');
      var sorted = lines.sort();

      for (let i = 0; i<sorted.length;i++) {
        if (sorted[i] === sorted[i+1]) {
          sorted.splice(i,1);
          i--;
        }
      }
      done(sorted.join('\n'));
    }
  })
}
function curl(str, done)  {
  str = "http://" + str;
  request(str, function (error, response, body) {
    if(error) {throw 'error'}
    done(body);
  });
}

module.exports = {pwd, ls, date, echo, cat, head, tail, sortIt, wc, uniq, curl};

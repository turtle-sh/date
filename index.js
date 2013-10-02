// This is just a require.js module
define({
  
  // The command-line name
  "name": "date",
  
  // Any aliases
  "aliases": [],
  
  // The actual function
  "fn": function() {
    
    // Think of "this" as "process"
    this.stdout.write(new Date());
    
    // Return
    this.exit();
  },
  
  // One-liner.
  "tagLine": "display date and time",
  
  // "whatis date"
  "description": "The __date__ utility displays the current date and time.",
  
  // Middleware for parsing command-line options
  "parse": function(argv) {
  },
  
  // "date -v"
  "version": "0.1.1",
  
  // Very early idea of what this might look like
  "test": function() {
    var val;
    var obj = {
      stdout: {
        write: function() { val = arguments[0]; }
      },
      exit: function() {};
    };
    var args = this.parse('date -r 0');
    this.fn.apply(obj, this.parse('date -r 0') );
    if(val !== new Date(0) ) {
      throw "date -r 0 should equal new Date(0)";
    }
  }
});

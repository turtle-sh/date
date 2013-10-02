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
  
  // ...
  "description": "The __date__ utility displays the current date and time.",
  
  // Middleware for parsing command-line options
  "parse": function(argv) {
  },
  "version": "0.1.1"
});

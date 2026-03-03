
module.exports = {


//--------------------------------
// Choose your template file
//---------------------------------

//   Currently we have 
//   Article-template
//   Newsletter-template
//   Post-Template
  

  template: "./Templates/Post-Template.svg", // Choose from Templates folder
  
  //  Set your output name (optional)

  outputName: "./Output/final-output.png",
  
  //  Logo Assets
  // No Need for Newsletter

  inputLogo: './Logos/Lumi-logo.png', // choose product logo from Logos folder

 
  content: {

    // ========== For Tech Post and Article =========

    // Title Hook section

    "title-1": "This Is For ",
    "title-2": "Template Automation",
    "title-3": "Using Node Project",

// subtile Hook section

    "subtitle-1": "Prompt ",
    "subtitle-highlight": "Engineering",
    "subtitle-2": " Drives Real Results",

// Slogan 
    "slogan-main": "AI gives answers. Structured prompts create ",
    "slogan-highlight": "outcomes.",

//Product logo section.

    "product-name": "LENS LUMI",
    "product-description": "Your Intelligent ERP Agent",


// ======== For News-letter =========

"Main-title":"LMNAs Chronos ",
"Month": "Sept",

// Content for pills

"pill content-1":"contant one",
"pill content-2":"contant one",
"pill content-3":"contant one"


  }
};
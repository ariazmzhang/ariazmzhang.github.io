//Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    //This function is called after the browser has loaded the web page

    //add listener to close and open menu
    document.getElementByclass('fas fa-times').addEventListener('click', closemenu)
    document.getElementByclass('fas fa-bars').addEventListener('click', openmenu)


     //add listener to close and open tabs
    document.getElementByclass('tab-links').addEventListener('click', opentab)
  
    //add keyboard handler for the document as a whole, not separate elements.
    document.addEventListener('keydown', handleKeyDown)
})
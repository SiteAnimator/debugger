/*
    @package    SiteAnimator\Modules\Debugger

    file:       main.js
    function:   This file contains the main application module.    
                handels start after page load
                creates service modules

    Last revision: 12-09-2022
 
*/    

// create module function
( function( debuggerApp ){
    
    // MODULE: mainModule( named array: options ) void 
    debuggerApp.mainModule = function( options ) {
    
        // PRIVATE:
        
        // MEMBERS
        var self = this;                        // object
        self.moduleName = 'main';               // string
        self.options = options;                 // named array
        self.modules = {};                      // named array
    
        self.start = function() {
        // FUNCTION: start( void ) void

            // create debugger module
            self.modules.debuggerModule = new debuggerApp.service.debuggerModule( self.options['debugOptions'] );

            // create test module
            self.modules.test = new debuggerApp.test.testModule( );

        // DONE FUNCTION: start( void ) void
        };

        // PUBLIC
        return {

            // FUNCTION: start( void ) void    
            start : function( ){

                // call internal
                self.start( );
    
            }
            
        };
        // DONE PUBLIC
                
    };
    // DONE MODULE: mainModule( named array: options ) void
    
})( debuggerApp );
// done create module function
        

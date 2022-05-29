/*
    @package    SiteAnimator\Modules\Debugger

    file:       main.js
    function:   This file contains the main application module.    
                
    Last revision: 10-05-2022
 
*/    

// create module function
( function( debuggerApp ){
    
    // create name spaces
    debuggerApp.modules = debuggerApp.modules ? debuggerApp.modules : {};
    debuggerApp.modules.main = debuggerApp.modules.main ? debuggerApp.modules.main : {};
    // create name spaces
    
    // MODULE: mainModule( named array: options ) void 
    debuggerApp.modules.main.mainModule = function( options ) {
    
        // PRIVATE:
        
        // MEMBERS
        var self = this;                        // object
        self.moduleName = 'main';               // string
        self.options = options;                 // named array
        self.modules = {};                      // named array
    
        self.start = function() {
        // FUNCTION: start( void ) void

            // create debugger module
            self.modules.debugger = new debuggerApp.modules.debugger.debuggerModule( self.options['debugOptions'] );

            // create test module
            self.modules.test = new debuggerApp.modules.test.testModule( );

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
        

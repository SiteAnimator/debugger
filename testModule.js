/*
        @package    SiteAnimator/Modules/Debugger
  
        file:       testModule.js
        function:   Demonstrates sending a message from
                    a module to the debugger. 
  
        Last revision: 10-12-2020
 
*/

// create module function
( function( debuggerApp ){
    
    // create name space
    debuggerApp.modules.test = debuggerApp.modules.test ? debuggerApp.modules.test : {};
    
    // MODULE: testModule( void ) void 
    debuggerApp.modules.test.testModule = function( ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'testModule';                     // string
        self.debugOn = true;                                // boolean
        self.timerOptions = {                               // named array
            'timer'         :   null,                       // timer / null
            'delay'         :   1300,                       // integer
            'repeat'        :   100,                        // integer
            'repeated'      :   0,                          // integer
        };                                                  // done named array
        self.messages = [                                   // array
            'The height is 340px',                          // string
            'Animation started',                            // string
            'Starting Ajax call',                           // string
            'Ajax returned succesfull',                     // string
            'Animatie started',                             // string
            'Task failed successfully. ',                   // string
            'Error displaying the error message',           // string
            'Animation ready and restarting',               // string
            'Animatie ended',                               // string
            'Tekst: there is no connection'                 // string
        ];                                                  // done array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'test module construct' );
 
            // show message
            self.showMessage();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.showMessage = function() {
        // FUNCTION: showMessage( void ) void
            
            // get massages
            let messages = self.messages;
            
            // get random line
            let randomLine = Math.floor( Math.random() * messages.length );
            
            // create message
            let message = messages[randomLine];
        
            // debug
            self.debug( message );
 
            // repeat
            self.repeat();
        
        // DONE FUNCTION: showMessage( void ) void
        };
        self.repeat = function() {
        // FUNCTION: repeat( void ) void
            
            // get timer options
            let timerOptions = self.timerOptions;
            
            // update repeated
            timerOptions['repeated']++;
            
            // repeat reached
            if( timerOptions['repeated'] >= timerOptions['repeat'] ){

                // done
                return;
                
            }
            // repeat reached
  
            // wait
            self.wait();
            
        // DONE FUNCTION: repeat( void ) void
        };
        self.wait = function() {
        // FUNCTION: wait( void ) void
            
            // get timer options
            let timerOptions = self.timerOptions;
            
            // start timer
            timerOptions['timer'] = setTimeout( function () { self.showMessage(); }, timerOptions['delay']  );
            
        // DONE FUNCTION: wait( void ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // debug
                debuggerApp.debug( self.moduleName + ': ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: testModule( void ) void 
    
})( debuggerApp );
// done create module function

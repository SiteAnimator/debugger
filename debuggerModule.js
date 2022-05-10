/*
        @package    SiteAnimator/Modules/Debugger
  
        file:       debuggerModule.js
        function:   displays a debug window
                    adds the funtion: 'debug' to the application;
                    displays messages send through the debug function
  
        Last revision: 10-12-2020
 
*/

// create module function
( function( debuggerApp ){
    
    // create name space
    debuggerApp.modules.debugger = debuggerApp.modules.debugger ? debuggerApp.modules.debugger : {};
    
    // MODULE: debuggerModule( named array / undefined: options ) void 
    debuggerApp.modules.debugger.debuggerModule = function( options ) {        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'debuggerModule';                 // string
        self.options = options;                             // named array / undefined
        self.on = false;                                    // boolean
        self.elementIds = {                                 // named array 
            'container'         :   self.ModuleName + '_Container', // string
            'dragHandle'        :   self.ModuleName + '_DragHandle', // string
            'content'           :   self.ModuleName + '_Content', // string
        };                                                  // done named array  
        self.layoutOptions = {                              // named array 
            'zIndex'            :   8000,                   // integer
            'top'               :   120,                    // integer
            'left'              :   600,                    // integer
            'width'             :   900,                    // integer
            'height'            :   200                     // integer            
        };                                                  // done named array  
        self.colors = {                                     // named array 
            'background'        :   'black',                // color
            'border'            :   'lightBlue',            // color
            'dragHandle' : {                                // named array 
                'background'    :   'green',                // color
                'highlight'     :   'lightgreen',           // color
            },                                              // done named array  
            'content' : {                                   // named array 
                'background'    :   'black',                // color
                'color'         :   'lightgrey',            // color
            }                                               // done named array  
        };                                                  // done named array  
        self.lastPosition = null;                           // named array / null
        self.lineCounter = 0;                               // integer
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void            
            
            // extend options
            self.extendOptions();
            
            // create html
            self.createHtml();
            
            // add events
            self.addEvents();

            // add application extensions
            self.addApplicationExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };        
        self.addApplicationExtensions = function() {
        // FUNCTION: addApplicationExtensions( void ) void

            // add debug function
            debuggerApp.debug = self.debug;

        // DONE FUNCTION: addApplicationExtensions( void ) void
        };        
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void

            // debug ! on
            if( !self.on ){

                // done
                return;
                
            }
            // debug ! on

            // show message
            $( '#' + self.elementIds['content'] ).prepend( self.lineCounter + '&#09;&#09;' + message + '<br/>' );
                
            // update line counter
            self.lineCounter++;
            
            // reset line counter
            self.lineCounter %= 10;             

        // DONE FUNCTION: debug( string: message ) void
        };        
        self.extendOptions = function() {
        // FUNCTION: extendOptions( void ) void

            // copy options
            let options = jQuery.extend( {}, self.options );           

            // set on
            self.on = options['on'] !== undefined && options['on'] === true ? true : false; 
            
            // extend layout
            self.layoutOptions = jQuery.extend( self.layoutOptions, options['layoutOptions'] );           
            
        // DONE FUNCTION: extendOptions( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // debug ! on
            if( !self.on ){

                // done
                return;
                
            }
            // debug ! on

            // get layout options
            let layoutOptions = self.layoutOptions;

            // get colors
            let colors = self.colors;

            // get element ids
            let elementIds = self.elementIds;

            // create the html for the window
            let html = '';
            
            // debug div
            html += '<div id="' + elementIds['container'] + '" ';
                html += 'style="';
                    html += ' position:absolute; ';
                    html += ' top: ' + layoutOptions['top'] + 'px; ';
                    html += ' left: ' + layoutOptions['left'] + 'px;';
                    html += ' z-index: ' + layoutOptions['zIndex'] + ';';
                    html += ' background-color: ' + colors['background'] + ' 1px groove; ';
                    html += ' border: ' + colors['border'] + ' 1px groove; ';
                    html += ' border-radius: 5px; ';
                html += '"';
            html += '>';
                // drag handle
                html += '<div id="' + elementIds['dragHandle'] + '" ';
                    html += 'style="';
                        html += ' height:20px; ';
                        html += ' padding-left: 14px; ';
                        html += ' padding-top: 4px; ';
                        html += ' background-color:' + colors['dragHandle']['background'] + '; ';
                        html += ' font-size:12px;font-family:times new roman';
                    html += '"';
                html += '>';
                    html += 'Debugger';
                html += '</div>';
                html += '<div id="' + elementIds['content'] + '" ';
                    html += 'style="';
                        html += ' overflow: auto; ';
                        html += ' width: ' + layoutOptions['width'] + 'px; ';
                        html += ' height: ' + layoutOptions['height'] + 'px;';
                        html += ' background-color:' + colors['content']['background'] + ';';
                        html += ' color:' + colors['content']['color'] + ';';
                        html += ' font-size:18px;font-family:times new roman';
                    html += '"';
                html += '>';
                    
                html += '</div>';
            html += '</div>';
            // done debug div
            
            // add html
            $( document.body ).append( html );

        // DONE FUNCTION: createHtml( void ) void
        };
        self.addEvents = function() {
        // FUNCTION: addEvents( void ) void

            // debug ! on
            if( !self.on ){

                // done
                return;
                
            }
            // debug ! on

            // add drag events
            $( "#" + self.elementIds['dragHandle'] ).mouseenter( function( ){ self.dragHandleMouseIn(); } );
            $( "#" + self.elementIds['dragHandle'] ).mouseout( function(){ self.dragHandleMouseOut(); } );
            $( "#" + self.elementIds['dragHandle'] ).mousedown( function( event ){ self.dragHandleMouseDown( event ); } );
            // add drag events

        // DONE FUNCTION: addEvents( void ) void
        };
        self.dragHandleMouseIn = function( ) {
        // FUNCTION: dragHandleMouseIn( void ) void

            // get drag handle colors
            let colors = self.colors['dragHandle'];
            
            // highlight draghandle
            $( "#" + self.elementIds['dragHandle'] ).css('background-color', colors['highlight'] );
            
        // DONE FUNCTION: dragHandleMouseIn( void ) void
        };
        self.dragHandleMouseOut = function( ) {
        // FUNCTION: dragHandleMouseOut( void ) void
            
            // get drag handle colors
            let colors = self.colors['dragHandle'];
            
            // reset draghandle bckground
            $( "#" + self.elementIds['dragHandle'] ).css('background-color', colors['background'] );
            
        // DONE FUNCTION: dragHandleMouseOut( void ) void
        };
        self.dragHandleMouseDown = function( event ) {
        // FUNCTION: dragHandleMouseDown( void ) void
            
            // remember position
            self.lastPosition = { 'x' : event.pageX, 'y' : event.pageY };
            
            // add events
            $( document ).on( 'mousemove', function( event ) { self.move( event ); } );
            $( document ).on( 'mouseup', function( event ) { self.up( event ); } );
            // add events
            
        // DONE FUNCTION: dragHandleMouseDown( void ) void
        };
        self.move = function( event ) {
            
            // create positions change
            self.positionChange = { 
                'x' : 0, 
                'y' : 0 
            };
            // create positions change
            
            self.positionChange['y'] = self.lastPosition['y'] - event.pageY;
            self.positionChange['x'] = self.lastPosition['x'] - event.pageX;
            
            // get left
            let left = parseInt( $( "#" + self.elementIds['container'] ).offset().left );
            
            // subtract change x
            left -= parseInt( self.positionChange['x'] );
                    
            // set minimum 
            left = Math.max( 0, left );

            // set left
            $( "#" + self.elementIds['container'] ).css( 'left', left + 'px' );
            
            // get top
            let top = parseInt( $( "#" + self.elementIds['container'] ).offset().top );
            
            // subtract change y
            top -= parseInt( self.positionChange['y'] );

            // set minimum 
            top = Math.max( 0, top );
            
            // set top
            $( "#" + self.elementIds['container'] ).css( 'top', top + 'px' );
            
            // remember last position
            self.lastPosition = { 'x' : event.pageX, 'y' : event.pageY };
            
        }; 
        self.up = function( event ) { 
            
            // remove events
            $(document).off( 'mousemove' );
            $(document).off( 'mouseup' );
            // remove events
            
        }; 
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
                
    };
    // DONE MODULE: debuggerModule( named array / undefined: options ) void 
    
})( debuggerApp );
// done create module function
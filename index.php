<!DOCTYPE html>
<!--
    @package    SiteAnimator/Modules/Debugger

    file:       DebuggerApp.html
    function:   Contains the debuggerApp.js module 
                Contains an example module to demonstrate 
                sending debug messages to the debugger by a module

    Last revision: 19-10-2022
 
-->
<html>
    <head>
        <title>Debugger App</title>
        <link id="favicon" href="icon.ico" rel="shortcut icon" type="image/x-icon">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            
            body {
                background-color: black;
                color: DarkGreen;
                font-size: 1.2rem;
                line-height: 1.8rem;
            }
            a:link {
                color: MediumAquaMarine;
            }
            a:visited {
                color: green;
            }
            a:hover {
                color: Gold;
            }
            a:active {
                color: DarkOrange;
            }            
        </style>
    </head>
    <body>
        <div style='font-size: 1.6rem;color:Chocolate;padding-top: 20px;max-width: 800px; margin: 0 auto;'>
            This is a demonstration of Javascript application build with modules.<br>
        </div>
        <div style='color:LightSeaGreen;padding-left:40px;padding-top:20px;max-width: 800px; margin: 0 auto;'>
            The application demonstrates the use of a debugger module.<br>
        </div>   
        <div style='color:peru;padding-left:40px;padding-top:20px;max-width: 800px; margin: 0 auto;'>
                
        
            The debug window is dragable.<br>
            Debugging is extremely useful to resolve complex errors.<br>
            The debugger can also be used in mobile applications.<br>
            <br>
        </div>            
        <div style='padding-left:40px;padding-top:20px;max-width: 800px; margin: 0 auto;'>
            This is an example in the series of modules created for the Site Animator project.<br>
        </div>

        <div style='padding-top: 40px;max-width: 800px; margin: 0 auto;'>
            <img src="logo.png" alt="Site Animator">
        </div>
        
        <div style='padding-top: 40px;max-width: 800px; margin: 0 auto;'>
            
            <a href='https://siteanimator.nl/en/blog'>Learn more about Javascript modules.</a><br>
        <br>
        <a href='https://siteanimator.nl/en/about-site-animator'>Learm more about SiteAnimator.</a><br>
        <br>    
        </div>
        

<script>
                 
    // set strict mode
    "use strict";      
    
    // add the app object to the window
    const debuggerApp = new function(){};
   
    // create denug options
    debuggerApp.options = {};
    
    // set options
    debuggerApp.options.debugOptions = {
        'on'            : true,
        'layoutOptions' : {
            'zIndex'    : 8000,
            'top'       : 180,
            'left'      : 120,
            'width'     : 400,
            'height'    : 300        
        }
    };
    // debug options

    // add window onload event
    window.onload = function(){

        // create main
        debuggerApp.main = new debuggerApp.mainModule( debuggerApp.options );
        
        // start the application
        debuggerApp.main.start();

    };
    // done add window onload event
    
</script>

<script src="main.js"></script>
<script src="debugModule.js"></script>
<script src="testModule.js"></script>



    </body>
</html>

<script src="/demos/waves/waves.js" type="text/javascript"></script><script>
    var canvas = null;
    var waves = null;
    function loadCanvas( ) {
        canvas = document.getElementById( 'canvas' );
        waves = new Waves( canvas,660,417 );
        setInterval( "run()", 80 );
    }
    function run(){
        waves.update( );
        waves.draw( );
    }
    window.addEventListener( 'load', loadCanvas, false );
</script>

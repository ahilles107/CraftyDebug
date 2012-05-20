Crafty.extend({
    /**@
    * #Crafty.debug
    * @category Utilities
    */
    debugBar : {
        show : function(){
            var body = document.getElementsByTagName('body')[0];

            body.innerHTML += this._generateTemplate();
        },

        _generateTemplate : function(){
            var styles =    '<style>'+
                                '#crafty-debug {position: fixed;background-color: #F7F7F7;left: 0;right: 0;height: 38px;margin: 0;padding: 0 40px 0 0;z-index: 6000000;font: 11px Verdana, Arial, sans-serif;text-align: left;color: #2F2F2F;background-image: -moz-linear-gradient(-90deg, #E4E4E4, white);background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from( #E4E4E4), to( white));bottom: 0;border-top: 1px solid #BBB;}'+
                                '#crafty-debug ul {list-style-type: none;padding: 0;margin: 0;}'+
                                '#crafty-debug ul li{display: inline-block;white-space: nowrap;color: #2F2F2F;min-height: 28px;border-right: 1px solid #E4E4E4;padding: 10px;float: left;cursor: default;padding-top: 15px;padding-bottom: 0px;}'+
                                '#crafty-debug ul li:hover {box-shadow: rgba(0, 0, 0, 0.3) 0 0 5px;}'+
                            '</style>'
                            ;
            var template = '<div id="crafty-debug">'+
                                '<ul>'+
                                    '<li class="bar-item version" data-item="version"> Crafty '+Crafty.getVersion()+'</li>'+
                                    '<li class="bar-item entities" data-item="entities">Entities</li>'+
                                    '<li class="bar-item graph" data-item="graph">Graph</li>'+
                                '</ul>'+
                            '</div>'
                            ;

            return styles + template;
        }
    }
});
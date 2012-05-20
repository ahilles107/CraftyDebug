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
                                '#crafty-debug ul.menu {list-style-type: none;padding: 0;margin: 0;}'+
                                '#crafty-debug ul.menu li{display: inline-block;white-space: nowrap;color: #2F2F2F;min-height: 28px;border-right: 1px solid #E4E4E4;padding: 0px;float: left;cursor: default;}'+
                                '#crafty-debug ul.menu li:hover {box-shadow: rgba(0, 0, 0, 0.3) 0 0 5px; background-color: #FFFFFF}'+
                                '#crafty-debug ul.menu li a{padding: 10px;padding-top: 15px;padding-bottom: 10px; color: #2F2F2F; display:block; text-decoration: none}'+
                                '#crafty-debug ul.menu li.version{font-weight: bold}'+
                                '#crafty-debug #entities-box{position: fixed;left: 79px;bottom: 38px;height: 145px;width: 500px;border: 1px solid #BBB;padding: 10px;}'+
                                '#crafty-debug #entities-box .list{height: 145px;width: 150px;}'+
                                '#crafty-debug #entities-box .list ul{height: 105px;width: 150px;border-right: 1px solid #BBB;overflow-y: scroll; padding-left: 10px;list-style-type: none;padding-right: 10px;}'+
                                '#crafty-debug #entities-box .list ul li{}'+
                                '#crafty-debug #entities-box .list ul li a{padding: 3px 0px 3px 0px;border-bottom: 1px dashed #BBB;color: #2F2F2F; display:block; text-decoration: none}'+
                                '#crafty-debug #entities-box .list input.search{padding: 3px;width: 115px;margin: 5px auto 0px auto;font-size: 11px;display: block; border: 1px solid #BBB;}'+
                            '</style>'
                            ;

            var entitiesBox =   '<div id="entities-box">'+
                                    '<div class="list">'+
                                        '<ul id="entities-box-list"></ul>'+
                                        '<input id="entities-search" type="text" placeholder="serach entity" class="search" />'+
                                    '</div>'+
                                    '<div class="details"></div>'+
                                '</div>'

            var template = '<div id="crafty-debug">'+
                                '<ul class="menu">'+
                                    '<li class="bar-item version" data-item="version"><a href="http://craftyjs.com/api/Crafty.html" target="_blank">Crafty '+Crafty.getVersion()+'</a></li>'+
                                    '<li class="bar-item entities" data-item="entities"><a href="#">Entities</a></li>'+
                                    '<li class="bar-item graph" data-item="graph"><a href="#">Graph</a></li>'+
                                '</ul>'+
                                entitiesBox+
                            '</div>'
                            ;

            return styles + template;
        },

        listEntities : function (filter) {
            console.log(filter);
            if(filter == '') {
                filter = '*';
            }

            var entities = [];
            //This is a number check in the scary world of JS
            isID = !isNaN(parseFloat(filter)) && isFinite(filter);

            // Save ids of single or many components.
            if (isID) {
                var e = Crafty(parseInt(filter));
                entities.push({ id: e[0], e: e });
            } else if (filter !== '*') {
                var ids = Crafty(filter), count = 0;
                for (i in ids) {
                    if (count++ > 50) break;
                    if (!(!isNaN(parseFloat(i)) && isFinite(i))) continue;
                    e = Crafty(ids[i]);
                    entities.push({ id: e[0], e: e });
                }
            } else if (filter == '*') {
                var es = Crafty('*'), count = 0;
                for (en in es) {
                    if (es.hasOwnProperty(en) && typeof es[en] == "object") { 
                        var e = es[en];
                        if (count++ < 50) {
                            entities.push({ id: e[0], e: e });
                        }
                    }
                };
            }

            return entities;
        },

        renderEntitesList : function(listEntities) {
            var elements = [];

            if (listEntities.length == 0){
                return '<h4>No results</h4>';
            }

            for (i in listEntities) {
                elements.push('<li><a href="#" data-comp="'+listEntities[i].id+'">Entity: #'+listEntities[i].id+'</a></li>');
            }
            return elements.join('');
        }
    }
});

Crafty.bind('Load', function () {
    var entitiesBoxList = document.getElementById('entities-box-list'),
        entitiesSearch = document.getElementById('entities-search');

    setTimeout(function(){
        entitiesBoxList.innerHTML = Crafty.debugBar.renderEntitesList(Crafty.debugBar.listEntities('*'));
    }, 1000);

    entitiesSearch.addEventListener('keyup', function(){
        entitiesBoxList.innerHTML = Crafty.debugBar.renderEntitesList(Crafty.debugBar.listEntities(this.value));
    }, false);
});


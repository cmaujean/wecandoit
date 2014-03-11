define(function(require, exports, module) {
        var Engine = require('famous/Engine');
        var Surface = require('famous/Surface');
        var Scrollview = require('famous-views/Scrollview');
        var HF = require('famous-views/HeaderFooterLayout');

        var header = new Surface({
                size: [undefined, undefined],
                properties: {
                        backgroundColor: 'red'
                }
        });

        var hf = new HF({
                headerSize: 100
        });

        var surfaces = [];
        var scrollview = new Scrollview();

        for (var i = 0; i < 20; i++) {
        	var temp = new Surface({
        		content: i + ' test',
        		size: [undefined, 50],
        		properties: {
        			color: 'purple',
        			backgroundColor: 'yellow'
        		}
        	});
        	surfaces.push(temp)
        	temp.pipe(scrollview)
        }

        scrollview.sequenceFrom(surfaces);

        var Context = Engine.createContext();

        hf.layout.id['header'].add(header);
        hf.layout.id['content'].add(scrollview);

        Context.add(hf);
});

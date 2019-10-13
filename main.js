function CreateDialogJQUERY(cont) {
    $(cont).dialog({
        autoOpen: true,
        title: "By: David Leonardo Chaves",
        width: "auto",
        height: "auto",
        autoResize:true,
        resizable: false
        
    });
}

function DefineText(ptext,x,y,offset)
{
	var text;
	textdom=document.createElementNS("http://www.w3.org/2000/svg", "text");
					text = $(textdom);
					text.attr('height', '2');
					text.attr('width', '2');
					text.attr('x', x+offset);
					text.attr('y', y+offset);
					text.attr('fill', 'white');
					text.attr('font-size', '8px');
					text.text(ptext);
	return  text;
}

function CreateGrid(container, pscale) {
    var scale = pscale;
    $(container).attr('height', pscale * 11 + "px");
    $(container).attr('width', pscale * 11) + "px";
    for (a = 0; a < 11; a++) {
        for (b = 0; b < 11; b++) {

            if (!(a == 0 && b == 0)) {
                var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                var newrect = $(rect);
                newrect.attr('width', scale);
                newrect.attr('height', scale);
                newrect.attr('x', b * scale);
                newrect.attr('y', a * scale);

                 var text = undefined;
                if (b == 0) {
					newrect.attr('style', 'fill:rgb(150,150,190);stroke-width:1;stroke:rgb(255,255,255)');
					
					text = DefineText(a,b*scale,a*scale,scale/2);

					 
                } else if (a == 0) 
                {
                	newrect.attr('style', 'fill:rgb(190,150,150);stroke-width:1;stroke:rgb(255,255,255)');
                	text = DefineText(b,b*scale,a*scale,scale/2);



                } else {
                    newrect.attr('style', 'fill:rgb(100,100,100);stroke-width:1;stroke:rgb(255,255,255)');
                }

                newrect.attr('onclick', 'alert("you click me")');
                $(container).append(newrect);
                if (text!=undefined)
                {
                	$(container).append(text);
                }
            }


        }
    }

}
AutoMounter = {
  mount : function() {
    var getData = function(node) {                    
        var attr = node.attributes['type'];
        var d_type = 'json';
        
        if(attr) {
            d_type = attr.value;
        }
        
        if(d_type == 'js') {
            eval('var tmp = ' + node.textContent);
            return tmp;
        }    
        
        return JSON.parse(node.textContent);
    }

    var mount = function(node) {
        var c = node.attributes['auto-mount'].value;
        var d_node = node.getElementsByTagName('data');
        var data = d_node && d_node.length > 0 ? getData(d_node[0]) : { };
        var comp = new window[c]({
            el : node.id,
            data : data
        });
        
        var c_name = node.attributes['var-name'];
        var c_parent = node.attributes['var-parent'];
        if(c_name && c_name.value) {
            var p = c_parent && c_parent.value ? window[c_parent.value] : window;
            p[c_name.value] = comp;
        }
        
        node.removeAttribute('auto-mount');
    };
    
    var nodes = document.querySelectorAll('[auto-mount]');
    for(var i = 0; i < nodes.length; i++){
        mount(nodes[i]);
    }
  }
}

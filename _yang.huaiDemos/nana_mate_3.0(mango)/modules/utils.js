NanaMate.utils = (function($){
	var encTable = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',  
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',  
        'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0',  
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/');  
  
	var decTable = new Array(256);  
	// initial decTable  
	for (i = 0; i < encTable.length; i++) {  
		decTable[encTable[i]] = i & 0xFF;  
	}  
	
	function pad(n) {
		return n.length < 2 ? "0" + n : n;
	}	
			
	function decodeBase62(str) {
		var pos = 0;
		var val = 0;  
		var value = new Array(); 
		var index = 0;
		for ( var i = 0; i < str.length; i++) {  
			c = str.charAt(i);  
			if (c == '=') {  
				break;  
			}  
			if (c == 'i') {  
				c = str.charAt(++i);  
				c = c == 'a' ? 'i' : c == 'b' ? '+' : c == 'c' ? '/' : str.charAt(--i);  
			}  
			val = (val << 6) | decTable[c];  
			pos += 6;  
			while (pos > 7) { 
				var tmp = (val >> (pos -= 8)) & 0xFF;
				value[index++] = tmp;
				val &= ((1 << pos) - 1);  
			}  
		}  
		
		var output = "";
		for( var i = 0, len = value.length; i < len; ++i ) {
			output += ( "%" + pad(value[i].toString(16)))
		}

		output = decodeURIComponent(output);
		
		return output; 
	}
	return {
		decodeBase62: decodeBase62
	};


})(jQuery);
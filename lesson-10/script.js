class options{
  constructor(height, width, bg, fontSize, textAlign,) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;

    this.createDiv = function(text){
    	let block = document.createElement('div');
    	document.body.appendChild(block);
    	block.innerHTML = text;
    	block.style.cssText=`\
		    background-color: ${this.bg}; \
		    width: ${this.width}; \
		   	height: ${this.height}; \
		    text-align: ${this.textAlign}; \
		    font-size: ${this.fontSize}; \
			display: block;\
			margin: 0 auto\
	  `;
    	return block;
    }
  }
}

var obj = new options('500px','200px','#EFEFEF','20px','center');
obj.createDiv('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe laudantium ipsam quae aspernatur suscipit eaque natus doloremque, quasi tempore! Eveniet quas quam veritatis alias, quo libero quasi voluptate sunt. Repudiandae.');
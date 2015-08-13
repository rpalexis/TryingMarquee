
function choixcoul(form) {
      form.result.value = form.color.value
	  form.result.focus();form.result.select()
    }
	

document.write('<form name=rechcolor>'+
  '<select size=1 onChange="choixcoul(this.form)" name=color>'+
    '<option selected >Choisir une couleur</option>'+
    '<option value="#000000" style="COLOR: #ffffff; BACKGROUND-COLOR: #000000">#000000</option>'+
    '<option value="#336699" style="COLOR: #ffffff; BACKGROUND-COLOR: #336699">#336699</option>'+
    '<option value="#3366CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #3366cc">#3366CC</option>'+
    '<option value="#003399" style="COLOR: #ffffff; BACKGROUND-COLOR: #003399">#003399</option>'+
    '<option value="#0000CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #0000cc">#0000CC</option>'+
    '<option value="#000066" style="COLOR: #ffffff; BACKGROUND-COLOR: #000066">#000066</option>'+
    '<option value="#006666" style="COLOR: #ffffff; BACKGROUND-COLOR: #006666">#006666</option>'+
    '<option value="#006699" style="COLOR: #ffffff; BACKGROUND-COLOR: #006699">#006699</option>'+
    '<option value="#0099CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #0099cc">#0099CC</option>'+
    '<option value="#0066CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #0066cc">#0066CC</option>'+
    '<option value="#0033CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #0033cc">#0033CC</option>'+
    '<option value="#0000FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #0000ff">#0000FF</option>'+
    '<option value="#3333FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #3333ff">#3333FF</option>'+
    '<option value="#333399" style="COLOR: #ffffff; BACKGROUND-COLOR: #333399">#333399</option>'+
    '<option value="#669999" style="COLOR: #ffffff; BACKGROUND-COLOR: #669999">#669999</option>'+
    '<option value="#009999" style="COLOR: #ffffff; BACKGROUND-COLOR: #009999">#009999</option>'+
    '<option value="#33CCCC" style="COLOR: #ffffff; BACKGROUND-COLOR: #33cccc">#33CCCC</option>'+
    '<option value="#00CCFF" style="COLOR: #ffffff; BACKGROUND-COLOR: #00ccff">#00CCFF</option>'+
    '<option value="#0099FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #0099ff">#0099FF</option>'+
    '<option value="#0066FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #0066ff">#0066FF</option>'+
    '<option value="#3366FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #3366ff">#3366FF</option>'+
    '<option value="#3333CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #3333cc">#3333CC</option>'+
    '<option value="#666699" style="COLOR: #ffffff; BACKGROUND-COLOR: #666699">#666699</option>'+
    '<option value="#339966" style="COLOR: #ffffff; BACKGROUND-COLOR: #339966">#339966</option>'+
    '<option value="#00CC99" style="COLOR: #ffffff; BACKGROUND-COLOR: #00cc99">#00CC99</option>'+
    '<option value="#00FFCC" style="COLOR: #ffffff; BACKGROUND-COLOR: #00ffcc">#00FFCC</option>'+
    '<option value="#00FFFF" style="COLOR: #ffffff; BACKGROUND-COLOR: #00ffff">#00FFFF</option>'+
    '<option value="#33CCFF" style="COLOR: #ffffff; BACKGROUND-COLOR: #33ccff">#33CCFF</option>'+
    '<option value="#3399FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #3399ff">#3399FF</option>'+
    '<option value="#6699FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #6699ff">#6699FF</option>'+
    '<option value="#6666FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #6666ff">#6666FF</option>'+
    '<option value="#6600FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #6600ff">#6600FF</option>'+
    '<option value="#6600CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #6600cc">#6600CC</option>'+
    '<option value="#339933" style="COLOR: #ffffff; BACKGROUND-COLOR: #339933">#339933</option>'+
    '<option value="#00CC66" style="COLOR: #ffffff; BACKGROUND-COLOR: #00cc66">#00CC66</option>'+
    '<option value="#00FF99" style="COLOR: #ffffff; BACKGROUND-COLOR: #00ff99">#00FF99</option>'+
    '<option value="#66FFCC" style="COLOR: #ffffff; BACKGROUND-COLOR: #66ffcc">#66FFCC</option>'+
    '<option value="#99CCFF" style="COLOR: #ffffff; BACKGROUND-COLOR: #99ccff">#99CCFF</option>'+
    '<option value="#9999FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #9999ff">#9999FF</option>'+
    '<option value="#9966FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #9966ff">#9966FF</option>'+
    '<option value="#006600" style="COLOR: #ffffff; BACKGROUND-COLOR: #006600">#006600</option>'+
    '<option value="#00FF00" style="COLOR: #ffffff; BACKGROUND-COLOR: #00ff00">#00FF00</option>'+
    '<option value="#66FF99" style="COLOR: #ffffff; BACKGROUND-COLOR: #66ff99">#66FF99</option>'+
    '<option value="#CCFFFF" style="COLOR: #000000; BACKGROUND-COLOR: #ccffff">#CCFFFF</option>'+
    '<option value="#CC99FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc99ff">#CC99FF</option>'+
    '<option value="#CC33FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc33ff">#CC33FF</option>'+
    '<option value="#9900CC" style="COLOR: #ffffff; BACKGROUND-COLOR: #9900cc">#9900CC</option>'+
    '<option value="#003300" style="COLOR: #ffffff; BACKGROUND-COLOR: #003300">#003300</option>'+
    '<option value="#009933" style="COLOR: #ffffff; BACKGROUND-COLOR: #009933">#009933</option>'+
    '<option value="#33CC33" style="COLOR: #ffffff; BACKGROUND-COLOR: #33cc33">#33CC33</option>'+
    '<option value="#99FF99" style="COLOR: #ffffff; BACKGROUND-COLOR: #99ff99">#99FF99</option>'+
    '<option value="#CCFFCC" style="COLOR: #ffffff; BACKGROUND-COLOR: #ccffcc">#CCFFCC</option>'+
    '<option value="#FFFFFF" style="COLOR: #000000; BACKGROUND-COLOR: #ffffff">#FFFFFF</option>'+
    '<option value="#FFCCFF" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffccff">#FFCCFF</option>'+
    '<option value="#FF99FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff99ff">#FF99FF</option>'+
    '<option value="#FF00FF" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff00ff">#FF00FF</option>'+
    '<option value="#660066" style="COLOR: #ffffff; BACKGROUND-COLOR: #660066">#660066</option>'+
    '<option value="#336600" style="COLOR: #ffffff; BACKGROUND-COLOR: #336600">#336600</option>'+
    '<option value="#009900" style="COLOR: #ffffff; BACKGROUND-COLOR: #009900">#009900</option>'+
    '<option value="#99FF66" style="COLOR: #ffffff; BACKGROUND-COLOR: #99ff66">#99FF66</option>'+
    '<option value="#CCFF99" style="COLOR: #ffffff; BACKGROUND-COLOR: #ccff99">#CCFF99</option>'+
    '<option value="#FFFFCC" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffffcc">#FFFFCC</option>'+
    '<option value="#FFCCCC" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffcccc">#FFCCCC</option>'+
    '<option value="#CCFF66" style="COLOR: #ffffff; BACKGROUND-COLOR: #ccff66">#CCFF66</option>'+
    '<option value="#CCFF66" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffff99">#FFFF99</option>'+
    '<option value="#FFCC99" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffcc99">#FFCC99</option>'+
    '<option value="#FF9999" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff9999">#FF9999</option>'+
    '<option value="#FF3399" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff3399">#FF3399</option>'+
    '<option value="#99CC00" style="COLOR: #ffffff; BACKGROUND-COLOR: #99cc00">#99CC00</option>'+
    '<option value="#CCFF33" style="COLOR: #ffffff; BACKGROUND-COLOR: #ccff33">#CCFF33</option>'+
    '<option value="#FFFF66" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffff66">#FFFF66</option>'+
    '<option value="#FFCC66" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffcc66">#FFCC66</option>'+
    '<option value="#FF9966" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff9966">#FF9966</option>'+
    '<option value="#FF6666" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff6666">#FF6666</option>'+
    '<option value="#CC6699" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc6699">#CC6699</option>'+
    '<option value="#993366" style="COLOR: #ffffff; BACKGROUND-COLOR: #993366">#993366</option>'+
    '<option value="#999966" style="COLOR: #ffffff; BACKGROUND-COLOR: #999966">#999966</option>'+
    '<option value="#CCCC00" style="COLOR: #ffffff; BACKGROUND-COLOR: #cccc00">#CCCC00</option>'+
    '<option value="#FFFF00" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffff00">#FFFF00</option>'+
    '<option value="#FFCC00" style="COLOR: #ffffff; BACKGROUND-COLOR: #ffcc00">#FFCC00</option>'+
    '<option value="#FF9933" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff9933">#FF9933</option>'+
    '<option value="#FF9900" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff9900">#FF9900</option>'+
    '<option value="#CC9900" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc9900">#CC9900</option>'+
    '<option value="#996633" style="COLOR: #ffffff; BACKGROUND-COLOR: #996633">#996633</option>'+
    '<option value="#FF9900" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff9900">#FF9900</option>'+
    '<option value="#CC6600" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc6600">#CC6600</option>'+
    '<option value="#FF0000" style="COLOR: #ffffff; BACKGROUND-COLOR: #ff0000">#FF0000</option>'+
    '<option value="#CC0000" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc0000">#CC0000</option>'+
    '<option value="#990033" style="COLOR: #ffffff; BACKGROUND-COLOR: #990033">#990033</option>'+
    '<option value="#663300" style="COLOR: #ffffff; BACKGROUND-COLOR: #663300">#663300</option>'+
    '<option value="#996600" style="COLOR: #ffffff; BACKGROUND-COLOR: #996600">#996600</option>'+
    '<option value="#CC3300" style="COLOR: #ffffff; BACKGROUND-COLOR: #cc3300">#CC3300</option>'+
    '<option value="#990000" style="COLOR: #ffffff; BACKGROUND-COLOR: #990000">#990000</option>'+
    '<option value="#"993333 style="COLOR: #ffffff; BACKGROUND-COLOR: #993333">#993333</option>'+
  '</select>'+
  '<font face="Verdana, Arial, Helvetica, sans-serif" size="2"> Recuperer le code ici -></font>'+  
  '<input type="text" name="result" size="10">'+
'</form>')


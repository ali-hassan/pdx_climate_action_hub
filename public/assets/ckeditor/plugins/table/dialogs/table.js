!function(){function e(e){for(var t,l=0,n=0,i=0,a=e.$.rows.length;i<a;i++){t=e.$.rows[i];for(var o,s=l=0,r=t.cells.length;s<r;s++)o=t.cells[s],l+=o.colSpan;l>n&&(n=l)}return n}function t(e){return function(){var t=this.getValue(),t=!!(CKEDITOR.dialog.validate.integer()(t)&&0<t);return t||(alert(e),this.select()),t}}function l(l,a){var o=function(e){return new CKEDITOR.dom.element(e,l.document)},s=l.editable(),r=l.plugins.dialogadvtab;return{title:l.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var e=this,t=e.getContentElement("advanced","advStyles");t&&t.on("change",function(){var t=this.getStyle("width",""),l=e.getContentElement("info","txtWidth");l&&l.setValue(t,!0),t=this.getStyle("height",""),(l=e.getContentElement("info","txtHeight"))&&l.setValue(t,!0)})},onShow:function(){var e,t=l.getSelection(),n=t.getRanges(),i=this.getContentElement("info","txtRows"),o=this.getContentElement("info","txtCols"),s=this.getContentElement("info","txtWidth"),r=this.getContentElement("info","txtHeight");"tableProperties"==a&&((t=t.getSelectedElement())&&t.is("table")?e=t:0<n.length&&(CKEDITOR.env.webkit&&n[0].shrink(CKEDITOR.NODE_ELEMENT),e=l.elementPath(n[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=e),e?(this.setupContent(e),i&&i.disable(),o&&o.disable()):(i&&i.enable(),o&&o.enable()),s&&s.onChange(),r&&r.onChange()},onOk:function(){var e=l.getSelection(),t=this._.selectedElement&&e.createBookmarks(),n=this._.selectedElement||o("table"),i={};if(this.commitContent(i,n),i.info){if(i=i.info,!this._.selectedElement)for(var a=n.append(o("tbody")),s=parseInt(i.txtRows,10)||0,r=parseInt(i.txtCols,10)||0,d=0;d<s;d++)for(var g=a.append(o("tr")),h=0;h<r;h++)g.append(o("td")).appendBogus();if(s=i.selHeaders,!n.$.tHead&&("row"==s||"both"==s)){for(g=n.getElementsByTag("thead").getItem(0),a=n.getElementsByTag("tbody").getItem(0),r=a.getElementsByTag("tr").getItem(0),g||(g=new CKEDITOR.dom.element("thead"),g.insertBefore(a)),d=0;d<r.getChildCount();d++)a=r.getChild(d),a.type!=CKEDITOR.NODE_ELEMENT||a.data("cke-bookmark")||(a.renameNode("th"),a.setAttribute("scope","col"));g.append(r.remove())}if(null!==n.$.tHead&&"row"!=s&&"both"!=s){for(g=new CKEDITOR.dom.element(n.$.tHead),a=n.getElementsByTag("tbody").getItem(0),h=a.getFirst();0<g.getChildCount();){for(r=g.getFirst(),d=0;d<r.getChildCount();d++)a=r.getChild(d),a.type==CKEDITOR.NODE_ELEMENT&&(a.renameNode("td"),a.removeAttribute("scope"));r.insertBefore(h)}g.remove()}if(!this.hasColumnHeaders&&("col"==s||"both"==s))for(g=0;g<n.$.rows.length;g++)a=new CKEDITOR.dom.element(n.$.rows[g].cells[0]),a.renameNode("th"),a.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=s&&"both"!=s)for(d=0;d<n.$.rows.length;d++)g=new CKEDITOR.dom.element(n.$.rows[d]),"tbody"==g.getParent().getName()&&(a=new CKEDITOR.dom.element(g.$.cells[0]),a.renameNode("td"),a.removeAttribute("scope"));i.txtHeight?n.setStyle("height",i.txtHeight):n.removeStyle("height"),i.txtWidth?n.setStyle("width",i.txtWidth):n.removeStyle("width"),n.getAttribute("style")||n.removeAttribute("style")}if(this._.selectedElement)try{e.selectBookmarks(t)}catch(e){}else l.insertElement(n),setTimeout(function(){var e=new CKEDITOR.dom.element(n.$.rows[0].cells[0]),t=l.createRange();t.moveToPosition(e,CKEDITOR.POSITION_AFTER_START),t.select()},0)},contents:[{id:"info",label:l.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:l.lang.table.rows,required:!0,controlStyle:"width:5em",validate:t(l.lang.table.invalidRows),setup:function(e){this.setValue(e.$.rows.length)},commit:i},{type:"text",id:"txtCols","default":2,label:l.lang.table.columns,required:!0,controlStyle:"width:5em",validate:t(l.lang.table.invalidCols),setup:function(t){this.setValue(e(t))},commit:i},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:l.lang.table.headers,items:[[l.lang.table.headersNone,""],[l.lang.table.headersRow,"row"],[l.lang.table.headersColumn,"col"],[l.lang.table.headersBoth,"both"]],setup:function(e){var t=this.getDialog();t.hasColumnHeaders=!0;for(var l=0;l<e.$.rows.length;l++){var n=e.$.rows[l].cells[0];if(n&&"th"!=n.nodeName.toLowerCase()){t.hasColumnHeaders=!1;break}}null!==e.$.tHead?this.setValue(t.hasColumnHeaders?"both":"row"):this.setValue(t.hasColumnHeaders?"col":"")},commit:i},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":l.filter.check("table[border]")?1:0,label:l.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(l.lang.table.invalidBorder),setup:function(e){this.setValue(e.getAttribute("border")||"")},commit:function(e,t){this.getValue()?t.setAttribute("border",this.getValue()):t.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:l.lang.common.align,items:[[l.lang.common.notSet,""],[l.lang.common.left,"left"],[l.lang.common.center,"center"],[l.lang.common.right,"right"]],setup:function(e){this.setValue(e.getAttribute("align")||"")},commit:function(e,t){this.getValue()?t.setAttribute("align",this.getValue()):t.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:l.lang.common.width,title:l.lang.common.cssLengthTooltip,"default":l.filter.check("table{width}")?500>s.getSize("width")?"100%":500:0,getValue:n,validate:CKEDITOR.dialog.validate.cssLength(l.lang.common.invalidCssLength.replace("%1",l.lang.common.width)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("width",this.getValue())},setup:function(e){e=e.getStyle("width"),this.setValue(e)},commit:i}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:l.lang.common.height,title:l.lang.common.cssLengthTooltip,"default":"",getValue:n,validate:CKEDITOR.dialog.validate.cssLength(l.lang.common.invalidCssLength.replace("%1",l.lang.common.height)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("height",this.getValue())},setup:function(e){(e=e.getStyle("height"))&&this.setValue(e)},commit:i}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:l.lang.table.cellSpace,"default":l.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(l.lang.table.invalidCellSpacing),setup:function(e){this.setValue(e.getAttribute("cellSpacing")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellSpacing",this.getValue()):t.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:l.lang.table.cellPad,"default":l.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(l.lang.table.invalidCellPadding),setup:function(e){this.setValue(e.getAttribute("cellPadding")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellPadding",this.getValue()):t.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:l.lang.table.caption,setup:function(e){if(this.enable(),e=e.getElementsByTag("caption"),0<e.count()){e=e.getItem(0);var t=e.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));t&&!t.equals(e.getBogus())?(this.disable(),this.setValue(e.getText())):(e=CKEDITOR.tools.trim(e.getText()),this.setValue(e))}},commit:function(e,t){if(this.isEnabled()){var n=this.getValue(),i=t.getElementsByTag("caption");if(n)0<i.count()?(i=i.getItem(0),i.setHtml("")):(i=new CKEDITOR.dom.element("caption",l.document),t.append(i,!0)),i.append(new CKEDITOR.dom.text(n,l.document));else if(0<i.count())for(n=i.count()-1;0<=n;n--)i.getItem(n).remove()}}},{type:"text",id:"txtSummary",bidi:!0,requiredContent:"table[summary]",label:l.lang.table.summary,setup:function(e){this.setValue(e.getAttribute("summary")||"")},commit:function(e,t){this.getValue()?t.setAttribute("summary",this.getValue()):t.removeAttribute("summary")}}]}]},r&&r.createAdvancedTab(l,null,"table")]}}var n=CKEDITOR.tools.cssLength,i=function(e){var t=this.id;e.info||(e.info={}),e.info[t]=this.getValue()};CKEDITOR.dialog.add("table",function(e){return l(e,"table")}),CKEDITOR.dialog.add("tableProperties",function(e){return l(e,"tableProperties")})}();
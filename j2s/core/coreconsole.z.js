(function(u,v,w,x,y,k,z,m,n,p,A,B,q,C,D,E,F,G,H,r,s,I,t,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,d,g){Jmol.Console={buttons:{},buttonWidth:100,click:function(a){Jmol.Console.buttons[a].console.appletConsole.doAction(Jmol.Console.buttons[a])}};Jmol.Console.JSConsole=function(a){this.applet=a.vwr.html5Applet;var c=this.id=this.applet._id+"_console",b=this;Jmol.Console.buttons[b.id]=b;b.appletConsole=a;b.input=a.input=new Jmol.Console.Input(b);b.output=a.output=
new Jmol.Console.Output(b);var e='<div id="$ID" class="jmolConsole" style="display:block;background-color:yellow;width:600px;height:362px;position:absolute;z-index:'+Jmol._z.console+'"><div id=$ID_title></div><div id=$ID_label1></div><div id=$ID_outputdiv style="position:relative;left:2px"></div><div id=$ID_inputdiv style="position:relative;left:2px"></div><div id=$ID_buttondiv></div></div>',f=function(a,b){b.console=a;b.id=c+"_"+b.label.replace(/\s/g,"_");Jmol.Console.buttons[b.id]=b;return b.html()},
e=e.replace(/\$ID/g,c);Jmol.$after("body",e);b.setContainer(Jmol._$(c));b.setPosition();b.dragBind(!0);e="&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:Jmol.Console.buttons['"+c+"'].setVisible(false)\">close</a>"+('&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:Jmol.script('+b.applet._id+",'help')\">help</a>");Jmol.$html(c+"_label1",e);Jmol.$html(c+"_inputdiv",'<textarea id="'+c+'_input" style="width:590px;height:100px"></textarea>');Jmol.$html(c+"_outputdiv",'<textarea id="'+c+'_output" style="width:590px;height:200px"></textarea>');
e=f(b,a.runButton)+f(b,a.loadButton)+f(b,a.clearInButton)+f(b,a.clearOutButton)+f(b,a.historyButton)+f(b,a.stateButton);Jmol.$html(c+"_buttondiv",e);Jmol.$bind("#"+c+"_input","keydown keypress keyup",function(a){b.input.keyEvent(a)});Jmol.$bind("#"+c+"_input","mousedown touchstart",function(){b.ignoreMouse=!0});Jmol.$bind("#"+c+"_output","mousedown touchstart",function(){b.ignoreMouse=!0});b.setButton=function(a){return new Jmol.Console.Button(this,a)};b.setVisible=function(a){a?this.container.show():
this.container.hide();this.dragBind(a)};b.setTitle=function(){}};Jmol.Swing.setDraggable(Jmol.Console.JSConsole);Jmol.Console.Input=function(a){this.console=a;this.id=a.id+"_input";this.getText=function(){return Jmol.$val(this.id)};this.setText=function(a){null==a&&(a="");Jmol.$val(this.id,a)};this.keyEvent=function(a){var b;b=a.type;var e=a.ctrlKey,f=a.keyCode;13==f&&(f=10);if("keyup"==b)b=38==f||40==f?1:this.console.appletConsole.processKey(f,402,e),1==(b&1)&&a.preventDefault();else{var d="keydown"==
b,g=d?a.key||a.originalEvent.keyIdentifier:"";switch(f){case 38:case 40:d||(f=0);break;case 8:case 9:case 10:case 27:break;default:f=0}b=this.console.appletConsole.processKey(f,401,e);e&&10==f&&this.setText(this.getText()+"\n");if(0==b&&9==a.keyCode){var h=this;setTimeout(function(){h.setText(h.getText()+"\t");Jmol.$focus(h.id)},10)}(1==(b&1)||"Up"==g||"Down"==g||d&&8!=a.keyCode&&32>a.keyCode)&&a.preventDefault()}};this.getCaretPosition=function(){var a=Jmol._$(this.id)[0];if("selectionStart"in a)return a.selectionStart;
if(!("selection"in document))return 0;a.focus();var b=document.selection.createRange(),e=document.selection.createRange().text.length;b.moveStart("character",-a.value.length);return b.text.length-e}};Jmol.Console.Output=function(a){this.id=a.id+"_output";this.getText=function(){return Jmol.$val(this.id)};this.setText=function(a){null==a&&(a="");Jmol.$val(this.id,a)};this.append=function(a){this.setText(this.getText()+a);Jmol.$scrollTo(this.id,-1)}};Jmol.Console.Button=function(a){this.label=a};Jmol.Console.Button.prototype.addConsoleListener=
function(a){this.appletConsole=a;Jmol.Console.buttons[this.id]=this};Jmol.Console.Button.prototype.html=function(){return'<input type="button" id="'+this.id+'" style="width:'+Jmol.Console.buttonWidth+'px" value="'+this.label+'" onClick="Jmol.Console.click(\''+this.id+"')\"/>"};k("J.console");t(J.console,"GenericTextArea");k("J.console");m(["J.api.JmolAppConsoleInterface","$.JmolCallbackListener","java.util.Hashtable"],"J.console.GenericConsole","java.lang.Boolean JU.PT J.c.CBK J.i18n.GT JS.T JV.Viewer".split(" "),
function(){c$=p(function(){this.label1=this.defaultMessage=this.loadButton=this.clearInButton=this.clearOutButton=this.stateButton=this.historyButton=this.runButton=this.editButton=this.menuMap=this.labels=this.vwr=this.output=this.input=null;this.nTab=0;this.incompleteCmd=null;n(this,arguments)},J.console,"GenericConsole",null,[J.api.JmolAppConsoleInterface,J.api.JmolCallbackListener]);r(c$,function(){this.menuMap=new java.util.Hashtable});d(c$,"setViewer",function(a){this.vwr=a},"JV.Viewer");d(c$,
"addButton",function(a,c){a.addConsoleListener(this);this.menuMap.put(c,a);return a},"J.api.JmolAbstractButton,~S");d(c$,"getLabel1",function(){return null});d(c$,"setupLabels",function(){this.labels.put("help",J.i18n.GT._("&Help"));this.labels.put("search",J.i18n.GT._("&Search..."));this.labels.put("commands",J.i18n.GT._("&Commands"));this.labels.put("functions",J.i18n.GT._("Math &Functions"));this.labels.put("parameters",J.i18n.GT._("Set &Parameters"));this.labels.put("more",J.i18n.GT._("&More"));
this.labels.put("Editor",J.i18n.GT._("Editor"));this.labels.put("State",J.i18n.GT._("State"));this.labels.put("Run",J.i18n.GT._("Run"));this.labels.put("Clear Output",J.i18n.GT._("Clear Output"));this.labels.put("Clear Input",J.i18n.GT._("Clear Input"));this.labels.put("History",J.i18n.GT._("History"));this.labels.put("Load",J.i18n.GT._("Load"));this.labels.put("label1",J.i18n.GT._("press CTRL-ENTER for new line or paste model data and press Load"));this.labels.put("default",J.i18n.GT._("Messages will appear here. Enter commands in the box below. Click the console Help menu item for on-line help, which will appear in a new browser window."))});
d(c$,"setLabels",function(){var a=J.i18n.GT.setDoTranslate(!0);this.editButton=this.setButton("Editor");this.stateButton=this.setButton("State");this.runButton=this.setButton("Run");this.clearOutButton=this.setButton("Clear Output");this.clearInButton=this.setButton("Clear Input");this.historyButton=this.setButton("History");this.loadButton=this.setButton("Load");this.defaultMessage=this.getLabel("default");this.setTitle();J.i18n.GT.setDoTranslate(a)});d(c$,"getLabel",function(a){null==this.labels&&
(this.labels=new java.util.Hashtable,this.labels.put("title",J.i18n.GT._("Jmol Script Console")+" "+JV.Viewer.getJmolVersion()),this.setupLabels());return this.labels.get(a)},"~S");d(c$,"displayConsole",function(){this.layoutWindow(null);this.outputMsg(this.defaultMessage)});d(c$,"updateLabels",function(){});d(c$,"completeCommand",function(a){if(0==a.length)return null;var c=0>=this.nTab||null==this.incompleteCmd?a:this.incompleteCmd;this.incompleteCmd=c;a=J.console.GenericConsole.splitCommandLine(a);
if(null==a)return null;var b=null==a[2],e=null!=a[3],f=a[b?1:2],d=a[1];if(0==f.length)return null;a=JS.T.getTokenFromName(d.trim().toLowerCase());var g=JS.T.tokAttr(null==a?0:a.tok,12288);a=J.console.GenericConsole.splitCommandLine(c);var h=null;if(!b&&('"'==f.charAt(0)||"'"==f.charAt(0)))b=f.charAt(0),JU.PT.trim(f,"\"'"),f=JU.PT.trim(a[2],"\"'"),h=this.nextFileName(f,this.nTab),null!=h&&(h=a[0]+a[1]+b+h+b);else{h=null;if(!b&&(f=d,e||a[2].startsWith("$")||g))h=new java.util.Hashtable,this.vwr.getObjectMap(h,
e||g?"{":a[2].startsWith("$")?"$":"0");h=JS.T.completeCommand(h,d.equalsIgnoreCase("set "),b,b?a[1]:a[2],this.nTab);h=a[0]+(null==h?f:b?h:a[1]+h)}return null==h||h.equals(c)?null:h},"~S");d(c$,"doAction",function(a){if(a===this.runButton)this.execute(null);else if(a===this.editButton)this.vwr.getProperty("DATA_API","scriptEditor",null);else if(a===this.historyButton)this.clearContent(this.vwr.getSetHistory(2147483647));else if(a===this.stateButton)this.clearContent(this.vwr.getStateInfo());else if(a===
this.clearInButton){this.input.setText("");return}a===this.clearOutButton?this.output.setText(""):a===this.loadButton?this.vwr.loadInlineAppend(this.input.getText(),!1):this.isMenuItem(a)&&this.execute(a.getName())},"~O");d(c$,"execute",function(a){var c=null==a?this.input.getText():a;null==a&&this.input.setText(null);a=this.vwr.script(c+"\u0001## EDITOR_IGNORE ##");null!=a&&!a.equals("pending")&&this.outputMsg(a)},"~S");d(c$,"destroyConsole",function(){this.vwr.isApplet&&this.vwr.getProperty("DATA_API",
"getAppConsole",Boolean.FALSE)});c$.setAbstractButtonLabels=d(c$,"setAbstractButtonLabels",function(a,c){for(var b,e=a.keySet().iterator();e.hasNext()&&((b=e.next())||1);){var f=a.get(b),d=c.get(b);if(b.indexOf("Tip")==b.length-3)f.setToolTipText(c.get(b));else{var g=J.console.GenericConsole.getMnemonic(d);" "!=g&&f.setMnemonic(g);d=J.console.GenericConsole.getLabelWithoutMnemonic(d);f.setText(d)}}},"java.util.Map,java.util.Map");c$.getLabelWithoutMnemonic=d(c$,"getLabelWithoutMnemonic",function(a){if(null==
a)return null;var c=a.indexOf("&");return-1==c?a:a.substring(0,c)+(c<a.length-1?a.substring(c+1):"")},"~S");c$.getMnemonic=d(c$,"getMnemonic",function(a){if(null==a)return" ";var c=a.indexOf("&");return-1==c||c==a.length-1?" ":a.charAt(c+1)},"~S");c$.map=d(c$,"map",function(a,c,b,e){b=J.console.GenericConsole.getMnemonic(b);" "!=b&&a.setMnemonic(b);e.put(c,a)},"~O,~S,~S,java.util.Map");g(c$,"notifyEnabled",function(a){switch(a){case J.c.CBK.ECHO:case J.c.CBK.MEASURE:case J.c.CBK.MESSAGE:case J.c.CBK.PICK:return!0}return!1},
"J.c.CBK");g(c$,"getText",function(){return this.output.getText()});g(c$,"sendConsoleEcho",function(a){null==a&&(this.updateLabels(),this.outputMsg(null),a=this.defaultMessage);this.outputMsg(a)},"~S");d(c$,"outputMsg",function(a){null==a||0==a.length?this.output.setText(""):("\n"!=a.charAt(a.length-1)&&(a+="\n"),this.output.append(a))},"~S");d(c$,"clearContent",function(a){this.output.setText(a)},"~S");g(c$,"sendConsoleMessage",function(a){null!=a&&this.output.getText().startsWith(this.defaultMessage)&&
this.outputMsg(null);this.outputMsg(a)},"~S");g(c$,"notifyCallback",function(a,c){var b=null==c||null==c[1]?null:c[1].toString();switch(a){case J.c.CBK.ECHO:this.sendConsoleEcho(b);break;case J.c.CBK.MEASURE:var e=c[3];0<=e.indexOf("Picked")||0<=e.indexOf("Sequence")?this.sendConsoleMessage(b):0<=e.indexOf("Completed")&&this.sendConsoleEcho(b.substring(b.lastIndexOf(",")+2,b.length-1));break;case J.c.CBK.MESSAGE:this.sendConsoleMessage(null==c?null:b);break;case J.c.CBK.PICK:this.sendConsoleMessage(b)}},
"J.c.CBK,~A");g(c$,"setCallbackFunction",function(){},"~S,~S");g(c$,"zap",function(){});d(c$,"recallCommand",function(a){a=this.vwr.getSetHistory(a?-1:1);null!=a&&this.input.setText(JU.PT.escUnicode(a))},"~B");d(c$,"processKey",function(a,c,b){var e=0;switch(c){case 401:switch(a){case 9:c=this.input.getText();if(c.endsWith("\n")||c.endsWith("\t"))return 0;e=1;if(this.input.getCaretPosition()==c.length)return a=this.completeCommand(c),null!=a&&this.input.setText(JU.PT.escUnicode(a).$replace("\t"," ")),
this.nTab++,e;break;case 27:e=1,this.input.setText("")}this.nTab=0;if(10==a&&!b)return this.execute(null),e;if(38==a||40==a)return this.recallCommand(38==a),e;break;case 402:if(10==a&&!b)return e}return e|2},"~N,~N,~B");c$.splitCommandLine=d(c$,"splitCommandLine",function(a){var c=Array(4),b=!1,e=!1,f=!1;if(0==a.length)return null;for(var d=-1,g=0,h=0,l=0,k,j=0;j<a.length;j++){switch(k=a.charAt(j)){case '"':!f&&!b&&(e=!e)&&(d=h=j);break;case "'":!f&&!e&&(b=!b)&&(d=h=j);break;case "\\":f=!f;continue;
case " ":!f&&(!b&&!e)&&(h=j+1,d=-1);break;case ";":!b&&!e&&(g=h=j+1,d=-1,l=0);break;case "{":case "}":!b&&!e&&(l+="{"==k?1:-1,h=j+1,d=-1);break;default:!b&&!e&&(d=-1)}f=!1}c[0]=a.substring(0,g);c[1]=h==g?a.substring(g):a.substring(g,h>d?h:d);c[2]=h==g?null:a.substring(h);c[3]=0<l?"{":null;return c},"~S")});k("J.consolejs");m(["J.console.GenericConsole"],"J.consolejs.AppletConsole",null,function(){c$=p(function(){this.jsConsole=null;n(this,arguments)},J.consolejs,"AppletConsole",J.console.GenericConsole);
q(c$,function(){s(this,J.consolejs.AppletConsole,[])});g(c$,"start",function(a){this.setViewer(a);this.setLabels();this.displayConsole()},"JV.Viewer");g(c$,"layoutWindow",function(){this.jsConsole=new Jmol.Console.JSConsole(this);this.setTitle()},"~S");g(c$,"setTitle",function(){this.jsConsole&&this.jsConsole.setTitle(this.getLabel("title"))});g(c$,"setVisible",function(a){this.jsConsole.setVisible(a)},"~B");g(c$,"setButton",function(a){return new Jmol.Console.Button(a)},"~S");g(c$,"dispose",function(){this.setVisible(!1)});
g(c$,"isMenuItem",function(){return!1},"~O");g(c$,"getScriptEditor",function(){return null});g(c$,"nextFileName",function(){return null},"~S,~N")})})(Clazz,Clazz.newLongArray,Clazz.doubleToByte,Clazz.doubleToInt,Clazz.doubleToLong,Clazz.declarePackage,Clazz.instanceOf,Clazz.load,Clazz.instantialize,Clazz.decorateAsClass,Clazz.floatToInt,Clazz.floatToLong,Clazz.makeConstructor,Clazz.defineEnumConstant,Clazz.exceptionOf,Clazz.newIntArray,Clazz.defineStatics,Clazz.newFloatArray,Clazz.declareType,Clazz.prepareFields,
Clazz.superConstructor,Clazz.newByteArray,Clazz.declareInterface,Clazz.p0p,Clazz.pu$h,Clazz.newShortArray,Clazz.innerTypeInstance,Clazz.isClassDefined,Clazz.prepareCallback,Clazz.newArray,Clazz.castNullAs,Clazz.floatToShort,Clazz.superCall,Clazz.decorateAsType,Clazz.newBooleanArray,Clazz.newCharArray,Clazz.implementOf,Clazz.newDoubleArray,Clazz.overrideConstructor,Clazz.clone,Clazz.doubleToShort,Clazz.getInheritedLevel,Clazz.getParamsType,Clazz.isAF,Clazz.isAI,Clazz.isAS,Clazz.isASS,Clazz.isAP,Clazz.isAFloat,
Clazz.isAII,Clazz.isAFF,Clazz.isAFFF,Clazz.tryToSearchAndExecute,Clazz.getStackTrace,Clazz.inheritArgs,Clazz.alert,Clazz.defineMethod,Clazz.overrideMethod,Clazz.declareAnonymous,Clazz.cloneFinals);

/* Browser-local DOCX generation using the bundled MIT-licensed docx library. */
(function(root){
'use strict';
function build(model,lib=root.docx){
 if(!lib)throw Error('Word-Bibliothek konnte nicht geladen werden.');
 const {Document,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,HeadingLevel,BorderStyle}=lib;
 const run=(text,opts={})=>new TextRun({text:String(text),...opts});
 const para=(value,opts={})=>new Paragraph({children:[run(value)],...opts});
 const lines=(value,opts={})=>String(value||'Noch zu ergänzen').split(/\n/).map(s=>para(s,opts));
 const children=[para(model.title,{heading:HeadingLevel.TITLE})];
 for(const section of model.sections){children.push(para(section.title,{heading:HeadingLevel.HEADING_1}));for(const f of section.fields){if(f.label)children.push(para(f.label+':',{heading:HeadingLevel.HEADING_2}));if(f.list&&f.value)for(const line of f.value.split(/\n+/))children.push(para(line.replace(/^\s*[-•]\s*/,''),{bullet:{level:0}}));else children.push(...lines(f.value))}}
 children.push(para('Vorläufiger Zeitplan',{heading:HeadingLevel.HEADING_1}),...lines(model.schedule.summary),...lines('Weitere Verpflichtungen: '+model.schedule.commitments));
 if(model.schedule.rows.length){const border={style:BorderStyle.SINGLE,size:4,color:'D9D9D9'};const cell=(value,header=false)=>new TableCell({children:[new Paragraph({children:[run(value,{bold:header,size:20})],spacing:{after:60,before:60}})],shading:header?{fill:'EAEAEA'}:undefined,margins:{top:80,bottom:80,left:80,right:80},borders:{top:border,bottom:border,left:border,right:border}});children.push(new Table({width:{size:100,type:WidthType.PERCENTAGE},columnWidths:[4300,1450,1450,1200],rows:[new TableRow({tableHeader:true,children:['Arbeitsschritt','Von','Bis','Status'].map(x=>cell(x,true))}),...model.schedule.rows.map(row=>new TableRow({cantSplit:true,children:row.map(x=>cell(x))}))]}))}else children.push(para('Zeitplan noch erstellen.'));
 if(model.schedule.warnings.length)children.push(para('Hinweise zum Zeitplan',{heading:HeadingLevel.HEADING_2}),...model.schedule.warnings.map(x=>para(x,{bullet:{level:0}})));
 return new Document({creator:'Konzeptstudio',title:model.title,description:'Konzeptentwurf',styles:{default:{document:{run:{font:'Cambria',size:22,color:'111111'},paragraph:{spacing:{after:160,line:276}}}},paragraphStyles:[{id:'Title',name:'Title',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Cambria',size:40,color:'205B73',bold:false},paragraph:{spacing:{after:180},keepNext:true}},{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Cambria',size:28,color:'656565',bold:false},paragraph:{spacing:{before:320,after:160},keepNext:true}},{id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Cambria',size:22,bold:true,color:'111111'},paragraph:{spacing:{before:160,after:100},keepNext:true}}]},sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:1417,right:1417,bottom:1134,left:1417}}},children}]});
}
async function download(model){const blob=await root.docx.Packer.toBlob(build(model));const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='konzept.docx';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
root.KonzeptWord={build,download};
})(typeof window==='undefined'?globalThis:window);

import{_ as e,o,c as t,i as r}from"./app.5ab8bb1d.js";const g=JSON.parse('{"title":"\u{1F4EC} Importing Projects","description":"","frontmatter":{"title":"\u{1F4EC} Importing Projects","sidebar":"misc"},"headers":[{"level":2,"title":".mcaddon and .mcpack","slug":"mcaddon-and-mcpack"},{"level":2,"title":".brproject","slug":"brproject"},{"level":2,"title":"com.mojang","slug":"com-mojang"},{"level":2,"title":"Manually transferring projects","slug":"manually-transferring-projects"}],"relativePath":"guide/misc/import-project.md","lastUpdated":1660826181000}'),a={name:"guide/misc/import-project.md"},i=r('<h1 id="\u{1F4EC}-importing-projects" tabindex="-1">\u{1F4EC} Importing Projects <a class="header-anchor" href="#\u{1F4EC}-importing-projects" aria-hidden="true">#</a></h1><p>bridge. allows you to import various formats of packaged or existing projects to quickly get editing an Add-On with bridge.! Generally, to import a project, just drag it from your device&#39;s file explorer into bridge.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You may not need to import your project in order to start editing it with bridge. v2. You can read more about this in the <a href="/guide/misc/project-types/">project types guide</a>.</p></div><h2 id="mcaddon-and-mcpack" tabindex="-1"><code>.mcaddon</code> and <code>.mcpack</code> <a class="header-anchor" href="#mcaddon-and-mcpack" aria-hidden="true">#</a></h2><p>Both <code>.mcaddon</code> and <code>.mcpack</code> files can be imported into bridge. and a project will be built around the imported files. Importing a pack through this method may cause the project to be misconfigured and you may need to modify the <a href="/guide/misc/project-config.html">project config</a> manually afterwards.</p><h2 id="brproject" tabindex="-1"><code>.brproject</code> <a class="header-anchor" href="#brproject" aria-hidden="true">#</a></h2><p>A <code>.brproject</code> file is bridge&#39;s internal format for sharing a full project. They can be created by <a href="/guide/misc/export-project/index.html">exporting</a> as a <code>.brproject</code> file. The project&#39;s configuration is stored in this file so your project will be setup correctly when importing.</p><h2 id="com-mojang" tabindex="-1"><code>com.mojang</code> <a class="header-anchor" href="#com-mojang" aria-hidden="true">#</a></h2><p>bridge. will <a href="/guide/misc/project-types/index.html#com-mojang-project">automatically load projects from the <code>com.mojang</code> folder</a> and show them in the project chooser. It isn&#39;t recommended to import your projects this way, but if you want to edit your files directly in the <code>com.mojang</code> folder, you can.</p><h2 id="manually-transferring-projects" tabindex="-1">Manually transferring projects <a class="header-anchor" href="#manually-transferring-projects" aria-hidden="true">#</a></h2><p>On Desktop, you are also able to manually transfer projects into the bridge. folder for you to work on. The best way to do this is described below:</p><ol><li>Open <a href="https://editor.bridge-core.app/" target="_blank" rel="noreferrer">bridge.</a> and create a new project; ensure this isn&#39;t a local project. If you unsure how to get to this step, we recommend you read through our <a href="/guide/index.html">getting started guide</a>.</li><li>Open the project&#39;s folder up in your device&#39;s file explorer.</li><li>Locate the <code>BP</code> folder in your project and move your behavior pack into it.</li><li>Repeat for each pack type, with the resource pack going in the <code>RP</code> folder, skin pack in <code>SP</code> and world template in <code>WT</code>.</li></ol>',12),c=[i];function d(n,s,p,l,m,h){return o(),t("div",null,c)}var f=e(a,[["render",d]]);export{g as __pageData,f as default};

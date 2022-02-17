import{f as e}from"./app.38fa1a20.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const r={},t=e('<h2 id="search-levels" tabindex="-1"><a class="header-anchor" href="#search-levels" aria-hidden="true">#</a> Search Levels</h2><ul><li><code>Expressions</code> \u2013 search and replace within Expressions</li><li><code>Layers</code> \u2013 search and rename Layers</li><li><code>Project Items</code> \u2013 search and rename Project Items</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When the search level is set to <code>Expressions</code>, only selected Properties are queried. If you wish to query all expressions in your composition, <code>Search &amp; Select</code> all properties with expressions, by using the wildcard selector <code>*</code> and setting its <code>Has Expression</code> argument first.</p></div><h2 id="fields" tabindex="-1"><a class="header-anchor" href="#fields" aria-hidden="true">#</a> Fields</h2><p>You can stack multiple queries in one run. Multiline text is supported for each field.</p><p><strong>Input fields</strong></p><ul><li><code>Search</code> \u2013 the text to search for</li><li><code>Replace</code> \u2013 the text to replace the search text with</li><li><code>+</code> \u2013 add a new search query to the stack</li><li><code>-</code> \u2013 remove the search query from the stack</li></ul><h2 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h2><ul><li><code>Math Case</code> \u2013 respect lower- and uppercase during the query</li><li><code>Match Word</code> \u2013 match complete words only, no partials</li></ul><h2 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h2><ul><li><code>Dry Run</code> \u2013 run the Search/Replace queries, and print results in a separate window. No changes are done in the process</li><li><code>Apply</code> \u2013 run and apply the Search/Replace stack</li></ul><h2 id="shortcuts" tabindex="-1"><a class="header-anchor" href="#shortcuts" aria-hidden="true">#</a> Shortcuts</h2><ul><li><code>CTRL+ENTER</code> + <code>[active text-field]</code> \u2013 add a new query to the stack</li><li><code>ALT+CLICK</code> + <code>[Dry Run]</code> \u2013 clear all results</li><li><code>ALT+CLICK</code> + <code>[Apply]</code> \u2013 delete and clear all Search/Replace fields in the stack</li></ul>',13);function c(s,o){return t}var l=a(r,[["render",c]]);export{l as default};
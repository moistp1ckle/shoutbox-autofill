// ==UserScript==
// @name         Shoutbox Autofill by Sango
// @namespace    https://leaked.wiki
// @version      0.1
// @description  Adds Autofill to Mentions & Smiles
// @author       Sango
// @include      /^http.*?:\/\/cracked.io\/*$
// @match        *://cracked.io/*index.php
// @match        *://cracked.io/shoutbox.php
// @icon         https://www.google.com/s2/favicons?domain=cracked.io
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        var smiles = ""; var mentions = "";
        if (localStorage.getItem("auto_smiles") != 0) { smiles="checked='checked'"; }
        if (localStorage.getItem("auto_mentions") != 0) { mentions="checked='checked'"; }
        $("#shoutbox_settings_modal tr:has(.trow1>label>#ignore_mesvak)").after(`
<tr>
    <td class="trow1">
        <label><input type="checkbox" id="auto_smiles"`+smiles+`/> Autofill Emojis</label>
    </td>
</tr>
<tr>
    <td class="trow1">
        <label><input type="checkbox" id="auto_mentions"`+mentions+`/> Autofill Mentions</label>
    </td>
</tr>
    `);
  $("body").append(`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/moistp1ckle/shoutbox-autofill@latest/inc/style.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/moistp1ckle/shoutbox-autofill@latest/inc/autofill.js?t=`+Date.now()+`"></script>
  `);
    }, false);
})();

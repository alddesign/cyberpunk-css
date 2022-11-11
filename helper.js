
/**
 * Not required by cyberpunk css.
 * 
 * Just a 
 */


function encode(text)
{
    return $("<textarea/>").text(text).html().replaceAll("*", "<br>").replaceAll("  ", "&nbsp;&nbsp;");
}

$(document).ready(function()
{

var codes = [];

codes[0] = 
`<div class="cyberpunk-tile-big fg-dark bg-cyan">*
    <img src="image.jpg">*
    <label>Text content</label>*
</div>`;

codes[1] = 
`<button class="cyber-button bg-red fg-white">*
    Button Text*
    <span class="glitchtext">Some edgy txt</span>*
    <span class="tag">R25</span>*
</button>`;

codes[2] = 
`<div class="code-block" data-title="C# Code:">*
    Example of some C# Code...*
</div>`;

    $(codes).each(function(index)
    {
        $("#code" + String(index)).html(encode(String(this)));
    })
})
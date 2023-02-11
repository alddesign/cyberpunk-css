
/**
 * Not required by cyberpunk css.
 * 
 * Just for the purpose of this demo page.
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

codes[3] = 
`<link rel="stylesheet" href="cyberpunk.css">`;

codes[4] = 
`<div class="cyber-banner">*
    Your text*
</div>`;

codes[5] = 
`<div class="cyber-banner-short bg-purple fg-white">*
    Your text*
</div>`;

codes[6] = 
`<div class="cyber-input">*
    <input type="text" placeholder="some text..." />*
</div>*
*
<div class="cyber-input ac-purple fg-green">*
    <input type="text" placeholder="purple accent, green text..." />*
</div>*`;

codes[7] =
`<div class="cyber-select">*
    <select>*
        <option value="red">Red</option>*
        <option value="cyan">Cyan</option>*
    </select>*
</div>`;

codes[8] =
`<input type="checkbox" class="cyber-check ac-blue"/>`;

codes[9] =
`
<input type="radio" id="stable" name="radio" class="cyber-radio ac-green" value="0"/>*
<input type="radio" id="unstable" name="radio" class="cyber-radio ac-purple" value="1"/>*
<input type="radio" id="down" name="radio" class="cyber-radio ac-red" value="2"/>
`;

    $(codes).each(function(index)
    {
        $("#code" + String(index)).html(encode(String(this)));
    })
})
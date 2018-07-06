---
path: /embossed-shadowed-text-in-flex/
layout: post
title: Embossed / Shadowed text in Flex
date: 2009-11-09T08:00:38Z
tags:
- flex
---

If you get it right, drop shadow effects can really improve the appearance and clarity of text.  <a href="http://markstar.co.uk/blog/" target="_blank">Mark</a> sent me the starting code for this a little gem a while ago, but I've extended it to support Flexs' CSS Styles support, and have been playing with different settings, which - with a bit of creativity - will give you anything from drop shadows to a bevelled appearance.

There are 4 classes we've created which are extensions to 4 basic Flex components - ShadowButton, ShadowLabel, ShadowText and ShadowText.  To each you can customise the shadows' distance, angle, colour, alpha and blur amount.  Here's some examples of the usage, and output of these classes;
<h3>Bevelled text:</h3>
[kml_flashembed movie="http://uploads.psyked.co.uk/2009/11/BevelTextExample.swf" height="206" width="500" /]

<pre><code>ShadowLabel, ShadowButton, ShadowText, ShadowCheckBox
{
shadowColor: #ffffff;
} </code></pre>
<h3>Drop shadowed text:</h3>
[kml_flashembed movie="http://uploads.psyked.co.uk/2009/11/ShadowTextExample.swf" height="206" width="500" /]

<pre><code>ShadowLabel, ShadowButton, ShadowText, ShadowCheckBox
{
shadowColor: #333333;
}</code></pre>

<!--more-->Aside from changing the background colour to make it all a little easier to see the final result, that's just a single variable in the CSS we've changed.
All we're actually doing is adding a Flash Player filter to the text objects, but we've extended and hooked into the Flex component lifecycle to make things a little more flexible and reusable.
<h3>ShadowLabel</h3>
<pre><code>package couk.psyked
{
import flash.filters.DropShadowFilter;
import mx.controls.Label;

public class ShadowLabel extends Label
{
[Inspectable( defaultValue=1 )]
public var shadowDistance:Number = 1;

[Inspectable( defaultValue=45 )]
public var shadowAngle:Number = 45;

[Inspectable( defaultValue=0x003333 )]
public var shadowColor:Number = 0x003333;

[Inspectable( defaultValue=1 )]
public var shadowAlpha:Number = 1;

[Inspectable( defaultValue=0 )]
public var shadowBlur:Number = 0;

public function ShadowLabel()
{
super();
}

override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void
{
super.updateDisplayList( unscaledWidth, unscaledHeight );

if ( getStyle( "shadowDistance" ))
{
shadowDistance = getStyle( "shadowDistance" );
}

if ( getStyle( "shadowAngle" ))
{
shadowAngle = getStyle( "shadowAngle" );
}

if ( getStyle( "shadowColor" ))
{
shadowColor = getStyle( "shadowColor" );
}

if ( getStyle( "shadowAlpha" ))
{
shadowAlpha = getStyle( "shadowAlpha" );
}

if ( getStyle( "shadowBlur" ))
{
shadowBlur = getStyle( "shadowBlur" );
}

textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}

override protected function commitProperties():void
{
super.commitProperties();
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}
}
}</code></pre>
<h3>ShadowText</h3>
<pre><code>package couk.psyked
{
import flash.filters.DropShadowFilter;
import mx.controls.Text;

public class ShadowText extends Text
{
[Inspectable( defaultValue=1 )]
public var shadowDistance:Number = 1;

[Inspectable( defaultValue=45 )]
public var shadowAngle:Number = 45;

[Inspectable( defaultValue=0x003333 )]
public var shadowColor:Number = 0x003333;

[Inspectable( defaultValue=1 )]
public var shadowAlpha:Number = 1;

[Inspectable( defaultValue=0 )]
public var shadowBlur:Number = 0;

public function ShadowText()
{
super();
}

override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void
{
super.updateDisplayList( unscaledWidth, unscaledHeight );

if ( getStyle( "shadowDistance" ))
{
shadowDistance = getStyle( "shadowDistance" );
}

if ( getStyle( "shadowAngle" ))
{
shadowAngle = getStyle( "shadowAngle" );
}

if ( getStyle( "shadowColor" ))
{
shadowColor = getStyle( "shadowColor" );
}

if ( getStyle( "shadowAlpha" ))
{
shadowAlpha = getStyle( "shadowAlpha" );
}

if ( getStyle( "shadowBlur" ))
{
shadowBlur = getStyle( "shadowBlur" );
}
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}

override protected function commitProperties():void
{
super.commitProperties();
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}
}
}</code></pre>
<h3>ShadowCheckBox</h3>
<pre><code>package couk.psyked
{
import flash.filters.DropShadowFilter;
import mx.controls.CheckBox;

public class ShadowCheckBox extends CheckBox
{
[Inspectable( defaultValue=1 )]
public var shadowDistance:Number = 1;

[Inspectable( defaultValue=45 )]
public var shadowAngle:Number = 45;

[Inspectable( defaultValue=0x003333 )]
public var shadowColor:Number = 0x003333;

[Inspectable( defaultValue=1 )]
public var shadowAlpha:Number = 1;

[Inspectable( defaultValue=0 )]
public var shadowBlur:Number = 0;

public function ShadowCheckBox()
{
super();
}

override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void
{
super.updateDisplayList( unscaledWidth, unscaledHeight );

if ( getStyle( "shadowDistance" ))
{
shadowDistance = getStyle( "shadowDistance" );
}

if ( getStyle( "shadowAngle" ))
{
shadowAngle = getStyle( "shadowAngle" );
}

if ( getStyle( "shadowColor" ))
{
shadowColor = getStyle( "shadowColor" );
}

if ( getStyle( "shadowAlpha" ))
{
shadowAlpha = getStyle( "shadowAlpha" );
}

if ( getStyle( "shadowBlur" ))
{
shadowBlur = getStyle( "shadowBlur" );
}
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}

override protected function commitProperties():void
{
super.commitProperties();
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}

}
}</code></pre>
<h3>ShadowButton</h3>
<pre><code>package couk.psyked
{
import flash.filters.DropShadowFilter;
import mx.controls.Button;

public class ShadowButton extends Button
{
[Inspectable( defaultValue=1 )]
public var shadowDistance:Number = 1;

[Inspectable( defaultValue=45 )]
public var shadowAngle:Number = 45;

[Inspectable( defaultValue=0x003333 )]
public var shadowColor:Number = 0x003333;

[Inspectable( defaultValue=1 )]
public var shadowAlpha:Number = 1;

[Inspectable( defaultValue=0 )]
public var shadowBlur:Number = 0;

public function ShadowButton()
{
super();
}

override protected function updateDisplayList( unscaledWidth:Number, unscaledHeight:Number ):void
{
super.updateDisplayList( unscaledWidth, unscaledHeight );

if ( getStyle( "shadowDistance" ))
{
shadowDistance = getStyle( "shadowDistance" );
}

if ( getStyle( "shadowAngle" ))
{
shadowAngle = getStyle( "shadowAngle" );
}

if ( getStyle( "shadowColor" ))
{
shadowColor = getStyle( "shadowColor" );
}

if ( getStyle( "shadowAlpha" ))
{
shadowAlpha = getStyle( "shadowAlpha" );
}

if ( getStyle( "shadowBlur" ))
{
shadowBlur = getStyle( "shadowBlur" );
}
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}

override protected function commitProperties():void
{
super.commitProperties();
textField.filters = [ new DropShadowFilter( shadowDistance, shadowAngle, shadowColor, shadowAlpha, shadowBlur, shadowBlur )];
}

}
}</code></pre>
---
path: /blog/exempli-gratia-using-tweener/
layout: post
title: 'Exempli Gratia : Using Tweener'
date: 2008-07-18T18:53:31Z
tags:
- flash
- actionscript
- animation
- google-code
- open-source
---

> Tweener (caurina.transitions.Tweener) is a Class used to create tweenings and other transitions via ActionScript code for projects built on the Flash platform.

To use Tweener in your projects, the first step is to download the class files that will work with your project from [the Google Code page for Tweener](http://code.google.com/p/tweener/), and then we'll get started.

## Download Tweener

[![](googelcode.jpg)

There are currently 3 versions of the Tweener class, one for (AS2) Flash player 7 & Flash Lite 2, one for (AS2) Flash Player 8, and one for (AS3) Flash Player 9. For which one you download is down to your project, but the interface and implimentation is pretty much the same across each of the versions.

I'm going to assume we're working with the Actionscript 2 version of Tweener for these demonstrations.

## Add Tweener to your project

Once you've downloaded the Tweener files, the easiest way (if you're not using a central class repository or custom class locations in Flash) to add Tweener is to unzip the folders in the zip file to the same location as your source file, so the 'caurina' folder should be located in the same directory as your fla. Then, in your actionscript panel type;

    import caurina.transitions.Tweener;

## Move stuff!

Tweener should now be ready for use.  Create a MovieClip to start working with on the stage. You add tweens with the Tweener.addTween(); function, which takes two attributes: the target, and an object containing the tween variables.  The [Tweener documentation](http://hosted.zeh.com.br/tweener/docs/en-us/) lists all of the possible parameters, but the basic ones you will need are **time**, **transition** and the **attribute** you're manipulating. You can only add each one once, but you can add more than once attribute with a single line of code (an advantage over Flash's inbuilt mx.transitions.Tween class)

    Tweener.addTween(myMovie, {\_x:10, \_y:10, time:1, transition:"linear"});

The setup of any tween is pretty simple.  There's two variables that tweener accepts - the object to apply the tween too, and an object that contains all of the tween attributes, including the variables to affect, the transition type (as a string) and the time for the tween to take (measured in seconds).

The code above will move 'myMovie' from its current position to 10, 10 over 1 second, with a linear (no easing) movement.  We add easing by simply changing the transition property - my personal fave is "easeInOutQuad".  That's simple enough, but what about when you want a more complex series of animations?  Well, that's when you need to start...

## Timing it

If you weren't using Tweener, you'd have a horrible job here, stacking functions to execute when another is complete.  Tweener however, has a **delay** feature.  You can declare all the tweens you want in a single block, and add the delay attribute to them to have them execute _when_ you want.

    Tweener.addTween(myMovie, {\_x:10, \_y:10, time:1, transition:"linear"});
    Tweener.addTween(myMovie, {\_x:200, \_y:50, delay:1, time:1, transition:"linear"});

That should be a nice two-stage animation - no mess, no fuss.

Compared to other methods of implimenting these kind of animations in other systems, Tweener is a breeze! And did I mention that it doesn't matter what order you add your tween attributes? Handy!

## Calling functions after your animation is done

Of course, if you're tweening with Actionscript, its damn likely that you'll want to execute functions either during or after your animations are complete.  Unsurprisingly, that's also pretty easy to do, it's just another attribute to be added to your line of code, '**onComplete**' or '**onUpdate**' (which is like onProgress). Passing parameters to your functions is also as easy as adding '**onCompleteParams**' or '**onUpdateParams**'.

    Tweener.addTween(myMovie, {\_x:10, \_y:10, time:1, transition:"easeInOutQuad", onComplete:onCompleteHander});

    function onCompleteHandler():Void { 
        trace(this); 
    }

    Tweener.addTween(myMovie, {\_x:50, \_y:50, time:1, delay:1, transition: "easeInOutQuad", onComplete:onCompleteHanderTwo, onCompleteParams:\[myMovie\]});

    function onCompleteHanderTwo(this:MovieClip):Void { 
        trace(this); 
    } 

Mercifully, the scope of the function isn't much changed when it's executed than when its declared, because of the way Tweener seems to work - and even if you are having scoping problems, the simplicity of adding parameters to your functions helps out a lot.

Anyway, that's about all I have to say about Tweener - it's great, and it really helped me out recently on a really tight deadline!

## Resources

*   [Tweener Documentation](http://hosted.zeh.com.br/tweener/docs/en-us/)
*   [Tweener Tween Types Reference](http://hosted.zeh.com.br/tweener/docs/en-us/misc/transitions.html)
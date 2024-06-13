# Doodle Jump

#### How to Play?
- Press 'a' to move left
- Press 'd' to move right
- Press 'q' to pause/play
- Touch on the left space on the screen to move left and right to move right

#### Features:
- The doodle bounces on the platform only if the doodle is falling. 
- Platform is generated at random on the x-axis  with varying gaps between (90,120), fair gaps
- Score is based on height gained
- screen wrapping for the doodle
- powerups that are generated with a probability of 0.25 (Jet Boost)
- Persistent high score
- pause/play functionality
- smooth animation for falling and jumping using acceleration
- Is playable on mobile phones 

#### How it works?
1. Accelerated movement:
 - It is based on the first derivative of s=ut+1/2 at^2 i.e v=u+2at for simplicity t=1, u=u+g
 - when the doodle bounces, the initial velocity is set to u=-5 times the ratio of position y of the doodle and canvas height 
-speed on the horizontal axis also works in a similar manner

2. Doodle bouncing condition:
- If Doodle is falling and collides with the platform, doodle bounces upward

3. powerups
- when the doodle collides powerup, all the powerups are flushed but the running power is for 1.5 sec then flushed and the powerup generation process continues with 25% probability.
-probability is set by generating a random number within (1,100), taking if the number is even p->1/2, then again below 50 that is p=>1/2*1/2. therefore p->0.25 



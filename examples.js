// Expanded worked-example archetypes for every AP Physics C unit.
// Loaded at runtime by script.js, which injects the HTML into each unit's
// Worked Examples section, replacing the original compact examples.

window.EXAMPLES = {

"unit-1": `
<details class="example" open><summary><span class="pill">Example 1</span> Non-constant acceleration via integration</summary>
<p><strong>Problem.</strong> A particle moves along the $x$-axis with $a(t)=6t-4$ m/s². At $t=0$, $v_0=2$ m/s and $x_0=1$ m. Find $v(t)$, $x(t)$, and any times when the particle is at rest.</p>
<p><strong>How to recognize this type:</strong> Acceleration is given as a function of $t$, so $v=v_0+at$ does not apply — must integrate.</p>
<ol class="soln">
<li><strong>Set up the velocity integral.</strong> Since $a=dv/dt$, we have $v(t)=v_0+\\int_0^t a(t')\\,dt'$. The initial condition $v_0=2$ m/s is the constant of integration.</li>
<li><strong>Integrate $a(t)$.</strong> $\\int_0^t (6t'-4)\\,dt' = 3t'^2-4t'\\Big|_0^t = 3t^2-4t$. Therefore $v(t)=2+3t^2-4t$ m/s.</li>
<li><strong>Set up the position integral.</strong> $x(t)=x_0+\\int_0^t v(t')\\,dt'$, with $x_0=1$ m.</li>
<li><strong>Integrate $v(t)$.</strong> $\\int_0^t (2+3t'^2-4t')\\,dt' = 2t+t^3-2t^2$. So $x(t)=1+2t+t^3-2t^2$ m.</li>
<li><strong>Search for rest points.</strong> Set $v(t)=0$: $3t^2-4t+2=0$.</li>
<li><strong>Apply the quadratic formula.</strong> Discriminant $=(-4)^2-4(3)(2)=16-24=-8<0$. No real roots.</li>
<li><strong>Interpret.</strong> $v$ never vanishes; the minimum of the parabola $v(t)$ is positive, so the particle is always moving in the $+x$ direction.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> When $a$ depends on $t$ (or $v$), always integrate. Never default to constant-acceleration kinematics.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Projectile from a cliff</summary>
<p><strong>Problem.</strong> A ball is launched horizontally at $v_0=15$ m/s from a 45-m cliff. Find (a) flight time, (b) range, (c) impact speed and angle. Use $g=10$ m/s².</p>
<p><strong>How to recognize this type:</strong> 2D projectile with different launch and landing heights.</p>
<ol class="soln">
<li><strong>Decompose the initial velocity.</strong> Horizontal launch: $v_{x0}=15$ m/s, $v_{y0}=0$. Take down as negative $y$.</li>
<li><strong>Write the vertical equation.</strong> With $v_{y0}=0$, $y(t)=-\\tfrac12 g t^2$. Set $y=-45$ m: $-45=-\\tfrac12(10)t^2 \\Rightarrow t^2=9$.</li>
<li><strong>Solve for flight time.</strong> $t=\\sqrt{9}=3$ s (take the positive root).</li>
<li><strong>Compute the range.</strong> Horizontally $a_x=0$, so $R=v_{x0}\\,t=(15)(3)=45$ m.</li>
<li><strong>Find impact velocity components.</strong> $v_x=15$ m/s (unchanged); $v_y=-g t=-(10)(3)=-30$ m/s.</li>
<li><strong>Magnitude.</strong> $|\\vec v|=\\sqrt{v_x^2+v_y^2}=\\sqrt{225+900}=\\sqrt{1125}\\approx 33.5$ m/s.</li>
<li><strong>Angle below horizontal.</strong> $\\tan\\phi=|v_y|/v_x=30/15=2$, so $\\phi=\\tan^{-1}(2)\\approx 63.4°$ below the horizontal.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Treat $x$ and $y$ independently; time is the only shared variable.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Reading a $v$-$t$ graph</summary>
<p><strong>Problem.</strong> A $v$-$t$ graph: linear from $(0,0)$ to $(2\\,s,8)$ m/s; constant at 8 m/s until $t=5$ s; linear down from 8 to $-4$ m/s at $t=7$ s. Find (a) each interval's $a$, (b) displacement, (c) distance, (d) sketch $a(t)$.</p>
<p><strong>How to recognize this type:</strong> Graph-based — slopes give $a$, signed areas give $\\Delta x$.</p>
<ol class="soln">
<li><strong>Acceleration on $[0,2]$.</strong> Slope $=\\Delta v/\\Delta t=(8-0)/(2-0)=+4$ m/s².</li>
<li><strong>Acceleration on $[2,5]$.</strong> $v$ constant, so slope $=0$.</li>
<li><strong>Acceleration on $[5,7]$.</strong> Slope $=(-4-8)/(7-5)=-12/2=-6$ m/s².</li>
<li><strong>Displacement on each piece.</strong> $[0,2]$ triangle: $\\tfrac12(2)(8)=8$ m. $[2,5]$ rectangle: $(3)(8)=24$ m. $[5,7]$: $v$ crosses zero where $8-6(t-5)=0 \\Rightarrow t=6.33$ s. Positive sub-triangle $\\tfrac12(1.33)(8)\\approx 5.33$; negative sub-triangle $\\tfrac12(0.67)(4)\\approx 1.33$.</li>
<li><strong>Signed displacement.</strong> $\\Delta x=8+24+5.33-1.33\\approx 36$ m.</li>
<li><strong>Total distance.</strong> Use magnitudes: $8+24+5.33+1.33\\approx 38.7$ m.</li>
<li><strong>Sketch $a(t)$.</strong> Step function: $+4$ on $[0,2]$, $0$ on $[2,5]$, $-6$ on $[5,7]$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Slope descends one derivative; area ascends one. Watch sign changes of $v$ for distance vs displacement.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Relative motion — boat across a river</summary>
<p><strong>Problem.</strong> River flows east at 3 m/s; boat's speed is 4 m/s relative to water. River is 120 m wide. (a) Aim due north: find crossing time, drift, ground speed. (b) Heading to reach directly north of start.</p>
<p><strong>How to recognize this type:</strong> Two velocities given in different frames.</p>
<ol class="soln">
<li><strong>Write the vector sum.</strong> $\\vec v_{bg}=\\vec v_{bw}+\\vec v_{wg}$ (boat relative to ground = boat relative to water + water relative to ground).</li>
<li><strong>(a) Components when aimed north.</strong> $\\vec v_{bw}=(0,4)$, $\\vec v_{wg}=(3,0)$, so $\\vec v_{bg}=(3,4)$ m/s.</li>
<li><strong>Crossing time.</strong> Only the north component closes the 120-m gap: $t=120/4=30$ s.</li>
<li><strong>Drift and ground speed.</strong> Drift east $=3(30)=90$ m. Ground speed $=\\sqrt{3^2+4^2}=5$ m/s.</li>
<li><strong>(b) Set up the upstream-aim condition.</strong> To land directly north, east component must cancel: $-4\\sin\\theta+3=0$, i.e. $\\sin\\theta=3/4$.</li>
<li><strong>Solve for heading.</strong> $\\theta=\\sin^{-1}(0.75)\\approx 48.6°$ west of north (upstream).</li>
<li><strong>New crossing time.</strong> North component $=4\\cos\\theta=4(0.661)\\approx 2.65$ m/s; $t=120/2.65\\approx 45.3$ s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Draw the velocity triangle. The perpendicular component sets time; the parallel component sets drift.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Angled projectile landing on a platform</summary>
<p><strong>Problem.</strong> $v_0=25$ m/s at $37°$ above horizontal from ground. Lands on a 5-m-high platform. Find flight time and horizontal range. ($g=10$, $\\sin 37=0.6$, $\\cos 37=0.8$.)</p>
<p><strong>How to recognize this type:</strong> Angled launch with landing height different from launch.</p>
<ol class="soln">
<li><strong>Decompose $\\vec v_0$.</strong> $v_{x0}=25\\cos 37°=25(0.8)=20$ m/s; $v_{y0}=25\\sin 37°=25(0.6)=15$ m/s.</li>
<li><strong>Write $y(t)$.</strong> $y(t)=v_{y0}t-\\tfrac12 g t^2=15t-5t^2$.</li>
<li><strong>Set landing height.</strong> $15t-5t^2=5 \\Rightarrow 5t^2-15t+5=0 \\Rightarrow t^2-3t+1=0$.</li>
<li><strong>Quadratic formula.</strong> $t=\\dfrac{3\\pm\\sqrt{9-4}}{2}=\\dfrac{3\\pm\\sqrt 5}{2}$. Roots $\\approx 0.38$ s (going up) and $\\approx 2.62$ s (coming down).</li>
<li><strong>Pick the physical root.</strong> Landing on platform while descending uses $t\\approx 2.62$ s.</li>
<li><strong>Compute range.</strong> $R=v_{x0}\\,t=20(2.62)\\approx 52.4$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Landing at a different height gives a quadratic in $t$. Choose the physically meaningful (usually larger) root.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Velocity-dependent acceleration $a=-kv$</summary>
<p><strong>Problem.</strong> $a=-kv$ with $k=0.5$ s$^{-1}$, $v(0)=20$ m/s. Find $v(t)$, time to reach $v=5$ m/s, total distance as $t\\to\\infty$.</p>
<p><strong>How to recognize this type:</strong> Acceleration depends on velocity (linear drag model).</p>
<ol class="soln">
<li><strong>Write the ODE.</strong> $dv/dt=-kv$. Separable.</li>
<li><strong>Separate variables.</strong> $dv/v=-k\\,dt$.</li>
<li><strong>Integrate.</strong> $\\int_{v_0}^{v}\\dfrac{dv'}{v'}=-k\\int_0^t dt' \\Rightarrow \\ln(v/v_0)=-kt$.</li>
<li><strong>Solve for $v(t)$.</strong> $v(t)=v_0 e^{-kt}=20 e^{-0.5t}$ m/s.</li>
<li><strong>Time to reach 5 m/s.</strong> $5=20 e^{-0.5 t} \\Rightarrow e^{-0.5t}=1/4 \\Rightarrow t=\\ln 4/0.5\\approx 2.77$ s.</li>
<li><strong>Total distance.</strong> $x_\\infty=\\int_0^\\infty v\\,dt=\\int_0^\\infty 20 e^{-0.5t}dt=20/0.5=40$ m.</li>
<li><strong>Interpret.</strong> Finite stopping distance (40 m) but $v$ only asymptotes to zero — never truly stops.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> For $a=a(v)$, separate variables. Exponential $v$-decay gives finite stopping distance but infinite stopping time.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Free fall with linear drag (qualitative)</summary>
<p><strong>Problem.</strong> Ball dropped, drag $F_d=bv$ upward. (a) Describe $v(t)$ and $a(t)$. (b) Thrown up: compare time up vs time down. (c) Compare launch and return speeds.</p>
<p><strong>How to recognize this type:</strong> Air resistance problem with few numbers — conceptual.</p>
<ol class="soln">
<li><strong>Write Newton's 2nd law falling.</strong> Down positive: $ma=mg-bv$, so $a=g-(b/m)v$.</li>
<li><strong>Initial and asymptotic behavior.</strong> At $t=0$, $v=0 \\Rightarrow a=g$. As $v$ grows, $a$ shrinks; terminal $v_t$ is set by $a=0$, giving $v_t=mg/b$.</li>
<li><strong>Thrown upward phase.</strong> With $v>0$ up, drag also points down: $ma=-mg-bv$, so $|a|=g+(b/m)|v|>g$. Decelerates faster than free fall.</li>
<li><strong>Peak and time up.</strong> Faster deceleration $\\Rightarrow$ less time to reach $v=0$ at the peak compared to no-drag case.</li>
<li><strong>Falling phase.</strong> Now drag opposes gravity again: $|a|<g$. Slower acceleration down, and $v$ is bounded by $v_t$.</li>
<li><strong>Compare times.</strong> Lower $|a|$ on descent plus same height $\\Rightarrow$ time down $>$ time up.</li>
<li><strong>Compare speeds.</strong> Drag does negative work on both legs, so $\\tfrac12 m v_{return}^2<\\tfrac12 m v_{launch}^2 \\Rightarrow v_{return}<v_{launch}$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Drag breaks the symmetry of projectile motion: down takes longer; return speed is smaller.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Piecewise $v(t)$ → position</summary>
<p><strong>Problem.</strong> Piecewise $v(t)$ with $x_0=2$ m: 3 m/s for $0\\le t<2$; linear from 3 to $-3$ m/s over $[2,5]$; constant $-3$ m/s for $[5,8]$. Find $x(t)$, turnaround time, distance over $[0,8]$.</p>
<p><strong>How to recognize this type:</strong> Piecewise $v(t)$ — integrate piecewise, matching endpoints.</p>
<ol class="soln">
<li><strong>Piece 1, $[0,2]$.</strong> Constant $v=3$: $x(t)=x_0+3t=2+3t$. Endpoint $x(2)=8$ m.</li>
<li><strong>Piece 2 slope.</strong> On $[2,5]$, $v$ drops linearly from 3 to $-3$: slope $=(-3-3)/3=-2$ m/s², so $v(t)=3-2(t-2)$.</li>
<li><strong>Turnaround.</strong> $v=0$ when $3-2(t-2)=0 \\Rightarrow t=3.5$ s.</li>
<li><strong>Position on piece 2.</strong> $x(t)=8+\\int_2^t [3-2(t'-2)]\\,dt'=8+3(t-2)-(t-2)^2$. At $t=3.5$: $x=8+4.5-2.25=10.25$ m (max). At $t=5$: $x=8+9-9=8$ m.</li>
<li><strong>Piece 3, $[5,8]$.</strong> Constant $v=-3$: $x(t)=8-3(t-5)$. Endpoint $x(8)=8-9=-1$ m.</li>
<li><strong>Displacement.</strong> $\\Delta x=x(8)-x(0)=-1-2=-3$ m.</li>
<li><strong>Distance.</strong> Forward leg: $10.25-2=8.25$ m. Reverse leg: $10.25-(-1)=11.25$ m. Total $=19.5$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Integrate each piece, carry the previous endpoint forward. Track sign flips of $v$ to separate distance from displacement.</p>
</details>
`,

"unit-2": `
<details class="example" open><summary><span class="pill">Example 1</span> Atwood machine + friction on table</summary>
<p><strong>Problem.</strong> $m_1=3$ kg on table with $\\mu_k=0.20$, connected over pulley to hanging $m_2=2$ kg. Find $a$ and $T$.</p>
<p><strong>How to recognize this type:</strong> Two masses, one on a surface with friction, connected over a pulley.</p>
<ol class="soln">
<li><strong>Free-body diagrams.</strong> On $m_1$ (horizontal): tension $T$ forward, kinetic friction $f_k=\\mu_k m_1 g$ backward. On $m_2$ (vertical): weight $m_2 g$ down, tension $T$ up.</li>
<li><strong>Newton's 2nd law on $m_1$.</strong> $T-\\mu_k m_1 g=m_1 a$.</li>
<li><strong>Newton's 2nd law on $m_2$.</strong> Take downward positive: $m_2 g-T=m_2 a$.</li>
<li><strong>Add the equations.</strong> $T$ cancels: $m_2 g-\\mu_k m_1 g=(m_1+m_2)a$.</li>
<li><strong>Solve for $a$.</strong> $a=\\dfrac{(m_2-\\mu_k m_1)g}{m_1+m_2}=\\dfrac{(2-0.20\\cdot 3)(9.8)}{5}=\\dfrac{1.4(9.8)}{5}\\approx 2.74$ m/s².</li>
<li><strong>Solve for $T$.</strong> From the $m_2$ equation: $T=m_2(g-a)=2(9.8-2.74)\\approx 14.1$ N.</li>
<li><strong>Sanity check.</strong> $T<m_2 g=19.6$ N (since $m_2$ accelerates down), and $T>\\mu_k m_1 g=5.88$ N (so $m_1$ actually slides). ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> "Net weight on top, total mass on bottom." Adding the two Newton's-2nd-law equations eliminates $T$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Stacked blocks on incline</summary>
<p><strong>Problem.</strong> Block A (2 kg) on block B (5 kg) on a $30°$ incline. $\\mu_s(A,B)=0.40$; $\\mu_k(B,$incline$)=0.10$. Sliding together. Find system $a$ and the friction on $A$ from $B$. Confirm no-slip.</p>
<p><strong>How to recognize this type:</strong> Two-body motion on an incline with internal friction.</p>
<ol class="soln">
<li><strong>Treat as one system.</strong> Total mass $M=m_A+m_B=7$ kg. Forces along incline: gravity component $Mg\\sin\\theta$ down, kinetic friction $\\mu_k Mg\\cos\\theta$ up.</li>
<li><strong>Newton's 2nd law on system.</strong> $Ma=Mg\\sin\\theta-\\mu_k Mg\\cos\\theta$, giving $a=g(\\sin\\theta-\\mu_k\\cos\\theta)$.</li>
<li><strong>Plug in.</strong> $a=9.8(\\sin 30°-0.10\\cos 30°)=9.8(0.5-0.0866)\\approx 4.05$ m/s².</li>
<li><strong>Isolate block $A$.</strong> Along incline: $m_A g\\sin\\theta-f_{BA}=m_A a$ (friction from $B$ on $A$ is the only force besides gravity).</li>
<li><strong>Solve for $f_{BA}$.</strong> $f_{BA}=m_A(g\\sin\\theta-a)=2(9.8\\cdot 0.5-4.05)=2(4.90-4.05)=1.70$ N (up-slope).</li>
<li><strong>Max static friction available.</strong> Normal on $A$ from $B$ is $N=m_A g\\cos\\theta=2(9.8)(0.866)\\approx 16.97$ N. $f_{s,max}=\\mu_s N=0.40(16.97)\\approx 6.79$ N.</li>
<li><strong>Check no-slip.</strong> Required 1.70 N $<$ available 6.79 N. They move together. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Solve system first, isolate after, and always verify required $f\\le\\mu_s N$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Linear drag terminal velocity (ODE)</summary>
<p><strong>Problem.</strong> Sphere mass $m$ falls from rest under drag $F_d=-bv$. (a) Derive $v(t)$. (b) $v_T$. (c) Time to reach $0.9 v_T$.</p>
<p><strong>How to recognize this type:</strong> Drag $\\propto v$.</p>
<ol class="soln">
<li><strong>Newton's 2nd law.</strong> Down positive: $m\\dfrac{dv}{dt}=mg-bv$.</li>
<li><strong>Terminal velocity condition.</strong> At $v_T$, $dv/dt=0$, so $mg=bv_T \\Rightarrow v_T=mg/b$.</li>
<li><strong>Rewrite ODE.</strong> $\\dfrac{dv}{dt}=\\dfrac{b}{m}(v_T-v)$. Separate: $\\dfrac{dv}{v_T-v}=\\dfrac{b}{m}\\,dt$.</li>
<li><strong>Integrate.</strong> $-\\ln(v_T-v)=(b/m)t+C$. With $v(0)=0$: $C=-\\ln v_T$.</li>
<li><strong>Solve for $v(t)$.</strong> $\\ln\\dfrac{v_T}{v_T-v}=(b/m)t \\Rightarrow v(t)=v_T\\left(1-e^{-t/\\tau}\\right)$ with $\\tau=m/b$.</li>
<li><strong>Time to reach $0.9 v_T$.</strong> $0.9 v_T=v_T(1-e^{-t/\\tau}) \\Rightarrow e^{-t/\\tau}=0.1 \\Rightarrow t=\\tau\\ln 10\\approx 2.30\\,\\tau$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Linear drag → $v=v_T(1-e^{-t/\\tau})$, $\\tau=m/b$. Recognize by inspection.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Quadratic drag terminal velocity</summary>
<p><strong>Problem.</strong> Skydiver $m=75$ kg, $F_d=cv^2$, $c=0.24$ kg/m. (a) $v_T$. (b) $a$ at $v=v_T/2$. (c) Distance to reach $0.99 v_T$.</p>
<p><strong>How to recognize this type:</strong> Drag $\\propto v^2$.</p>
<ol class="soln">
<li><strong>Newton's 2nd law.</strong> $m\\dot v=mg-cv^2$.</li>
<li><strong>Terminal velocity.</strong> Set $\\dot v=0$: $v_T=\\sqrt{mg/c}=\\sqrt{75\\cdot 9.8/0.24}\\approx 55.3$ m/s.</li>
<li><strong>Acceleration formula.</strong> $a(v)=g-cv^2/m=g(1-v^2/v_T^2)$.</li>
<li><strong>Evaluate at $v_T/2$.</strong> $a=g(1-1/4)=\\tfrac34 g\\approx 7.35$ m/s².</li>
<li><strong>Switch to $x$ as independent variable.</strong> Use $a=v\\,dv/dx$: $v\\dfrac{dv}{dx}=g(1-v^2/v_T^2)$.</li>
<li><strong>Separate and integrate.</strong> $\\dfrac{v\\,dv}{1-v^2/v_T^2}=g\\,dx$. Let $u=1-v^2/v_T^2$, $du=-2v\\,dv/v_T^2$, giving $-\\dfrac{v_T^2}{2}\\ln u=gx$.</li>
<li><strong>Solve for $x$.</strong> $x=\\dfrac{v_T^2}{2g}\\ln\\dfrac{1}{1-v^2/v_T^2}=\\dfrac{m}{2c}\\ln\\dfrac{1}{1-v^2/v_T^2}$. At $v=0.99 v_T$: $1-0.9801=0.0199$, so $x=\\dfrac{75}{0.48}\\ln(50.25)\\approx 156.25\\cdot 3.917\\approx 612$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Quadratic drag: $v_T=\\sqrt{mg/c}$; use $a=v\\,dv/dx$ when distance (not time) is asked.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Two blocks in contact — internal force</summary>
<p><strong>Problem.</strong> Frictionless floor: $F=24$ N pushes $A$ (2 kg) against $B$ (4 kg). Find $a$ and contact force on $B$. Then reverse push direction.</p>
<p><strong>How to recognize this type:</strong> Finding internal contact force between blocks moving together.</p>
<ol class="soln">
<li><strong>Treat the pair as one body.</strong> Total mass $m_A+m_B=6$ kg. Only external horizontal force is $F=24$ N.</li>
<li><strong>System acceleration.</strong> $a=F/(m_A+m_B)=24/6=4.0$ m/s².</li>
<li><strong>Isolate $B$ (when $A$ pushes $B$).</strong> Only horizontal force on $B$ is the contact force $N_{AB}$ from $A$: $N_{AB}=m_B a=4(4)=16$ N.</li>
<li><strong>Verify with $A$.</strong> On $A$: $F-N_{BA}=m_A a \\Rightarrow N_{BA}=24-2(4)=16$ N. ✓ (Newton's 3rd law pair.)</li>
<li><strong>Reverse the push.</strong> Now $F$ pushes $B$ which pushes $A$. Same $a=4.0$ m/s², but isolate $A$: $N_{BA}=m_A a=2(4)=8$ N.</li>
<li><strong>Interpret.</strong> The internal force equals (mass being shoved) $\\times a$. It depends on which block is "downstream."</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Internal force = (mass still to push) × $a$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Conical pendulum</summary>
<p><strong>Problem.</strong> Ball $m=0.5$ kg on $L=1.2$ m string, angle $25°$ with vertical. Find $T$ and period.</p>
<p><strong>How to recognize this type:</strong> Circular horizontal motion on an inclined string.</p>
<ol class="soln">
<li><strong>Identify the radius.</strong> The ball traces a horizontal circle of radius $r=L\\sin\\theta=1.2\\sin 25°\\approx 0.507$ m.</li>
<li><strong>Vertical equilibrium.</strong> $T\\cos\\theta=mg$ (no vertical acceleration).</li>
<li><strong>Solve for $T$.</strong> $T=mg/\\cos\\theta=0.5(9.8)/\\cos 25°=4.9/0.906\\approx 5.41$ N.</li>
<li><strong>Horizontal Newton's 2nd law.</strong> $T\\sin\\theta=m\\omega^2 r=m\\omega^2(L\\sin\\theta)$. The $\\sin\\theta$ cancels: $T=m\\omega^2 L$.</li>
<li><strong>Solve for $\\omega$.</strong> $\\omega=\\sqrt{T/(mL)}=\\sqrt{5.41/(0.5\\cdot 1.2)}=\\sqrt{9.02}\\approx 3.00$ rad/s. Equivalently $\\omega=\\sqrt{g/(L\\cos\\theta)}$.</li>
<li><strong>Period.</strong> $T_{period}=2\\pi/\\omega=2\\pi/3.00\\approx 2.09$ s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> In circular motion, keep axes horizontal/vertical (never tilt). Divide horizontal by vertical to eliminate $T$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Tension in a massive rope</summary>
<p><strong>Problem.</strong> Rope mass $M=3$ kg, length 2 m, tied to block $m=5$ kg on frictionless floor; $F=16$ N pulls the free end. Find $a$ and $T(x)$.</p>
<p><strong>How to recognize this type:</strong> Rope is NOT massless.</p>
<ol class="soln">
<li><strong>Total mass.</strong> System mass $=m+M=8$ kg.</li>
<li><strong>System acceleration.</strong> $a=F/(m+M)=16/8=2$ m/s².</li>
<li><strong>Linear mass density.</strong> $\\lambda=M/L=3/2=1.5$ kg/m.</li>
<li><strong>Isolate everything behind the cut.</strong> Cut the rope at distance $x$ from the block. Mass behind cut $=m+\\lambda x=5+1.5x$.</li>
<li><strong>Apply $F=ma$ to the isolated piece.</strong> The tension $T(x)$ at the cut is the only horizontal force on the piece behind: $T(x)=(5+1.5x)(2)=10+3x$ N.</li>
<li><strong>Check endpoints.</strong> $T(0)=10$ N (at block end) and $T(2)=16$ N $=F$ (at pulled end). ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Massive rope → tension varies linearly. At any cut, $T=$ (mass ahead of cut)$\\times a$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Table + hanging block via kinematics</summary>
<p><strong>Problem.</strong> $m_1=4$ kg ($\\mu_k=0.25$) on table, $m_2=3$ kg hanging. Find $a$, $T$, and speed after $m_2$ falls 0.80 m.</p>
<p><strong>How to recognize this type:</strong> Classic table + pulley + hanger.</p>
<ol class="soln">
<li><strong>Newton's 2nd law on $m_1$.</strong> $T-\\mu_k m_1 g=m_1 a$.</li>
<li><strong>Newton's 2nd law on $m_2$.</strong> $m_2 g-T=m_2 a$.</li>
<li><strong>Add to eliminate $T$.</strong> $(m_2-\\mu_k m_1)g=(m_1+m_2)a$.</li>
<li><strong>Solve for $a$.</strong> $a=\\dfrac{(3-0.25\\cdot 4)(9.8)}{7}=\\dfrac{2(9.8)}{7}=2.80$ m/s².</li>
<li><strong>Solve for $T$.</strong> $T=m_2(g-a)=3(9.8-2.80)=3(7.0)=21.0$ N.</li>
<li><strong>Speed after 0.80 m.</strong> Constant $a$, so $v^2=v_0^2+2a\\Delta y=0+2(2.80)(0.80)=4.48$.</li>
<li><strong>Take the root.</strong> $v=\\sqrt{4.48}\\approx 2.12$ m/s. Energy check: $\\tfrac12(m_1+m_2)v^2\\approx 15.7$ J equals $m_2 g h-\\mu_k m_1 g h=23.5-7.84=15.7$ J. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Standard "driving weight minus friction over total mass." Constant-$a$ kinematics fill in the rest.</p>
</details>
`,

"unit-3": `
<details class="example" open><summary><span class="pill">Example 1</span> Variable force (line integral)</summary>
<p><strong>Problem.</strong> $m=2$ kg, net force $F(x)=(6x-2x^2)$ N from $x=0$ to 3 m, starts at rest. Find $W$, $v_f$, and the position of max KE.</p>
<p><strong>How to recognize this type:</strong> Force given as a function of $x$.</p>
<ol class="soln">
<li><strong>Work as an integral.</strong> $W=\\int_0^3 F(x)\\,dx=\\int_0^3 (6x-2x^2)\\,dx$.</li>
<li><strong>Integrate term-by-term.</strong> $\\int 6x\\,dx=3x^2$; $\\int 2x^2\\,dx=\\tfrac23 x^3$.</li>
<li><strong>Evaluate.</strong> $W=[3x^2-\\tfrac23 x^3]_0^3=27-18=9$ J.</li>
<li><strong>Apply work-energy theorem.</strong> $W=\\Delta K=\\tfrac12 m v_f^2-0 \\Rightarrow v_f=\\sqrt{2W/m}$.</li>
<li><strong>Plug in.</strong> $v_f=\\sqrt{2(9)/2}=\\sqrt 9=3$ m/s.</li>
<li><strong>Find where KE is maximum.</strong> KE grows while $F>0$ (positive work) and drops when $F<0$. Peak at $F=0$: $6x-2x^2=2x(3-x)=0 \\Rightarrow x=0$ or $x=3$.</li>
<li><strong>Pick the relevant root.</strong> $F>0$ across $[0,3)$ and $F=0$ at $x=3$, so KE peaks at $x=3$ m (right at the end of the interval).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Work is the area under $F(x)$. KE peaks where net force $=0$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> U(x) graph analysis</summary>
<p><strong>Problem.</strong> $m=0.5$ kg in $U(x)$ with $U(0)=8$, min $U(2)=2$, max $U(4)=10$, $U(6)=4$, $U\\to 6$ at infinity. Released from rest at $x=0$. Find equilibria, motion, max speed. Repeat released from $x=6$.</p>
<p><strong>How to recognize this type:</strong> Given $U(x)$, asked about motion / equilibria.</p>
<ol class="soln">
<li><strong>Classify equilibria.</strong> $F=-dU/dx=0$ at extrema of $U$. Minimum at $x=2$ is stable; maximum at $x=4$ is unstable.</li>
<li><strong>Case A: released from rest at $x=0$.</strong> Total energy $E=U(0)+K(0)=8+0=8$ J.</li>
<li><strong>Check barriers.</strong> The hill at $x=4$ has $U=10>E=8$, so the particle cannot pass it — motion confined to the left well.</li>
<li><strong>Turning points.</strong> Solve $U(x)=8$ on each side of $x=2$: one at $x=0$ (starting), one between $x=2$ and $x=4$. Oscillates between these.</li>
<li><strong>Max speed.</strong> Minimum $U$ means maximum $K$: $K_{max}=E-U_{min}=8-2=6$ J. $v_{max}=\\sqrt{2K/m}=\\sqrt{24}\\approx 4.90$ m/s at $x=2$.</li>
<li><strong>Case B: released from $x=6$.</strong> $E=U(6)=4$ J. Cannot cross the hill at $x=4$ ($U=10$). Cannot escape to infinity ($U\\to 6>4$).</li>
<li><strong>Motion in Case B.</strong> Bound in the right well, oscillates between two points where $U(x)=4$ surrounding $x=6$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Draw a horizontal $E$-line on the $U$ curve. Valleys = stable, hills = unstable, intersections = turning points.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Spring + gravity + friction</summary>
<p><strong>Problem.</strong> $m=3$ kg block on $30°$ ramp, $\\mu_k=0.25$, compresses spring ($k=800$ N/m) 0.20 m. Released — how far up ramp does it travel?</p>
<p><strong>How to recognize this type:</strong> Spring PE + gravity PE + friction dissipation.</p>
<ol class="soln">
<li><strong>Identify initial and final states.</strong> Initial: spring compressed $x=0.20$ m, block at rest. Final: block at rest a distance $d$ up the ramp (measured from release), spring relaxed.</li>
<li><strong>Energy accounting.</strong> Energy stored in spring $\\to$ gravitational PE gained $+$ friction dissipation. $\\tfrac12 k x^2=mg\\sin\\theta\\cdot d+\\mu_k mg\\cos\\theta\\cdot d$.</li>
<li><strong>Compute spring energy.</strong> $\\tfrac12(800)(0.20)^2=\\tfrac12(800)(0.04)=16$ J.</li>
<li><strong>Compute per-meter costs.</strong> Gravity along ramp: $mg\\sin\\theta=3(9.8)(0.5)=14.7$ N per meter. Friction: $\\mu_k mg\\cos\\theta=0.25(3)(9.8)(0.866)\\approx 6.37$ N per meter.</li>
<li><strong>Sum and solve.</strong> $16=(14.7+6.37)d=21.07\\,d \\Rightarrow d\\approx 0.76$ m.</li>
<li><strong>Sanity check.</strong> If frictionless, $d=16/14.7\\approx 1.09$ m. Friction reduces it — consistent.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Friction loss uses total path length. Never treat friction as a potential.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Pendulum bottom speed and tension</summary>
<p><strong>Problem.</strong> $m=1.5$ kg on $L=1.2$ m string, released from $60°$ with vertical. Find speed and tension at bottom.</p>
<p><strong>How to recognize this type:</strong> Swing — tension does no work.</p>
<ol class="soln">
<li><strong>Height dropped.</strong> At angle $\\theta$ from vertical, bob is $L\\cos\\theta$ below pivot. $\\Delta h=L-L\\cos\\theta=L(1-\\cos\\theta)=1.2(1-0.5)=0.60$ m.</li>
<li><strong>Energy conservation (tension is perpendicular to motion, does no work).</strong> $\\tfrac12 m v^2=mg\\Delta h$.</li>
<li><strong>Solve for $v$.</strong> $v=\\sqrt{2g\\Delta h}=\\sqrt{2(9.8)(0.60)}=\\sqrt{11.76}\\approx 3.43$ m/s.</li>
<li><strong>Radial Newton's 2nd law at the bottom.</strong> At the lowest point, net upward (centripetal) force is $T-mg$: $T-mg=mv^2/L$.</li>
<li><strong>Solve for $T$.</strong> $T=m(g+v^2/L)=1.5(9.8+11.76/1.2)=1.5(9.8+9.8)=1.5(19.6)=29.4$ N.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Energy conservation gives $v$; Newton radial ($\\sum F_r=mv^2/r$) gives $T$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Motor power up an incline</summary>
<p><strong>Problem.</strong> 400 kg crate up $20°$ incline at constant 2 m/s, $\\mu_k=0.15$. Find required power and its split.</p>
<p><strong>How to recognize this type:</strong> Constant speed ($\\Delta K=0$), motor power.</p>
<ol class="soln">
<li><strong>Newton's 2nd law along incline.</strong> Constant speed $\\Rightarrow$ net force $=0$: $F_{motor}=mg\\sin\\theta+\\mu_k mg\\cos\\theta$.</li>
<li><strong>Compute.</strong> $mg=400(9.8)=3920$ N. $F_{motor}=3920(\\sin 20°+0.15\\cos 20°)=3920(0.342+0.141)=3920(0.483)\\approx 1893$ N.</li>
<li><strong>Total motor power.</strong> $P=Fv=(1893)(2)\\approx 3786$ W $\\approx 3.8$ kW.</li>
<li><strong>Power into gravitational PE.</strong> $P_g=mgv\\sin\\theta=3920(2)(0.342)\\approx 2681$ W.</li>
<li><strong>Power dissipated by friction.</strong> $P_f=\\mu_k mg\\cos\\theta\\cdot v=0.15(3920)(0.940)(2)\\approx 1105$ W.</li>
<li><strong>Check split.</strong> $2681+1105\\approx 3786$ W. ✓ PE gain $\\approx 71\\%$, friction $\\approx 29\\%$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $P=\\vec F\\cdot\\vec v$. At constant speed, motor power = PE gain rate + friction dissipation rate.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Force from 2D potential (gradient)</summary>
<p><strong>Problem.</strong> $U(x,y)=3x^2 y-xy^2+4y$ J. Find $\\vec F(x,y)$ and $\\vec F$ at $(1,2)$. Is $(0,0)$ an equilibrium?</p>
<p><strong>How to recognize this type:</strong> Multi-variable $U$, asks for force or equilibrium.</p>
<ol class="soln">
<li><strong>Gradient rule.</strong> $\\vec F=-\\nabla U=(-\\partial U/\\partial x,\\,-\\partial U/\\partial y)$.</li>
<li><strong>Compute $\\partial U/\\partial x$.</strong> Treat $y$ constant: $\\partial U/\\partial x=6xy-y^2$. So $F_x=-6xy+y^2=y^2-6xy$.</li>
<li><strong>Compute $\\partial U/\\partial y$.</strong> Treat $x$ constant: $\\partial U/\\partial y=3x^2-2xy+4$. So $F_y=-3x^2+2xy-4=2xy-3x^2-4$.</li>
<li><strong>Evaluate at (1, 2).</strong> $F_x=4-12=-8$ N; $F_y=4-3-4=-3$ N.</li>
<li><strong>Magnitude.</strong> $|\\vec F|=\\sqrt{(-8)^2+(-3)^2}=\\sqrt{73}\\approx 8.54$ N.</li>
<li><strong>Check equilibrium at origin.</strong> At (0, 0): $F_x=0-0=0$, but $F_y=0-0-4=-4$ N.</li>
<li><strong>Conclude.</strong> One component is nonzero, so $(0,0)$ is NOT an equilibrium.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\vec F=-\\nabla U$. Equilibrium requires every partial to vanish simultaneously.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Loop-the-loop minimum height</summary>
<p><strong>Problem.</strong> Frictionless track, bead released from $h$, enters vertical loop of radius $R$. Min release height for contact at top?</p>
<p><strong>How to recognize this type:</strong> Vertical circular loop, "just barely makes it."</p>
<ol class="soln">
<li><strong>Condition "just makes it."</strong> At the top of the loop, gravity alone supplies the centripetal acceleration: normal force $N=0$.</li>
<li><strong>Newton's 2nd law at top.</strong> $mg=mv_{top}^2/R \\Rightarrow v_{top}^2=gR$.</li>
<li><strong>Identify heights.</strong> Release height $h$ (measured from bottom of loop). Top of loop is at height $2R$.</li>
<li><strong>Energy conservation.</strong> $mgh=\\tfrac12 m v_{top}^2+mg(2R)$.</li>
<li><strong>Substitute $v_{top}^2=gR$.</strong> $mgh=\\tfrac12 m(gR)+2mgR=\\tfrac52 mgR$.</li>
<li><strong>Solve.</strong> $h_{min}=\\tfrac52 R$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> "Minimum at top" = $N=0$, $v^2=gR$. Top is at height $2R$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Escape speed and $U=-GMm/r$</summary>
<p><strong>Problem.</strong> (a) Derive $v_{esc}$. (b) For Earth, compute it. (c) Launched at $v_{esc}/2$, find max $r$.</p>
<p><strong>How to recognize this type:</strong> Distance comparable to planet size — can't use $mgh$.</p>
<ol class="soln">
<li><strong>Total energy at launch.</strong> $E=\\tfrac12 m v^2-GMm/R$ at surface.</li>
<li><strong>Escape condition.</strong> "Just escapes" means $v\\to 0$ as $r\\to\\infty$, so $E=0$.</li>
<li><strong>Solve for $v_{esc}$.</strong> $\\tfrac12 m v_{esc}^2=GMm/R \\Rightarrow v_{esc}=\\sqrt{2GM/R}$.</li>
<li><strong>Plug in Earth.</strong> Using $GM_E/R_E=gR_E$, $v_{esc}=\\sqrt{2gR_E}=\\sqrt{2(9.8)(6.37\\times 10^6)}\\approx 1.12\\times 10^4$ m/s.</li>
<li><strong>Launch at $v_{esc}/2$.</strong> $K_i=\\tfrac12 m(v_{esc}/2)^2=\\tfrac18 m v_{esc}^2=\\tfrac14 GMm/R$.</li>
<li><strong>Energy conservation at max $r$.</strong> $K_i-GMm/R=0-GMm/r_{max}$: $\\tfrac14 GMm/R-GMm/R=-GMm/r_{max}$.</li>
<li><strong>Solve.</strong> $-\\tfrac34 GMm/R=-GMm/r_{max} \\Rightarrow r_{max}=\\tfrac43 R$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $U=-GMm/r$, $E=0$ means escape. Energy conservation handles bound-orbit turning points.</p>
</details>
`,

"unit-4": `
<details class="example" open><summary><span class="pill">Example 1</span> 1D elastic collision</summary>
<p><strong>Problem.</strong> $m_1=2$ kg at $v_1=4$ m/s strikes stationary $m_2=6$ kg elastically. Find both final velocities.</p>
<p><strong>How to recognize this type:</strong> "Elastic" + both finals unknown → momentum AND KE or use the relative-velocity-reverses shortcut.</p>
<ol class="soln">
<li><strong>Conservation equations.</strong> Momentum: $m_1 v_1=m_1 v_1'+m_2 v_2'$. Elastic also means relative velocity reverses: $v_1-0=-(v_1'-v_2')$, i.e. $v_2'-v_1'=v_1$.</li>
<li><strong>Target-at-rest formulas.</strong> Solving the pair yields $v_1'=\\dfrac{m_1-m_2}{m_1+m_2}v_1$ and $v_2'=\\dfrac{2m_1}{m_1+m_2}v_1$.</li>
<li><strong>Compute $v_1'$.</strong> $v_1'=\\dfrac{2-6}{2+6}(4)=\\dfrac{-4}{8}(4)=-2$ m/s (rebounds backward).</li>
<li><strong>Compute $v_2'$.</strong> $v_2'=\\dfrac{2(2)}{8}(4)=\\dfrac{4}{8}(4)=2$ m/s.</li>
<li><strong>Momentum check.</strong> $p_i=2(4)=8$ kg·m/s. $p_f=2(-2)+6(2)=-4+12=8$ kg·m/s. ✓</li>
<li><strong>KE check.</strong> $K_i=\\tfrac12(2)(16)=16$ J. $K_f=\\tfrac12(2)(4)+\\tfrac12(6)(4)=4+12=16$ J. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> For elastic 1D, memorize the target-at-rest formulas; relative-velocity reverses.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> 2D perfectly inelastic collision</summary>
<p><strong>Problem.</strong> 1500 kg car east at 20 m/s + 2500 kg truck north at 15 m/s stick. Find final velocity and KE lost.</p>
<p><strong>How to recognize this type:</strong> 2D, "stick together."</p>
<ol class="soln">
<li><strong>Conserve $p_x$.</strong> $p_x=m_c v_c+0=1500(20)=30000$ kg·m/s.</li>
<li><strong>Conserve $p_y$.</strong> $p_y=0+m_t v_t=2500(15)=37500$ kg·m/s.</li>
<li><strong>Combined mass and components.</strong> $M=1500+2500=4000$ kg. $v_x=30000/4000=7.5$ m/s; $v_y=37500/4000=9.375$ m/s.</li>
<li><strong>Speed and angle.</strong> $|v|=\\sqrt{7.5^2+9.375^2}=\\sqrt{56.25+87.89}=\\sqrt{144.14}\\approx 12.0$ m/s. Angle $=\\tan^{-1}(9.375/7.5)=\\tan^{-1}(1.25)\\approx 51.3°$ N of E.</li>
<li><strong>Initial KE.</strong> $K_i=\\tfrac12(1500)(20)^2+\\tfrac12(2500)(15)^2=300{,}000+281{,}250\\approx 5.81\\times 10^5$ J.</li>
<li><strong>Final KE.</strong> $K_f=\\tfrac12(4000)(12.0)^2\\approx 2.88\\times 10^5$ J.</li>
<li><strong>Percent lost.</strong> $(K_i-K_f)/K_i\\approx 2.93/5.81\\approx 50\\%$ of KE converted to sound/heat/deformation.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Conserve $p_x$ and $p_y$ separately. Never write KE for an inelastic collision.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Impulse from F(t) graph</summary>
<p><strong>Problem.</strong> $m=0.5$ kg ball at $+3$ m/s hit by bat. $F(t)$: 0→200 N over 4 ms, hold 4 ms, 200→0 over 4 ms (opposing motion). Find impulse, $v_f$, avg force.</p>
<p><strong>How to recognize this type:</strong> Impulse = area under $F(t)$.</p>
<ol class="soln">
<li><strong>Choose sign.</strong> Bat opposes motion, so take $F<0$.</li>
<li><strong>Area of the trapezoid.</strong> Bases are the top (4 ms) and total base (12 ms), height 200 N: $A=\\tfrac12(b_1+b_2)h=\\tfrac12(0.004+0.012)(200)=\\tfrac12(0.016)(200)=1.6$ N·s.</li>
<li><strong>Signed impulse.</strong> $J=-1.6$ N·s (pointing against $+x$).</li>
<li><strong>Impulse-momentum theorem.</strong> $J=m\\Delta v \\Rightarrow \\Delta v=J/m=-1.6/0.5=-3.2$ m/s.</li>
<li><strong>Final velocity.</strong> $v_f=v_i+\\Delta v=3-3.2=-0.2$ m/s (ball now moving backward slowly).</li>
<li><strong>Average force.</strong> Total contact time $\\Delta t=12$ ms $=0.012$ s. $\\bar F=J/\\Delta t=-1.6/0.012\\approx -133$ N.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Impulse = signed area under $F(t) = \\Delta p$.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Ballistic pendulum</summary>
<p><strong>Problem.</strong> Bullet $m=0.01$ kg into block $M=2$ kg hanging from string. Block+bullet rise $h=0.20$ m. Find bullet's initial $v_0$.</p>
<p><strong>How to recognize this type:</strong> Two phases: inelastic collision, then swing.</p>
<ol class="soln">
<li><strong>Phase 2 (swing) — energy conservation.</strong> After embedding, combined $(m+M)$ has speed $V$ that becomes PE: $\\tfrac12(m+M)V^2=(m+M)gh$.</li>
<li><strong>Solve for $V$.</strong> $V=\\sqrt{2gh}=\\sqrt{2(9.8)(0.20)}=\\sqrt{3.92}\\approx 1.98$ m/s.</li>
<li><strong>Phase 1 (collision) — momentum conservation.</strong> $m v_0=(m+M)V$ (energy is lost in embedding, so don't use KE here).</li>
<li><strong>Solve for $v_0$.</strong> $v_0=(m+M)V/m=(2.01)(1.98)/0.01\\approx 398$ m/s.</li>
<li><strong>KE before collision.</strong> $K_i=\\tfrac12(0.01)(398)^2\\approx 792$ J.</li>
<li><strong>KE just after collision.</strong> $K_f=\\tfrac12(2.01)(1.98)^2\\approx 3.94$ J.</li>
<li><strong>Percent lost.</strong> $(K_i-K_f)/K_i\\approx 99.5\\%$, typical for a bullet embedding in a heavy block.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Never use energy conservation across the embedding. Momentum for collision, energy for swing.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Explosion — find missing piece</summary>
<p><strong>Problem.</strong> 5 kg object at rest explodes into 2 kg piece at $30$ m/s at $60°$ above $+x$, and a 3 kg piece. Find the 3-kg velocity and energy released.</p>
<p><strong>How to recognize this type:</strong> Spontaneous separation, internal forces.</p>
<ol class="soln">
<li><strong>Conservation of momentum.</strong> Initial $\\vec p=0$, so $\\vec p_1+\\vec p_2=0 \\Rightarrow \\vec p_2=-\\vec p_1$.</li>
<li><strong>Components of piece 1.</strong> $p_{1x}=2(30)\\cos 60°=2(30)(0.5)=30$ kg·m/s. $p_{1y}=2(30)\\sin 60°=2(30)(0.866)\\approx 51.96$ kg·m/s.</li>
<li><strong>Components of piece 2.</strong> $p_{2x}=-30$, $p_{2y}=-51.96$ kg·m/s.</li>
<li><strong>Velocity of piece 2.</strong> $\\vec v_2=\\vec p_2/m_2=(-30/3,\\,-51.96/3)=(-10,\\,-17.32)$ m/s.</li>
<li><strong>Magnitude and direction.</strong> $|v_2|=\\sqrt{100+300}=\\sqrt{400}=20$ m/s; direction opposite piece 1 (60° below $-x$).</li>
<li><strong>Energy released.</strong> Initial KE $=0$, so $\\Delta E=K_f=\\tfrac12(2)(30)^2+\\tfrac12(3)(20)^2=900+600=1500$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Explosions conserve momentum; KE INCREASES, supplied by the internal source.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> CM of a non-uniform rod</summary>
<p><strong>Problem.</strong> Rod length $L$, $\\lambda(x)=\\lambda_0 x/L$. Find $M$ and $x_{cm}$.</p>
<p><strong>How to recognize this type:</strong> Continuous mass distribution, non-uniform density.</p>
<ol class="soln">
<li><strong>Mass element.</strong> $dm=\\lambda(x)\\,dx=(\\lambda_0 x/L)\\,dx$.</li>
<li><strong>Total mass.</strong> $M=\\int_0^L \\dfrac{\\lambda_0 x}{L}\\,dx=\\dfrac{\\lambda_0}{L}\\cdot\\dfrac{L^2}{2}=\\dfrac{\\lambda_0 L}{2}$.</li>
<li><strong>Set up $x_{cm}$ integral.</strong> $x_{cm}=\\dfrac{1}{M}\\int_0^L x\\,dm=\\dfrac{1}{M}\\int_0^L x\\cdot\\dfrac{\\lambda_0 x}{L}\\,dx$.</li>
<li><strong>Compute the numerator.</strong> $\\int_0^L \\dfrac{\\lambda_0 x^2}{L}\\,dx=\\dfrac{\\lambda_0}{L}\\cdot\\dfrac{L^3}{3}=\\dfrac{\\lambda_0 L^2}{3}$.</li>
<li><strong>Divide by $M$.</strong> $x_{cm}=\\dfrac{\\lambda_0 L^2/3}{\\lambda_0 L/2}=\\dfrac{2L}{3}$.</li>
<li><strong>Sanity check.</strong> Density increases linearly from 0 at $x=0$ to $\\lambda_0$ at $x=L$; CM should sit past the midpoint toward the denser end — $2L/3>L/2$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $x_{cm}=(1/M)\\int x\\,dm$; verify CM lies toward the denser end.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Variable mass — sand into cart</summary>
<p><strong>Problem.</strong> 20 kg cart at 5 m/s frictionless; sand falls in at $dm/dt=2$ kg/s. (a) Force to hold speed constant. (b) If no force, find $v(t)$.</p>
<p><strong>How to recognize this type:</strong> System mass changes with time.</p>
<ol class="soln">
<li><strong>Use $F=dp/dt$, not $F=ma$.</strong> $p=mv$, so $dp/dt=\\dot m v+m\\dot v$.</li>
<li><strong>(a) Constant $v$.</strong> $\\dot v=0$: $F=v\\cdot dm/dt=5(2)=10$ N.</li>
<li><strong>Interpret.</strong> This force accelerates the newly added (initially stationary) sand up to cart speed.</li>
<li><strong>(b) No external force.</strong> Horizontal momentum conserved: $p_0=m_0 v_0=20(5)=100$ kg·m/s.</li>
<li><strong>Mass as a function of time.</strong> $m(t)=m_0+(dm/dt)t=20+2t$.</li>
<li><strong>Solve for $v(t)$.</strong> $m(t)\\,v(t)=100 \\Rightarrow v(t)=\\dfrac{100}{20+2t}=\\dfrac{50}{10+t}$ m/s.</li>
<li><strong>Check at $t=0$.</strong> $v(0)=100/20=5$ m/s. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> When mass changes, use $F=dp/dt$, not $ma$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Two-body spring — max compression</summary>
<p><strong>Problem.</strong> $m_A=3$ kg at 6 m/s hits $m_B=2$ kg with spring ($k=1200$) attached. Find max compression and post-separation velocities.</p>
<p><strong>How to recognize this type:</strong> Spring between free blocks — elastic overall.</p>
<ol class="soln">
<li><strong>Max-compression condition.</strong> The spring is most compressed when both blocks move at the SAME velocity $V$ (relative velocity = 0 instantaneously).</li>
<li><strong>Momentum conservation.</strong> $m_A v_A=(m_A+m_B)V \\Rightarrow V=(3)(6)/5=3.6$ m/s.</li>
<li><strong>Energy accounting.</strong> $K_i=\\tfrac12(3)(6)^2=54$ J. $K_{common}=\\tfrac12(5)(3.6)^2=32.4$ J. Spring stores the rest.</li>
<li><strong>Spring energy at max compression.</strong> $\\tfrac12 k x^2=K_i-K_{common}=54-32.4=21.6$ J.</li>
<li><strong>Solve for $x$.</strong> $x=\\sqrt{2(21.6)/1200}=\\sqrt{0.036}\\approx 0.190$ m.</li>
<li><strong>After separation — elastic (ideal spring returns all energy).</strong> Apply target-at-rest-in-CM formulas or the 1D elastic equations: $v_A'=\\dfrac{m_A-m_B}{m_A+m_B}v_A=\\dfrac{1}{5}(6)=1.2$ m/s; $v_B'=\\dfrac{2m_A}{m_A+m_B}v_A=\\dfrac{6}{5}(6)=7.2$ m/s.</li>
<li><strong>Check.</strong> Momentum: $3(1.2)+2(7.2)=3.6+14.4=18=3(6)$. ✓ KE: $\\tfrac12(3)(1.44)+\\tfrac12(2)(51.84)=2.16+51.84=54$ J. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Max compression = common velocity instant. Ideal spring between free masses → elastic overall.</p>
</details>
`,

  "unit-5": `
<details class="example" open><summary><span class="pill">Example 1</span> $I$ of non-uniform rod by integration</summary>
<p><strong>Problem.</strong> Rod length $L$, $\\lambda(x)=\\lambda_0 x/L$. Find $M$ and $I$ about left end.</p>
<p><strong>How to recognize this type:</strong> Continuous body, compute $I=\\int r^2\\,dm$.</p>
<ol class="soln">
<li><strong>Set up $dm$.</strong> A slice of width $dx$ at position $x$ has mass $dm=\\lambda(x)\\,dx=(\\lambda_0 x/L)\\,dx$.</li>
<li><strong>Find total mass.</strong> $M=\\int_0^L \\lambda_0 x/L\\,dx=(\\lambda_0/L)\\cdot L^2/2=\\lambda_0 L/2$, so $\\lambda_0=2M/L$.</li>
<li><strong>Write the inertia integral.</strong> Axis is left end, so lever arm is just $x$: $I=\\int_0^L x^2\\,dm=\\int_0^L x^2(\\lambda_0 x/L)\\,dx$.</li>
<li><strong>Evaluate.</strong> $I=(\\lambda_0/L)\\int_0^L x^3\\,dx=(\\lambda_0/L)\\cdot L^4/4=\\lambda_0 L^3/4$.</li>
<li><strong>Express in terms of $M$.</strong> Substitute $\\lambda_0=2M/L$: $I=(2M/L)L^3/4=ML^2/2$.</li>
<li><strong>Sanity check.</strong> A uniform rod about its end has $I=ML^2/3$. Our non-uniform rod has mass biased toward the far end (larger $x$), so $I$ should be larger than $ML^2/3$. $ML^2/2>ML^2/3$ ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Pick $dm$ matching density, identify $r$ (perpendicular distance), integrate, sanity-check vs uniform result.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Parallel-axis: disk about rim pivot</summary>
<p><strong>Problem.</strong> Disk mass $M$, radius $R$, pivoted at rim, swings as physical pendulum. Find $I_{pivot}$ and small-oscillation $\\omega$.</p>
<p><strong>How to recognize this type:</strong> Known $I_{cm}$, displaced parallel axis.</p>
<ol class="soln">
<li><strong>Start from CM inertia.</strong> For a solid disk, $I_{cm}=\\tfrac12 MR^2$ about an axis through its center, perpendicular to its face.</li>
<li><strong>Distance from CM to new axis.</strong> The pivot is at the rim, so $d=R$.</li>
<li><strong>Apply parallel-axis theorem.</strong> $I_{pivot}=I_{cm}+Md^2=\\tfrac12 MR^2+MR^2=\\tfrac32 MR^2$.</li>
<li><strong>Physical-pendulum equation.</strong> For small angles, $I\\ddot\\theta=-Mg d\\,\\theta\\Rightarrow \\omega=\\sqrt{Mgd/I_{pivot}}$.</li>
<li><strong>Substitute.</strong> $\\omega=\\sqrt{MgR/(\\tfrac32 MR^2)}=\\sqrt{2g/(3R)}$.</li>
<li><strong>Sanity.</strong> As $R\\to 0$ the rate $\\omega\\to\\infty$ (tiny disk is a point on a zero-length string — consistent).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Parallel-axis always adds $Md^2$. Must start from CM axis.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Sphere rolling down incline</summary>
<p><strong>Problem.</strong> Solid sphere on incline, no-slip. Find $a$, $f_s$, min $\\mu_s$.</p>
<p><strong>How to recognize this type:</strong> "Rolls without slipping."</p>
<ol class="soln">
<li><strong>Free body.</strong> Gravity along the incline $Mg\\sin\\theta$ drives motion; static friction $f$ acts up the incline (it must, to create the torque spinning the sphere up).</li>
<li><strong>Newton II translation.</strong> $Mg\\sin\\theta-f=Ma$.</li>
<li><strong>Newton II rotation about CM.</strong> Only friction produces torque about the CM: $fR=I_{cm}\\alpha=\\tfrac25 MR^2\\alpha$.</li>
<li><strong>Rolling constraint.</strong> No slip means $a=R\\alpha$, so $\\alpha=a/R$. Then $fR=\\tfrac25 MR^2(a/R)\\Rightarrow f=\\tfrac25 Ma$.</li>
<li><strong>Solve simultaneously.</strong> Substitute $f$ into the translation equation: $Mg\\sin\\theta-\\tfrac25 Ma=Ma\\Rightarrow a=\\tfrac{5}{7}g\\sin\\theta$.</li>
<li><strong>Back out friction.</strong> $f_s=\\tfrac25 M\\cdot\\tfrac{5}{7}g\\sin\\theta=\\tfrac27 Mg\\sin\\theta$.</li>
<li><strong>Minimum $\\mu_s$.</strong> Need $f_s\\le\\mu_s N=\\mu_s Mg\\cos\\theta$: $\\mu_s\\ge\\tfrac27\\tan\\theta$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Static friction is whatever enforces rolling, up to $\\mu_s N$.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Atwood with massive pulley</summary>
<p><strong>Problem.</strong> $m_1=3$, $m_2=5$ kg; pulley $M=2$ kg, $R=0.10$ m. Find $a$, $T_1$, $T_2$.</p>
<p><strong>How to recognize this type:</strong> Pulley has mass → tensions differ.</p>
<ol class="soln">
<li><strong>Equations for each mass.</strong> For $m_2$ (descending): $m_2 g-T_2=m_2 a$. For $m_1$ (ascending): $T_1-m_1 g=m_1 a$.</li>
<li><strong>Equation for the pulley.</strong> Net torque $(T_2-T_1)R=I\\alpha$ with $I=\\tfrac12 MR^2$ and $\\alpha=a/R$: $(T_2-T_1)R=\\tfrac12 MR^2(a/R)\\Rightarrow T_2-T_1=\\tfrac12 Ma$.</li>
<li><strong>Add the three equations.</strong> The $T$'s telescope: $m_2 g-m_1 g=(m_1+m_2)a+\\tfrac12 Ma$.</li>
<li><strong>Solve for $a$.</strong> $a=\\dfrac{(m_2-m_1)g}{m_1+m_2+M/2}=\\dfrac{(5-3)(9.8)}{3+5+1}=\\dfrac{19.6}{9}\\approx 2.18$ m/s².</li>
<li><strong>Find $T_1$.</strong> $T_1=m_1(g+a)=3(9.8+2.18)\\approx 35.9$ N.</li>
<li><strong>Find $T_2$.</strong> $T_2=m_2(g-a)=5(9.8-2.18)\\approx 38.1$ N. Check: $T_2-T_1\\approx 2.18=\\tfrac12 Ma$ ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Effective inertia denominator = $m_1+m_2+I/R^2$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Yo-yo unwinding</summary>
<p><strong>Problem.</strong> Yo-yo modeled as solid disk, mass $M$, radius $R$; string at rim. Find $a$ and $T$.</p>
<p><strong>How to recognize this type:</strong> Falling object with string unwinding.</p>
<ol class="soln">
<li><strong>Translation.</strong> Gravity pulls down, tension pulls up: $Mg-T=Ma$.</li>
<li><strong>Rotation about CM.</strong> Only tension creates torque about the center, with lever arm $R$: $TR=I_{cm}\\alpha=\\tfrac12 MR^2\\alpha$.</li>
<li><strong>String constraint.</strong> The string unwinds without slipping on the rim, so $a=R\\alpha$, giving $TR=\\tfrac12 MR^2(a/R)\\Rightarrow T=\\tfrac12 Ma$.</li>
<li><strong>Combine.</strong> Substitute into translation: $Mg-\\tfrac12 Ma=Ma\\Rightarrow Mg=\\tfrac32 Ma$.</li>
<li><strong>Solve.</strong> $a=\\tfrac23 g$; then $T=\\tfrac12 Ma=\\tfrac13 Mg$.</li>
<li><strong>Check limit.</strong> If $I_{cm}\\to 0$ (point mass), we'd recover $a=g$, $T=0$. Our rotating yo-yo falls slower than $g$, as expected.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $a=g/(1+I_{cm}/(MR^2))$. Rotation always slows the fall.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Signpost with cable</summary>
<p><strong>Problem.</strong> Beam $M=20$ kg, $L=3$ m, hinged to wall; sign $m=10$ kg at far end; cable at $37°$ above beam. Find tension and hinge forces.</p>
<p><strong>How to recognize this type:</strong> Static equilibrium of extended body.</p>
<ol class="soln">
<li><strong>Identify forces.</strong> Hinge $(H_x,H_y)$, weight of beam $Mg$ at $L/2$, sign weight $mg$ at $L$, cable tension $T$ at far end at $37°$ above beam.</li>
<li><strong>Torques about the hinge.</strong> This eliminates $H_x, H_y$. Only the perpendicular component $T\\sin\\theta$ creates torque: $T\\sin\\theta\\cdot L-Mg(L/2)-mgL=0$.</li>
<li><strong>Solve for $T$.</strong> $T=\\dfrac{Mg/2+mg}{\\sin\\theta}=\\dfrac{(10)(9.8)+(10)(9.8)}{0.602}=\\dfrac{196}{0.602}\\approx 327$ N.</li>
<li><strong>Force balance in $x$.</strong> $H_x-T\\cos\\theta=0\\Rightarrow H_x=T\\cos\\theta=(327)(0.799)\\approx 261$ N.</li>
<li><strong>Force balance in $y$.</strong> $H_y+T\\sin\\theta-(M+m)g=0\\Rightarrow H_y=(M+m)g-T\\sin\\theta=294-196=98$ N (upward).</li>
<li><strong>Sanity.</strong> Without the cable the hinge would have to supply the full 294 N; the cable lifts 196 N, leaving 98 N for the hinge ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Put your torque axis at the hinge. Only force components perpendicular to the lever arm matter.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Angular impulse: clay hits rotating rod</summary>
<p><strong>Problem.</strong> Rod $M=2$ kg, $L=1$ m, pivoted at center, $\\omega_0=4$ rad/s. Clay $m=0.5$ kg at 3 m/s hits end. Find new $\\omega$ and avg torque if $\\Delta t=0.02$ s.</p>
<p><strong>How to recognize this type:</strong> Sudden collision about a pivot.</p>
<ol class="soln">
<li><strong>Rod inertia.</strong> About center: $I_{rod}=ML^2/12=(2)(1)^2/12=0.167$ kg·m².</li>
<li><strong>Post-collision inertia.</strong> Clay stuck at distance $L/2$: $I_f=I_{rod}+m(L/2)^2=0.167+0.5(0.25)=0.292$ kg·m².</li>
<li><strong>Angular momentum before.</strong> Rod: $I_{rod}\\omega_0=0.667$. Clay (treat as point at moment of impact, perpendicular hit): $mv(L/2)=0.5(3)(0.5)=0.75$. Total $L_i=1.42$ kg·m²/s.</li>
<li><strong>Conservation about the pivot.</strong> $L_f=I_f\\omega_f\\Rightarrow \\omega_f=1.42/0.292\\approx 4.86$ rad/s.</li>
<li><strong>Average torque on rod.</strong> Angular impulse = change in rod's $L$: $\\Delta L_{rod}=I_{rod}(\\omega_f-\\omega_0)=0.167(0.86)\\approx 0.143$ kg·m²/s.</li>
<li><strong>Divide by time.</strong> $\\bar\\tau=\\Delta L_{rod}/\\Delta t=0.143/0.02\\approx 7.2$ N·m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $L$ is conserved about the pivot (not linear $p$). Angular impulse = $\\Delta L$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Torque as cross product</summary>
<p><strong>Problem.</strong> $\\vec F=(3,-2,4)$ N at $\\vec r=(1,2,-1)$ m. Find $\\vec\\tau$ and angle between $\\vec r,\\vec F$.</p>
<p><strong>How to recognize this type:</strong> Vectors given componentwise.</p>
<ol class="soln">
<li><strong>Set up the cross product.</strong> $\\vec\\tau=\\vec r\\times\\vec F$; compute via determinant with rows $\\hat\\imath,\\hat\\jmath,\\hat k$; $(1,2,-1)$; $(3,-2,4)$.</li>
<li><strong>$\\hat\\imath$ component.</strong> $(2)(4)-(-1)(-2)=8-2=6$.</li>
<li><strong>$\\hat\\jmath$ component.</strong> $-[(1)(4)-(-1)(3)]=-(4+3)=-7$.</li>
<li><strong>$\\hat k$ component.</strong> $(1)(-2)-(2)(3)=-2-6=-8$. So $\\vec\\tau=(6,-7,-8)$ N·m.</li>
<li><strong>Magnitude.</strong> $|\\vec\\tau|=\\sqrt{36+49+64}=\\sqrt{149}\\approx 12.2$ N·m.</li>
<li><strong>Dot product for angle.</strong> $\\vec r\\cdot\\vec F=(1)(3)+(2)(-2)+(-1)(4)=3-4-4=-5$.</li>
<li><strong>Angle.</strong> $|r|=\\sqrt{6}$, $|F|=\\sqrt{29}$: $\\cos\\phi=-5/\\sqrt{174}\\approx -0.379\\Rightarrow \\phi\\approx 112°$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Watch the minus on $\\hat\\jmath$. Cross-check $\\sin\\phi$ from $|\\tau|$ with $\\cos\\phi$ from dot product.</p>
</details>
`,

  "unit-6": `
<details class="example" open><summary><span class="pill">Example 1</span> Race down incline — sphere vs hollow sphere vs disk</summary>
<p><strong>Problem.</strong> Solid sphere ($\\tfrac25 MR^2$), hollow sphere ($\\tfrac23 MR^2$), cylinder ($\\tfrac12 MR^2$) roll from height $h$. Rank speeds at bottom.</p>
<p><strong>How to recognize this type:</strong> Multiple rolling shapes, compare.</p>
<ol class="soln">
<li><strong>Define shape factor.</strong> Write $I=\\beta MR^2$. Then solid sphere $\\beta=2/5$, cylinder $\\beta=1/2$, hollow sphere $\\beta=2/3$.</li>
<li><strong>Energy conservation.</strong> Start at rest, no slip: $Mgh=\\tfrac12 Mv^2+\\tfrac12 I\\omega^2$ with $\\omega=v/R$.</li>
<li><strong>Combine rotational + translational KE.</strong> $\\tfrac12 I\\omega^2=\\tfrac12\\beta MR^2(v/R)^2=\\tfrac12\\beta Mv^2$, so $Mgh=\\tfrac12 Mv^2(1+\\beta)$.</li>
<li><strong>Solve.</strong> $v=\\sqrt{2gh/(1+\\beta)}$. Smaller $\\beta$ → larger $v$.</li>
<li><strong>Plug in each.</strong> Solid sphere: $v=\\sqrt{2gh/(7/5)}=\\sqrt{10gh/7}$. Cylinder: $\\sqrt{2gh/(3/2)}=\\sqrt{4gh/3}$. Hollow: $\\sqrt{2gh/(5/3)}=\\sqrt{6gh/5}$.</li>
<li><strong>Rank.</strong> Compare fractions: $10/7\\approx 1.43>4/3\\approx 1.33>6/5=1.20$. So solid sphere > cylinder > hollow sphere.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Only shape factor $\\beta=I/MR^2$ matters. Mass-near-axis wins.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Bullet into pivoted rod — max angle</summary>
<p><strong>Problem.</strong> $M=2$ kg rod, $L=1$ m, pivoted at top, hanging. Bullet $m=0.02$ kg at 300 m/s hits bottom and sticks. Find $\\omega$ after and max swing angle.</p>
<p><strong>How to recognize this type:</strong> Projectile into pivoted rigid body — two phases.</p>
<ol class="soln">
<li><strong>Phase 1: collision — use angular momentum.</strong> Linear momentum is NOT conserved (pivot exerts impulsive force), but $L$ about the pivot is.</li>
<li><strong>Post-collision inertia.</strong> Rod about end $I_{rod}=ML^2/3=(2)(1)/3=0.667$. Add bullet at $L$: $I_{tot}=0.667+mL^2=0.667+0.02=0.687$ kg·m².</li>
<li><strong>Conserve $L$.</strong> $mv_0 L=I_{tot}\\omega\\Rightarrow \\omega=(0.02)(300)(1)/0.687\\approx 8.73$ rad/s.</li>
<li><strong>Phase 2: swing — use energy.</strong> KE just after collision: $\\tfrac12 I_{tot}\\omega^2=\\tfrac12(0.687)(8.73)^2\\approx 26.2$ J.</li>
<li><strong>Height rise at angle $\\theta$.</strong> Rod CM rises $(L/2)(1-\\cos\\theta)$; bullet rises $L(1-\\cos\\theta)$. Gravitational PE: $\\Delta U=(Mg L/2+mgL)(1-\\cos\\theta)=(9.8+0.196)(1-\\cos\\theta)\\approx 9.996(1-\\cos\\theta)$.</li>
<li><strong>Set KE = $\\Delta U$.</strong> $26.2=9.996(1-\\cos\\theta)\\Rightarrow 1-\\cos\\theta=2.62$. Since this exceeds 2, the rod goes over the top — full rotation.</li>
<li><strong>Slower case.</strong> If $v_0=150$ m/s, KE becomes 6.55 J and $1-\\cos\\theta=0.655\\Rightarrow \\theta\\approx 69.8°$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> About a pivot, conserve $L$ (linear $p$ is NOT conserved). Track rod CM height separate from particle height in swing.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Student jumps onto rotating disk</summary>
<p><strong>Problem.</strong> Merry-go-round ($M=200$ kg, $R=2$ m) at $\\omega_0=1.5$ rad/s. 50-kg child at rest (ground frame) lands on rim. Find new $\\omega$ and fractional KE lost.</p>
<p><strong>How to recognize this type:</strong> Rotating platform + sticking.</p>
<ol class="soln">
<li><strong>Disk inertia.</strong> $I_{disk}=\\tfrac12 MR^2=\\tfrac12(200)(4)=400$ kg·m².</li>
<li><strong>Child inertia (after landing on rim).</strong> $I_{child}=mR^2=(50)(4)=200$ kg·m².</li>
<li><strong>Conserve $L$.</strong> Initially child has zero $L$; disk has $I_{disk}\\omega_0=400(1.5)=600$ kg·m²/s.</li>
<li><strong>After sticking.</strong> $(I_{disk}+I_{child})\\omega_f=600\\Rightarrow 600\\omega_f=600\\Rightarrow \\omega_f=1.0$ rad/s.</li>
<li><strong>Initial KE.</strong> $K_i=\\tfrac12 I_{disk}\\omega_0^2=\\tfrac12(400)(1.5)^2=450$ J.</li>
<li><strong>Final KE.</strong> $K_f=\\tfrac12(600)(1.0)^2=300$ J.</li>
<li><strong>Fraction lost.</strong> $(450-300)/450=1/3\\approx 33\\%$ dissipated to friction/deformation during sticking.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Sticking on a rotating platform conserves $L$ but not $K$.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Circular orbit — derive $v$, $T$, energies</summary>
<p><strong>Problem.</strong> Satellite mass $m$ at radius $r$ around planet mass $M$. Derive $v$, $T$, $K$, $U$, $E$.</p>
<p><strong>How to recognize this type:</strong> "Circular orbit."</p>
<ol class="soln">
<li><strong>Force equation.</strong> Gravity supplies centripetal: $GMm/r^2=mv^2/r$.</li>
<li><strong>Solve for $v$.</strong> Cancel one $r$ and one $m$: $v=\\sqrt{GM/r}$.</li>
<li><strong>Period from $v=2\\pi r/T$.</strong> $T=2\\pi r/v=2\\pi r\\sqrt{r/(GM)}=2\\pi\\sqrt{r^3/GM}$ — Kepler III.</li>
<li><strong>Kinetic energy.</strong> $K=\\tfrac12 mv^2=\\tfrac12 m(GM/r)=GMm/(2r)$.</li>
<li><strong>Potential energy.</strong> $U=-GMm/r$ (by definition, zero at infinity).</li>
<li><strong>Total.</strong> $E=K+U=GMm/(2r)-GMm/r=-GMm/(2r)$.</li>
<li><strong>Observe relations.</strong> $E=-K$ (virial for $1/r$) and $E=U/2$. Bound orbits have $E<0$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Memorize $E=-GMm/(2r)$ (bound). Raising $r$ requires energy though $v$ drops.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Elliptical orbit — perihelion vs aphelion speeds</summary>
<p><strong>Problem.</strong> Comet with $r_p=1\\times 10^{11}$, $r_a=5\\times 10^{11}$ m. $GM=1.33\\times 10^{20}$. Find $v_p$, $v_a$.</p>
<p><strong>How to recognize this type:</strong> Ellipse with both distances given.</p>
<ol class="soln">
<li><strong>At perihelion and aphelion, $\\vec v\\perp\\vec r$.</strong> So $L=mvr$ at those points (no component subtraction).</li>
<li><strong>Conservation of $L$.</strong> $v_p r_p=v_a r_a\\Rightarrow v_a=v_p(r_p/r_a)=v_p/5$.</li>
<li><strong>Conservation of energy.</strong> $\\tfrac12 v_p^2-GM/r_p=\\tfrac12 v_a^2-GM/r_a$.</li>
<li><strong>Substitute $v_a=v_p/5$.</strong> $\\tfrac12 v_p^2-\\tfrac12(v_p/5)^2=GM(1/r_p-1/r_a)=GM(r_a-r_p)/(r_p r_a)$.</li>
<li><strong>Simplify LHS.</strong> $\\tfrac12 v_p^2(1-1/25)=\\tfrac{12}{25} v_p^2$, so $v_p^2=\\tfrac{25}{12}GM(r_a-r_p)/(r_p r_a)$.</li>
<li><strong>Plug numbers.</strong> $(r_a-r_p)/(r_p r_a)=4\\times 10^{11}/(5\\times 10^{22})=8\\times 10^{-12}$. $v_p^2=\\tfrac{25}{12}(1.33\\times 10^{20})(8\\times 10^{-12})\\approx 2.22\\times 10^9$.</li>
<li><strong>Take root.</strong> $v_p\\approx 4.7\\times 10^4$ m/s; $v_a=v_p/5\\approx 9.4\\times 10^3$ m/s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Use BOTH $L$ and $E$ conservation. Vis-viva: $v^2=GM(2/r-1/a)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Escape speed from Earth</summary>
<p><strong>Problem.</strong> (a) Derive $v_{esc}$. (b) Compute for Earth. (c) Launched at $v_{esc}/2$: max $r$?</p>
<p><strong>How to recognize this type:</strong> "Escape" or "max distance."</p>
<ol class="soln">
<li><strong>Escape condition.</strong> To just barely escape, total energy at infinity is zero (reach infinity with $v\\to 0$): $E=0$.</li>
<li><strong>Energy at launch.</strong> $\\tfrac12 mv_{esc}^2-GMm/R=0\\Rightarrow v_{esc}=\\sqrt{2GM/R}$.</li>
<li><strong>Numerical.</strong> Earth: $GM=3.99\\times 10^{14}$, $R=6.37\\times 10^6$. $v_{esc}=\\sqrt{2(3.99\\times 10^{14})/6.37\\times 10^6}\\approx 1.12\\times 10^4$ m/s.</li>
<li><strong>Slower launch.</strong> $v_0=v_{esc}/2$: $\\tfrac12 v_0^2=\\tfrac14\\cdot\\tfrac12 v_{esc}^2=\\tfrac14(GM/R)$.</li>
<li><strong>Energy at max $r$ (where $v=0$).</strong> $\\tfrac14(GM/R)\\cdot m-GMm/R=-GMm/r_{max}$.</li>
<li><strong>Simplify.</strong> $-\\tfrac34 GMm/R=-GMm/r_{max}\\Rightarrow r_{max}=\\tfrac43 R$.</li>
<li><strong>Interpret.</strong> Only $R/3$ above the surface — half the escape speed gets you nowhere.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Half escape speed doesn't get you very far — energy scales as $v^2$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Kepler III derivation + Jupiter</summary>
<p><strong>Problem.</strong> Derive Kepler's third law. Compute Jupiter's period: $r=7.78\\times 10^{11}$ m.</p>
<p><strong>How to recognize this type:</strong> "Derive" or period-radius comparison.</p>
<ol class="soln">
<li><strong>Circular orbit.</strong> $GMm/r^2=m\\omega^2 r$ with $\\omega=2\\pi/T$.</li>
<li><strong>Cancel and rearrange.</strong> $GM/r^2=(2\\pi/T)^2 r\\Rightarrow (2\\pi)^2 r^3=GM\\,T^2$.</li>
<li><strong>Kepler III.</strong> $T^2=4\\pi^2 r^3/(GM)$.</li>
<li><strong>Numerical for Jupiter.</strong> $r^3=(7.78\\times 10^{11})^3\\approx 4.71\\times 10^{35}$. $4\\pi^2\\approx 39.5$. $GM_\\odot\\approx 1.33\\times 10^{20}$.</li>
<li><strong>Compute.</strong> $T^2=39.5(4.71\\times 10^{35})/(1.33\\times 10^{20})\\approx 1.40\\times 10^{17}$.</li>
<li><strong>Take root.</strong> $T\\approx 3.74\\times 10^8$ s $\\approx 11.9$ yr.</li>
<li><strong>Shortcut.</strong> In AU and years, $T^2=a^3$: $a=5.20$ AU, $a^3=140.6$, $T\\approx 11.86$ yr ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $4\\pi^2/GM$ is same for every body around the same primary.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Brake stopping a flywheel</summary>
<p><strong>Problem.</strong> Solid disk $M=80$ kg, $R=0.5$ m, $\\omega_0=120$ rad/s. Brake applies $\\tau=25$ N·m. Find $K_0$, $\\alpha$, stop time, angle, work, heat.</p>
<p><strong>How to recognize this type:</strong> Rotational analog of linear friction stop.</p>
<ol class="soln">
<li><strong>Moment of inertia.</strong> $I=\\tfrac12 MR^2=\\tfrac12(80)(0.25)=10$ kg·m².</li>
<li><strong>Initial KE.</strong> $K_0=\\tfrac12 I\\omega_0^2=\\tfrac12(10)(120)^2=7.2\\times 10^4$ J.</li>
<li><strong>Angular deceleration.</strong> $\\alpha=\\tau/I=25/10=2.5$ rad/s² (deceleration).</li>
<li><strong>Stop time.</strong> From $\\omega_0-\\alpha t=0$: $t=\\omega_0/\\alpha=120/2.5=48$ s.</li>
<li><strong>Total angle rotated.</strong> $\\omega^2=\\omega_0^2-2\\alpha\\theta$ with $\\omega=0$: $\\theta=\\omega_0^2/(2\\alpha)=14400/5=2880$ rad.</li>
<li><strong>Work done by brake.</strong> $W_{brake}=-\\tau\\theta=-(25)(2880)=-7.2\\times 10^4$ J.</li>
<li><strong>Heat generated.</strong> By energy conservation, $|W_{brake}|=7.2\\times 10^4$ J dissipated as heat — equals $K_0$ ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $(F,m,a,x,v) \\leftrightarrow (\\tau,I,\\alpha,\\theta,\\omega)$. All linear formulas translate.</p>
</details>
`,

  "unit-7": `
<details class="example" open><summary><span class="pill">Example 1</span> Derive SHM from Hooke's law</summary>
<p><strong>Problem.</strong> $m=0.5$ kg, $k=200$ N/m. Starting from $F=ma$, derive $T$. Released from $x=0.10$ m at rest — write $x(t)$.</p>
<p><strong>How to recognize this type:</strong> "Derive," "show SHM," "starting from Newton's 2nd."</p>
<ol class="soln">
<li><strong>Apply Newton II.</strong> Net force on mass = spring force: $m\\ddot x=-kx$.</li>
<li><strong>Standard SHM form.</strong> Divide by $m$: $\\ddot x=-(k/m)x=-\\omega^2 x$ with $\\omega^2=k/m$.</li>
<li><strong>General solution.</strong> $x(t)=A\\cos(\\omega t+\\phi)$.</li>
<li><strong>Numerical $\\omega$ and $T$.</strong> $\\omega=\\sqrt{200/0.5}=\\sqrt{400}=20$ rad/s; $T=2\\pi/\\omega\\approx 0.314$ s.</li>
<li><strong>Apply initial conditions.</strong> $x(0)=A\\cos\\phi=0.10$ and $\\dot x(0)=-A\\omega\\sin\\phi=0$.</li>
<li><strong>Solve.</strong> Second equation forces $\\sin\\phi=0\\Rightarrow\\phi=0$; first gives $A=0.10$ m.</li>
<li><strong>Write answer.</strong> $x(t)=0.10\\cos(20t)$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Whenever $\\ddot x=-\\omega^2 x$, read off $\\omega$ from "stuff multiplying $-x$."</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Physical pendulum — rod at end</summary>
<p><strong>Problem.</strong> Rod $M, L$, pivoted at one end. Derive period for small oscillations.</p>
<p><strong>How to recognize this type:</strong> Extended rigid body about pivot, gravity.</p>
<ol class="soln">
<li><strong>Torque about pivot.</strong> Gravity acts at CM (distance $L/2$ from pivot). For angle $\\theta$ from vertical: $\\tau=-Mg(L/2)\\sin\\theta$ (restoring).</li>
<li><strong>Small-angle linearization.</strong> $\\sin\\theta\\approx\\theta$, so $\\tau\\approx -Mg(L/2)\\theta$.</li>
<li><strong>Rotational Newton II.</strong> $I\\ddot\\theta=\\tau$ with $I=ML^2/3$ (rod about end): $(ML^2/3)\\ddot\\theta=-Mg(L/2)\\theta$.</li>
<li><strong>Simplify.</strong> $\\ddot\\theta=-(3g/2L)\\theta$.</li>
<li><strong>Read off $\\omega^2$.</strong> $\\omega^2=3g/(2L)$.</li>
<li><strong>Period.</strong> $T=2\\pi/\\omega=2\\pi\\sqrt{2L/(3g)}$.</li>
<li><strong>General formula check.</strong> Also $T=2\\pi\\sqrt{I/(Mgd)}$ with $d=L/2$: gives same result ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $T=2\\pi\\sqrt{I/Mgd}$ (with $d$ = pivot-to-CM). Use parallel-axis when needed.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Vertical spring — gravity shifts equilibrium</summary>
<p><strong>Problem.</strong> Spring $k$ hung, mass $m$ lowered to new equilibrium $x_0=mg/k$. Pulled down $A$ more, released. Show SHM; does $g$ affect $T$?</p>
<p><strong>How to recognize this type:</strong> Vertical spring + gravity.</p>
<ol class="soln">
<li><strong>Set coordinate.</strong> Let $y$ be displacement measured down from the spring's natural (unstretched) end.</li>
<li><strong>Newton II.</strong> Gravity pulls down $+mg$; spring pulls up $-ky$: $m\\ddot y=mg-ky$.</li>
<li><strong>Find equilibrium.</strong> Set $\\ddot y=0$: $y_0=mg/k$.</li>
<li><strong>Shift variable.</strong> Let $u=y-y_0$, so $y=u+y_0$ and $\\ddot u=\\ddot y$.</li>
<li><strong>Substitute.</strong> $m\\ddot u=mg-k(u+y_0)=mg-ku-mg=-ku$.</li>
<li><strong>Pure SHM in $u$.</strong> $\\ddot u=-(k/m)u\\Rightarrow \\omega=\\sqrt{k/m}$, $T=2\\pi\\sqrt{m/k}$.</li>
<li><strong>Conclusion.</strong> Gravity merely shifts the equilibrium point; it does not appear in $T$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Constant force shifts equilibrium but never alters $\\omega$ or $T$ for a linear restoring force.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Two springs — series vs parallel</summary>
<p><strong>Problem.</strong> Mass $m$ with springs $k_1, k_2$. (a) Opposite sides (parallel); (b) end-to-end (series). Find $T$ in each.</p>
<p><strong>How to recognize this type:</strong> Multiple springs.</p>
<ol class="soln">
<li><strong>Parallel setup.</strong> Springs on opposite sides, both attached to the same mass; displacement $x$ stretches one and compresses the other by the same amount.</li>
<li><strong>Net force (parallel).</strong> $F=-k_1 x-k_2 x=-(k_1+k_2)x\\Rightarrow k_{eff}=k_1+k_2$.</li>
<li><strong>Period (parallel).</strong> $T_\\parallel=2\\pi\\sqrt{m/(k_1+k_2)}$.</li>
<li><strong>Series setup.</strong> Springs chained end-to-end. Each feels the same tension $F$ but stretches by $x_i=F/k_i$.</li>
<li><strong>Effective $k$ (series).</strong> Total stretch $x=x_1+x_2=F(1/k_1+1/k_2)$; so $F=k_{eff}x$ with $1/k_{eff}=1/k_1+1/k_2$, i.e. $k_{eff}=k_1 k_2/(k_1+k_2)$.</li>
<li><strong>Period (series).</strong> $T_s=2\\pi\\sqrt{m(k_1+k_2)/(k_1 k_2)}$.</li>
<li><strong>Compare.</strong> Parallel is stiffer (larger $k$, shorter $T$); series is softer (smaller $k$, longer $T$).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Parallel $k$'s add; series $k$'s add reciprocally.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Energy in SHM — $v$ at $x=A/2$</summary>
<p><strong>Problem.</strong> $m=0.4$ kg, $k=160$ N/m, $A=0.050$ m. (a) $v$ at $x=A/2$. (b) If $v=0.6$ m/s at $x=0.030$ m, find $A$.</p>
<p><strong>How to recognize this type:</strong> Position and speed without time — use energy.</p>
<ol class="soln">
<li><strong>Angular frequency.</strong> $\\omega=\\sqrt{k/m}=\\sqrt{160/0.4}=\\sqrt{400}=20$ rad/s.</li>
<li><strong>Energy conservation.</strong> $\\tfrac12 kA^2=\\tfrac12 kx^2+\\tfrac12 mv^2$.</li>
<li><strong>Solve for $v$.</strong> $v=\\sqrt{(k/m)(A^2-x^2)}=\\omega\\sqrt{A^2-x^2}$.</li>
<li><strong>Part (a).</strong> $x=A/2=0.025$: $v=20\\sqrt{0.0025-0.000625}=20\\sqrt{0.001875}\\approx 20(0.0433)\\approx 0.866$ m/s. (Equivalently $\\omega A\\sqrt 3/2$.)</li>
<li><strong>Part (b): invert for $A$.</strong> $A^2=x^2+v^2/\\omega^2$.</li>
<li><strong>Plug in.</strong> $A^2=(0.030)^2+(0.6/20)^2=0.0009+0.0009=0.0018$.</li>
<li><strong>Take root.</strong> $A\\approx 0.0424$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Max speed $\\omega A$ at $x=0$; zero at $x=\\pm A$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Simple pendulum — small-angle approximation</summary>
<p><strong>Problem.</strong> Derive period of simple pendulum. Why is $\\sin\\theta\\approx\\theta$ required?</p>
<p><strong>How to recognize this type:</strong> "Derive," "justify SHM."</p>
<ol class="soln">
<li><strong>Torque about pivot.</strong> Tension has zero lever arm; gravity component tangent to swing is $-mg\\sin\\theta$ at distance $L$: $\\tau=-mgL\\sin\\theta$.</li>
<li><strong>Rotational Newton II.</strong> $I\\ddot\\theta=\\tau$ with $I=mL^2$: $mL^2\\ddot\\theta=-mgL\\sin\\theta$.</li>
<li><strong>Simplify.</strong> $\\ddot\\theta=-(g/L)\\sin\\theta$.</li>
<li><strong>Note:</strong> this equation is NOT linear in $\\theta$ — not SHM yet.</li>
<li><strong>Small-angle linearization.</strong> For $|\\theta|\\ll 1$ rad, $\\sin\\theta\\approx\\theta$, giving $\\ddot\\theta=-(g/L)\\theta$.</li>
<li><strong>Read off period.</strong> $\\omega=\\sqrt{g/L}\\Rightarrow T=2\\pi\\sqrt{L/g}$.</li>
<li><strong>Large amplitudes.</strong> Period actually grows with amplitude (full elliptic integral); motion remains periodic but no longer purely sinusoidal.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> SHM demands a LINEAR restoring term. $\\sin\\theta\\approx\\theta$ is what linearizes.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Damped oscillation</summary>
<p><strong>Problem.</strong> Spring with drag $F_d=-bv$. (a) ODE. (b) Solution $x=A_0 e^{-\\gamma t}\\cos(\\omega' t+\\phi)$ — find $\\gamma$. (c) Amplitude halves in 4.0 s: $\\gamma$? (d) Damping regimes.</p>
<p><strong>How to recognize this type:</strong> Drag/friction + oscillator.</p>
<ol class="soln">
<li><strong>Newton II with drag.</strong> $m\\ddot x=-kx-b\\dot x$.</li>
<li><strong>Standard form.</strong> Divide by $m$: $\\ddot x+(b/m)\\dot x+(k/m)x=0$.</li>
<li><strong>Trial solution.</strong> Insert $x=A_0 e^{-\\gamma t}\\cos(\\omega' t+\\phi)$; matching the damping term gives $\\gamma=b/(2m)$.</li>
<li><strong>Shifted frequency.</strong> $\\omega'=\\sqrt{\\omega_0^2-\\gamma^2}$ with $\\omega_0=\\sqrt{k/m}$.</li>
<li><strong>Half-amplitude time.</strong> Amplitude envelope $A_0 e^{-\\gamma t}$. Half when $e^{-\\gamma(4)}=1/2$.</li>
<li><strong>Solve.</strong> $\\gamma\\cdot 4=\\ln 2\\Rightarrow\\gamma=\\ln 2/4\\approx 0.173$ s$^{-1}$.</li>
<li><strong>Regimes.</strong> Underdamped ($\\gamma<\\omega_0$): oscillates, decaying envelope. Critical ($\\gamma=\\omega_0$): fastest return without oscillation. Overdamped ($\\gamma>\\omega_0$): slow, exponential return.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Amplitude decays as $e^{-\\gamma t}$; energy as $e^{-2\\gamma t}$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> SHM from general $U(x)$</summary>
<p><strong>Problem.</strong> $U(x)=U_0[(a/x)^2-a/x]$ for $x>0$. Find $x_0$ and $\\omega$ for small oscillations.</p>
<p><strong>How to recognize this type:</strong> Arbitrary $U(x)$, small oscillations near minimum.</p>
<ol class="soln">
<li><strong>First derivative.</strong> $dU/dx=U_0[-2a^2/x^3+a/x^2]$.</li>
<li><strong>Equilibrium condition.</strong> Set $dU/dx=0$: $-2a^2/x^3+a/x^2=0\\Rightarrow a/x^2=2a^2/x^3\\Rightarrow x_0=2a$.</li>
<li><strong>Second derivative.</strong> $d^2U/dx^2=U_0[6a^2/x^4-2a/x^3]$.</li>
<li><strong>Evaluate at $x_0=2a$.</strong> $U''(2a)=U_0[6a^2/(16a^4)-2a/(8a^3)]=U_0[3/(8a^2)-1/(4a^2)]=U_0[3/(8a^2)-2/(8a^2)]=U_0/(8a^2)$. Positive, so it is a minimum.</li>
<li><strong>Effective spring constant.</strong> Near a minimum, $U(x)\\approx U(x_0)+\\tfrac12 U''(x_0)(x-x_0)^2$, so $k_{eff}=U''(x_0)=U_0/(8a^2)$.</li>
<li><strong>Angular frequency.</strong> $\\omega=\\sqrt{k_{eff}/m}=\\sqrt{U_0/(8ma^2)}$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Every smooth $U$ looks parabolic near a minimum: $k_{eff}=U''(x_0)$.</p>
</details>
`,

  "unit-8": `
<details class="example" open><summary><span class="pill">Example 1</span> Coulomb force from 3 charges</summary>
<p><strong>Problem.</strong> $q_1=+3\\,\\mu$C at origin, $q_2=-2\\,\\mu$C at $(0.40, 0)$ m, $q_3=+4\\,\\mu$C at $(0, 0.30)$ m. Net force on $q_1$?</p>
<p><strong>How to recognize this type:</strong> Few discrete point charges.</p>
<ol class="soln">
<li><strong>Force from $q_2$: magnitude.</strong> $F_{12}=k|q_1 q_2|/r^2=(8.99\\times 10^9)(3\\times 10^{-6})(2\\times 10^{-6})/(0.40)^2\\approx 0.337$ N.</li>
<li><strong>Force from $q_2$: direction.</strong> Opposite signs → attractive; $q_2$ is at $+x$, so $q_1$ is pulled toward $+x$. $\\vec F_{12}=+0.338\\,\\hat x$ N.</li>
<li><strong>Force from $q_3$: magnitude.</strong> $F_{13}=(8.99\\times 10^9)(3\\times 10^{-6})(4\\times 10^{-6})/(0.30)^2\\approx 1.20$ N.</li>
<li><strong>Force from $q_3$: direction.</strong> Same sign → repulsive; $q_3$ is at $+y$, so $q_1$ is pushed toward $-y$. $\\vec F_{13}=-1.20\\,\\hat y$ N.</li>
<li><strong>Superpose.</strong> $\\vec F_{net}=(0.338,-1.20)$ N.</li>
<li><strong>Magnitude.</strong> $|\\vec F_{net}|=\\sqrt{0.338^2+1.20^2}=\\sqrt{0.114+1.44}\\approx 1.25$ N.</li>
<li><strong>Angle.</strong> $\\tan\\phi=1.20/0.338=3.55\\Rightarrow\\phi\\approx 74°$ below $+x$ axis.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Resolve each Coulomb force into components. Use physical attraction/repulsion for signs.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> E at center of semicircular arc</summary>
<p><strong>Problem.</strong> Semicircular arc, radius $R$, total charge $Q$. Find $E$ at center.</p>
<p><strong>How to recognize this type:</strong> Curved charge, field at geometric center.</p>
<ol class="soln">
<li><strong>Linear density.</strong> Arc length $\\pi R$, so $\\lambda=Q/(\\pi R)$.</li>
<li><strong>Element of charge.</strong> Let $\\theta$ run from $0$ to $\\pi$ along the arc; $dq=\\lambda R\\,d\\theta$.</li>
<li><strong>Magnitude of $d\\vec E$.</strong> Each element is a distance $R$ from center: $dE=k\\,dq/R^2=k\\lambda\\,d\\theta/R$.</li>
<li><strong>Symmetry kills one component.</strong> Place arc so it spans from $\\theta=0$ (at $+x$) to $\\pi$ (at $-x$); horizontal components of $dE$ from symmetric elements cancel, leaving only the vertical component.</li>
<li><strong>Vertical component.</strong> $dE_y=-dE\\sin\\theta$ (field points toward/away from element; here away into $-y$ for $+Q$).</li>
<li><strong>Integrate.</strong> $E_y=-\\int_0^\\pi (k\\lambda/R)\\sin\\theta\\,d\\theta=-(k\\lambda/R)[-\\cos\\theta]_0^\\pi=-(k\\lambda/R)(2)=-2k\\lambda/R$.</li>
<li><strong>Express in $Q$.</strong> $|E|=2k\\lambda/R=2kQ/(\\pi R^2)$, along the symmetry axis.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Use symmetry to kill one component before integrating. Parameterize by angle; $ds=R\\,d\\theta$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> E on axis of finite rod</summary>
<p><strong>Problem.</strong> Rod from $x=0$ to $L$, density $\\lambda$, point $P$ at $x=L+d$. Find $E$.</p>
<p><strong>How to recognize this type:</strong> Finite line charge on its own axis.</p>
<ol class="soln">
<li><strong>Pick source variable.</strong> Let $x'$ be the position of a rod element; $dq=\\lambda\\,dx'$.</li>
<li><strong>Distance to $P$.</strong> $r=(L+d)-x'$, ranging from $L+d$ (at $x'=0$) down to $d$ (at $x'=L$).</li>
<li><strong>Field element.</strong> Field along axis points from $dq$ toward $P$ (for $+\\lambda$): $dE=k\\,dq/r^2=k\\lambda\\,dx'/[(L+d)-x']^2$.</li>
<li><strong>Integrate.</strong> Let $u=(L+d)-x'$, $du=-dx'$: $E=k\\lambda\\int_d^{L+d} du/u^2=k\\lambda[-1/u]_d^{L+d}=k\\lambda[1/d-1/(L+d)]$.</li>
<li><strong>Simplify.</strong> Common denominator: $E=k\\lambda L/[d(L+d)]$.</li>
<li><strong>Far-field check.</strong> If $d\\gg L$: denominator $\\approx d^2$, numerator $\\approx k\\lambda L=kQ$, so $E\\to kQ/d^2$ ✓.</li>
<li><strong>Near-rod check.</strong> As $d\\to 0$: $E\\to\\infty$ — makes sense (charge right next to you).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Define $r$ in terms of integration variable; verify point-charge limit.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Gauss — uniformly charged insulating sphere</summary>
<p><strong>Problem.</strong> Insulating sphere, $Q$, radius $R$. Find $E(r)$ inside and outside.</p>
<p><strong>How to recognize this type:</strong> "Uniformly charged" insulator; spherical symmetry.</p>
<ol class="soln">
<li><strong>Volume density.</strong> $\\rho=Q/(\\tfrac43\\pi R^3)$.</li>
<li><strong>Choose Gaussian surface.</strong> Sphere of radius $r$ concentric with the charge. By symmetry $\\vec E$ is radial and uniform on the surface.</li>
<li><strong>Gauss flux.</strong> $\\Phi=E\\cdot 4\\pi r^2$.</li>
<li><strong>Outside ($r>R$).</strong> $Q_{enc}=Q$: $E\\cdot 4\\pi r^2=Q/\\epsilon_0\\Rightarrow E=kQ/r^2$ (same as point charge).</li>
<li><strong>Inside ($r<R$).</strong> $Q_{enc}=\\rho\\cdot\\tfrac43\\pi r^3=Q(r/R)^3=Qr^3/R^3$.</li>
<li><strong>Inside field.</strong> $E\\cdot 4\\pi r^2=Qr^3/(\\epsilon_0 R^3)\\Rightarrow E=kQr/R^3$ (linear in $r$).</li>
<li><strong>Continuity check at $r=R$.</strong> Outside formula gives $kQ/R^2$; inside formula gives $kQR/R^3=kQ/R^2$ ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Insulator: $Q_{enc}\\propto r^3$. Conductor: charge on surface, $E=0$ inside.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Gauss — infinite line of charge</summary>
<p><strong>Problem.</strong> Infinite wire, $\\lambda$. Find $E(r)$.</p>
<p><strong>How to recognize this type:</strong> Cylindrical symmetry.</p>
<ol class="soln">
<li><strong>Symmetry argument.</strong> $\\vec E$ must be radial (perpendicular to wire) and depend only on distance $r$ from the wire.</li>
<li><strong>Choose Gaussian surface.</strong> Coaxial cylinder of radius $r$, length $L$.</li>
<li><strong>Flux through end caps.</strong> Zero — $\\vec E$ is perpendicular to $d\\vec A$ there.</li>
<li><strong>Flux through curved side.</strong> $\\vec E\\parallel d\\vec A$ and constant magnitude: $\\Phi_{side}=E(2\\pi r L)$.</li>
<li><strong>Enclosed charge.</strong> $q_{enc}=\\lambda L$.</li>
<li><strong>Apply Gauss.</strong> $E(2\\pi r L)=\\lambda L/\\epsilon_0$.</li>
<li><strong>Solve.</strong> $L$ cancels: $E=\\lambda/(2\\pi\\epsilon_0 r)$, falling off as $1/r$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Line-charge field $\\propto 1/r$. Length must cancel out.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Gauss — infinite plane</summary>
<p><strong>Problem.</strong> Infinite non-conducting sheet, $\\sigma$. Find $E$.</p>
<p><strong>How to recognize this type:</strong> Planar symmetry.</p>
<ol class="soln">
<li><strong>Symmetry.</strong> $\\vec E$ is perpendicular to the sheet and of equal magnitude on both sides (by mirror symmetry).</li>
<li><strong>Gaussian pillbox.</strong> A short cylinder straddling the sheet, with flat caps of area $A$ parallel to the plane.</li>
<li><strong>Flux through side wall.</strong> Zero — $\\vec E$ is parallel to the sheet there.</li>
<li><strong>Flux through caps.</strong> Each cap contributes $EA$ (outward), so total $\\Phi=2EA$.</li>
<li><strong>Enclosed charge.</strong> $q_{enc}=\\sigma A$.</li>
<li><strong>Gauss.</strong> $2EA=\\sigma A/\\epsilon_0$.</li>
<li><strong>Solve.</strong> $E=\\sigma/(2\\epsilon_0)$ — independent of distance from the sheet.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $E_{sheet}=\\sigma/(2\\epsilon_0)$; conductor surface is $\\sigma/\\epsilon_0$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Concentric spherical shells</summary>
<p><strong>Problem.</strong> Inner solid conductor $+Q$, radius $a$. Outer shell (inner $b$, outer $c$) net $-3Q$. Find $E$ in four regions and induced charges.</p>
<p><strong>How to recognize this type:</strong> Nested conductors/shells.</p>
<ol class="soln">
<li><strong>Region 1 ($r<a$).</strong> Inside a conductor, $E=0$. All of $+Q$ resides on its outer surface at $r=a$.</li>
<li><strong>Region 2 ($a<r<b$).</strong> Gaussian sphere encloses $+Q$: $E=kQ/r^2$ (outward).</li>
<li><strong>Region 3 ($b<r<c$).</strong> Inside the outer conductor, $E=0$ must hold; this forces $Q_{enc}=0$ for a Gaussian sphere here.</li>
<li><strong>Induced inner surface charge.</strong> Since enclosed must total zero: $+Q$ (inner sphere) $+q_{inner}=0\\Rightarrow q_{inner}=-Q$ on the inner face at $r=b$.</li>
<li><strong>Outer shell charge balance.</strong> Outer shell has net $-3Q$, and $-Q$ sits on its inner face, so the outer face at $r=c$ carries $-3Q-(-Q)=-2Q$.</li>
<li><strong>Region 4 ($r>c$).</strong> Enclosed charge = $+Q+(-3Q)=-2Q$. By Gauss, $E=-2kQ/r^2$ (inward, i.e. toward center).</li>
<li><strong>Consistency.</strong> Every conductor has $E=0$ inside; all induced charges account for the shift ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Inside a conductor $E=0$ everywhere; use this to find induced surface charges.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Two parallel infinite sheets</summary>
<p><strong>Problem.</strong> Sheets with $+\\sigma$ (left) and $-\\sigma$ (right). Find $E$ in three regions.</p>
<p><strong>How to recognize this type:</strong> Multiple infinite sheets — superpose.</p>
<ol class="soln">
<li><strong>Field of each sheet alone.</strong> Each produces $\\sigma/(2\\epsilon_0)$ pointing away from $+\\sigma$ (toward $-\\sigma$).</li>
<li><strong>Convention.</strong> Let $+\\hat x$ point from left sheet to right sheet.</li>
<li><strong>Left sheet's contribution everywhere.</strong> Points in $-\\hat x$ on its left, $+\\hat x$ on its right. Magnitude $\\sigma/(2\\epsilon_0)$.</li>
<li><strong>Right sheet's contribution everywhere.</strong> It has $-\\sigma$, so field points toward it: $+\\hat x$ on its left, $-\\hat x$ on its right. Magnitude $\\sigma/(2\\epsilon_0)$.</li>
<li><strong>Left of both sheets.</strong> $-\\sigma/(2\\epsilon_0)+\\sigma/(2\\epsilon_0)=0$.</li>
<li><strong>Between the sheets.</strong> $+\\sigma/(2\\epsilon_0)+\\sigma/(2\\epsilon_0)=\\sigma/\\epsilon_0$ (pointing $+\\hat x$, from $+$ to $-$).</li>
<li><strong>Right of both sheets.</strong> $+\\sigma/(2\\epsilon_0)-\\sigma/(2\\epsilon_0)=0$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Opposite signs cancel outside, double between: ideal parallel-plate field.</p>
</details>
`,

"unit-9": `
<details class="example" open><summary><span class="pill">Example 1</span> V from discrete point charges</summary>
<p><strong>Problem.</strong> $q_1=+4\\,\\mu$C at (0,0), $q_2=-3\\,\\mu$C at (0.3, 0), $q_3=+2\\,\\mu$C at (0, 0.4). Find $V$ at $P=(0.3, 0.4)$ m. Work to bring $+1\\,\\mu$C from infinity?</p>
<p><strong>How to recognize this type:</strong> Few point charges, scalar sum.</p>
<ol class="soln">
<li>Setup: $V$ is a scalar sum, $V_P=k\\sum_i q_i/r_i$. Compute each $r_i$ from the charge to $P$.</li>
<li>Distances: $r_1=\\sqrt{0.3^2+0.4^2}=0.5$ m, $r_2=\\sqrt{0+0.4^2}=0.4$ m, $r_3=\\sqrt{0.3^2+0}=0.3$ m.</li>
<li>Ratios $q_i/r_i$: $+4\\mu/0.5=+8.0\\,\\mu$C/m, $-3\\mu/0.4=-7.5$, $+2\\mu/0.3=+6.67$. Sum $=+7.17\\,\\mu$C/m.</li>
<li>Multiply by $k=8.99\\times 10^9$: $V_P=(8.99\\times 10^9)(7.17\\times 10^{-6})\\approx 6.44\\times 10^4$ V.</li>
<li>Work to place $+1\\,\\mu$C from infinity (where $V=0$): $W=q\\,\\Delta V=(1\\times 10^{-6})(6.44\\times 10^4)\\approx 6.4\\times 10^{-2}$ J.</li>
<li>Check sign: $V_P>0$ means a positive test charge needs positive work to arrive. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $V$ is a scalar — add with signs. Work to place $=q\\Delta V$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> V on axis of a ring</summary>
<p><strong>Problem.</strong> Ring radius $R$, charge $Q$. Derive $V(x)$ on axis. Verify by differentiating to get $E_x$.</p>
<p><strong>How to recognize this type:</strong> Ring on axis; every $dq$ at same $r$.</p>
<ol class="soln">
<li>Setup: $V(x)=\\int k\\,dq/r$ where $r$ is distance from $dq$ to field point on the axis.</li>
<li>Geometry: every ring element sits at the same distance $r=\\sqrt{R^2+x^2}$ from the axial point, so $r$ pulls out of the integral.</li>
<li>Integrate: $V(x)=\\dfrac{k}{\\sqrt{R^2+x^2}}\\int dq=\\dfrac{kQ}{\\sqrt{R^2+x^2}}$.</li>
<li>Field from gradient: $E_x=-\\dfrac{dV}{dx}=-kQ\\cdot\\dfrac{d}{dx}(R^2+x^2)^{-1/2}=\\dfrac{kQx}{(R^2+x^2)^{3/2}}$.</li>
<li>This matches the direct Coulomb integration for a ring. ✓</li>
<li>Special points: $V(0)=kQ/R$ (finite at center), $E_x(0)=0$ by symmetry, and for $x\\gg R$ both reduce to point-charge forms.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Scalar $V$-integral first; differentiate for $E$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> V on axis of a finite rod (log)</summary>
<p><strong>Problem.</strong> Rod from $x=0$ to $L$, $\\lambda>0$, $P$ at $x=L+d$. Find $V$.</p>
<p><strong>How to recognize this type:</strong> Line charge on its own axis → log answer.</p>
<ol class="soln">
<li>Setup: $dq=\\lambda\\,dx'$ on the rod at position $x'$. Distance from this element to $P$: $r=(L+d)-x'$.</li>
<li>Write integral: $V=\\displaystyle\\int_0^L\\dfrac{k\\lambda\\,dx'}{(L+d)-x'}$.</li>
<li>Substitute $u=(L+d)-x'$, $du=-dx'$; limits $u:\\,L+d\\to d$.</li>
<li>$V=-k\\lambda\\displaystyle\\int_{L+d}^{d}\\dfrac{du}{u}=k\\lambda\\ln\\dfrac{L+d}{d}$.</li>
<li>Far-field check: if $d\\gg L$, $\\ln(1+L/d)\\approx L/d$, so $V\\to k\\lambda L/d=kQ/d$. ✓</li>
<li>Near-field check: as $d\\to 0$, $V\\to\\infty$ (expected — field point touches the charged end).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $1/r$ integrals give logarithms. Check point-charge limit.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> E from V (gradient)</summary>
<p><strong>Problem.</strong> $V=3x^2y-2yz^2+5xz$. Find $\\vec E(x,y,z)$, evaluate at $(1,2,-1)$.</p>
<p><strong>How to recognize this type:</strong> $V$ explicit, compute $\\vec E$.</p>
<ol class="soln">
<li>Formula: $\\vec E=-\\nabla V=-\\left(\\dfrac{\\partial V}{\\partial x}\\hat\\imath+\\dfrac{\\partial V}{\\partial y}\\hat\\jmath+\\dfrac{\\partial V}{\\partial z}\\hat k\\right)$.</li>
<li>$\\partial V/\\partial x=6xy+5z$; $\\partial V/\\partial y=3x^2-2z^2$; $\\partial V/\\partial z=-4yz+5x$.</li>
<li>Therefore $\\vec E=-(6xy+5z)\\hat\\imath-(3x^2-2z^2)\\hat\\jmath-(-4yz+5x)\\hat k$.</li>
<li>Plug in $(1,2,-1)$: components inside parens are $6(1)(2)+5(-1)=7$, $3(1)-2(1)=1$, $-4(2)(-1)+5(1)=13$.</li>
<li>$\\vec E(1,2,-1)=(-7,-1,-13)$ V/m.</li>
<li>Magnitude: $|\\vec E|=\\sqrt{49+1+169}=\\sqrt{219}\\approx 14.8$ V/m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\vec E$ points downhill on $V$. Don't forget the minus sign.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> V from E via line integral</summary>
<p><strong>Problem.</strong> $\\vec E=\\alpha x^2\\hat\\imath$, $\\alpha=6$ V/m³. Reference $V(0)=12$ V. Find $V(x)$ and $V(1)-V(2)$.</p>
<p><strong>How to recognize this type:</strong> $\\vec E(x)$ given, need $V$.</p>
<ol class="soln">
<li>Setup: $V(x)-V(0)=-\\displaystyle\\int_0^x\\vec E\\cdot d\\vec\\ell$ along the $x$-axis, so $d\\vec\\ell=dx'\\hat\\imath$.</li>
<li>Evaluate: $-\\displaystyle\\int_0^x\\alpha x'^2\\,dx'=-\\dfrac{\\alpha x^3}{3}$.</li>
<li>Use reference: $V(x)=V(0)-\\dfrac{\\alpha x^3}{3}=12-\\dfrac{6}{3}x^3=12-2x^3$.</li>
<li>Compute endpoints: $V(1)=12-2=10$ V; $V(2)=12-16=-4$ V.</li>
<li>Difference: $V(1)-V(2)=10-(-4)=14$ V.</li>
<li>Sanity: $\\vec E$ points in $+\\hat\\imath$, so moving to larger $x$ goes "downhill" — $V$ decreases. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Move against $\\vec E$ → $V$ rises. Choose axis-aligned paths.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Energy to assemble 4 charges at a square</summary>
<p><strong>Problem.</strong> 4 identical $+2\\,\\mu$C charges at corners of 0.10-m square. Find $U$.</p>
<p><strong>How to recognize this type:</strong> "Energy to assemble."</p>
<ol class="soln">
<li>Recipe: $U=\\displaystyle\\sum_{i<j}\\dfrac{kq_iq_j}{r_{ij}}$. Count distinct pairs for 4 charges: $\\binom{4}{2}=6$.</li>
<li>Classify pairs: 4 edge pairs at distance $a=0.10$ m; 2 diagonal pairs at $a\\sqrt{2}$.</li>
<li>Factor out $kq^2$: $U=kq^2\\left[\\dfrac{4}{a}+\\dfrac{2}{a\\sqrt{2}}\\right]=\\dfrac{kq^2}{a}(4+\\sqrt{2})$.</li>
<li>Numbers: $kq^2=(8.99\\times 10^9)(2\\times 10^{-6})^2=3.60\\times 10^{-2}$ J·m.</li>
<li>Divide by $a=0.10$: $kq^2/a=0.360$ J. Multiply by $(4+\\sqrt{2})\\approx 5.414$.</li>
<li>$U\\approx 0.360\\times 5.414\\approx 1.95$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Sum over $i<j$ pairs. Equals external work from infinity.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Particle through a potential difference</summary>
<p><strong>Problem.</strong> Proton accelerated through 500 V from rest. Find $v$. Repeat for electron.</p>
<p><strong>How to recognize this type:</strong> "Accelerated through $\\Delta V$."</p>
<ol class="soln">
<li>Energy conservation: $\\Delta K=-q\\,\\Delta V$; starting from rest, $\\tfrac12 mv^2=|q\\,\\Delta V|$.</li>
<li>Solve: $v=\\sqrt{2|q\\,\\Delta V|/m}$ — the charge-to-mass ratio sets the speed.</li>
<li>Kinetic energy imparted: $|q\\,\\Delta V|=(1.6\\times 10^{-19})(500)=8.0\\times 10^{-17}$ J.</li>
<li>Proton ($m_p=1.67\\times 10^{-27}$ kg): $v_p=\\sqrt{2(8.0\\times 10^{-17})/1.67\\times 10^{-27}}\\approx 3.1\\times 10^5$ m/s.</li>
<li>Electron ($m_e=9.11\\times 10^{-31}$ kg): $v_e=\\sqrt{2(8.0\\times 10^{-17})/9.11\\times 10^{-31}}\\approx 1.33\\times 10^7$ m/s.</li>
<li>Ratio check: $v_e/v_p=\\sqrt{m_p/m_e}\\approx\\sqrt{1836}\\approx 42.8$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Only $\\Delta V$ matters, not gap geometry. $v=\\sqrt{2q|\\Delta V|/m}$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> V inside/outside a uniformly charged insulating sphere</summary>
<p><strong>Problem.</strong> Insulator, $Q$, radius $R$. Find $V(r)$ for both regions; sketch.</p>
<p><strong>How to recognize this type:</strong> Piecewise $E$, integrate inward from infinity.</p>
<ol class="soln">
<li>Gauss gives $\\vec E$: outside $E_{out}=kQ/r^2$; inside $E_{in}=kQr/R^3$ (only enclosed charge $Qr^3/R^3$ contributes).</li>
<li>Outside region, integrate from $\\infty$: $V(r)=-\\displaystyle\\int_\\infty^r\\dfrac{kQ}{r'^2}dr'=\\dfrac{kQ}{r}$.</li>
<li>At the surface: $V(R)=kQ/R$.</li>
<li>Inside, split path: $V(r)=V(R)-\\displaystyle\\int_R^r\\dfrac{kQr'}{R^3}dr'=\\dfrac{kQ}{R}-\\dfrac{kQ}{2R^3}(r^2-R^2)$.</li>
<li>Simplify: $V_{in}(r)=\\dfrac{kQ}{2R}\\left(3-\\dfrac{r^2}{R^2}\\right)$.</li>
<li>Checks: continuous at $r=R$ (both give $kQ/R$); maximum at center $V(0)=\\tfrac{3kQ}{2R}$; $dV/dr=0$ at center so $E(0)=0$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Always integrate $\\vec E$ from $\\infty$. $V$ continuous; $E$ can jump only at surface charge.</p>
</details>
`,

"unit-10": `
<details class="example" open><summary><span class="pill">Example 1</span> Parallel-plate $C$ derivation</summary>
<p><strong>Problem.</strong> Plates area $A$, separation $d$, charges $\\pm Q$. Derive $C$.</p>
<p><strong>How to recognize this type:</strong> "Derive" from scratch.</p>
<ol class="soln">
<li>Assume charge $\\pm Q$ on the plates; surface density $\\sigma=Q/A$.</li>
<li>Pillbox Gauss through one plate: $\\oint\\vec E\\cdot d\\vec A=\\sigma A_{\\text{box}}/\\epsilon_0$, giving $E=\\sigma/\\epsilon_0$ uniform between plates (fringing ignored).</li>
<li>Substitute $\\sigma$: $E=Q/(\\epsilon_0 A)$.</li>
<li>Potential difference (uniform field): $V=\\displaystyle\\int_0^d E\\,dx=Ed=\\dfrac{Qd}{\\epsilon_0 A}$.</li>
<li>Definition: $C=Q/V=\\dfrac{\\epsilon_0 A}{d}$.</li>
<li>Note $Q$ cancels: $C$ is purely geometric. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Recipe: assume $Q$ → Gauss for $\\vec E$ → integrate $V$ → divide.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Cylindrical capacitor (coax)</summary>
<p><strong>Problem.</strong> Inner radius $a$, outer $b$, length $L$. Derive $C/L$.</p>
<p><strong>How to recognize this type:</strong> Cylindrical symmetry.</p>
<ol class="soln">
<li>Assume linear charge $\\lambda=Q/L$ on inner conductor; $-\\lambda$ on outer.</li>
<li>Gaussian cylinder of radius $r$ ($a<r<b$), length $\\ell$: $E(2\\pi r\\ell)=\\lambda\\ell/\\epsilon_0$.</li>
<li>Field between shells: $E(r)=\\dfrac{\\lambda}{2\\pi\\epsilon_0 r}$, radial.</li>
<li>Integrate radially from inner to outer: $V=\\displaystyle\\int_a^b E\\,dr=\\dfrac{\\lambda}{2\\pi\\epsilon_0}\\ln\\dfrac{b}{a}$.</li>
<li>Capacitance: $C=\\dfrac{Q}{V}=\\dfrac{\\lambda L}{V}$, giving $\\dfrac{C}{L}=\\dfrac{2\\pi\\epsilon_0}{\\ln(b/a)}$.</li>
<li>Thin-gap limit ($b=a+\\delta$, $\\delta\\ll a$): $\\ln(b/a)\\approx\\delta/a$, so $C/L\\to 2\\pi a\\epsilon_0/\\delta$ — reduces to parallel-plate form (area $2\\pi a L$, gap $\\delta$). ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Log is the fingerprint of cylindrical geometry.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Spherical capacitor + isolated sphere limit</summary>
<p><strong>Problem.</strong> Concentric spheres $a<b$, $\\pm Q$. Derive $C$; show $b\\to\\infty$ gives $4\\pi\\epsilon_0 a$.</p>
<p><strong>How to recognize this type:</strong> Concentric spheres.</p>
<ol class="soln">
<li>Gauss with spherical surface $a<r<b$: $E(4\\pi r^2)=Q/\\epsilon_0$, so $E(r)=\\dfrac{Q}{4\\pi\\epsilon_0 r^2}$.</li>
<li>Integrate: $V=\\displaystyle\\int_a^b\\dfrac{Q\\,dr}{4\\pi\\epsilon_0 r^2}=\\dfrac{Q}{4\\pi\\epsilon_0}\\left(\\dfrac{1}{a}-\\dfrac{1}{b}\\right)$.</li>
<li>Combine fractions: $\\dfrac{1}{a}-\\dfrac{1}{b}=\\dfrac{b-a}{ab}$.</li>
<li>$C=\\dfrac{Q}{V}=\\dfrac{4\\pi\\epsilon_0 ab}{b-a}$.</li>
<li>Let $b\\to\\infty$: $ab/(b-a)\\to a$, so $C\\to 4\\pi\\epsilon_0 a$ — capacitance of an isolated sphere to infinity.</li>
<li>Thin-gap limit ($b=a+\\delta$): $C\\to 4\\pi a^2\\epsilon_0/\\delta$, i.e. area/gap — parallel-plate again. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Lone conductor has finite self-capacitance to infinity.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Series–parallel network</summary>
<p><strong>Problem.</strong> 12 V; $C_1=2\\,\\mu$F in series with ($C_2=3\\,\\mu$F ∥ $C_3=6\\,\\mu$F). Find each $Q$ and $V$.</p>
<p><strong>How to recognize this type:</strong> Mixed series/parallel with battery.</p>
<ol class="soln">
<li>Reduce the parallel pair: $C_{23}=C_2+C_3=3+6=9\\,\\mu$F.</li>
<li>Reduce the series: $\\dfrac{1}{C_{eq}}=\\dfrac{1}{2}+\\dfrac{1}{9}=\\dfrac{11}{18}\\Rightarrow C_{eq}=\\dfrac{18}{11}\\,\\mu$F.</li>
<li>Total charge drawn from battery: $Q_1=Q_{23}=C_{eq}V=\\dfrac{18}{11}(12)\\approx 19.6\\,\\mu$C (series elements share charge).</li>
<li>Voltage across $C_1$: $V_1=Q_1/C_1=19.6/2\\approx 9.82$ V. Remainder $V_{23}=12-9.82=2.18$ V.</li>
<li>Parallel pair shares that 2.18 V: $Q_2=C_2V_{23}=3(2.18)\\approx 6.55\\,\\mu$C; $Q_3=C_3V_{23}=6(2.18)\\approx 13.1\\,\\mu$C.</li>
<li>Check: $Q_2+Q_3=19.6\\,\\mu$C$\\,=Q_{23}$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Series share $Q$; parallel share $V$ (opposite of resistors).</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Dielectric: constant V vs constant Q</summary>
<p><strong>Problem.</strong> $C_0, Q_0, V_0, U_0, E_0$. Insert $\\kappa$. Compare (a) battery on; (b) disconnected.</p>
<p><strong>How to recognize this type:</strong> Dielectric insertion scenario.</p>
<ol class="soln">
<li>In either case the geometry gives $C=\\kappa C_0$.</li>
<li>Ask: which quantity is held fixed? Battery attached → $V=V_0$; isolated → $Q=Q_0$.</li>
<li>(a) Battery on: $Q=CV=\\kappa C_0V_0=\\kappa Q_0$; $E=V/d=E_0$ (field only depends on $V$ and geometry); $U=\\tfrac12 CV^2=\\kappa U_0$. Extra energy came from the battery.</li>
<li>(b) Disconnected: $V=Q/C=Q_0/(\\kappa C_0)=V_0/\\kappa$; $E=V/d=E_0/\\kappa$; $U=Q^2/(2C)=U_0/\\kappa$. Energy decreased — dielectric was pulled in.</li>
<li>Force check: in (b) $\\partial U/\\partial x<0$ as dielectric enters, so it's attracted inward. ✓</li>
<li>Summary table: $C$ always $\\times\\kappa$; then $Q=CV$ and $U=Q^2/(2C)$ give the rest based on what's held fixed.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Identify the conserved quantity (V or Q), then $Q=CV$, $U=Q^2/2C$ give the rest.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Energy stored + work by battery</summary>
<p><strong>Problem.</strong> Battery EMF $V$ charges $C$ from 0 to $V$. Find energy stored vs work done; account for difference.</p>
<p><strong>How to recognize this type:</strong> "Where did the energy go" bookkeeping.</p>
<ol class="soln">
<li>Final charge: $Q=CV$.</li>
<li>Energy stored on capacitor: $U_C=\\tfrac12 CV^2=\\tfrac12 QV$.</li>
<li>Work done by battery: it pushes total charge $Q$ through a constant potential $V$, so $W_{bat}=QV=CV^2$.</li>
<li>Difference: $W_{bat}-U_C=\\tfrac12 CV^2$ — exactly half.</li>
<li>Where? Every electron falls through increasing potential difference in the wires; integrated, $I^2R$ dissipation over charging time equals $\\tfrac12 CV^2$ <em>independent of $R$</em>.</li>
<li>Limit $R\\to 0$: dissipation becomes radiation at the moment of switch closure, same total.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Always exactly half of $W_{bat}$ is lost when charging from a constant-EMF source.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Conductor with cavity containing charge</summary>
<p><strong>Problem.</strong> Neutral conductor (outer $R$), cavity has $+q$ inside. Describe surface charges; find $E(r>R)$; does external charge change the cavity field?</p>
<p><strong>How to recognize this type:</strong> Faraday cage / cavity.</p>
<ol class="soln">
<li>Inside the conductor metal, $\\vec E=0$. Draw a Gaussian surface entirely inside the metal surrounding the cavity: enclosed charge must be zero, so cavity wall carries $-q$ (in general non-uniformly distributed).</li>
<li>Conductor is neutral overall, so outer surface carries $+q$ total.</li>
<li>Outer surface charge arranges uniformly (boundary condition: no external influence yet). Gauss for $r>R$: $E\\cdot 4\\pi r^2=q/\\epsilon_0\\Rightarrow E=kq/r^2$.</li>
<li>Direction: radial outward from the conductor center, regardless of where $+q$ sits inside the cavity.</li>
<li>Bring an external charge near: outer surface redistributes to cancel that field inside the metal. The inner cavity is completely shielded — the $-q$ distribution on the cavity wall is unchanged, so the field inside the cavity is unchanged.</li>
<li>Conclusion: interior and exterior problems are independent — the conductor electrically decouples them.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Conductor's interior and exterior are decoupled. Inner induced $=-q_{cavity}$; outer = rest.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Force between plates (energy method)</summary>
<p><strong>Problem.</strong> Plates at separation $x$, isolated charge $\\pm Q$. Find attractive force. Verify with $F=QE_{other}$. Repeat battery on.</p>
<p><strong>How to recognize this type:</strong> "Force on plate."</p>
<ol class="soln">
<li>Isolated plates ($Q$ fixed): $C(x)=\\epsilon_0 A/x$, so $U(x)=\\dfrac{Q^2}{2C}=\\dfrac{Q^2 x}{2\\epsilon_0 A}$.</li>
<li>Force on plate = $-\\partial U/\\partial x\\big|_Q=-\\dfrac{Q^2}{2\\epsilon_0 A}$. Negative $\\Rightarrow$ wants to decrease $x$: attractive.</li>
<li>Direct check: field produced by one plate alone is $\\sigma/(2\\epsilon_0)$ (not the full $\\sigma/\\epsilon_0$ — a plate doesn't exert force on itself).</li>
<li>Force on the other plate of charge $Q$: $F=QE_{other}=Q\\cdot\\sigma/(2\\epsilon_0)=Q^2/(2\\epsilon_0 A)$. ✓ Same magnitude.</li>
<li>Battery-on case ($V$ fixed): use $U(x)=\\tfrac12 CV^2=\\epsilon_0 AV^2/(2x)$; now $F=+\\partial U/\\partial x\\big|_V=-\\epsilon_0 AV^2/(2x^2)$.</li>
<li>Substitute $V=Q/C=Qx/(\\epsilon_0 A)$ and confirm magnitude $Q^2/(2\\epsilon_0 A)$ — same attraction either way. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> At constant $Q$: $F=-\\partial U/\\partial x$; at constant $V$: $F=+\\partial U/\\partial x$.</p>
</details>
`,

"unit-11": `
<details class="example" open><summary><span class="pill">Example 1</span> Two-battery multi-loop Kirchhoff</summary>
<p><strong>Problem.</strong> Loops share middle branch. Left: $\\varepsilon_1=12$ V, $R_1=2$. Right: $\\varepsilon_2=9$ V, $R_2=3$. Shared: $R_3=6$. Find every current.</p>
<p><strong>How to recognize this type:</strong> Two EMFs, can't reduce by series/parallel.</p>
<ol class="soln">
<li>Label three branch currents: $I_1$ down the left branch, $I_2$ down the right branch, $I_3$ down the shared $R_3$ branch. Assume both batteries drive current into the top node.</li>
<li>KCL at top node: $I_1+I_2=I_3$.</li>
<li>KVL left loop (traverse with current): $\\varepsilon_1-I_1R_1-I_3R_3=0\\Rightarrow 12=2I_1+6I_3$.</li>
<li>KVL right loop: $\\varepsilon_2-I_2R_2-I_3R_3=0\\Rightarrow 9=3I_2+6I_3$.</li>
<li>Substitute $I_2=I_3-I_1$ into right KVL: $9=3(I_3-I_1)+6I_3=9I_3-3I_1\\Rightarrow I_1=3I_3-3$.</li>
<li>Plug into left KVL: $12=2(3I_3-3)+6I_3=12I_3-6\\Rightarrow I_3=1.5$ A.</li>
<li>Back-substitute: $I_1=3(1.5)-3=1.5$ A; $I_2=1.5-1.5=0$ A. The right branch carries no current — the 9 V battery exactly balances the drop $I_3R_3=9$ V.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Arbitrary direction guesses; negative answer just means reversed. $n$ unknowns → $n$ independent KVL/KCL.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> RC charging from ODE</summary>
<p><strong>Problem.</strong> $C=4\\,\\mu$F, $R=200$ kΩ, $\\varepsilon=20$ V; switch closes at $t=0$. Derive $q(t)$, $i(t)$; time to reach 90% of $Q_f$.</p>
<p><strong>How to recognize this type:</strong> $RC$ charging from rest.</p>
<ol class="soln">
<li>KVL around loop: $\\varepsilon-iR-q/C=0$ with $i=dq/dt$.</li>
<li>Rearrange: $R\\dfrac{dq}{dt}=\\varepsilon-\\dfrac{q}{C}\\Rightarrow\\dfrac{dq}{C\\varepsilon-q}=\\dfrac{dt}{RC}$.</li>
<li>Integrate with $q(0)=0$: $-\\ln(C\\varepsilon-q)+\\ln(C\\varepsilon)=t/RC$, i.e. $C\\varepsilon-q=C\\varepsilon\\,e^{-t/\\tau}$ where $\\tau=RC$.</li>
<li>Solve: $q(t)=C\\varepsilon(1-e^{-t/\\tau})$; differentiate: $i(t)=\\dfrac{\\varepsilon}{R}e^{-t/\\tau}$.</li>
<li>Numbers: $\\tau=(2\\times 10^5)(4\\times 10^{-6})=0.80$ s; $Q_f=C\\varepsilon=80\\,\\mu$C; $I_0=\\varepsilon/R=10^{-4}$ A.</li>
<li>Time to 90%: $0.9=1-e^{-t/\\tau}\\Rightarrow e^{-t/\\tau}=0.1\\Rightarrow t=\\tau\\ln 10\\approx 0.80(2.303)\\approx 1.84$ s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $q=Q_f(1-e^{-t/\\tau})$; time to fraction $f$: $t=-\\tau\\ln(1-f)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> RC discharging — half-time and total heat</summary>
<p><strong>Problem.</strong> $C=50\\,\\mu$F at $V_0=100$ V discharges through $R=10$ kΩ. (a) Half-time. (b) Total heat.</p>
<p><strong>How to recognize this type:</strong> No battery; pre-charged cap releases.</p>
<ol class="soln">
<li>KVL (no EMF): $q/C+iR=0$ with $i=dq/dt$.</li>
<li>ODE: $dq/dt=-q/(RC)\\Rightarrow q(t)=Q_0 e^{-t/\\tau}$ with $\\tau=RC$.</li>
<li>Time constant: $\\tau=(10^4)(50\\times 10^{-6})=0.5$ s.</li>
<li>Half-time: $e^{-t_{1/2}/\\tau}=\\tfrac12\\Rightarrow t_{1/2}=\\tau\\ln 2\\approx 0.5(0.693)\\approx 0.347$ s.</li>
<li>Initial stored energy: $U_0=\\tfrac12 CV_0^2=\\tfrac12(50\\times 10^{-6})(100)^2=0.25$ J.</li>
<li>Energy conservation: the capacitor's entire $U_0$ must end up as heat in $R$ (no other sink). Verify by integrating $\\int_0^\\infty i^2R\\,dt=V_0^2R\\cdot(RC/(2R^2))=\\tfrac12 CV_0^2$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Pure discharge: total heat = initial stored energy.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Capacitor at steady state (open)</summary>
<p><strong>Problem.</strong> 12-V battery, branch A: $4\\,\\Omega$ in series with $3\\,\\mu$F; branch B: $6\\,\\Omega$. Long-time current in $6\\,\\Omega$, $V_C$, $Q$?</p>
<p><strong>How to recognize this type:</strong> "Long time" + capacitor.</p>
<ol class="soln">
<li>Steady state rule: $dV_C/dt=0\\Rightarrow i_C=C\\,dV_C/dt=0$. The capacitor branch carries no current.</li>
<li>Since no current flows through the $4\\,\\Omega$ in series with $C$, the voltage drop across that resistor is $IR=0$.</li>
<li>The $6\\,\\Omega$ branch sits directly across 12 V: $I_{6\\Omega}=12/6=2$ A.</li>
<li>Travel from the capacitor's positive terminal back to the battery's positive terminal through the 4-Ω (with zero drop): the full 12 V appears across $C$, so $V_C=12$ V.</li>
<li>Charge: $Q=CV_C=(3\\times 10^{-6})(12)=36\\,\\mu$C.</li>
<li>Battery supplies only the 2-A branch; stores no ongoing energy in the cap (already full). ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> At DC steady state, capacitor is open.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Inductor at steady state (short)</summary>
<p><strong>Problem.</strong> 10 V, $R_1=2\\,\\Omega$ series with ($R_2=6\\,\\Omega$ ∥ $L=0.5$ H). Find steady currents and $U_L$.</p>
<p><strong>How to recognize this type:</strong> "Long time" + inductor.</p>
<ol class="soln">
<li>Steady state rule: $di/dt=0\\Rightarrow V_L=L\\,di/dt=0$. Inductor acts as a wire (short).</li>
<li>A wire across $R_2$ short-circuits it, so all current bypasses $R_2$; effectively $R_2$ is removed.</li>
<li>Circuit reduces to battery + $R_1$: $I_{batt}=\\varepsilon/R_1=10/2=5$ A, all of it through $L$.</li>
<li>Current through $R_2$: $V_{R_2}=0\\Rightarrow I_{R_2}=0$.</li>
<li>Magnetic energy stored: $U_L=\\tfrac12 LI^2=\\tfrac12(0.5)(5)^2=6.25$ J.</li>
<li>This is the initial condition if the switch is later opened — that energy has to go somewhere and drives a transient.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> At DC steady state, inductor is a short (opposite of capacitor).</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Power in a complex network</summary>
<p><strong>Problem.</strong> 24 V, $R_1=4\\,\\Omega$ series with ($R_2=6$ ∥ $R_3=12$). Find each $P$, verify battery power.</p>
<p><strong>How to recognize this type:</strong> Reducible series-parallel network.</p>
<ol class="soln">
<li>Parallel combo: $R_{23}=(6\\cdot 12)/(6+12)=72/18=4\\,\\Omega$.</li>
<li>Series total: $R_{eq}=R_1+R_{23}=4+4=8\\,\\Omega$. Battery current: $I=24/8=3$ A.</li>
<li>Power in $R_1$: $P_1=I^2R_1=(3)^2(4)=36$ W. Voltage across $R_1$: $V_1=IR_1=12$ V.</li>
<li>Voltage across parallel combo: $V_{23}=24-12=12$ V (equals $IR_{23}=12$ V ✓).</li>
<li>Individual powers via $V^2/R$: $P_2=12^2/6=24$ W; $P_3=12^2/12=12$ W.</li>
<li>Total dissipation $=36+24+12=72$ W; battery supplies $\\varepsilon I=24(3)=72$ W. Energy balance ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Use $I^2R$ when $I$ is known, $V^2/R$ when $V$ is known.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Real battery (internal resistance)</summary>
<p><strong>Problem.</strong> $\\varepsilon=12$ V, $r=0.5\\,\\Omega$, $R=5.5\\,\\Omega$. Find $I$, terminal $V$, $P_R$, optimal $R$ for max $P$.</p>
<p><strong>How to recognize this type:</strong> "Internal resistance."</p>
<ol class="soln">
<li>Loop equation: $\\varepsilon=I(R+r)\\Rightarrow I=12/(5.5+0.5)=12/6=2$ A.</li>
<li>Terminal voltage (measured across battery terminals, equivalently across $R$): $V_T=\\varepsilon-Ir=12-2(0.5)=11$ V.</li>
<li>Power to load: $P_R=I^2R=(2)^2(5.5)=22$ W. Internal heating: $P_r=I^2r=2$ W.</li>
<li>Optimize $P_R(R)=\\varepsilon^2 R/(R+r)^2$. Differentiate: $dP_R/dR=\\varepsilon^2\\dfrac{(R+r)^2-R\\cdot 2(R+r)}{(R+r)^4}=\\varepsilon^2\\dfrac{r-R}{(R+r)^3}$.</li>
<li>Set to zero: $R=r=0.5\\,\\Omega$ (matched load).</li>
<li>Max power: $P_{max}=\\varepsilon^2/(4r)=144/2=72$ W — but efficiency drops to 50% since equal power dissipates in $r$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $V_T=\\varepsilon-Ir$. Max power transfer when $R_{load}=r$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Non-ideal meters</summary>
<p><strong>Problem.</strong> Ideal ammeter $R_A\\to 0$; voltmeter $R_V\\to\\infty$. Finite $R_A=5\\,\\Omega$ in a 10 V/100 Ω circuit: what reading?</p>
<p><strong>How to recognize this type:</strong> "Non-ideal meter" error analysis.</p>
<ol class="soln">
<li>Ideal-ammeter prediction (if $R_A=0$): $I_{true}=\\varepsilon/R=10/100=0.100$ A.</li>
<li>Put the real ammeter in series; loop resistance becomes $R+R_A=105\\,\\Omega$.</li>
<li>New current: $I_{meas}=10/105\\approx 0.0952$ A.</li>
<li>Fractional error: $(I_{true}-I_{meas})/I_{true}=(0.100-0.0952)/0.100\\approx 4.8\\%$ — ammeter reads low because it adds resistance.</li>
<li>Voltmeter analog: placing it across an element draws $I_V=V/R_V$; this extra current through the series source impedance drops the true $V$ being measured.</li>
<li>Rule of thumb: ammeter error $\\sim R_A/R$; voltmeter error $\\sim R_{source}/R_V$. Keep each tiny by proper design. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Ammeters need tiny $R$; voltmeters need huge $R$.</p>
</details>
`,

  "unit-12": `
<details class="example" open><summary><span class="pill">Example 1</span> Proton in uniform B</summary>
<p><strong>Problem.</strong> Proton at $v=2\\times 10^6$ m/s right, $B=0.5$ T into page. Find $r$, $T$, direction of curve.</p>
<p><strong>How to recognize this type:</strong> Particle in uniform $B$, velocity $\\perp B$.</p>
<ol class="soln">
<li><strong>Set up Newton's 2nd law for circular motion.</strong> The magnetic force is the centripetal force: $qvB=\\dfrac{mv^2}{r}$.</li>
<li><strong>Solve algebraically for $r$.</strong> Cancel one factor of $v$: $r=\\dfrac{mv}{qB}$.</li>
<li><strong>Substitute numbers.</strong> $r=\\dfrac{(1.67\\times 10^{-27})(2\\times 10^6)}{(1.6\\times 10^{-19})(0.5)}\\approx 4.2\\times 10^{-2}$ m.</li>
<li><strong>Period from circumference/speed.</strong> $T=\\dfrac{2\\pi r}{v}=\\dfrac{2\\pi m}{qB}\\approx 1.31\\times 10^{-7}$ s — independent of $v$.</li>
<li><strong>Direction via right-hand rule.</strong> $\\vec v=+\\hat x$, $\\vec B=-\\hat z$, so $\\vec v\\times\\vec B=+\\hat y$ (up). Positive proton curves upward initially.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $r\\propto v$, $T$ independent of $v$. Flip RHR for negative charges.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Helical motion — pitch</summary>
<p><strong>Problem.</strong> Electron at $v=5\\times 10^6$ m/s at $30°$ to $\\vec B=0.2\\hat x$ T. Find helix radius and pitch.</p>
<p><strong>How to recognize this type:</strong> $\\vec v$ has parallel and perpendicular components.</p>
<ol class="soln">
<li><strong>Decompose $\\vec v$ relative to $\\vec B$.</strong> $v_\\parallel=v\\cos 30°=4.33\\times 10^6$ m/s; $v_\\perp=v\\sin 30°=2.5\\times 10^6$ m/s.</li>
<li><strong>Only $v_\\perp$ curls.</strong> Magnetic force uses $v_\\perp$: $ev_\\perp B=\\dfrac{m_e v_\\perp^2}{r}\\Rightarrow r=\\dfrac{m_e v_\\perp}{eB}$.</li>
<li><strong>Plug in numbers for $r$.</strong> $r=\\dfrac{(9.11\\times 10^{-31})(2.5\\times 10^6)}{(1.6\\times 10^{-19})(0.2)}\\approx 7.1\\times 10^{-5}$ m.</li>
<li><strong>Period is set by $B$, not by $v_\\perp$.</strong> $T=\\dfrac{2\\pi m_e}{eB}=\\dfrac{2\\pi(9.11\\times 10^{-31})}{(1.6\\times 10^{-19})(0.2)}\\approx 1.79\\times 10^{-10}$ s.</li>
<li><strong>Pitch = axial advance per period.</strong> $p=v_\\parallel T=(4.33\\times 10^6)(1.79\\times 10^{-10})\\approx 7.7\\times 10^{-4}$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Split $\\vec v$: $v_\\parallel$ → straight line; $v_\\perp$ → circle. Helix superposition.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Velocity selector + mass spectrometer</summary>
<p><strong>Problem.</strong> $E=3\\times 10^5$ V/m, $B_1=0.15$ T (crossed). Undeflected ions enter $B_2=0.30$ T; semicircle diameter 0.128 m. Find $v$ and mass.</p>
<p><strong>How to recognize this type:</strong> Crossed fields + curved path.</p>
<ol class="soln">
<li><strong>Selector balance.</strong> Undeflected means electric and magnetic forces cancel: $qE=qvB_1$.</li>
<li><strong>Solve for $v$.</strong> $v=\\dfrac{E}{B_1}=\\dfrac{3\\times 10^5}{0.15}=2.0\\times 10^6$ m/s. Notice the result is independent of charge.</li>
<li><strong>In the analyzer, $B_2$ alone bends the ion.</strong> $qvB_2=\\dfrac{mv^2}{r}\\Rightarrow m=\\dfrac{qB_2 r}{v}$ with $r=d/2=0.064$ m.</li>
<li><strong>Substitute for $m$ (assume $q=e$).</strong> $m=\\dfrac{(1.6\\times 10^{-19})(0.30)(0.064)}{2.0\\times 10^6}\\approx 1.54\\times 10^{-27}$ kg.</li>
<li><strong>Identify.</strong> That's within a few % of the proton mass ($1.67\\times 10^{-27}$ kg) — consistent with $\\mathrm{H}^+$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Selector: $v=E/B$. Analyzer: $m=qBr/v$. Two-stage reasoning.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> B at center of circular coil</summary>
<p><strong>Problem.</strong> $N=20$ turns, $R=5$ cm, $I=3$ A. Find $B$ at center.</p>
<p><strong>How to recognize this type:</strong> Full loop, field at center.</p>
<ol class="soln">
<li><strong>Biot–Savart for one element.</strong> $d\\vec B=\\dfrac{\\mu_0 I}{4\\pi}\\dfrac{d\\vec\\ell\\times\\hat r}{R^2}$. On a loop, $d\\vec\\ell\\perp\\hat r$ so magnitudes give $dB=\\dfrac{\\mu_0 I\\,d\\ell}{4\\pi R^2}$.</li>
<li><strong>Symmetry aligns all $d\\vec B$.</strong> Every element contributes along the axis; just add magnitudes.</li>
<li><strong>Integrate around the loop.</strong> $B_{\\text{1 turn}}=\\dfrac{\\mu_0 I}{4\\pi R^2}\\oint d\\ell=\\dfrac{\\mu_0 I}{4\\pi R^2}(2\\pi R)=\\dfrac{\\mu_0 I}{2R}$.</li>
<li><strong>Stack $N$ turns.</strong> $B=\\dfrac{N\\mu_0 I}{2R}=\\dfrac{20\\,(4\\pi\\times 10^{-7})(3)}{2(0.05)}\\approx 7.54\\times 10^{-4}$ T.</li>
<li><strong>Direction.</strong> Curl the right hand in the direction of current flow; the thumb gives $\\vec B$ along the axis.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $B_{center}=\\mu_0 NI/(2R)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> B at center of a semicircular arc</summary>
<p><strong>Problem.</strong> Wire: straight-in, semicircle radius $R=2$ cm, straight-out (collinear). $I=4$ A. Find $B$ at center.</p>
<p><strong>How to recognize this type:</strong> Bent wire of straights and arc.</p>
<ol class="soln">
<li><strong>Identify zero contributions.</strong> For the straight segments, $d\\vec\\ell$ is parallel (or anti-parallel) to $\\hat r$, so $d\\vec\\ell\\times\\hat r=0$ — they contribute nothing at the center.</li>
<li><strong>Arc contribution via fraction of a full loop.</strong> A full loop gives $\\mu_0 I/(2R)$; a semicircle is half: $B=\\dfrac{1}{2}\\cdot\\dfrac{\\mu_0 I}{2R}=\\dfrac{\\mu_0 I}{4R}$.</li>
<li><strong>Plug in.</strong> $B=\\dfrac{(4\\pi\\times 10^{-7})(4)}{4(0.02)}\\approx 6.28\\times 10^{-5}$ T.</li>
<li><strong>General arc formula.</strong> For arc angle $\\theta$: $B=\\dfrac{\\mu_0 I\\theta}{4\\pi R}$. Here $\\theta=\\pi$ recovers the above.</li>
<li><strong>Direction.</strong> Right-hand rule on the arc gives $\\vec B$ perpendicular to the plane at the center.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Straight lines through field point contribute nothing; arcs scale by $\\theta/(2\\pi)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Finite straight wire — Biot–Savart</summary>
<p><strong>Problem.</strong> Wire $-L$ to $L$, point $P$ at perpendicular distance $a$ from midpoint. Find $B$; limit $L\\to\\infty$.</p>
<p><strong>How to recognize this type:</strong> Finite wire, field off-axis.</p>
<ol class="soln">
<li><strong>Geometry.</strong> Let the wire lie along $x$; $P$ is at $(0,a)$. For an element at $x$, distance $s=\\sqrt{x^2+a^2}$ and $|d\\vec\\ell\\times\\hat r|=\\sin\\phi\\,dx=\\dfrac{a\\,dx}{\\sqrt{x^2+a^2}}$.</li>
<li><strong>Biot–Savart integrand.</strong> $dB=\\dfrac{\\mu_0 I}{4\\pi}\\dfrac{a\\,dx}{(x^2+a^2)^{3/2}}$.</li>
<li><strong>Integrate using $\\int\\dfrac{dx}{(x^2+a^2)^{3/2}}=\\dfrac{x}{a^2\\sqrt{x^2+a^2}}$.</strong> Evaluating from $-L$ to $L$ gives $\\dfrac{2L}{a^2\\sqrt{L^2+a^2}}$.</li>
<li><strong>Collect.</strong> $B=\\dfrac{\\mu_0 I}{4\\pi a}\\cdot\\dfrac{2L}{\\sqrt{L^2+a^2}}$.</li>
<li><strong>Limit $L\\to\\infty$.</strong> $\\dfrac{2L}{\\sqrt{L^2+a^2}}\\to 2$, so $B\\to\\dfrac{\\mu_0 I}{2\\pi a}$ — the classic infinite-wire result.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $B=(\\mu_0 I/4\\pi a)(\\sin\\theta_1+\\sin\\theta_2)$; infinite limit = $\\mu_0 I/(2\\pi a)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Ampère — solenoid interior</summary>
<p><strong>Problem.</strong> $n=500$ turns/m, $I=2$ A. Derive $B$ inside.</p>
<p><strong>How to recognize this type:</strong> Long solenoid.</p>
<ol class="soln">
<li><strong>Choose an Amperian rectangle.</strong> One long side of length $\\ell$ inside along the axis, the opposite side far outside, short sides perpendicular.</li>
<li><strong>Evaluate each side of $\\oint\\vec B\\cdot d\\vec\\ell$.</strong> Outside side: $B\\approx 0$. Perpendicular sides: $\\vec B\\perp d\\vec\\ell$, contribution 0. Only the inside side contributes $B\\ell$.</li>
<li><strong>Count enclosed current.</strong> Turns crossed = $n\\ell$; enclosed current $I_{enc}=n\\ell I$.</li>
<li><strong>Ampère's law.</strong> $B\\ell=\\mu_0 n\\ell I\\Rightarrow B=\\mu_0 nI$.</li>
<li><strong>Numeric.</strong> $B=(4\\pi\\times 10^{-7})(500)(2)\\approx 1.26\\times 10^{-3}$ T, uniform and axial.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Interior $B=\\mu_0 nI$, uniform.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Ampère — coaxial cable</summary>
<p><strong>Problem.</strong> Inner solid radius $a$, out; outer shell radius $b$, in. Find $B(r)$ in three regions.</p>
<p><strong>How to recognize this type:</strong> Concentric currents with symmetry.</p>
<ol class="soln">
<li><strong>Symmetry ⇒ circular field lines.</strong> Take an Amperian circle of radius $r$ centered on the axis; $\\oint\\vec B\\cdot d\\vec\\ell=B(2\\pi r)$.</li>
<li><strong>Region $r<a$ (inside inner conductor).</strong> Uniform current density gives $I_{enc}=I_0\\dfrac{\\pi r^2}{\\pi a^2}=I_0\\dfrac{r^2}{a^2}$. Ampère: $B=\\dfrac{\\mu_0 I_0 r}{2\\pi a^2}$ (linear in $r$).</li>
<li><strong>Region $a<r<b$.</strong> $I_{enc}=I_0$; $B=\\dfrac{\\mu_0 I_0}{2\\pi r}$ — same as infinite wire.</li>
<li><strong>Region $r>b$.</strong> Inner current $+I_0$ and outer shell $-I_0$ both enclosed; $I_{enc}=0$, so $B=0$.</li>
<li><strong>Continuity check.</strong> At $r=a$ both expressions give $\\mu_0 I_0/(2\\pi a)$; at $r=b$ the middle expression jumps down to 0 as expected.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Linear inside conductor, $1/r$ between, zero outside when currents cancel.</p>
</details>

<details class="example"><summary><span class="pill">Example 9</span> Force on wire and between parallel wires</summary>
<p><strong>Problem.</strong> (a) $\\ell=0.40$ m, $I=5$ A east, $B=0.3$ T north. Find force. (b) Two wires, $d=2$ cm, $I_1=I_2=10$ A parallel. Force per length?</p>
<p><strong>How to recognize this type:</strong> Wire in external $\\vec B$ or two parallel wires.</p>
<ol class="soln">
<li><strong>(a) Force law.</strong> $\\vec F=I\\vec\\ell\\times\\vec B$. Since $\\vec\\ell\\perp\\vec B$, $F=I\\ell B\\sin 90°$.</li>
<li><strong>(a) Numbers and direction.</strong> $F=(5)(0.40)(0.3)=0.60$ N; east $\\times$ north $=$ up, so force points upward.</li>
<li><strong>(b) Field from wire 1 at wire 2.</strong> $B_1=\\dfrac{\\mu_0 I_1}{2\\pi d}=\\dfrac{(4\\pi\\times 10^{-7})(10)}{2\\pi(0.02)}=1.0\\times 10^{-4}$ T.</li>
<li><strong>(b) Force per length on wire 2.</strong> $\\dfrac{F}{\\ell}=I_2 B_1=(10)(1.0\\times 10^{-4})=1.0\\times 10^{-3}$ N/m.</li>
<li><strong>(b) Sign.</strong> RHR: $\\vec I_2\\times\\vec B_1$ points toward wire 1 — parallel currents attract; anti-parallel would repel.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\vec F=I\\vec\\ell\\times\\vec B$ handles both cases.</p>
</details>
`,

  "unit-13": `
<details class="example" open><summary><span class="pill">Example 1</span> Sliding rod on rails (motional EMF)</summary>
<p><strong>Problem.</strong> $L=0.5$ m rod, $v=3$ m/s, $B=0.8$ T up, $R=2\\,\\Omega$. Find $\\varepsilon$, $I$, force, power. Verify energy conservation.</p>
<p><strong>How to recognize this type:</strong> Moving conductor, changing area.</p>
<ol class="soln">
<li><strong>Flux and its rate of change.</strong> $\\Phi=BLx\\Rightarrow\\dfrac{d\\Phi}{dt}=BL\\dfrac{dx}{dt}=BLv$.</li>
<li><strong>Faraday gives EMF.</strong> $|\\varepsilon|=BLv=(0.8)(0.5)(3)=1.2$ V. Lenz: induced current opposes the increasing flux.</li>
<li><strong>Current.</strong> $I=\\dfrac{\\varepsilon}{R}=\\dfrac{1.2}{2}=0.6$ A.</li>
<li><strong>Magnetic drag on the rod.</strong> $F_{mag}=BIL=(0.8)(0.6)(0.5)=0.24$ N, directed opposite to $\\vec v$. For constant $v$, $F_{ext}=0.24$ N.</li>
<li><strong>Mechanical input power.</strong> $P_{ext}=F_{ext}v=(0.24)(3)=0.72$ W.</li>
<li><strong>Resistive dissipation.</strong> $P_R=I^2R=(0.6)^2(2)=0.72$ W. $P_{ext}=P_R$ ✓ — mechanical work converts fully to heat.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\varepsilon=BLv$ converts mechanical work to electric heat; exact equality at constant $v$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Loop entering/exiting a field</summary>
<p><strong>Problem.</strong> Square $a=0.10$ m, $R=0.05\\,\\Omega$, $v=2$ m/s, enters region width $w=0.20$ m with $B=0.5$ T into page. Sketch $\\varepsilon(t)$, $I(t)$.</p>
<p><strong>How to recognize this type:</strong> Rigid loop crossing boundary.</p>
<ol class="soln">
<li><strong>Three phases set by geometry.</strong> Entering lasts $a/v=0.05$ s; fully inside lasts $(w-a)/v=0.05$ s; exiting lasts $a/v=0.05$ s.</li>
<li><strong>Phase 1 — entering.</strong> Only the leading edge is in the field; $\\Phi=Bax\\Rightarrow\\varepsilon=Bav=(0.5)(0.1)(2)=0.10$ V.</li>
<li><strong>Phase 1 current and direction.</strong> $I=\\varepsilon/R=0.10/0.05=2.0$ A. Flux into page is increasing, so induced current is counterclockwise (Lenz) to create out-of-page flux.</li>
<li><strong>Phase 2 — fully immersed.</strong> $\\Phi=Ba^2$ constant; $\\varepsilon=0$, $I=0$ regardless of speed.</li>
<li><strong>Phase 3 — exiting.</strong> Flux now decreasing: $\\varepsilon=-Bav=-0.10$ V, $|I|=2.0$ A, clockwise to oppose the decrease.</li>
<li><strong>Graph shape.</strong> $\\varepsilon(t)$ is a square pulse $+0.10$ V, then 0, then $-0.10$ V; $I(t)$ mirrors it scaled by $1/R$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Only the edge crossing boundary changes flux. Fully-immersed loop has zero EMF no matter how fast.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Rotating loop — AC generator</summary>
<p><strong>Problem.</strong> $N=50$, $A=0.02$ m², $B=0.3$ T, $\\omega=120$ rad/s. Derive $\\varepsilon(t)$; find peak.</p>
<p><strong>How to recognize this type:</strong> Coil rotating in uniform $B$.</p>
<ol class="soln">
<li><strong>Flux through one turn.</strong> $\\Phi_1=\\vec B\\cdot\\vec A=BA\\cos\\theta$, with $\\theta=\\omega t$ if we start with normal parallel to $\\vec B$.</li>
<li><strong>Total flux linkage.</strong> $\\Phi_{tot}=N\\Phi_1=NBA\\cos(\\omega t)$.</li>
<li><strong>Faraday's law.</strong> $\\varepsilon=-\\dfrac{d\\Phi_{tot}}{dt}=NBA\\omega\\sin(\\omega t)$.</li>
<li><strong>Peak amplitude.</strong> $\\varepsilon_0=NBA\\omega=(50)(0.3)(0.02)(120)=36$ V.</li>
<li><strong>When the peak occurs.</strong> $\\sin(\\omega t)=1$ when the coil's plane is parallel to $\\vec B$ (flux momentarily zero, but changing fastest).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Sinusoidal EMF from rotation; peak at plane-parallel-to-$B$ (zero flux).</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Changing solenoid field → outer loop</summary>
<p><strong>Problem.</strong> Solenoid $r_s=2$ cm, $n=1000$/m, $dI/dt=50$ A/s. Outer loop $r_L=5$ cm, $R=0.1\\,\\Omega$. Find $\\varepsilon$, $I_L$, induced $E$ at $r=5$ cm.</p>
<p><strong>How to recognize this type:</strong> Stationary outer loop; changing interior $B$.</p>
<ol class="soln">
<li><strong>Field exists only inside solenoid.</strong> $B_{in}=\\mu_0 nI$; outside $\\approx 0$. So flux through the outer loop uses only area $\\pi r_s^2$: $\\Phi=\\mu_0 nI\\cdot\\pi r_s^2$.</li>
<li><strong>Induced EMF.</strong> $\\varepsilon=\\dfrac{d\\Phi}{dt}=\\mu_0 n\\pi r_s^2\\dfrac{dI}{dt}=(4\\pi\\times 10^{-7})(1000)\\pi(0.02)^2(50)$.</li>
<li><strong>Crunch.</strong> $\\varepsilon\\approx 7.9\\times 10^{-5}$ V.</li>
<li><strong>Loop current.</strong> $I_L=\\varepsilon/R=7.9\\times 10^{-5}/0.1\\approx 7.9\\times 10^{-4}$ A.</li>
<li><strong>Induced electric field from $\\oint\\vec E\\cdot d\\vec\\ell=-d\\Phi/dt$.</strong> By symmetry $E(2\\pi r_L)=|\\varepsilon|$, so $E=\\dfrac{\\varepsilon}{2\\pi r_L}=\\dfrac{7.9\\times 10^{-5}}{2\\pi(0.05)}\\approx 2.5\\times 10^{-4}$ V/m.</li>
<li><strong>Key takeaway.</strong> $\\vec E\\ne 0$ at $r_L$ even though $\\vec B=0$ there — the induced $E$ circulates around regions of changing flux.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Induced $E$ exists outside the field region — curls around $d\\Phi/dt$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> LR circuit — current growth</summary>
<p><strong>Problem.</strong> $\\varepsilon=12$ V, $R=4\\,\\Omega$, $L=2$ H; switch at $t=0$. Derive $I(t)$; half-time; $dI/dt$ at $t=0$.</p>
<p><strong>How to recognize this type:</strong> LR energizing.</p>
<ol class="soln">
<li><strong>Kirchhoff's voltage law.</strong> Around the loop: $\\varepsilon-IR-L\\dfrac{dI}{dt}=0$.</li>
<li><strong>Separate variables.</strong> $\\dfrac{dI}{\\varepsilon/R-I}=\\dfrac{R}{L}dt$; integrate with $I(0)=0$.</li>
<li><strong>Solution.</strong> $I(t)=\\dfrac{\\varepsilon}{R}\\left(1-e^{-t/\\tau}\\right)$ with $\\tau=L/R=2/4=0.5$ s and $I_\\infty=\\varepsilon/R=3$ A.</li>
<li><strong>Half-rise time.</strong> Set $I=I_\\infty/2$: $1-e^{-t/\\tau}=1/2\\Rightarrow t_{1/2}=\\tau\\ln 2\\approx 0.347$ s.</li>
<li><strong>Initial slope.</strong> At $t=0$, $I=0$, so KVL gives $L\\dot I=\\varepsilon$, hence $\\dot I(0)=\\varepsilon/L=12/2=6$ A/s.</li>
<li><strong>Endpoint check.</strong> As $t\\to\\infty$, $\\dot I\\to 0$ and $I\\to\\varepsilon/R$: inductor behaves like a plain wire.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Inductor = open at $t=0^+$, wire at steady state.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> LR decay and flyback diode</summary>
<p><strong>Problem.</strong> Steady state $I_0=3$ A. Battery disconnected; $L=2$ H across $R=4\\,\\Omega$. Find $I(t)$, total heat, and why a flyback diode prevents voltage spikes.</p>
<p><strong>How to recognize this type:</strong> LR discharging.</p>
<ol class="soln">
<li><strong>Loop equation (no source).</strong> $L\\dfrac{dI}{dt}+IR=0\\Rightarrow \\dfrac{dI}{I}=-\\dfrac{R}{L}dt$.</li>
<li><strong>Exponential decay.</strong> $I(t)=I_0 e^{-t/\\tau}$ with $\\tau=L/R=0.5$ s.</li>
<li><strong>Initial stored energy.</strong> $U_L=\\tfrac12 LI_0^2=\\tfrac12(2)(3)^2=9$ J.</li>
<li><strong>Heat dissipated.</strong> Integrating $P=I^2R$ from $0$ to $\\infty$ gives exactly $U_L=9$ J — all stored energy ends up in $R$.</li>
<li><strong>Why flyback matters.</strong> If you simply open the switch, $I_L$ must drop to 0 almost instantly; $V_L=L\\,dI/dt$ produces a huge spike that can arc across contacts or destroy transistors.</li>
<li><strong>Fix.</strong> A diode anti-parallel to $L$ becomes forward-biased at the instant of opening, providing a low-resistance decay path so $I$ falls gracefully on the $L/R$ timescale.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $I_L$ cannot change instantly; always supply a decay path.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> LR energy balance</summary>
<p><strong>Problem.</strong> For the LR of Example 5: energy stored at steady state; total battery work during transient; verify conservation.</p>
<p><strong>How to recognize this type:</strong> Energy bookkeeping.</p>
<ol class="soln">
<li><strong>Steady-state stored energy.</strong> $U_L=\\tfrac12 LI_\\infty^2=\\tfrac12(2)(3)^2=9$ J.</li>
<li><strong>Battery work during transient.</strong> $W_{batt}=\\int_0^\\infty\\varepsilon\\,I(t)\\,dt=\\varepsilon\\int_0^\\infty\\dfrac{\\varepsilon}{R}(1-e^{-t/\\tau})\\,dt$. Care: the $(\\varepsilon/R)\\cdot 1$ piece is unbounded — what's meaningful is charge delivered during the transient relative to steady state.</li>
<li><strong>Correct accounting — integrate only the transient excess.</strong> Use $W_{batt,\\,trans}=\\int_0^\\infty\\varepsilon\\,I\\,dt\\big|_{transient\\,piece}$ by splitting into steady + transient; the finite transient part gives $W_{batt,\\,trans}=\\varepsilon I_\\infty\\tau=(12)(3)(0.5)=18$ J.</li>
<li><strong>Resistor dissipation during transient.</strong> $\\int_0^\\infty I^2R\\,dt$ with $I=I_\\infty(1-e^{-t/\\tau})$ evaluates to $\\tfrac12\\varepsilon I_\\infty\\tau=9$ J.</li>
<li><strong>Ledger.</strong> Battery 18 J = 9 J in $L$ + 9 J in $R$. Half stored, half dissipated — universal for LR energizing.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Energizing an inductor always dissipates half the battery's transient work.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Mutual inductance / transformer</summary>
<p><strong>Problem.</strong> Primary $N_1=200$, $A=5\\times 10^{-4}$ m², $\\ell=0.25$ m; secondary $N_2=50$ on same core. (a) $M$. (b) $\\varepsilon_2$ if $dI_1/dt=20$ A/s. (c) Why does a transformer need AC?</p>
<p><strong>How to recognize this type:</strong> Coupled coils.</p>
<ol class="soln">
<li><strong>Primary field.</strong> Treat primary as a long solenoid: $B_1=\\mu_0(N_1/\\ell)I_1$.</li>
<li><strong>Flux linkage in secondary.</strong> Each secondary turn links $\\Phi=B_1 A$; total linkage $N_2\\Phi=\\mu_0\\dfrac{N_1 N_2 A}{\\ell}I_1$.</li>
<li><strong>Mutual inductance.</strong> $M=\\dfrac{N_2\\Phi}{I_1}=\\dfrac{\\mu_0 N_1 N_2 A}{\\ell}=\\dfrac{(4\\pi\\times 10^{-7})(200)(50)(5\\times 10^{-4})}{0.25}\\approx 2.5\\times 10^{-5}$ H.</li>
<li><strong>Induced secondary EMF.</strong> $\\varepsilon_2=M\\dfrac{dI_1}{dt}=(2.5\\times 10^{-5})(20)=5.0\\times 10^{-4}$ V.</li>
<li><strong>AC requirement.</strong> Steady DC $\\Rightarrow dI_1/dt=0\\Rightarrow\\varepsilon_2=0$. Only a time-varying primary current couples energy to the secondary.</li>
<li><strong>Turns ratio.</strong> For ideal AC transformer $V_2/V_1=N_2/N_1=50/200=1/4$ — a step-down by 4.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Transformers need changing flux; AC primary required.</p>
</details>

<details class="example"><summary><span class="pill">Example 9</span> Self-inductance of solenoid</summary>
<p><strong>Problem.</strong> Derive $L$ for long solenoid. Compute $L$ for $N=500$, $\\ell=0.3$ m, $A=4\\times 10^{-4}$ m². At $I=2$ A, find $u_B$ and check total energy.</p>
<p><strong>How to recognize this type:</strong> Standard geometry, derive $L$.</p>
<ol class="soln">
<li><strong>Interior field.</strong> $B=\\mu_0 nI=\\mu_0(N/\\ell)I$.</li>
<li><strong>Total flux linkage.</strong> Each turn links $BA$; with $N$ turns, $N\\Phi=N\\cdot BA=\\dfrac{\\mu_0 N^2 A}{\\ell}I$.</li>
<li><strong>Definition of $L$.</strong> $L=\\dfrac{N\\Phi}{I}=\\dfrac{\\mu_0 N^2 A}{\\ell}=\\dfrac{(4\\pi\\times 10^{-7})(500)^2(4\\times 10^{-4})}{0.3}\\approx 4.19\\times 10^{-4}$ H.</li>
<li><strong>Field value at $I=2$ A.</strong> $B=\\mu_0(500/0.3)(2)\\approx 4.19\\times 10^{-3}$ T.</li>
<li><strong>Energy density.</strong> $u_B=\\dfrac{B^2}{2\\mu_0}=\\dfrac{(4.19\\times 10^{-3})^2}{2(4\\pi\\times 10^{-7})}\\approx 6.98$ J/m³.</li>
<li><strong>Two ways to total energy — must agree.</strong> Circuit view: $U=\\tfrac12 LI^2=\\tfrac12(4.19\\times 10^{-4})(2)^2\\approx 8.38\\times 10^{-4}$ J. Field view: $u_B\\cdot A\\ell=(6.98)(4\\times 10^{-4})(0.3)\\approx 8.38\\times 10^{-4}$ J ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $L=\\mu_0 N^2 A/\\ell$. Two views (circuit energy, field energy density) agree.</p>
</details>
`,

};

// Expanded worked-example archetypes for every AP Physics C unit.
// Loaded at runtime by script.js, which injects the HTML into each unit's
// Worked Examples section, replacing the original compact examples.

window.EXAMPLES = {
  "unit-1": `
<details class="example" open><summary><span class="pill">Example 1</span> Non-constant acceleration via integration</summary>
<p><strong>Problem.</strong> A particle moves along the $x$-axis with $a(t)=6t-4$ m/s². At $t=0$, $v_0=2$ m/s and $x_0=1$ m. Find $v(t)$, $x(t)$, and any times when the particle is at rest.</p>
<p><strong>How to recognize this type:</strong> Acceleration is given as a function of $t$, so $v=v_0+at$ does not apply — must integrate.</p>
<ol class="soln">
<li>$v(t) = v_0 + \\int_0^t a(t')dt' = 2+3t^2-4t$ m/s.</li>
<li>$x(t)=x_0+\\int_0^t v(t')dt' = 1+2t+t^3-2t^2$ m.</li>
<li>Set $v=0$: $3t^2-4t+2=0$; discriminant $16-24<0$, so never at rest.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> When $a$ depends on $t$ (or $v$), always integrate. Never default to constant-acceleration kinematics.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Projectile from a cliff</summary>
<p><strong>Problem.</strong> A ball is launched horizontally at $v_0=15$ m/s from a 45-m cliff. Find (a) flight time, (b) range, (c) impact speed and angle. Use $g=10$ m/s².</p>
<p><strong>How to recognize this type:</strong> 2D projectile with different launch and landing heights.</p>
<ol class="soln">
<li>Vertical: $h=\\tfrac12 gt^2 \\Rightarrow t=\\sqrt{2h/g}=3$ s.</li>
<li>Range: $R=v_0 t=45$ m.</li>
<li>Impact: $v_y=-gt=-30$ m/s; $|\\vec v|=\\sqrt{v_x^2+v_y^2}\\approx 33.5$ m/s at $\\tan^{-1}(30/15)\\approx 63.4°$ below horizontal.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Treat $x$ and $y$ independently; time is the only shared variable.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Reading a $v$-$t$ graph</summary>
<p><strong>Problem.</strong> A $v$-$t$ graph: linear from $(0,0)$ to $(2\\,s,8)$ m/s; constant at 8 m/s until $t=5$ s; linear down from 8 to $-4$ m/s at $t=7$ s. Find (a) each interval's $a$, (b) displacement, (c) distance, (d) sketch $a(t)$.</p>
<p><strong>How to recognize this type:</strong> Graph-based — slopes give $a$, signed areas give $\\Delta x$.</p>
<ol class="soln">
<li>Slopes: $4,\\ 0,\\ -6$ m/s².</li>
<li>Displacement (signed area): triangle $8$ + rectangle $24$ + trapezoid crossing zero at $t\\approx 6.33$ s gives $\\approx 36$ m.</li>
<li>Distance adds the magnitude of the negative piece: $\\approx 38.7$ m.</li>
<li>$a(t)$: step function $+4 \\to 0 \\to -6$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Slope descends one derivative; area ascends one. Watch sign changes of $v$ for distance vs displacement.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Relative motion — boat across a river</summary>
<p><strong>Problem.</strong> River flows east at 3 m/s; boat's speed is 4 m/s relative to water. River is 120 m wide. (a) Aim due north: find crossing time, drift, ground speed. (b) Heading to reach directly north of start.</p>
<p><strong>How to recognize this type:</strong> Two velocities given in different frames.</p>
<ol class="soln">
<li>(a) Perpendicular component sets time: $t=120/4=30$ s. Drift $=3(30)=90$ m. Ground speed $=\\sqrt{3^2+4^2}=5$ m/s.</li>
<li>(b) Need $4\\sin\\theta=3 \\Rightarrow \\theta=\\sin^{-1}(0.75)\\approx 48.6°$ upstream.</li>
<li>Ground speed now $4\\cos\\theta \\approx 2.65$ m/s; crossing $\\approx 45.3$ s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Draw the velocity triangle. The perpendicular component sets time; the parallel component sets drift.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Angled projectile landing on a platform</summary>
<p><strong>Problem.</strong> $v_0=25$ m/s at $37°$ above horizontal from ground. Lands on a 5-m-high platform. Find flight time and horizontal range. ($g=10$, $\\sin 37=0.6$, $\\cos 37=0.8$.)</p>
<p><strong>How to recognize this type:</strong> Angled launch with landing height different from launch.</p>
<ol class="soln">
<li>$v_{x0}=20$, $v_{y0}=15$ m/s.</li>
<li>$y(t)=15t-5t^2=5 \\Rightarrow t^2-3t+1=0 \\Rightarrow t=\\tfrac{3+\\sqrt 5}{2}\\approx 2.62$ s (descending root).</li>
<li>$R=20(2.62)\\approx 52.4$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Landing at a different height gives a quadratic in $t$. Choose the physically meaningful (usually larger) root.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Velocity-dependent acceleration $a=-kv$</summary>
<p><strong>Problem.</strong> $a=-kv$ with $k=0.5$ s$^{-1}$, $v(0)=20$ m/s. Find $v(t)$, time to reach $v=5$ m/s, total distance as $t\\to\\infty$.</p>
<p><strong>How to recognize this type:</strong> Acceleration depends on velocity (linear drag model).</p>
<ol class="soln">
<li>Separate: $dv/v=-k\\,dt \\Rightarrow v(t)=20 e^{-0.5t}$.</li>
<li>$v=5$: $t=\\ln(4)/0.5\\approx 2.77$ s.</li>
<li>$x_\\infty=\\int_0^\\infty v\\,dt=v_0/k=40$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> For $a=a(v)$, separate variables. Exponential $v$-decay gives finite stopping distance but infinite stopping time.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Free fall with linear drag (qualitative)</summary>
<p><strong>Problem.</strong> Ball dropped, drag $F_d=bv$ upward. (a) Describe $v(t)$ and $a(t)$. (b) Thrown up: compare time up vs time down. (c) Compare launch and return speeds.</p>
<p><strong>How to recognize this type:</strong> Air resistance problem with few numbers — conceptual.</p>
<ol class="soln">
<li>$ma=mg-bv$: $a(0)=g$, decays to 0 as $v\\to v_t=mg/b$.</li>
<li>Up: gravity AND drag both decelerate, $|a|>g$. Down: drag opposes gravity, $|a|<g$. So time down > time up.</li>
<li>Energy lost to drag both ways → return speed < launch speed.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Drag breaks the symmetry of projectile motion: down takes longer; return speed is smaller.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Piecewise $v(t)$ → position</summary>
<p><strong>Problem.</strong> Piecewise $v(t)$ with $x_0=2$ m: 3 m/s for $0\\le t<2$; linear from 3 to $-3$ m/s over $[2,5]$; constant $-3$ m/s for $[5,8]$. Find $x(t)$, turnaround time, distance over $[0,8]$.</p>
<p><strong>How to recognize this type:</strong> Piecewise $v(t)$ — integrate piecewise, matching endpoints.</p>
<ol class="soln">
<li>$[0,2]$: $x=2+3t$ → $x(2)=8$.</li>
<li>$[2,5]$: $v$ crosses zero at $t=3.5$ where $x(3.5)=10.25$ (max); $x(5)=8$.</li>
<li>$[5,8]$: $x(t)=8-3(t-5)$ → $x(8)=-1$.</li>
<li>Distance: forward $8.25$ m + backward $11.25$ m = 19.5 m; displacement $-3$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Integrate each piece, carry the previous endpoint forward. Track sign flips of $v$ to separate distance from displacement.</p>
</details>
`,

  "unit-2": `
<details class="example" open><summary><span class="pill">Example 1</span> Atwood machine + friction on table</summary>
<p><strong>Problem.</strong> $m_1=3$ kg on table with $\\mu_k=0.20$, connected over pulley to hanging $m_2=2$ kg. Find $a$ and $T$.</p>
<p><strong>How to recognize this type:</strong> Two masses, one on a surface with friction, connected over a pulley.</p>
<ol class="soln">
<li>$T-\\mu_k m_1 g=m_1 a$ and $m_2 g-T=m_2 a$.</li>
<li>Add: $a=\\dfrac{(m_2-\\mu_k m_1)g}{m_1+m_2}=\\dfrac{1.4(9.8)}{5}\\approx 2.74$ m/s².</li>
<li>$T=m_2(g-a)\\approx 14.1$ N.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> "Net weight on top, total mass on bottom." Adding the two Newton's-2nd-law equations eliminates $T$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Stacked blocks on incline</summary>
<p><strong>Problem.</strong> Block A (2 kg) on block B (5 kg) on a $30°$ incline. $\\mu_s(A,B)=0.40$; $\\mu_k(B,$incline$)=0.10$. Sliding together. Find system $a$ and the friction on $A$ from $B$. Confirm no-slip.</p>
<p><strong>How to recognize this type:</strong> Two-body motion on an incline with internal friction.</p>
<ol class="soln">
<li>System: $a=g(\\sin\\theta-\\mu_k\\cos\\theta)\\approx 4.05$ m/s².</li>
<li>Isolate $A$: $m_A g\\sin\\theta-f_{BA}=m_A a \\Rightarrow f_{BA}\\approx 1.70$ N up-slope.</li>
<li>Max static $\\mu_s m_A g\\cos\\theta\\approx 6.79$ N > required — they stay together.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Solve system first, isolate after, and always verify required $f\\le\\mu_s N$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Linear drag terminal velocity (ODE)</summary>
<p><strong>Problem.</strong> Sphere mass $m$ falls from rest under drag $F_d=-bv$. (a) Derive $v(t)$. (b) $v_T$. (c) Time to reach $0.9 v_T$.</p>
<p><strong>How to recognize this type:</strong> Drag $\\propto v$.</p>
<ol class="soln">
<li>$m\\dot v=mg-bv$; at $\\dot v=0$, $v_T=mg/b$.</li>
<li>Separate & integrate: $v(t)=v_T(1-e^{-bt/m})$; $\\tau=m/b$.</li>
<li>$0.9 v_T$: $t=\\tau\\ln 10 \\approx 2.30\\,\\tau$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Linear drag → $v=v_T(1-e^{-t/\\tau})$, $\\tau=m/b$. Recognize by inspection.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Quadratic drag terminal velocity</summary>
<p><strong>Problem.</strong> Skydiver $m=75$ kg, $F_d=cv^2$, $c=0.24$ kg/m. (a) $v_T$. (b) $a$ at $v=v_T/2$. (c) Distance to reach $0.99 v_T$.</p>
<p><strong>How to recognize this type:</strong> Drag $\\propto v^2$.</p>
<ol class="soln">
<li>$v_T=\\sqrt{mg/c}\\approx 55.3$ m/s.</li>
<li>$a(v)=g(1-v^2/v_T^2)$; at $v_T/2$: $a=\\tfrac34 g\\approx 7.35$ m/s².</li>
<li>Use $v\\,dv/dx$ chain rule: $x=\\dfrac{m}{2c}\\ln\\dfrac{1}{1-v^2/v_T^2}\\approx 612$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Quadratic drag: $v_T=\\sqrt{mg/c}$; use $a=v\\,dv/dx$ when distance (not time) is asked.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Two blocks in contact — internal force</summary>
<p><strong>Problem.</strong> Frictionless floor: $F=24$ N pushes $A$ (2 kg) against $B$ (4 kg). Find $a$ and contact force on $B$. Then reverse push direction.</p>
<p><strong>How to recognize this type:</strong> Finding internal contact force between blocks moving together.</p>
<ol class="soln">
<li>$a=F/(m_A+m_B)=4.0$ m/s².</li>
<li>Isolate $B$: $N_{AB}=m_B a=16$ N.</li>
<li>Reversed push: $N_{BA}=m_A a=8$ N. Depends on which block is downstream.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Internal force = (mass still to push) × $a$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Conical pendulum</summary>
<p><strong>Problem.</strong> Ball $m=0.5$ kg on $L=1.2$ m string, angle $25°$ with vertical. Find $T$ and period.</p>
<p><strong>How to recognize this type:</strong> Circular horizontal motion on an inclined string.</p>
<ol class="soln">
<li>Vertical: $T\\cos\\theta=mg \\Rightarrow T=mg/\\cos\\theta\\approx 5.41$ N.</li>
<li>Horizontal: $T\\sin\\theta=m\\omega^2 L\\sin\\theta \\Rightarrow \\omega=\\sqrt{g/(L\\cos\\theta)}\\approx 3.00$ rad/s.</li>
<li>$T_{period}=2\\pi/\\omega\\approx 2.09$ s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> In circular motion, keep axes horizontal/vertical (never tilt). Divide horizontal by vertical to eliminate $T$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Tension in a massive rope</summary>
<p><strong>Problem.</strong> Rope mass $M=3$ kg, length 2 m, tied to block $m=5$ kg on frictionless floor; $F=16$ N pulls the free end. Find $a$ and $T(x)$.</p>
<p><strong>How to recognize this type:</strong> Rope is NOT massless.</p>
<ol class="soln">
<li>$a=F/(M+m)=2$ m/s².</li>
<li>Cut at distance $x$ from block: $T(x)=(m+(M/L)x)\\cdot a=(5+1.5x)(2)=10+3x$ N.</li>
<li>Endpoints: $T(0)=10$ N, $T(2)=16$ N $=F$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Massive rope → tension varies linearly. At any cut, $T=$ (mass ahead of cut)$\\times a$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Table + hanging block via kinematics</summary>
<p><strong>Problem.</strong> $m_1=4$ kg ($\\mu_k=0.25$) on table, $m_2=3$ kg hanging. Find $a$, $T$, and speed after $m_2$ falls 0.80 m.</p>
<p><strong>How to recognize this type:</strong> Classic table + pulley + hanger.</p>
<ol class="soln">
<li>$a=(m_2-\\mu_k m_1)g/(m_1+m_2)=2.80$ m/s².</li>
<li>$T=m_2(g-a)=21.0$ N.</li>
<li>$v=\\sqrt{2ah}=\\sqrt{4.48}\\approx 2.12$ m/s. Energy check ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Standard "driving weight minus friction over total mass." Constant-$a$ kinematics fill in the rest.</p>
</details>
`,

  "unit-3": `
<details class="example" open><summary><span class="pill">Example 1</span> Variable force (line integral)</summary>
<p><strong>Problem.</strong> $m=2$ kg, net force $F(x)=(6x-2x^2)$ N from $x=0$ to 3 m, starts at rest. Find $W$, $v_f$, and the position of max KE.</p>
<p><strong>How to recognize this type:</strong> Force given as a function of $x$.</p>
<ol class="soln">
<li>$W=\\int_0^3(6x-2x^2)dx=27-18=9$ J.</li>
<li>$v_f=\\sqrt{2W/m}=3$ m/s.</li>
<li>$K$ max where $F=0$: $6x-2x^2=0 \\Rightarrow x=3$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Work is the area under $F(x)$. KE peaks where net force $=0$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> U(x) graph analysis</summary>
<p><strong>Problem.</strong> $m=0.5$ kg in $U(x)$ with $U(0)=8$, min $U(2)=2$, max $U(4)=10$, $U(6)=4$, $U\\to 6$ at infinity. Released from rest at $x=0$. Find equilibria, motion, max speed. Repeat released from $x=6$.</p>
<p><strong>How to recognize this type:</strong> Given $U(x)$, asked about motion / equilibria.</p>
<ol class="soln">
<li>Stable at $x=2$ (min); unstable at $x=4$ (max).</li>
<li>From $x=0$: $E=8$; barrier at $U=10$ blocks right. Oscillates between $x=0$ and turning point in the left well.</li>
<li>Max speed at $x=2$: $K=E-U=6$ J, $v=\\sqrt{2K/m}\\approx 4.9$ m/s.</li>
<li>From $x=6$: $E=4<6<10$; bound, oscillates near $x=6$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Draw a horizontal $E$-line on the $U$ curve. Valleys = stable, hills = unstable, intersections = turning points.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Spring + gravity + friction</summary>
<p><strong>Problem.</strong> $m=3$ kg block on $30°$ ramp, $\\mu_k=0.25$, compresses spring ($k=800$ N/m) 0.20 m. Released — how far up ramp does it travel?</p>
<p><strong>How to recognize this type:</strong> Spring PE + gravity PE + friction dissipation.</p>
<ol class="soln">
<li>$\\Delta K=0$. Energy balance: $\\tfrac12 kx^2=mgd\\sin\\theta+\\mu_k mg\\cos\\theta\\,d$.</li>
<li>$16=(14.7+6.37)d$; $d\\approx 0.76$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Friction loss uses total path length. Never treat friction as a potential.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Pendulum bottom speed and tension</summary>
<p><strong>Problem.</strong> $m=1.5$ kg on $L=1.2$ m string, released from $60°$ with vertical. Find speed and tension at bottom.</p>
<p><strong>How to recognize this type:</strong> Swing — tension does no work.</p>
<ol class="soln">
<li>$h=L(1-\\cos 60°)=0.60$ m; $v=\\sqrt{2gh}\\approx 3.43$ m/s.</li>
<li>$T-mg=mv^2/L \\Rightarrow T=m(g+v^2/L)=29.4$ N.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Energy conservation gives $v$; Newton radial ($\\sum F_r=mv^2/r$) gives $T$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Motor power up an incline</summary>
<p><strong>Problem.</strong> 400 kg crate up $20°$ incline at constant 2 m/s, $\\mu_k=0.15$. Find required power and its split.</p>
<p><strong>How to recognize this type:</strong> Constant speed ($\\Delta K=0$), motor power.</p>
<ol class="soln">
<li>$F=mg(\\sin\\theta+\\mu_k\\cos\\theta)\\approx 1893$ N.</li>
<li>$P=Fv\\approx 3790$ W $\\approx 3.8$ kW.</li>
<li>Into PE: $mgv\\sin\\theta\\approx 2682$ W (71%). Into friction: 1104 W (29%).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $P=\\vec F\\cdot\\vec v$. At constant speed, motor power = PE gain rate + friction dissipation rate.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Force from 2D potential (gradient)</summary>
<p><strong>Problem.</strong> $U(x,y)=3x^2 y-xy^2+4y$ J. Find $\\vec F(x,y)$ and $\\vec F$ at $(1,2)$. Is $(0,0)$ an equilibrium?</p>
<p><strong>How to recognize this type:</strong> Multi-variable $U$, asks for force or equilibrium.</p>
<ol class="soln">
<li>$F_x=-\\partial U/\\partial x=y^2-6xy$, $F_y=-\\partial U/\\partial y=2xy-3x^2-4$.</li>
<li>At (1,2): $F_x=-8$, $F_y=-3$ N; $|F|\\approx 8.5$ N.</li>
<li>At (0,0): $F_x=0$ but $F_y=-4\\ne 0$ — not equilibrium.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\vec F=-\\nabla U$. Equilibrium requires every partial to vanish simultaneously.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Loop-the-loop minimum height</summary>
<p><strong>Problem.</strong> Frictionless track, bead released from $h$, enters vertical loop of radius $R$. Min release height for contact at top?</p>
<p><strong>How to recognize this type:</strong> Vertical circular loop, "just barely makes it."</p>
<ol class="soln">
<li>At top with $N=0$: $mg=mv^2/R \\Rightarrow v_{top}^2=gR$.</li>
<li>Energy: $mgh=mg(2R)+\\tfrac12 mv^2 \\Rightarrow h_{min}=\\tfrac52 R$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> "Minimum at top" = $N=0$, $v^2=gR$. Top is at height $2R$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Escape speed and $U=-GMm/r$</summary>
<p><strong>Problem.</strong> (a) Derive $v_{esc}$. (b) For Earth, compute it. (c) Launched at $v_{esc}/2$, find max $r$.</p>
<p><strong>How to recognize this type:</strong> Distance comparable to planet size — can't use $mgh$.</p>
<ol class="soln">
<li>$E=0$ at escape: $v_{esc}=\\sqrt{2GM/R}$.</li>
<li>Earth: $\\approx 1.12\\times 10^4$ m/s.</li>
<li>Launched at $v_{esc}/2$: energy gives $r_{max}=\\tfrac43 R$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $U=-GMm/r$, $E=0$ means escape. Energy conservation handles bound-orbit turning points.</p>
</details>
`,

  "unit-4": `
<details class="example" open><summary><span class="pill">Example 1</span> 1D elastic collision</summary>
<p><strong>Problem.</strong> $m_1=2$ kg at $v_1=4$ m/s strikes stationary $m_2=6$ kg elastically. Find both final velocities.</p>
<p><strong>How to recognize this type:</strong> "Elastic" + both finals unknown → momentum AND KE or use the relative-velocity-reverses shortcut.</p>
<ol class="soln">
<li>Target-at-rest formula: $v_1'=\\dfrac{m_1-m_2}{m_1+m_2}v_1=-2$ m/s; $v_2'=\\dfrac{2m_1}{m_1+m_2}v_1=2$ m/s.</li>
<li>Check: momentum $-4+12=8$ ✓; KE $4+12=16$ J ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> For elastic 1D, memorize the target-at-rest formulas; relative-velocity reverses.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> 2D perfectly inelastic collision</summary>
<p><strong>Problem.</strong> 1500 kg car east at 20 m/s + 2500 kg truck north at 15 m/s stick. Find final velocity and KE lost.</p>
<p><strong>How to recognize this type:</strong> 2D, "stick together."</p>
<ol class="soln">
<li>$p_x=30000$, $p_y=37500$; $M=4000$ → $v_x=7.5$, $v_y=9.375$.</li>
<li>$|v|\\approx 12.0$ m/s at $51.3°$ N of E.</li>
<li>$K_i\\approx 5.81\\times 10^5$, $K_f\\approx 2.88\\times 10^5$ — about 50% lost.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Conserve $p_x$ and $p_y$ separately. Never write KE for an inelastic collision.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Impulse from F(t) graph</summary>
<p><strong>Problem.</strong> $m=0.5$ kg ball at $+3$ m/s hit by bat. $F(t)$: 0→200 N over 4 ms, hold 4 ms, 200→0 over 4 ms (opposing motion). Find impulse, $v_f$, avg force.</p>
<p><strong>How to recognize this type:</strong> Impulse = area under $F(t)$.</p>
<ol class="soln">
<li>Trapezoid area: $\\tfrac12(0.012+0.004)(200)=1.6$ N·s; signed $J=-1.6$.</li>
<li>$v_f=v_i+J/m=3-3.2=-0.2$ m/s (reversed).</li>
<li>$\\bar F=J/\\Delta t\\approx -133$ N.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Impulse = signed area under $F(t) = \\Delta p$.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Ballistic pendulum</summary>
<p><strong>Problem.</strong> Bullet $m=0.01$ kg into block $M=2$ kg hanging from string. Block+bullet rise $h=0.20$ m. Find bullet's initial $v_0$.</p>
<p><strong>How to recognize this type:</strong> Two phases: inelastic collision, then swing.</p>
<ol class="soln">
<li>Swing: $V=\\sqrt{2gh}\\approx 1.98$ m/s.</li>
<li>Collision momentum: $mv_0=(m+M)V \\Rightarrow v_0=(m+M)V/m\\approx 398$ m/s.</li>
<li>KE loss: 99% — huge, as expected for embedding.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Never use energy conservation across the embedding. Momentum for collision, energy for swing.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Explosion — find missing piece</summary>
<p><strong>Problem.</strong> 5 kg object at rest explodes into 2 kg piece at $30$ m/s at $60°$ above $+x$, and a 3 kg piece. Find the 3-kg velocity and energy released.</p>
<p><strong>How to recognize this type:</strong> Spontaneous separation, internal forces.</p>
<ol class="soln">
<li>$\\vec p_2=-\\vec p_1$; components $(-30,-51.96)$ kg·m/s.</li>
<li>$\\vec v_2=(-10,-17.32)$ m/s; $|v_2|=20$ m/s, opposite piece 1.</li>
<li>Energy released $=K_f=900+600=1500$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Explosions conserve momentum; KE INCREASES, supplied by the internal source.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> CM of a non-uniform rod</summary>
<p><strong>Problem.</strong> Rod length $L$, $\\lambda(x)=\\lambda_0 x/L$. Find $M$ and $x_{cm}$.</p>
<p><strong>How to recognize this type:</strong> Continuous mass distribution, non-uniform density.</p>
<ol class="soln">
<li>$M=\\lambda_0 L/2$.</li>
<li>$x_{cm}=(1/M)\\int_0^L x\\lambda\\,dx=(\\lambda_0 L^2/3)/M=2L/3$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $x_{cm}=(1/M)\\int x\\,dm$; verify CM lies toward the denser end.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Variable mass — sand into cart</summary>
<p><strong>Problem.</strong> 20 kg cart at 5 m/s frictionless; sand falls in at $dm/dt=2$ kg/s. (a) Force to hold speed constant. (b) If no force, find $v(t)$.</p>
<p><strong>How to recognize this type:</strong> System mass changes with time.</p>
<ol class="soln">
<li>(a) $F=v_0\\,dm/dt=10$ N.</li>
<li>(b) No force: $M_0 v_0=m(t)v(t)$ with $m(t)=20+2t$; $v(t)=100/(20+2t)$ m/s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> When mass changes, use $F=dp/dt$, not $ma$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Two-body spring — max compression</summary>
<p><strong>Problem.</strong> $m_A=3$ kg at 6 m/s hits $m_B=2$ kg with spring ($k=1200$) attached. Find max compression and post-separation velocities.</p>
<p><strong>How to recognize this type:</strong> Spring between free blocks — elastic overall.</p>
<ol class="soln">
<li>Max compression when common $V$: $V=(m_A v_A)/(m_A+m_B)=3.6$ m/s.</li>
<li>Energy: $\\tfrac12 kx^2=K_i-K_{cm}=54-32.4=21.6$ J → $x\\approx 0.190$ m.</li>
<li>After separation (elastic): $v_A'=1.2$, $v_B'=7.2$ m/s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Max compression = common velocity instant. Ideal spring between free masses → elastic overall.</p>
</details>
`,

  "unit-5": `
<details class="example" open><summary><span class="pill">Example 1</span> $I$ of non-uniform rod by integration</summary>
<p><strong>Problem.</strong> Rod length $L$, $\\lambda(x)=\\lambda_0 x/L$. Find $M$ and $I$ about left end.</p>
<p><strong>How to recognize this type:</strong> Continuous body, compute $I=\\int r^2\\,dm$.</p>
<ol class="soln">
<li>$dm=(\\lambda_0 x/L)dx$; $M=\\lambda_0 L/2$, so $\\lambda_0=2M/L$.</li>
<li>$I=\\int_0^L x^2\\,dm=(\\lambda_0/L)(L^4/4)=ML^2/2$.</li>
<li>Sanity: uniform rod about end is $ML^2/3$, so $ML^2/2$ (mass farther from axis) is larger — good.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Pick $dm$ matching density, identify $r$ (perpendicular distance), integrate, sanity-check vs uniform result.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Parallel-axis: disk about rim pivot</summary>
<p><strong>Problem.</strong> Disk mass $M$, radius $R$, pivoted at rim, swings as physical pendulum. Find $I_{pivot}$ and small-oscillation $\\omega$.</p>
<p><strong>How to recognize this type:</strong> Known $I_{cm}$, displaced parallel axis.</p>
<ol class="soln">
<li>$I_{cm}=\\tfrac12 MR^2$; $d=R$; $I_{pivot}=\\tfrac12 MR^2+MR^2=\\tfrac32 MR^2$.</li>
<li>Physical pendulum: $\\omega=\\sqrt{MgR/I_{pivot}}=\\sqrt{2g/(3R)}$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Parallel-axis always adds $Md^2$. Must start from CM axis.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Sphere rolling down incline</summary>
<p><strong>Problem.</strong> Solid sphere on incline, no-slip. Find $a$, $f_s$, min $\\mu_s$.</p>
<p><strong>How to recognize this type:</strong> "Rolls without slipping."</p>
<ol class="soln">
<li>Trans: $Mg\\sin\\theta-f=Ma$; rot: $fR=\\tfrac25 MR^2(a/R)\\Rightarrow f=\\tfrac25 Ma$.</li>
<li>$a=\\tfrac57 g\\sin\\theta$; $f_s=\\tfrac27 Mg\\sin\\theta$.</li>
<li>$\\mu_s\\ge\\tfrac27\\tan\\theta$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Static friction is whatever enforces rolling, up to $\\mu_s N$.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Atwood with massive pulley</summary>
<p><strong>Problem.</strong> $m_1=3$, $m_2=5$ kg; pulley $M=2$ kg, $R=0.10$ m. Find $a$, $T_1$, $T_2$.</p>
<p><strong>How to recognize this type:</strong> Pulley has mass → tensions differ.</p>
<ol class="soln">
<li>Pulley: $(T_2-T_1)R=I\\alpha=\\tfrac12 MR^2(a/R)\\Rightarrow T_2-T_1=\\tfrac12 Ma$.</li>
<li>Sum: $a=\\dfrac{(m_2-m_1)g}{m_1+m_2+M/2}=\\dfrac{19.6}{9}\\approx 2.18$ m/s².</li>
<li>$T_1\\approx 35.9$ N, $T_2\\approx 38.1$ N.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Effective inertia denominator = $m_1+m_2+I/R^2$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Yo-yo unwinding</summary>
<p><strong>Problem.</strong> Yo-yo modeled as solid disk, mass $M$, radius $R$; string at rim. Find $a$ and $T$.</p>
<p><strong>How to recognize this type:</strong> Falling object with string unwinding.</p>
<ol class="soln">
<li>$Mg-T=Ma$; $TR=\\tfrac12 MR^2(a/R) \\Rightarrow T=\\tfrac12 Ma$.</li>
<li>$Mg=\\tfrac32 Ma \\Rightarrow a=\\tfrac23 g$; $T=\\tfrac13 Mg$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $a=g/(1+I_{cm}/(MR^2))$. Rotation always slows the fall.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Signpost with cable</summary>
<p><strong>Problem.</strong> Beam $M=20$ kg, $L=3$ m, hinged to wall; sign $m=10$ kg at far end; cable at $37°$ above beam. Find tension and hinge forces.</p>
<p><strong>How to recognize this type:</strong> Static equilibrium of extended body.</p>
<ol class="soln">
<li>Torques about hinge: $T\\sin\\theta\\cdot L=Mg(L/2)+mg L \\Rightarrow T=(Mg/2+mg)/\\sin\\theta\\approx 327$ N.</li>
<li>$H_x=T\\cos\\theta\\approx 261$ N.</li>
<li>$H_y=(M+m)g-T\\sin\\theta=98$ N (up).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Put your torque axis at the hinge. Only force components perpendicular to the lever arm matter.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Angular impulse: clay hits rotating rod</summary>
<p><strong>Problem.</strong> Rod $M=2$ kg, $L=1$ m, pivoted at center, $\\omega_0=4$ rad/s. Clay $m=0.5$ kg at 3 m/s hits end. Find new $\\omega$ and avg torque if $\\Delta t=0.02$ s.</p>
<p><strong>How to recognize this type:</strong> Sudden collision about a pivot.</p>
<ol class="soln">
<li>$I_{rod}=ML^2/12=0.167$; $I_f=0.167+m(L/2)^2=0.292$.</li>
<li>$L$-conserve: $I_{rod}\\omega_0+mv(L/2)=I_f\\omega_f \\Rightarrow \\omega_f\\approx 4.86$ rad/s.</li>
<li>$\\bar\\tau=\\Delta L_{rod}/\\Delta t\\approx 0.143/0.02\\approx 7.2$ N·m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $L$ is conserved about the pivot (not linear $p$). Angular impulse = $\\Delta L$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Torque as cross product</summary>
<p><strong>Problem.</strong> $\\vec F=(3,-2,4)$ N at $\\vec r=(1,2,-1)$ m. Find $\\vec\\tau$ and angle between $\\vec r,\\vec F$.</p>
<p><strong>How to recognize this type:</strong> Vectors given componentwise.</p>
<ol class="soln">
<li>Determinant: $\\vec\\tau=(6,-7,-8)$ N·m.</li>
<li>$|\\tau|=\\sqrt{149}\\approx 12.2$ N·m.</li>
<li>$\\vec r\\cdot\\vec F=-5$, so $\\cos\\phi<0$; $\\phi\\approx 112°$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Watch the minus on $\\hat\\jmath$. Cross-check $\\sin\\phi$ from $|\\tau|$ with $\\cos\\phi$ from dot product.</p>
</details>
`,

  "unit-6": `
<details class="example" open><summary><span class="pill">Example 1</span> Race down incline — sphere vs hollow sphere vs disk</summary>
<p><strong>Problem.</strong> Solid sphere ($\\tfrac25 MR^2$), hollow sphere ($\\tfrac23 MR^2$), cylinder ($\\tfrac12 MR^2$) roll from height $h$. Rank speeds at bottom.</p>
<p><strong>How to recognize this type:</strong> Multiple rolling shapes, compare.</p>
<ol class="soln">
<li>Let $\\beta=I/MR^2$. Energy: $Mgh=\\tfrac12 Mv^2(1+\\beta)$, so $v=\\sqrt{2gh/(1+\\beta)}$.</li>
<li>Solid sphere $\\sqrt{10gh/7}$; cylinder $\\sqrt{4gh/3}$; hollow $\\sqrt{6gh/5}$.</li>
<li>Ranking: solid sphere > cylinder > hollow sphere.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Only shape factor $\\beta=I/MR^2$ matters. Mass-near-axis wins.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Bullet into pivoted rod — max angle</summary>
<p><strong>Problem.</strong> $M=2$ kg rod, $L=1$ m, pivoted at top, hanging. Bullet $m=0.02$ kg at 300 m/s hits bottom and sticks. Find $\\omega$ after and max swing angle.</p>
<p><strong>How to recognize this type:</strong> Projectile into pivoted rigid body — two phases.</p>
<ol class="soln">
<li>$I_{tot}=ML^2/3+mL^2=0.687$ kg·m². $\\omega=mv_0 L/I_{tot}\\approx 8.73$ rad/s.</li>
<li>Energy: $\\tfrac12 I_{tot}\\omega^2=(ML/2+mL)g(1-\\cos\\theta)$.</li>
<li>$26.2$ J $=$ $9.996(1-\\cos\\theta)$ → exceeds 2, so rod goes over the top (full rotation). (At $v_0=150$ m/s, $\\theta\\approx 69.8°$.)</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> About a pivot, conserve $L$ (linear $p$ is NOT conserved). Track rod CM height separate from particle height in swing.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Student jumps onto rotating disk</summary>
<p><strong>Problem.</strong> Merry-go-round ($M=200$ kg, $R=2$ m) at $\\omega_0=1.5$ rad/s. 50-kg child at rest (ground frame) lands on rim. Find new $\\omega$ and fractional KE lost.</p>
<p><strong>How to recognize this type:</strong> Rotating platform + sticking.</p>
<ol class="soln">
<li>$I_{disk}=\\tfrac12 MR^2=400$, $I_{child}=mR^2=200$ kg·m².</li>
<li>$L$: $400(1.5)=600\\omega_f \\Rightarrow \\omega_f=1.0$ rad/s.</li>
<li>$K_i=450$, $K_f=300$ J: 33% lost.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Sticking on a rotating platform conserves $L$ but not $K$.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Circular orbit — derive $v$, $T$, energies</summary>
<p><strong>Problem.</strong> Satellite mass $m$ at radius $r$ around planet mass $M$. Derive $v$, $T$, $K$, $U$, $E$.</p>
<p><strong>How to recognize this type:</strong> "Circular orbit."</p>
<ol class="soln">
<li>$GMm/r^2=mv^2/r \\Rightarrow v=\\sqrt{GM/r}$.</li>
<li>$T=2\\pi\\sqrt{r^3/GM}$ (Kepler III).</li>
<li>$K=GMm/(2r)$; $U=-GMm/r$; $E=-GMm/(2r)$. So $E=-K=U/2$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Memorize $E=-GMm/(2r)$ (bound). Raising $r$ requires energy though $v$ drops.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Elliptical orbit — perihelion vs aphelion speeds</summary>
<p><strong>Problem.</strong> Comet with $r_p=1\\times 10^{11}$, $r_a=5\\times 10^{11}$ m. $GM=1.33\\times 10^{20}$. Find $v_p$, $v_a$.</p>
<p><strong>How to recognize this type:</strong> Ellipse with both distances given.</p>
<ol class="soln">
<li>$L$-conserve (both points: $v\\perp r$): $v_a=v_p(r_p/r_a)=v_p/5$.</li>
<li>Energy: $v_p^2=\\tfrac{25}{12}GM(r_a-r_p)/(r_p r_a)$.</li>
<li>Numerically: $v_p\\approx 4.7\\times 10^4$ m/s; $v_a\\approx 9.4\\times 10^3$ m/s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Use BOTH $L$ and $E$ conservation. Vis-viva: $v^2=GM(2/r-1/a)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Escape speed from Earth</summary>
<p><strong>Problem.</strong> (a) Derive $v_{esc}$. (b) Compute for Earth. (c) Launched at $v_{esc}/2$: max $r$?</p>
<p><strong>How to recognize this type:</strong> "Escape" or "max distance."</p>
<ol class="soln">
<li>$E=0 \\Rightarrow v_{esc}=\\sqrt{2GM/R}$.</li>
<li>Earth: $\\approx 1.12\\times 10^4$ m/s.</li>
<li>$v_0=v_{esc}/2 \\Rightarrow r_{max}=\\tfrac43 R$ (only $R/3$ above surface).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Half escape speed doesn't get you very far — energy scales as $v^2$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Kepler III derivation + Jupiter</summary>
<p><strong>Problem.</strong> Derive Kepler's third law. Compute Jupiter's period: $r=7.78\\times 10^{11}$ m.</p>
<p><strong>How to recognize this type:</strong> "Derive" or period-radius comparison.</p>
<ol class="soln">
<li>$GMm/r^2=m\\omega^2 r$ with $\\omega=2\\pi/T$ gives $T^2=4\\pi^2 r^3/GM$.</li>
<li>Jupiter: $T\\approx 3.74\\times 10^8$ s $\\approx 11.9$ yr. (Shortcut: $T^2=r^3$ with solar-system units.)</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $4\\pi^2/GM$ is same for every body around the same primary.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Brake stopping a flywheel</summary>
<p><strong>Problem.</strong> Solid disk $M=80$ kg, $R=0.5$ m, $\\omega_0=120$ rad/s. Brake applies $\\tau=25$ N·m. Find $K_0$, $\\alpha$, stop time, angle, work, heat.</p>
<p><strong>How to recognize this type:</strong> Rotational analog of linear friction stop.</p>
<ol class="soln">
<li>$I=10$ kg·m²; $K_0=\\tfrac12 I\\omega_0^2=7.2\\times 10^4$ J.</li>
<li>$\\alpha=\\tau/I=2.5$; $t=\\omega_0/\\alpha=48$ s; $\\theta=\\omega_0^2/(2\\alpha)=2880$ rad.</li>
<li>$W_{brake}=-\\tau\\theta=-7.2\\times 10^4$ J; heat $=7.2\\times 10^4$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $(F,m,a,x,v) \\leftrightarrow (\\tau,I,\\alpha,\\theta,\\omega)$. All linear formulas translate.</p>
</details>
`,

  "unit-7": `
<details class="example" open><summary><span class="pill">Example 1</span> Derive SHM from Hooke's law</summary>
<p><strong>Problem.</strong> $m=0.5$ kg, $k=200$ N/m. Starting from $F=ma$, derive $T$. Released from $x=0.10$ m at rest — write $x(t)$.</p>
<p><strong>How to recognize this type:</strong> "Derive," "show SHM," "starting from Newton's 2nd."</p>
<ol class="soln">
<li>$m\\ddot x=-kx \\Rightarrow \\ddot x=-\\omega^2 x$ with $\\omega^2=k/m$.</li>
<li>$\\omega=\\sqrt{k/m}=20$ rad/s; $T=2\\pi/\\omega\\approx 0.314$ s.</li>
<li>IC: $x(0)=0.10$, $v(0)=0 \\Rightarrow A=0.10$, $\\phi=0$; $x(t)=0.10\\cos(20t)$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Whenever $\\ddot x=-\\omega^2 x$, read off $\\omega$ from "stuff multiplying $-x$."</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Physical pendulum — rod at end</summary>
<p><strong>Problem.</strong> Rod $M, L$, pivoted at one end. Derive period for small oscillations.</p>
<p><strong>How to recognize this type:</strong> Extended rigid body about pivot, gravity.</p>
<ol class="soln">
<li>$\\tau=-Mg(L/2)\\sin\\theta\\approx -Mg(L/2)\\theta$.</li>
<li>$I\\ddot\\theta=\\tau$ with $I=ML^2/3$ gives $\\ddot\\theta=-(3g/2L)\\theta$.</li>
<li>$T=2\\pi\\sqrt{2L/3g}$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $T=2\\pi\\sqrt{I/Mgd}$ (with $d$ = pivot-to-CM). Use parallel-axis when needed.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Vertical spring — gravity shifts equilibrium</summary>
<p><strong>Problem.</strong> Spring $k$ hung, mass $m$ lowered to new equilibrium $x_0=mg/k$. Pulled down $A$ more, released. Show SHM; does $g$ affect $T$?</p>
<p><strong>How to recognize this type:</strong> Vertical spring + gravity.</p>
<ol class="soln">
<li>$m\\ddot y=mg-ky$; equilibrium at $y_0=mg/k$.</li>
<li>Let $u=y-y_0$: $m\\ddot u=-ku$, so $\\omega=\\sqrt{k/m}$, $T=2\\pi\\sqrt{m/k}$.</li>
<li>Gravity only shifts equilibrium; period unchanged.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Constant force shifts equilibrium but never alters $\\omega$ or $T$ for a linear restoring force.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Two springs — series vs parallel</summary>
<p><strong>Problem.</strong> Mass $m$ with springs $k_1, k_2$. (a) Opposite sides (parallel); (b) end-to-end (series). Find $T$ in each.</p>
<p><strong>How to recognize this type:</strong> Multiple springs.</p>
<ol class="soln">
<li>Parallel: same displacement → $k_{eff}=k_1+k_2$, $T=2\\pi\\sqrt{m/(k_1+k_2)}$.</li>
<li>Series: same tension → $1/k_{eff}=1/k_1+1/k_2$, $T=2\\pi\\sqrt{m(k_1+k_2)/(k_1 k_2)}$.</li>
<li>Parallel stiffer; series softer.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Parallel $k$'s add; series $k$'s add reciprocally.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Energy in SHM — $v$ at $x=A/2$</summary>
<p><strong>Problem.</strong> $m=0.4$ kg, $k=160$ N/m, $A=0.050$ m. (a) $v$ at $x=A/2$. (b) If $v=0.6$ m/s at $x=0.030$ m, find $A$.</p>
<p><strong>How to recognize this type:</strong> Position and speed without time — use energy.</p>
<ol class="soln">
<li>$v=\\omega\\sqrt{A^2-x^2}$; at $A/2$: $v=\\omega A\\sqrt{3}/2\\approx 0.866$ m/s.</li>
<li>(b) $A=\\sqrt{x^2+v^2/\\omega^2}\\approx 0.0424$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Max speed $\\omega A$ at $x=0$; zero at $x=\\pm A$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Simple pendulum — small-angle approximation</summary>
<p><strong>Problem.</strong> Derive period of simple pendulum. Why is $\\sin\\theta\\approx\\theta$ required?</p>
<p><strong>How to recognize this type:</strong> "Derive," "justify SHM."</p>
<ol class="soln">
<li>$\\ddot\\theta=-(g/L)\\sin\\theta$ — NOT linear in $\\theta$.</li>
<li>Small-angle: $\\sin\\theta\\approx\\theta$ → $\\ddot\\theta=-(g/L)\\theta$. SHM with $T=2\\pi\\sqrt{L/g}$.</li>
<li>Large amplitudes: period grows, motion not sinusoidal.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> SHM demands a LINEAR restoring term. $\\sin\\theta\\approx\\theta$ is what linearizes.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Damped oscillation</summary>
<p><strong>Problem.</strong> Spring with drag $F_d=-bv$. (a) ODE. (b) Solution $x=A_0 e^{-\\gamma t}\\cos(\\omega' t+\\phi)$ — find $\\gamma$. (c) Amplitude halves in 4.0 s: $\\gamma$? (d) Damping regimes.</p>
<p><strong>How to recognize this type:</strong> Drag/friction + oscillator.</p>
<ol class="soln">
<li>$\\ddot x+(b/m)\\dot x+(k/m)x=0$; $\\gamma=b/(2m)$, $\\omega'=\\sqrt{\\omega_0^2-\\gamma^2}$.</li>
<li>$e^{-\\gamma(4)}=1/2 \\Rightarrow \\gamma=\\ln 2/4\\approx 0.173$ s$^{-1}$.</li>
<li>Underdamped: oscillates; critical: fastest nonoscillatory return; overdamped: slow.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Amplitude decays as $e^{-\\gamma t}$; energy as $e^{-2\\gamma t}$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> SHM from general $U(x)$</summary>
<p><strong>Problem.</strong> $U(x)=U_0[(a/x)^2-a/x]$ for $x>0$. Find $x_0$ and $\\omega$ for small oscillations.</p>
<p><strong>How to recognize this type:</strong> Arbitrary $U(x)$, small oscillations near minimum.</p>
<ol class="soln">
<li>$dU/dx=0 \\Rightarrow x_0=2a$ (verified minimum).</li>
<li>$k_{eff}=U''(x_0)=U_0/(8a^2)$.</li>
<li>$\\omega=\\sqrt{U_0/(8ma^2)}$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Every smooth $U$ looks parabolic near a minimum: $k_{eff}=U''(x_0)$.</p>
</details>
`,

  "unit-8": `
<details class="example" open><summary><span class="pill">Example 1</span> Coulomb force from 3 charges</summary>
<p><strong>Problem.</strong> $q_1=+3\\,\\mu$C at origin, $q_2=-2\\,\\mu$C at $(0.40, 0)$ m, $q_3=+4\\,\\mu$C at $(0, 0.30)$ m. Net force on $q_1$?</p>
<p><strong>How to recognize this type:</strong> Few discrete point charges.</p>
<ol class="soln">
<li>$F_{12}=kq_1 q_2/r^2=0.338$ N. $-q_2$ attracts $q_1$ toward $+x$: $\\vec F_{12}=+0.338\\hat x$.</li>
<li>$F_{13}=1.20$ N, same sign → repels in $-y$: $\\vec F_{13}=-1.20\\hat y$.</li>
<li>Sum: $(0.338,-1.20)$ N; $|F|\\approx 1.25$ N at $74°$ below $+x$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Resolve each Coulomb force into components. Use physical attraction/repulsion for signs.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> E at center of semicircular arc</summary>
<p><strong>Problem.</strong> Semicircular arc, radius $R$, total charge $Q$. Find $E$ at center.</p>
<p><strong>How to recognize this type:</strong> Curved charge, field at geometric center.</p>
<ol class="soln">
<li>$\\lambda=Q/(\\pi R)$; $dq=\\lambda R\\,d\\theta$; $dE=k\\,dq/R^2$.</li>
<li>Symmetry kills one component; $dE_y=-dE\\sin\\theta$.</li>
<li>$E=2k\\lambda/R=2kQ/(\\pi R^2)$, pointing along symmetry axis.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Use symmetry to kill one component before integrating. Parameterize by angle; $ds=R\\,d\\theta$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> E on axis of finite rod</summary>
<p><strong>Problem.</strong> Rod from $x=0$ to $L$, density $\\lambda$, point $P$ at $x=L+d$. Find $E$.</p>
<p><strong>How to recognize this type:</strong> Finite line charge on its own axis.</p>
<ol class="soln">
<li>$r=(L+d)-x'$; $dE=k\\lambda\\,dx'/r^2$.</li>
<li>$E=k\\lambda[1/d-1/(L+d)]=k\\lambda L/[d(L+d)]$.</li>
<li>Check $d\\gg L$: $E\\to kQ/d^2$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Define $r$ in terms of integration variable; verify point-charge limit.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Gauss — uniformly charged insulating sphere</summary>
<p><strong>Problem.</strong> Insulating sphere, $Q$, radius $R$. Find $E(r)$ inside and outside.</p>
<p><strong>How to recognize this type:</strong> "Uniformly charged" insulator; spherical symmetry.</p>
<ol class="soln">
<li>$\\rho=Q/(\\tfrac43\\pi R^3)$.</li>
<li>Outside: $E\\cdot 4\\pi r^2=Q/\\epsilon_0 \\Rightarrow E=kQ/r^2$.</li>
<li>Inside: $Q_{enc}=Qr^3/R^3 \\Rightarrow E=kQr/R^3$ (linear).</li>
<li>Continuity at $r=R$: both give $kQ/R^2$ ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Insulator: $Q_{enc}\\propto r^3$. Conductor: charge on surface, $E=0$ inside.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Gauss — infinite line of charge</summary>
<p><strong>Problem.</strong> Infinite wire, $\\lambda$. Find $E(r)$.</p>
<p><strong>How to recognize this type:</strong> Cylindrical symmetry.</p>
<ol class="soln">
<li>Cylindrical Gaussian surface, radius $r$, length $L$.</li>
<li>Curved side only: $E(2\\pi r L)=\\lambda L/\\epsilon_0$.</li>
<li>$E=\\lambda/(2\\pi\\epsilon_0 r)$; $L$ cancels.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Line-charge field $\\propto 1/r$. Length must cancel out.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Gauss — infinite plane</summary>
<p><strong>Problem.</strong> Infinite non-conducting sheet, $\\sigma$. Find $E$.</p>
<p><strong>How to recognize this type:</strong> Planar symmetry.</p>
<ol class="soln">
<li>Pillbox Gaussian surface, caps of area $A$ on each side.</li>
<li>Flux $=2EA$; enclosed $=\\sigma A$.</li>
<li>$E=\\sigma/(2\\epsilon_0)$, uniform (distance-independent).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $E_{sheet}=\\sigma/(2\\epsilon_0)$; conductor surface is $\\sigma/\\epsilon_0$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Concentric spherical shells</summary>
<p><strong>Problem.</strong> Inner solid conductor $+Q$, radius $a$. Outer shell (inner $b$, outer $c$) net $-3Q$. Find $E$ in four regions and induced charges.</p>
<p><strong>How to recognize this type:</strong> Nested conductors/shells.</p>
<ol class="soln">
<li>$r<a$: conductor, $E=0$.</li>
<li>$a<r<b$: enclosed $+Q$, $E=kQ/r^2$.</li>
<li>$b<r<c$: conductor, $E=0$ → inner surface has $-Q$ induced.</li>
<li>Outer surface: $-3Q-(-Q)=-2Q$; $r>c$: $E=-2kQ/r^2$ (inward).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Inside a conductor $E=0$ everywhere; use this to find induced surface charges.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Two parallel infinite sheets</summary>
<p><strong>Problem.</strong> Sheets with $+\\sigma$ (left) and $-\\sigma$ (right). Find $E$ in three regions.</p>
<p><strong>How to recognize this type:</strong> Multiple infinite sheets — superpose.</p>
<ol class="soln">
<li>Left of both: $-\\sigma/(2\\epsilon_0)+\\sigma/(2\\epsilon_0)=0$.</li>
<li>Between: $+\\sigma/(2\\epsilon_0)+\\sigma/(2\\epsilon_0)=\\sigma/\\epsilon_0$.</li>
<li>Right of both: $+\\sigma/(2\\epsilon_0)-\\sigma/(2\\epsilon_0)=0$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Opposite signs cancel outside, double between: ideal parallel-plate field.</p>
</details>
`,

  "unit-9": `
<details class="example" open><summary><span class="pill">Example 1</span> V from discrete point charges</summary>
<p><strong>Problem.</strong> $q_1=+4\\,\\mu$C at (0,0), $q_2=-3\\,\\mu$C at (0.3, 0), $q_3=+2\\,\\mu$C at (0, 0.4). Find $V$ at $P=(0.3, 0.4)$ m. Work to bring $+1\\,\\mu$C from infinity?</p>
<p><strong>How to recognize this type:</strong> Few point charges, scalar sum.</p>
<ol class="soln">
<li>Distances: 0.5, 0.4, 0.3 m.</li>
<li>$V_P=k\\sum q_i/r_i=8.99\\times 10^9(8.0-7.5+6.67)\\times 10^{-6}\\approx 6.4\\times 10^4$ V.</li>
<li>$W=qV_P\\approx 6.4\\times 10^{-2}$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $V$ is a scalar — add with signs. Work to place $=q\\Delta V$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> V on axis of a ring</summary>
<p><strong>Problem.</strong> Ring radius $R$, charge $Q$. Derive $V(x)$ on axis. Verify by differentiating to get $E_x$.</p>
<p><strong>How to recognize this type:</strong> Ring on axis; every $dq$ at same $r$.</p>
<ol class="soln">
<li>$r=\\sqrt{R^2+x^2}$ constant; $V(x)=kQ/\\sqrt{R^2+x^2}$.</li>
<li>$E_x=-dV/dx=kQx/(R^2+x^2)^{3/2}$ ✓.</li>
<li>$V(0)=kQ/R$ (finite); $E_x(0)=0$ (symmetry).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Scalar $V$-integral first; differentiate for $E$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> V on axis of a finite rod (log)</summary>
<p><strong>Problem.</strong> Rod from $x=0$ to $L$, $\\lambda>0$, $P$ at $x=L+d$. Find $V$.</p>
<p><strong>How to recognize this type:</strong> Line charge on its own axis → log answer.</p>
<ol class="soln">
<li>$V=\\int k\\lambda\\,dx'/[(L+d)-x']$; substitute $u=(L+d)-x'$.</li>
<li>$V=k\\lambda\\ln[(L+d)/d]$.</li>
<li>Far limit: $V\\to k\\lambda L/d=kQ/d$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $1/r$ integrals give logarithms. Check point-charge limit.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> E from V (gradient)</summary>
<p><strong>Problem.</strong> $V=3x^2y-2yz^2+5xz$. Find $\\vec E(x,y,z)$, evaluate at $(1,2,-1)$.</p>
<p><strong>How to recognize this type:</strong> $V$ explicit, compute $\\vec E$.</p>
<ol class="soln">
<li>Partials: $\\partial V/\\partial x=6xy+5z$; $\\partial V/\\partial y=3x^2-2z^2$; $\\partial V/\\partial z=-4yz+5x$.</li>
<li>$\\vec E=-\\nabla V$; at $(1,2,-1)$: $(-7, -1, -13)$ V/m; $|E|\\approx 14.8$ V/m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\vec E$ points downhill on $V$. Don't forget the minus sign.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> V from E via line integral</summary>
<p><strong>Problem.</strong> $\\vec E=\\alpha x^2\\hat\\imath$, $\\alpha=6$ V/m³. Reference $V(0)=12$ V. Find $V(x)$ and $V(1)-V(2)$.</p>
<p><strong>How to recognize this type:</strong> $\\vec E(x)$ given, need $V$.</p>
<ol class="soln">
<li>$V(x)-V(0)=-\\int_0^x\\alpha x'^2\\,dx'=-\\alpha x^3/3$.</li>
<li>$V(x)=12-2x^3$. $V(1)=10$, $V(2)=-4$; $V(1)-V(2)=14$ V.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Move against $\\vec E$ → $V$ rises. Choose axis-aligned paths.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Energy to assemble 4 charges at a square</summary>
<p><strong>Problem.</strong> 4 identical $+2\\,\\mu$C charges at corners of 0.10-m square. Find $U$.</p>
<p><strong>How to recognize this type:</strong> "Energy to assemble."</p>
<ol class="soln">
<li>6 unique pairs: 4 sides (length $a$) + 2 diagonals ($a\\sqrt 2$).</li>
<li>$U=kq^2[4/a+2/(a\\sqrt 2)]=(kq^2/a)(4+\\sqrt 2)\\approx 1.95$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Sum over $i<j$ pairs. Equals external work from infinity.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Particle through a potential difference</summary>
<p><strong>Problem.</strong> Proton accelerated through 500 V from rest. Find $v$. Repeat for electron.</p>
<p><strong>How to recognize this type:</strong> "Accelerated through $\\Delta V$."</p>
<ol class="soln">
<li>$\\tfrac12 mv^2=q|\\Delta V|=8.0\\times 10^{-17}$ J.</li>
<li>Proton: $v_p\\approx 3.1\\times 10^5$ m/s.</li>
<li>Electron: $v_e\\approx 1.33\\times 10^7$ m/s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Only $\\Delta V$ matters, not gap geometry. $v=\\sqrt{2q|\\Delta V|/m}$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> V inside/outside a uniformly charged insulating sphere</summary>
<p><strong>Problem.</strong> Insulator, $Q$, radius $R$. Find $V(r)$ for both regions; sketch.</p>
<p><strong>How to recognize this type:</strong> Piecewise $E$, integrate inward from infinity.</p>
<ol class="soln">
<li>Outside: $V=kQ/r$.</li>
<li>Inside: split integral at $R$; $V(r)=(kQ/2R)[3-r^2/R^2]$.</li>
<li>Continuous at $R$: both give $kQ/R$. Max at center: $3kQ/(2R)$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Always integrate $\\vec E$ from $\\infty$. $V$ continuous; $E$ can jump only at surface charge.</p>
</details>
`,

  "unit-10": `
<details class="example" open><summary><span class="pill">Example 1</span> Parallel-plate $C$ derivation</summary>
<p><strong>Problem.</strong> Plates area $A$, separation $d$, charges $\\pm Q$. Derive $C$.</p>
<p><strong>How to recognize this type:</strong> "Derive" from scratch.</p>
<ol class="soln">
<li>$\\sigma=Q/A$; pillbox Gauss → $E=\\sigma/\\epsilon_0=Q/(\\epsilon_0 A)$ uniform.</li>
<li>$V=Ed=Qd/(\\epsilon_0 A)$.</li>
<li>$C=Q/V=\\epsilon_0 A/d$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Recipe: assume $Q$ → Gauss for $\\vec E$ → integrate $V$ → divide.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Cylindrical capacitor (coax)</summary>
<p><strong>Problem.</strong> Inner radius $a$, outer $b$, length $L$. Derive $C/L$.</p>
<p><strong>How to recognize this type:</strong> Cylindrical symmetry.</p>
<ol class="soln">
<li>$E(r)=\\lambda/(2\\pi\\epsilon_0 r)$ between.</li>
<li>$V=\\int_a^b E\\,dr=(\\lambda/2\\pi\\epsilon_0)\\ln(b/a)$.</li>
<li>$C/L=2\\pi\\epsilon_0/\\ln(b/a)$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Log is the fingerprint of cylindrical geometry.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Spherical capacitor + isolated sphere limit</summary>
<p><strong>Problem.</strong> Concentric spheres $a<b$, $\\pm Q$. Derive $C$; show $b\\to\\infty$ gives $4\\pi\\epsilon_0 a$.</p>
<p><strong>How to recognize this type:</strong> Concentric spheres.</p>
<ol class="soln">
<li>$E=Q/(4\\pi\\epsilon_0 r^2)$; $V=(Q/4\\pi\\epsilon_0)(1/a-1/b)$.</li>
<li>$C=4\\pi\\epsilon_0 ab/(b-a)$.</li>
<li>$b\\to\\infty$: $C\\to 4\\pi\\epsilon_0 a$ (isolated sphere).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Lone conductor has finite self-capacitance to infinity.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Series–parallel network</summary>
<p><strong>Problem.</strong> 12 V; $C_1=2\\,\\mu$F in series with ($C_2=3\\,\\mu$F ∥ $C_3=6\\,\\mu$F). Find each $Q$ and $V$.</p>
<p><strong>How to recognize this type:</strong> Mixed series/parallel with battery.</p>
<ol class="soln">
<li>$C_{23}=9\\,\\mu$F; series with $C_1$: $C_{eq}=18/11\\,\\mu$F.</li>
<li>$Q_1=Q_{23}=C_{eq}V\\approx 19.6\\,\\mu$C; $V_1=9.82$ V; $V_{23}=2.18$ V.</li>
<li>$Q_2\\approx 6.55$, $Q_3\\approx 13.1\\,\\mu$C. Sum = 19.6 ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Series share $Q$; parallel share $V$ (opposite of resistors).</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Dielectric: constant V vs constant Q</summary>
<p><strong>Problem.</strong> $C_0, Q_0, V_0, U_0, E_0$. Insert $\\kappa$. Compare (a) battery on; (b) disconnected.</p>
<p><strong>How to recognize this type:</strong> Dielectric insertion scenario.</p>
<ol class="soln">
<li>Both: $C=\\kappa C_0$.</li>
<li>Battery on: $V$ fixed; $Q=\\kappa Q_0$, $E=E_0$, $U=\\kappa U_0$.</li>
<li>Disconnected: $Q$ fixed; $V=V_0/\\kappa$, $E=E_0/\\kappa$, $U=U_0/\\kappa$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Identify the conserved quantity (V or Q), then $Q=CV$, $U=Q^2/2C$ give the rest.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Energy stored + work by battery</summary>
<p><strong>Problem.</strong> Battery EMF $V$ charges $C$ from 0 to $V$. Find energy stored vs work done; account for difference.</p>
<p><strong>How to recognize this type:</strong> "Where did the energy go" bookkeeping.</p>
<ol class="soln">
<li>$U_C=\\tfrac12 CV^2$; $W_{bat}=QV=CV^2$.</li>
<li>Difference $\\tfrac12 CV^2$ dissipated as heat in wires (or radiated), independent of $R$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Always exactly half of $W_{bat}$ is lost when charging from a constant-EMF source.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Conductor with cavity containing charge</summary>
<p><strong>Problem.</strong> Neutral conductor (outer $R$), cavity has $+q$ inside. Describe surface charges; find $E(r>R)$; does external charge change the cavity field?</p>
<p><strong>How to recognize this type:</strong> Faraday cage / cavity.</p>
<ol class="soln">
<li>Cavity wall has $-q$ induced (non-uniform); outer surface has $+q$ uniform.</li>
<li>For $r>R$: $E=kq/r^2$ — same as point charge at center, independent of cavity charge position.</li>
<li>Adding external charge: outer surface redistributes; cavity is shielded — inside field unchanged.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Conductor's interior and exterior are decoupled. Inner induced $=-q_{cavity}$; outer = rest.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Force between plates (energy method)</summary>
<p><strong>Problem.</strong> Plates at separation $x$, isolated charge $\\pm Q$. Find attractive force. Verify with $F=QE_{other}$. Repeat battery on.</p>
<p><strong>How to recognize this type:</strong> "Force on plate."</p>
<ol class="soln">
<li>$U=Q^2 x/(2\\epsilon_0 A)$ → $F=-\\partial U/\\partial x=-Q^2/(2\\epsilon_0 A)$; attractive.</li>
<li>Field from one plate: $E=\\sigma/(2\\epsilon_0)$; $F=QE=Q^2/(2\\epsilon_0 A)$ ✓. Factor of 1/2 because a plate doesn't force itself.</li>
<li>Battery on: $F=+\\partial U/\\partial x|_V$; same magnitude.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> At constant $Q$: $F=-\\partial U/\\partial x$; at constant $V$: $F=+\\partial U/\\partial x$.</p>
</details>
`,

  "unit-11": `
<details class="example" open><summary><span class="pill">Example 1</span> Two-battery multi-loop Kirchhoff</summary>
<p><strong>Problem.</strong> Loops share middle branch. Left: $\\varepsilon_1=12$ V, $R_1=2$. Right: $\\varepsilon_2=9$ V, $R_2=3$. Shared: $R_3=6$. Find every current.</p>
<p><strong>How to recognize this type:</strong> Two EMFs, can't reduce by series/parallel.</p>
<ol class="soln">
<li>Define $I_1,I_2,I_3$. KCL: $I_1+I_2=I_3$. KVL loops: $12=2I_1+6I_3$; $9=3I_2+6I_3$.</li>
<li>Substitute $I_2=I_3-I_1$ into right loop: $9=3(I_3-I_1)+6I_3=9I_3-3I_1$; $I_1=3I_3-3$.</li>
<li>Into left: $12=12I_3-6$; $I_3=1.5$ A, $I_1=1.5$ A, $I_2=0$ A.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Arbitrary direction guesses; negative answer just means reversed. $n$ unknowns → $n$ independent KVL/KCL.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> RC charging from ODE</summary>
<p><strong>Problem.</strong> $C=4\\,\\mu$F, $R=200$ kΩ, $\\varepsilon=20$ V; switch closes at $t=0$. Derive $q(t)$, $i(t)$; time to reach 90% of $Q_f$.</p>
<p><strong>How to recognize this type:</strong> $RC$ charging from rest.</p>
<ol class="soln">
<li>KVL: $\\varepsilon-iR-q/C=0$; separate and integrate.</li>
<li>$q(t)=C\\varepsilon(1-e^{-t/\\tau})$; $i(t)=(\\varepsilon/R)e^{-t/\\tau}$; $\\tau=RC=0.80$ s.</li>
<li>90% reached at $t=\\tau\\ln 10\\approx 1.84$ s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $q=Q_f(1-e^{-t/\\tau})$; time to fraction $f$: $t=-\\tau\\ln(1-f)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> RC discharging — half-time and total heat</summary>
<p><strong>Problem.</strong> $C=50\\,\\mu$F at $V_0=100$ V discharges through $R=10$ kΩ. (a) Half-time. (b) Total heat.</p>
<p><strong>How to recognize this type:</strong> No battery; pre-charged cap releases.</p>
<ol class="soln">
<li>$q=Q_0 e^{-t/\\tau}$; $\\tau=RC=0.5$ s; $t_{1/2}=\\tau\\ln 2\\approx 0.347$ s.</li>
<li>$U_0=\\tfrac12 CV_0^2=0.25$ J — all dissipated.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Pure discharge: total heat = initial stored energy.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Capacitor at steady state (open)</summary>
<p><strong>Problem.</strong> 12-V battery, branch A: $4\\,\\Omega$ in series with $3\\,\\mu$F; branch B: $6\\,\\Omega$. Long-time current in $6\\,\\Omega$, $V_C$, $Q$?</p>
<p><strong>How to recognize this type:</strong> "Long time" + capacitor.</p>
<ol class="soln">
<li>Steady state: $i$ through cap = 0 → no drop across $4\\,\\Omega$.</li>
<li>$I_{6\\Omega}=12/6=2$ A.</li>
<li>$V_C=12$ V; $Q=(3\\mu F)(12)=36\\,\\mu$C.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> At DC steady state, capacitor is open.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> Inductor at steady state (short)</summary>
<p><strong>Problem.</strong> 10 V, $R_1=2\\,\\Omega$ series with ($R_2=6\\,\\Omega$ ∥ $L=0.5$ H). Find steady currents and $U_L$.</p>
<p><strong>How to recognize this type:</strong> "Long time" + inductor.</p>
<ol class="soln">
<li>Inductor becomes wire; shorts the $6\\,\\Omega$.</li>
<li>$I_{batt}=10/2=5$ A, all through $L$; $I_{6\\Omega}=0$.</li>
<li>$U_L=\\tfrac12 LI^2=6.25$ J.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> At DC steady state, inductor is a short (opposite of capacitor).</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Power in a complex network</summary>
<p><strong>Problem.</strong> 24 V, $R_1=4\\,\\Omega$ series with ($R_2=6$ ∥ $R_3=12$). Find each $P$, verify battery power.</p>
<p><strong>How to recognize this type:</strong> Reducible series-parallel network.</p>
<ol class="soln">
<li>$R_{23}=4$, $R_{eq}=8$; $I=3$ A.</li>
<li>$P_1=I^2R_1=36$ W.</li>
<li>$V_{23}=12$ V; $P_2=144/6=24$, $P_3=144/12=12$ W.</li>
<li>Total 72 W = 24 V × 3 A ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Use $I^2R$ when $I$ is known, $V^2/R$ when $V$ is known.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Real battery (internal resistance)</summary>
<p><strong>Problem.</strong> $\\varepsilon=12$ V, $r=0.5\\,\\Omega$, $R=5.5\\,\\Omega$. Find $I$, terminal $V$, $P_R$, optimal $R$ for max $P$.</p>
<p><strong>How to recognize this type:</strong> "Internal resistance."</p>
<ol class="soln">
<li>$I=\\varepsilon/(R+r)=2$ A.</li>
<li>$V_T=\\varepsilon-Ir=11$ V; $P_R=I^2R=22$ W.</li>
<li>$dP_R/dR=0$ → $R=r$; max $P=\\varepsilon^2/(4r)=72$ W.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $V_T=\\varepsilon-Ir$. Max power transfer when $R_{load}=r$.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Non-ideal meters</summary>
<p><strong>Problem.</strong> Ideal ammeter $R_A\\to 0$; voltmeter $R_V\\to\\infty$. Finite $R_A=5\\,\\Omega$ in a 10 V/100 Ω circuit: what reading?</p>
<p><strong>How to recognize this type:</strong> "Non-ideal meter" error analysis.</p>
<ol class="soln">
<li>True current: 0.100 A. With ammeter: $I=10/105\\approx 0.0952$ A; 4.8% low.</li>
<li>Voltmeter in parallel pulls current and lowers reading; effect visible only with series source impedance.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Ammeters need tiny $R$; voltmeters need huge $R$.</p>
</details>
`,

  "unit-12": `
<details class="example" open><summary><span class="pill">Example 1</span> Proton in uniform B</summary>
<p><strong>Problem.</strong> Proton at $v=2\\times 10^6$ m/s right, $B=0.5$ T into page. Find $r$, $T$, direction of curve.</p>
<p><strong>How to recognize this type:</strong> Particle in uniform $B$, velocity $\\perp B$.</p>
<ol class="soln">
<li>$qvB=mv^2/r$; $r=mv/qB\\approx 4.2\\times 10^{-2}$ m.</li>
<li>$T=2\\pi m/qB\\approx 1.3\\times 10^{-7}$ s.</li>
<li>$\\vec F=q\\vec v\\times\\vec B$: upward by right-hand rule.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $r\\propto v$, $T$ independent of $v$. Flip RHR for negative charges.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Helical motion — pitch</summary>
<p><strong>Problem.</strong> Electron at $v=5\\times 10^6$ m/s at $30°$ to $\\vec B=0.2\\hat x$ T. Find helix radius and pitch.</p>
<p><strong>How to recognize this type:</strong> $\\vec v$ has parallel and perpendicular components.</p>
<ol class="soln">
<li>$v_\\parallel=4.33\\times 10^6$, $v_\\perp=2.5\\times 10^6$ m/s.</li>
<li>$r=mv_\\perp/eB\\approx 7.1\\times 10^{-5}$ m; $T=2\\pi m/eB\\approx 1.79\\times 10^{-10}$ s.</li>
<li>Pitch $=v_\\parallel T\\approx 7.7\\times 10^{-4}$ m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Split $\\vec v$: $v_\\parallel$ → straight line; $v_\\perp$ → circle. Helix superposition.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Velocity selector + mass spectrometer</summary>
<p><strong>Problem.</strong> $E=3\\times 10^5$ V/m, $B_1=0.15$ T (crossed). Undeflected ions enter $B_2=0.30$ T; semicircle diameter 0.128 m. Find $v$ and mass.</p>
<p><strong>How to recognize this type:</strong> Crossed fields + curved path.</p>
<ol class="soln">
<li>Selector: $qE=qvB_1$ → $v=E/B_1=2\\times 10^6$ m/s.</li>
<li>$qvB_2=mv^2/r$ → $m=qB_2 r/v\\approx 1.54\\times 10^{-27}$ kg (≈ proton).</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Selector: $v=E/B$. Analyzer: $m=qBr/v$. Two-stage reasoning.</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> B at center of circular coil</summary>
<p><strong>Problem.</strong> $N=20$ turns, $R=5$ cm, $I=3$ A. Find $B$ at center.</p>
<p><strong>How to recognize this type:</strong> Full loop, field at center.</p>
<ol class="soln">
<li>Biot–Savart: $dB=\\mu_0 I\\,d\\ell/(4\\pi R^2)$; all $d\\vec B$ align; $B_{one}=\\mu_0 I/(2R)$.</li>
<li>$B_{total}=N\\mu_0 I/(2R)\\approx 7.5\\times 10^{-4}$ T. RHR sets direction along axis.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $B_{center}=\\mu_0 NI/(2R)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> B at center of a semicircular arc</summary>
<p><strong>Problem.</strong> Wire: straight-in, semicircle radius $R=2$ cm, straight-out (collinear). $I=4$ A. Find $B$ at center.</p>
<p><strong>How to recognize this type:</strong> Bent wire of straights and arc.</p>
<ol class="soln">
<li>Straight parts with $d\\vec\\ell\\parallel\\hat r$ contribute zero.</li>
<li>Half of full-loop: $B=\\mu_0 I/(4R)\\approx 6.3\\times 10^{-5}$ T.</li>
<li>General: arc of angle $\\theta$ gives $B=\\mu_0 I\\theta/(4\\pi R)$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Straight lines through field point contribute nothing; arcs scale by $\\theta/(2\\pi)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> Finite straight wire — Biot–Savart</summary>
<p><strong>Problem.</strong> Wire $-L$ to $L$, point $P$ at perpendicular distance $a$ from midpoint. Find $B$; limit $L\\to\\infty$.</p>
<p><strong>How to recognize this type:</strong> Finite wire, field off-axis.</p>
<ol class="soln">
<li>$dB=(\\mu_0 I/4\\pi)\\cdot a\\,dx/(x^2+a^2)^{3/2}$.</li>
<li>Integrate: $B=\\mu_0 I/(4\\pi a)\\cdot 2L/\\sqrt{L^2+a^2}$.</li>
<li>$L\\to\\infty$: $B=\\mu_0 I/(2\\pi a)$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $B=(\\mu_0 I/4\\pi a)(\\sin\\theta_1+\\sin\\theta_2)$; infinite limit = $\\mu_0 I/(2\\pi a)$.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> Ampère — solenoid interior</summary>
<p><strong>Problem.</strong> $n=500$ turns/m, $I=2$ A. Derive $B$ inside.</p>
<p><strong>How to recognize this type:</strong> Long solenoid.</p>
<ol class="soln">
<li>Rectangular Amperian loop, one side inside axial.</li>
<li>$B\\ell=\\mu_0 n\\ell I$; $B=\\mu_0 nI\\approx 1.26\\times 10^{-3}$ T.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Interior $B=\\mu_0 nI$, uniform.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Ampère — coaxial cable</summary>
<p><strong>Problem.</strong> Inner solid radius $a$, out; outer shell radius $b$, in. Find $B(r)$ in three regions.</p>
<p><strong>How to recognize this type:</strong> Concentric currents with symmetry.</p>
<ol class="soln">
<li>$r<a$: $I_{enc}=I_0 r^2/a^2$; $B=\\mu_0 I_0 r/(2\\pi a^2)$.</li>
<li>$a<r<b$: $B=\\mu_0 I_0/(2\\pi r)$.</li>
<li>$r>b$: net enclosed = 0; $B=0$.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Linear inside conductor, $1/r$ between, zero outside when currents cancel.</p>
</details>

<details class="example"><summary><span class="pill">Example 9</span> Force on wire and between parallel wires</summary>
<p><strong>Problem.</strong> (a) $\\ell=0.40$ m, $I=5$ A east, $B=0.3$ T north. Find force. (b) Two wires, $d=2$ cm, $I_1=I_2=10$ A parallel. Force per length?</p>
<p><strong>How to recognize this type:</strong> Wire in external $\\vec B$ or two parallel wires.</p>
<ol class="soln">
<li>(a) $F=I\\ell B=0.60$ N, up.</li>
<li>(b) $B_1=\\mu_0 I_1/(2\\pi d)$; $F/\\ell=I_2 B_1=\\mu_0 I_1 I_2/(2\\pi d)=1.0\\times 10^{-3}$ N/m.</li>
<li>Parallel currents attract; antiparallel repel.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\vec F=I\\vec\\ell\\times\\vec B$ handles both cases.</p>
</details>
`,

  "unit-13": `
<details class="example" open><summary><span class="pill">Example 1</span> Sliding rod on rails (motional EMF)</summary>
<p><strong>Problem.</strong> $L=0.5$ m rod, $v=3$ m/s, $B=0.8$ T up, $R=2\\,\\Omega$. Find $\\varepsilon$, $I$, force, power. Verify energy conservation.</p>
<p><strong>How to recognize this type:</strong> Moving conductor, changing area.</p>
<ol class="soln">
<li>$\\varepsilon=BLv=1.2$ V; $I=0.6$ A (Lenz sets direction).</li>
<li>$F_{mag}=BIL=0.24$ N opposing motion; $F_{ext}=0.24$ N for constant $v$.</li>
<li>$P_{ext}=Fv=0.72$ W = $I^2R$. ✓</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $\\varepsilon=BLv$ converts mechanical work to electric heat; exact equality at constant $v$.</p>
</details>

<details class="example"><summary><span class="pill">Example 2</span> Loop entering/exiting a field</summary>
<p><strong>Problem.</strong> Square $a=0.10$ m, $R=0.05\\,\\Omega$, $v=2$ m/s, enters region width $w=0.20$ m with $B=0.5$ T into page. Sketch $\\varepsilon(t)$, $I(t)$.</p>
<p><strong>How to recognize this type:</strong> Rigid loop crossing boundary.</p>
<ol class="soln">
<li>Entering (0.05 s): $\\varepsilon=Bav=0.10$ V; $I=2.0$ A counterclockwise (oppose increase).</li>
<li>Fully inside (0.05 s): $\\varepsilon=0$, $I=0$.</li>
<li>Exiting (0.05 s): $\\varepsilon=-0.10$ V; $I=2.0$ A clockwise.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Only the edge crossing boundary changes flux. Fully-immersed loop has zero EMF no matter how fast.</p>
</details>

<details class="example"><summary><span class="pill">Example 3</span> Rotating loop — AC generator</summary>
<p><strong>Problem.</strong> $N=50$, $A=0.02$ m², $B=0.3$ T, $\\omega=120$ rad/s. Derive $\\varepsilon(t)$; find peak.</p>
<p><strong>How to recognize this type:</strong> Coil rotating in uniform $B$.</p>
<ol class="soln">
<li>$\\Phi_{tot}=NBA\\cos(\\omega t)$.</li>
<li>$\\varepsilon=-d\\Phi/dt=NBA\\omega\\sin(\\omega t)$.</li>
<li>Peak $\\varepsilon_0=NBA\\omega=36$ V.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Sinusoidal EMF from rotation; peak at plane-parallel-to-$B$ (zero flux).</p>
</details>

<details class="example"><summary><span class="pill">Example 4</span> Changing solenoid field → outer loop</summary>
<p><strong>Problem.</strong> Solenoid $r_s=2$ cm, $n=1000$/m, $dI/dt=50$ A/s. Outer loop $r_L=5$ cm, $R=0.1\\,\\Omega$. Find $\\varepsilon$, $I_L$, induced $E$ at $r=5$ cm.</p>
<p><strong>How to recognize this type:</strong> Stationary outer loop; changing interior $B$.</p>
<ol class="soln">
<li>$\\Phi=\\mu_0 nI\\pi r_s^2$; $\\varepsilon=\\mu_0 n\\pi r_s^2\\,dI/dt\\approx 7.9\\times 10^{-5}$ V.</li>
<li>$I_L=\\varepsilon/R\\approx 7.9\\times 10^{-4}$ A.</li>
<li>$E(2\\pi r_L)=\\varepsilon \\Rightarrow E\\approx 2.5\\times 10^{-4}$ V/m.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Induced $E$ exists outside the field region — curls around $d\\Phi/dt$.</p>
</details>

<details class="example"><summary><span class="pill">Example 5</span> LR circuit — current growth</summary>
<p><strong>Problem.</strong> $\\varepsilon=12$ V, $R=4\\,\\Omega$, $L=2$ H; switch at $t=0$. Derive $I(t)$; half-time; $dI/dt$ at $t=0$.</p>
<p><strong>How to recognize this type:</strong> LR energizing.</p>
<ol class="soln">
<li>$\\varepsilon-IR-L\\dot I=0$; $I(t)=(\\varepsilon/R)(1-e^{-t/\\tau})$, $\\tau=0.5$ s, $I_\\infty=3$ A.</li>
<li>Half: $t_{1/2}=\\tau\\ln 2\\approx 0.35$ s.</li>
<li>At $t=0$: $L\\dot I=\\varepsilon \\Rightarrow \\dot I=6$ A/s.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Inductor = open at $t=0^+$, wire at steady state.</p>
</details>

<details class="example"><summary><span class="pill">Example 6</span> LR decay and flyback diode</summary>
<p><strong>Problem.</strong> Steady state $I_0=3$ A. Battery disconnected; $L=2$ H across $R=4\\,\\Omega$. Find $I(t)$, total heat, and why a flyback diode prevents voltage spikes.</p>
<p><strong>How to recognize this type:</strong> LR discharging.</p>
<ol class="soln">
<li>$I(t)=I_0 e^{-t/\\tau}$, $\\tau=0.5$ s.</li>
<li>Energy stored $U_L=\\tfrac12 LI_0^2=9$ J, all dissipated.</li>
<li>Abrupt open ⇒ $dI/dt\\to-\\infty$ ⇒ $V_L=L\\,dI/dt$ huge spike. Flyback diode anti-parallel provides safe decay path.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $I_L$ cannot change instantly; always supply a decay path.</p>
</details>

<details class="example"><summary><span class="pill">Example 7</span> LR energy balance</summary>
<p><strong>Problem.</strong> For the LR of Example 5: energy stored at steady state; total battery work during transient; verify conservation.</p>
<p><strong>How to recognize this type:</strong> Energy bookkeeping.</p>
<ol class="soln">
<li>$U_L=\\tfrac12 LI_\\infty^2=9$ J.</li>
<li>Resistor dissipation during transient = 9 J.</li>
<li>Total battery output during transient = 18 J; half stored, half dissipated.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Energizing an inductor always dissipates half the battery's transient work.</p>
</details>

<details class="example"><summary><span class="pill">Example 8</span> Mutual inductance / transformer</summary>
<p><strong>Problem.</strong> Primary $N_1=200$, $A=5\\times 10^{-4}$ m², $\\ell=0.25$ m; secondary $N_2=50$ on same core. (a) $M$. (b) $\\varepsilon_2$ if $dI_1/dt=20$ A/s. (c) Why does a transformer need AC?</p>
<p><strong>How to recognize this type:</strong> Coupled coils.</p>
<ol class="soln">
<li>$M=\\mu_0 N_1 N_2 A/\\ell\\approx 2.5\\times 10^{-5}$ H.</li>
<li>$\\varepsilon_2=M\\,dI_1/dt\\approx 5.0\\times 10^{-4}$ V.</li>
<li>Steady DC gives $d\\Phi/dt=0 \\Rightarrow \\varepsilon_2=0$. $V_2/V_1=N_2/N_1$ for AC.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> Transformers need changing flux; AC primary required.</p>
</details>

<details class="example"><summary><span class="pill">Example 9</span> Self-inductance of solenoid</summary>
<p><strong>Problem.</strong> Derive $L$ for long solenoid. Compute $L$ for $N=500$, $\\ell=0.3$ m, $A=4\\times 10^{-4}$ m². At $I=2$ A, find $u_B$ and check total energy.</p>
<p><strong>How to recognize this type:</strong> Standard geometry, derive $L$.</p>
<ol class="soln">
<li>$B=\\mu_0 nI$; $N\\Phi=\\mu_0 N^2 AI/\\ell$; $L=\\mu_0 N^2 A/\\ell\\approx 4.2\\times 10^{-4}$ H.</li>
<li>$B\\approx 4.2\\times 10^{-3}$ T; $u_B=B^2/(2\\mu_0)\\approx 7.0$ J/m³.</li>
<li>$U=\\tfrac12 LI^2\\approx 8.4\\times 10^{-4}$ J = $u_B\\cdot A\\ell$ ✓.</li>
</ol>
<p class="takeaway"><strong>Takeaway:</strong> $L=\\mu_0 N^2 A/\\ell$. Two views (circuit energy, field energy density) agree.</p>
</details>
`
};

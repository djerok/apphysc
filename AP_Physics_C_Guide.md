# AP Physics C — Complete Content Guide

*Aligned to the CollegeBoard Course and Exam Description (CED), effective Fall 2024, with May 2026 exam clarifications.*

This guide covers **both** AP Physics C courses:
- **Mechanics** (Units 1–7)
- **Electricity & Magnetism** (Units 8–13)

Each unit section contains: learning objectives, key equations, worked FRQ-level examples with full solutions, diagrams (image + ASCII), and common pitfalls.

---

## Table of Contents

**Mechanics**
1. [Kinematics](#unit-1--kinematics)
2. [Force and Translational Dynamics](#unit-2--force-and-translational-dynamics)
3. [Work, Energy, and Power](#unit-3--work-energy-and-power)
4. [Linear Momentum](#unit-4--linear-momentum)
5. [Torque and Rotational Dynamics](#unit-5--torque-and-rotational-dynamics)
6. [Energy and Momentum of Rotating Systems](#unit-6--energy-and-momentum-of-rotating-systems)
7. [Oscillations](#unit-7--oscillations)

**Electricity & Magnetism**

8. [Electric Charges, Fields, and Gauss's Law](#unit-8--electric-charges-fields-and-gausss-law)
9. [Electric Potential](#unit-9--electric-potential)
10. [Conductors and Capacitors](#unit-10--conductors-and-capacitors)
11. [Electric Circuits](#unit-11--electric-circuits)
12. [Magnetic Fields and Electromagnetism](#unit-12--magnetic-fields-and-electromagnetism)
13. [Electromagnetic Induction](#unit-13--electromagnetic-induction)

[Quick Reference Equation Sheet](#quick-reference-equation-sheet) · [Study Tips](#general-study-tips)

---

## Quick Reference Equation Sheet

### Mechanics
- **Kinematics (calculus):** `v = dx/dt`, `a = dv/dt`, `x(t) = x₀ + ∫v dt`
- **Kinematics (constant a):** `v = v₀ + at`, `x = x₀ + v₀t + ½at²`, `v² = v₀² + 2aΔx`
- **Newton's 2nd Law:** `ΣF = ma = dp/dt`
- **Friction:** `f_s ≤ μ_sN`, `f_k = μ_kN`
- **Work / Energy:** `W = ∫F·dr`, `KE = ½mv²`, `F_x = −dU/dx`, `P = F·v`
- **Momentum:** `p = mv`, `J = ∫F dt = Δp`, `r_cm = (1/M)∫r dm`
- **Rotation:** `τ = r×F`, `Στ = Iα`, `I = ∫r² dm`, `I = I_cm + Md²`
- **Rolling (no slip):** `v = Rω`, `KE = ½Mv² + ½I_cmω²`
- **Angular momentum:** `L = Iω = r×p`, `τ_ext = dL/dt`
- **Gravitation:** `F = GMm/r²`, `U = −GMm/r`, `E_orbit = −GMm/(2a)`, `T² = 4π²a³/GM`
- **SHM:** `ω = √(k/m)`, `T_pendulum = 2π√(L/g)`, `T_physical = 2π√(I/mgd)`, `E = ½kA²`

### Electricity & Magnetism
- **Coulomb / Field:** `F = kq₁q₂/r²`, `E = F/q`, `E_point = kq/r²`
- **Gauss's law:** `∮E·dA = Q_enc/ε₀`
- **Potential:** `V = kq/r`, `V = −∫E·dl`, `E = −∇V`, `U = qV`
- **Capacitance:** `C = Q/V`, `C_pp = ε₀A/d`, `U = ½CV² = ½Q²/C`, `u = ½ε₀E²`
- **Current / Ohm:** `I = dQ/dt`, `V = IR`, `P = IV = I²R`, `R = ρL/A`
- **RC:** `q = Q_f(1−e^(−t/RC))` (charge), `q = Q₀e^(−t/RC)` (discharge), `τ = RC`
- **Magnetism:** `F = qv×B`, `F = IL×B`, `r = mv/qB`, `T = 2πm/qB`
- **Biot–Savart:** `dB = (μ₀/4π)(I dL×r̂)/r²`; long wire `B = μ₀I/(2πr)`
- **Ampère:** `∮B·dl = μ₀I_enc`; solenoid `B = μ₀nI`
- **Induction:** `Φ_B = ∫B·dA`, `ε = −dΦ_B/dt`, motional `ε = BLv`
- **Inductor:** `ε = −L dI/dt`, `U = ½LI²`, `u = B²/(2μ₀)`, `τ = L/R`, LC `ω = 1/√(LC)`

**Constants:** `g = 9.8 m/s²`, `k = 8.99×10⁹ N·m²/C²`, `ε₀ = 8.85×10⁻¹² C²/(N·m²)`, `μ₀ = 4π×10⁻⁷ T·m/A`, `e = 1.6×10⁻¹⁹ C`, `G = 6.67×10⁻¹¹ N·m²/kg²`.

---

# MECHANICS

---

## Unit 1 — Kinematics

### Learning Objectives
- Describe motion in 1D and 2D using position, displacement, velocity, and acceleration as functions of time.
- Derive v and a from x(t) by differentiation; derive v and x from a(t) by integration with initial conditions.
- Apply constant-acceleration kinematic equations.
- Analyze projectile motion by decomposing into independent x- and y-motion.
- Interpret x–t, v–t, a–t graphs (slopes = derivatives, areas = integrals).

### Key Equations
**Calculus forms (always valid):**
- `v(t) = dx/dt`, `a(t) = dv/dt = d²x/dt²`
- `v(t) = v₀ + ∫₀ᵗ a(t′) dt′`
- `x(t) = x₀ + ∫₀ᵗ v(t′) dt′`

**Constant-acceleration kinematics:**
- `v = v₀ + at`
- `x = x₀ + v₀t + ½at²`
- `v² = v₀² + 2a(x − x₀)`

**Projectile (a_x = 0, a_y = −g):** `v₀ₓ = v₀ cosθ`, `v₀ᵧ = v₀ sinθ`.

### Diagram

![Projectile motion](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ferde_hajitas4.svg/640px-Ferde_hajitas4.svg.png)

```
       v0
        \     . - ~ ~ ~ - .
      θ  \ ,'               `.
          X-------------------*
         /|                    \
        / |                     \
       /  |20 m                  \
      /   |                       \
     /____|________________________\  ground
            R  ≈ 81.3 m
```

### Worked Examples

**Example 1 — Non-constant acceleration.** Given `a(t) = (6t − 4) m/s²`, `x₀ = 2 m`, `v₀ = 3 m/s`. Find v(t), x(t), and whether v = 0 ever.

- `v(t) = 3 + ∫₀ᵗ(6t′−4)dt′ = 3t² − 4t + 3 m/s`
- `x(t) = 2 + ∫₀ᵗ v(t′)dt′ = t³ − 2t² + 3t + 2 m`
- `3t² − 4t + 3 = 0` → discriminant = 16 − 36 < 0 → **v never zero**.

**Example 2 — 2D projectile.** Cliff height 20.0 m, v₀ = 25 m/s, θ = 37° (sin = 0.60, cos = 0.80), g = 9.8.

- v₀ₓ = 20 m/s, v₀ᵧ = 15 m/s.
- `4.9t² − 15t − 20 = 0` → **t ≈ 4.07 s**.
- Range R = 20·4.07 ≈ **81.3 m**.
- v_y = 15 − 9.8(4.07) ≈ −24.8 m/s → |v| = √(20² + 24.8²) ≈ **31.9 m/s**.

**Example 3 — v–t graph.** Line from (0, 4) to (10, 24) m/s. a = slope = **2.0 m/s²**; Δx = trapezoid area = ½(4+24)(10) = **140 m**.

### Common Pitfalls
1. Using `v = v₀+at` when a is *not* constant — must integrate a(t).
2. Mixing x- and y-components in projectile problems — they are independent.
3. Sign errors with g; at the peak `v_y = 0` but speed ≠ 0 (v_x ≠ 0).

---

## Unit 2 — Force and Translational Dynamics

### Learning Objectives
- Draw complete free-body diagrams (FBDs).
- Apply Newton's 1st, 2nd, 3rd laws to single and connected bodies.
- Analyze static/kinetic friction and the transition at impending motion.
- Solve inclined-plane and pulley/Atwood problems.
- Set up and solve drag ODEs; derive terminal velocity via calculus.

### Key Equations
- Newton's 2nd: `ΣF = ma = dp/dt`
- Friction: `f_s ≤ μ_s N`, `f_k = μ_k N`.
- Incline (angle θ): `mg sinθ` (along slope), `N = mg cosθ`.
- Linear drag: `m dv/dt = mg − bv` → `v(t) = (mg/b)(1 − e^(−bt/m))`, `v_term = mg/b`.
- Quadratic drag: `v_term = √(mg/b)`; `v(t) = v_term tanh(gt/v_term)`.

### Diagram

![Free body diagram on inclined plane](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Free_body_diagram2.svg/400px-Free_body_diagram2.svg.png)

```
              N
              ^
              |
         _____|_____
        |           |  f
        |   BLOCK   |/
        |___________/
           \       /
            \     /  <-- mg sinθ
             \   /
              \ /
               *  mg
         ____θ__________
         incline
```

### Worked Examples

**Example 1 — Incline + pulley with friction.** m₁ = 4 kg on 30° incline (μ_k = 0.20); m₂ = 3 kg hanging.

- B falls: `m₂g − T = m₂a`; A up-slope: `T − m₁g sinθ − μ_k m₁g cosθ = m₁a`.
- Adding: 29.4 − 19.6 − 6.79 = 3.01 = 7a → **a = 0.43 m/s²**, T = 3(9.8 − 0.43) = **28.1 N**.

**Example 2 — Linear drag ODE.** m = 0.05 kg, b = 0.02 kg/s. `m dv/dt = mg − bv`, separable.

- `v(t) = (mg/b)(1 − e^(−bt/m))`.
- v_term = 0.05·9.8/0.02 = **24.5 m/s**. τ = m/b = 2.5 s.
- 95% of v_term: `e^(−t/τ) = 0.05` → t = 2.5 ln 20 ≈ **7.49 s**.

**Example 3 — Slip threshold.** μ_s = 0.40. `tanθ = μ_s` → θ_max = arctan(0.40) = **21.8°**.

### Common Pitfalls
1. Assuming N = mg on inclines (it's `mg cosθ`).
2. Treating static friction as always `μ_s N` (it's ≤ μ_s N until slip).
3. Sign errors in drag ODEs — drag always opposes velocity.

---

## Unit 3 — Work, Energy, and Power

### Learning Objectives
- Calculate work from constant and variable forces via line integrals.
- Apply the work–energy theorem.
- Derive force from potential energy (`F_x = −dU/dx`); identify stable/unstable equilibria from U(x) graphs.
- Apply conservation of mechanical energy with spring, gravity, and dissipation.
- Compute instantaneous and average power.

### Key Equations
- `W = ∫F·dr`, `KE = ½mv²`, `W_net = ΔKE`.
- `F_x = −dU/dx`; `U_grav = mgy` (local) or `−GMm/r` (universal); `U_spring = ½kx²`.
- `P = dW/dt = F·v`.
- `K_i + U_i = K_f + U_f + |W_nc|`.

### Diagram

![Potential energy well](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Potential_energy_well.svg/600px-Potential_energy_well.svg.png)

```
  U(x)
   |        _____
10 |       /     \            <- unstable eq. at x=0
   |      /       \
 5 |----/-----------\------   <- E = 5 J
   |   /             \
 0 |__/_______________\__ x
   | /   \         /   \
-6 |/     \_______/     \    <- stable eq. at x=±2
      -2      0      +2
```

### Worked Examples

**Example 1 — Variable force.** `F(x) = 6x − 2x²` from x = 0 to 3. `W = [3x² − (2/3)x³]₀³ = 27 − 18 = 9 J`. With m = 2 kg from rest, `v_f = √(2·9/2) = 3 m/s`.

**Example 2 — Spring + friction.** k = 200 N/m, x = 0.10 m, m = 0.50 kg, μ_k = 0.25. `½kx² = μ_k mg d` → 1.0 = 1.225 d → **d ≈ 0.82 m**.

**Example 3 — U(x) equilibria.** `U(x) = x⁴ − 8x² + 10`. Set `dU/dx = 4x(x² − 4) = 0` → x = 0, ±2. `d²U/dx²`: at x = 0 is −16 (**unstable**); at x = ±2 is +32 (**stable**). For E = 5 J, turning points at `x = ±√(4±√11) ≈ ±2.72, ±0.82 m`.

### Common Pitfalls
1. Sign of `F = −dU/dx` — force points "downhill" on U.
2. Friction work uses **path length**, not displacement.
3. Work/power involve dot products — normal & centripetal forces do no work.

---

## Unit 4 — Linear Momentum

### Learning Objectives
- Define p = mv, relate to F_net = dp/dt, apply impulse J = ∫F dt.
- Conserve momentum in 1D/2D, including elastic/inelastic/perfectly inelastic collisions.
- Compute center of mass for discrete and continuous bodies; distinguish internal vs external forces.
- Qualitatively apply rocket/variable-mass reasoning.

### Key Equations
- `p = mv`; `F_net = dp/dt`.
- `J = ∫F dt = Δp = F_avg Δt`.
- Conservation: `Σp_i = Σp_f` (when external impulse is zero).
- Perfectly inelastic: `v_f = (m₁v₁ + m₂v₂)/(m₁+m₂)`.
- `r_cm = (1/M)∫r dm`; `M a_cm = F_ext`.
- Thrust: `F = v_exh dm/dt`.

### Diagram

![Elastic 2D collision](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Elastischer_sto%C3%9F_2D.gif/320px-Elastischer_sto%C3%9F_2D.gif)

```
F(N) ^
  60 |        ____
     |       /    \
  40 |      /      \____
     |     /            \
  20 |    /              \
     |   /                \
   0 +--/------------------\----> t (s)
        J = ∫F dt = shaded area = Δp
```

### Worked Examples

**Example 1 — 2D perfectly inelastic collision.** Car (1500 kg east @ 20 m/s) + truck (2500 kg north @ 15 m/s).

- p_x = 30 000; p_y = 37 500 kg·m/s.
- v_x = 7.5, v_y = 9.375 → |v| = **12.0 m/s** at θ = **51.3° N of E**.

**Example 2 — Impulse from F(t).** m = 0.20 kg, F(t) = 50t − 10t² for 0–5 s.

- `J = ∫₀⁵(50t − 10t²)dt = 625 − 416.67 = 208.3 N·s`.
- Δv = J/m = **1042 m/s** (idealized); F_avg = **41.7 N**.

**Example 3 — CM of non-uniform rod.** `λ(x) = λ₀(1 + x/L)`.

- `M = (3/2)λ₀L`, `∫x dm = (5/6)λ₀L²`, so **x_cm = (5/9)L**.

### Common Pitfalls
1. Momentum is a vector — conserve p_x and p_y separately.
2. Momentum conserved in all collisions; KE only in elastic.
3. Bouncing ball: `Δp = m(v_f − (−v_i)) = m(v_f + v_i)`.

---

## Unit 5 — Torque and Rotational Dynamics

### Learning Objectives
- Apply rotational kinematics and relate angular to linear quantities.
- Compute torque as τ = r × F.
- Calculate I for continuous bodies via integration; apply parallel-axis theorem.
- Apply Στ = Iα to rigid-body dynamics.
- Analyze rolling without slipping.
- Apply static-equilibrium conditions (ΣF = 0, Στ = 0).

### Key Equations
- `τ = r×F`, |τ| = rF sinθ.
- `Στ = Iα`; rotational kinematics analogous to linear.
- `I = ∫r² dm`; `I = I_cm + Md²`.
- Rolling: `v_cm = Rω`, `a_cm = Rα`.
- Static eq.: ΣF = 0 **and** Στ = 0 about any pivot.

### Diagram

![Torque right-hand rule](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Torque_animation.gif/240px-Torque_animation.gif)

```
            ω  ↻
         ___________
        /     •cm   \     v_cm = Rω →
       |      ●------|--→
        \___________/
     ----●----------●------   ground
     contact point: v = 0 (instantaneous)
```

### Worked Examples

**Example 1 — I of uniform rod about end.** λ = M/L. `I = ∫₀ᴸ x²λ dx = (1/3)ML²`. Verify by parallel-axis from I_cm = (1/12)ML². ✓

**Example 2 — Sphere rolling down incline.** I = (2/5)MR².

- Translation: `Mg sinθ − f = Ma`; torque about CM: `fR = (2/5)MR²(a/R)` → f = (2/5)Ma.
- Substitute: **a = (5/7)g sinθ**.

**Example 3 — Ladder.** Uniform, mass M, angle θ, frictionless wall. `N_f = Mg`, `N_w = Mg/(2 tanθ)`. No-slip condition: `f = N_w ≤ μ_s Mg` → **μ_s ≥ 1/(2 tanθ)**.

### Common Pitfalls
1. Forgetting sinθ / using the wrong lever arm.
2. Misapplying parallel-axis theorem (must start from CM axis).
3. Assuming f = μN when rolling — static friction is whatever's needed up to μ_s N.

---

## Unit 6 — Energy and Momentum of Rotating Systems

### Learning Objectives
- Compute rotational KE (including rolling).
- Apply the rotational work–energy theorem.
- Calculate angular momentum L of a particle and rigid body.
- Apply conservation of L when τ_ext = 0.
- Analyze orbital motion using energy and angular-momentum conservation; derive Kepler's 3rd law.

### Key Equations
- `KE_rot = ½Iω²`; rolling `KE = ½Mv² + ½I_cmω²`; `W = ∫τ dθ`.
- `L = Iω = r×p`; `τ_ext = dL/dt`.
- Gravity: `F = GMm/r²`, `U = −GMm/r`, `v_orb = √(GM/r)`, `v_esc = √(2GM/r)`, `E_bound = −GMm/(2a)`, `T² = 4π²a³/GM`.

### Diagram

![Kepler's second law](https://upload.wikimedia.org/wikipedia/commons/9/9b/Kepler-second-law.gif)

```
                 v_a (slow)
                   ^
                   |
          .------- * ----------.         aphelion
       .'          |            `.
      /            |              \
     |             F (Sun)         |
      \           *               /
       `.         .             .'
          `------ * -----------'         perihelion
                  |
                  v  v_p (fast)
   L = m v_p r_p = m v_a r_a    (conserved)
```

### Worked Examples

**Example 1 — Sphere rolling from height h.** `Mgh = ½Mv² + ½(2/5)MR²(v/R)² = (7/10)Mv²` → **v = √(10gh/7)**.

**Example 2 — Ball sticks to pivoted rod.** I_rod = (1/3)ML², ball mass m at end, incoming v₀. L conserved: `mv₀L = ((1/3)ML² + mL²)ω` → `ω = mv₀/[L(M/3 + m)]`.

**Example 3 — Kepler 3.** `GMm/r² = mv²/r` → `v² = GM/r`; `T = 2πr/v` → **`T² = 4π²r³/GM`**. Escape: set `E = 0` → v_esc = √(2GM/r).

### Common Pitfalls
1. Using v and ω as independent for rolling — must use ω = v/R.
2. L = Iω requires I about the same axis as ω.
3. Orbit energy is `−GMm/(2a)`, not `−GMm/a`; v_esc = √2 · v_circular.

---

## Unit 7 — Oscillations

### Learning Objectives
- Identify SHM by restoring force `F = −kx`.
- Derive ω, T, f for spring-mass, simple pendulum, physical pendulum.
- Represent x(t), v(t), a(t) as sinusoids; relate amplitude, phase, and ω.
- Apply energy conservation in SHM.
- Recognize damped & driven oscillations qualitatively (resonance).

### Key Equations
- SHM ODE: `d²x/dt² = −ω²x`; spring ω = √(k/m).
- `x(t) = A cos(ωt + φ)`; `v = −Aω sin(ωt+φ)`; `a = −Aω² cos(ωt+φ)`.
- Simple pendulum: `T = 2π√(L/g)`; physical: `T = 2π√(I/mgd)`.
- Energy: `E = ½kA² = ½mv² + ½kx²`.

### Diagram

![SHM animation](https://upload.wikimedia.org/wikipedia/commons/7/74/Simple_harmonic_motion_animation.gif)

```
 x
+A |*           *           *
   |  *       *   *       *
   |    *   *       *   *
  0+------*-----------*-----------*----> t
   |    *   *       *   *    T
   |  *       *   *       *
-A |*           *           *
    0        T/2          T         3T/2
```

### Worked Examples

**Example 1 — Derive SHM.** `m d²x/dt² = −kx` → `d²x/dt² = −(k/m)x`. ω² = k/m, solution `x(t) = A cos(ωt + φ)`, T = 2π√(m/k).

**Example 2 — Physical pendulum (rod pivoted at end).** I = (1/3)ML², d = L/2. `T = 2π√[(ML²/3)/(MgL/2)] = 2π√(2L/3g)`. For L = 1 m: T ≈ **1.64 s**.

**Example 3 — Speed at x = A/2.** `½kA² = ½mv² + ½k(A/2)²` → `v = (√3/2)ωA ≈ 0.866 v_max`.

### Common Pitfalls
1. Using x instead of A in `E = ½kA²`.
2. Applying simple-pendulum formula to extended bodies (use physical-pendulum).
3. Forgetting a = −ω²x: max |a| at turning points, zero at equilibrium.

---

# ELECTRICITY & MAGNETISM

---

## Unit 8 — Electric Charges, Fields, and Gauss's Law

### Learning Objectives
- Describe charging (conduction, induction, polarization); distinguish conductors/insulators.
- Apply charge quantization and conservation.
- Use Coulomb's law and superposition for discrete point charges.
- Compute E for continuous charge distributions via integration.
- Compute electric flux and apply Gauss's law with symmetry (sphere, cylinder, plane).

### Key Equations
- `F = kq₁q₂/r²`, `E = F/q`, `E_point = kq/r²`.
- `E_net = Σ E_i`; continuous `E = ∫k(dq/r²)r̂`.
- `Φ_E = ∮E·dA`; Gauss's law: `∮E·dA = Q_enc/ε₀`.
- Infinite sheet (non-conductor): `E = σ/(2ε₀)`; conductor surface: `E = σ/ε₀`.

### Diagram

![Electric dipole field](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/VFPt_dipole_electric.svg/500px-VFPt_dipole_electric.svg.png)

```
  Gaussian pillbox on infinite sheet

       ↑  ↑  ↑  ↑  ↑   E
      ┌───────────┐
      │   +σ      │  ← cap area A
      └───────────┘
       ↓  ↓  ↓  ↓  ↓   E

   Φ = 2EA = σA/ε₀  → E = σ/(2ε₀)
```

### Worked Examples

**Example 1 — Uniformly charged insulating sphere (Q, R).**

- Outside (r ≥ R): `E(4πr²) = Q/ε₀` → **E = kQ/r²**.
- Inside (r < R): `Q_enc = Q(r³/R³)` → **E = kQr/R³** (linear in r).
- Both agree at r = R.

**Example 2 — E on-axis of charged ring (Q, radius a).**
By symmetry only x-component survives. `E_x = kQx/(x² + a²)^(3/2)`. Limits: x → 0 gives 0; x ≫ a gives kQ/x². Maximum at x = a/√2.

**Example 3 — Superposition, 3 charges.** +q at (0,0), +q at (a,0), −q at (a,a). Compute field at origin by summing x- and y-components of each contribution (taking care of the √2 diagonal distance for −q).

### Common Pitfalls
1. Using Gauss's law on non-symmetric distributions.
2. Confusing Q_enc with Q_total (only the fraction inside Gaussian surface matters).
3. Adding magnitudes instead of components in continuous integrals — miss the cosθ factor.

---

## Unit 9 — Electric Potential

### Learning Objectives
- Define V as potential energy per unit charge.
- Compute V from point and continuous distributions by integration.
- Relate E and V via gradient / line integral.
- Apply U = qV and conservation of energy in electric fields.
- Compute assembly energy of discrete charge systems.

### Key Equations
- `V_point = kq/r`; continuous `V = ∫k dq/r`.
- `V_B − V_A = −∫_A^B E·dl`; `E = −∇V`, `E_x = −∂V/∂x`.
- `U = qV`; pair `U = kq₁q₂/r`; assembly `U = Σ_{i<j} kq_i q_j/r_{ij}`.

### Diagram

![Dipole equipotentials and field](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/VFPt_dipole_electric.svg/512px-VFPt_dipole_electric.svg.png)

```
   concentric dotted circles = equipotentials (V = kQ/r)
   radial arrows = E-field (outward for +Q)
   E ⟂ equipotential everywhere
```

### Worked Examples

**Example 1 — V on-axis of charged ring.** Every dq has same r = √(R²+x²): `V(x) = kQ/√(R²+x²)`. Differentiate to verify E_x = kQx/(R²+x²)^(3/2). ✓

**Example 2 — E from V.** `V = 3x²y − 2yz²`. `E = −∇V = (−6xy, −3x²+2z², 4yz)`. At (1,2,1): E = (−12, −1, 8) V/m; |E| ≈ 14.5 V/m.

**Example 3 — Assembly energy.** Three +q at corners of equilateral triangle, side a: `U = 3kq²/a`. If one charge flipped to −q: `U = −kq²/a` (bound).

### Common Pitfalls
1. Treating V as a vector (it's a scalar).
2. Sign error in `V = −∫E·dl` — moving along E lowers V.
3. Using V = kQ/r for non-spherical objects; pulling 1/r out of the integral when r isn't constant.

---

## Unit 10 — Conductors and Capacitors

### Learning Objectives
- Describe conductors in electrostatic equilibrium (E = 0 inside, V constant, charge on surface).
- Derive C for parallel-plate, spherical, cylindrical capacitors.
- Analyze dielectrics (constant V vs constant Q scenarios).
- Compute stored energy and energy density.
- Reduce capacitor networks (series/parallel).

### Key Equations
- Conductor in eq.: E_inside = 0, V constant, E_surface = σ/ε₀.
- `C = Q/V`; parallel plate `C = ε₀A/d`.
- Spherical: `C = 4πε₀ ab/(b−a)`; cylindrical: `C = 2πε₀L/ln(b/a)`.
- `U = ½CV² = ½Q²/C = ½QV`; `u = ½ε₀E²`.
- Dielectric: `C = κC₀`; series `1/C_eq = Σ1/C_i`; parallel `C_eq = ΣC_i`.

### Diagram

![Parallel plate capacitor field](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Parallel_plate_capacitor.svg/800px-Parallel_plate_capacitor.svg.png)

```
  ┌──────────────────────┐   ← top plate (+Q, +σ)
  │ + + + + + + + + + + +│
  │   ▼   ▼   ▼   ▼   ▼  │   E = σ/ε₀, uniform
  │ - - - - - - - - - - -│
  └──────────────────────┘   ← bottom plate (−Q)

  V = Ed,  C = ε₀A/d,  U = ½CV²
```

### Worked Examples

**Example 1 — Spherical capacitor.** Gauss gives `E = Q/(4πε₀r²)` for a<r<b. `V = (Q/4πε₀)(1/a − 1/b)` → **C = 4πε₀ab/(b−a)**.

**Example 2 — Network.** C₁ = 2, C₂ = 4 μF in series → 4/3 μF. In parallel with C₃ = 3 μF → C_eq = 13/3 μF. Across 12 V: Q₃ = 36 μC; series branch carries 16 μC; V₁ = 8 V, V₂ = 4 V.

**Example 3 — Dielectric insertion.**
| | C | Q | V | U |
|---|---|---|---|---|
| Battery on (V fixed) | κC₀ | κQ₀ | V₀ | κU₀ (↑) |
| Battery off (Q fixed) | κC₀ | Q₀ | V₀/κ | U₀/κ (↓) |

### Common Pitfalls
1. Series/parallel intuition — capacitors in series have *smaller* C_eq.
2. Mixing constant-V vs constant-Q in dielectric problems.
3. `E = σ/ε₀` (conductor) vs `σ/(2ε₀)` (isolated sheet).

---

## Unit 11 — Electric Circuits

### Learning Objectives
- Define current as rate of charge flow; relate to drift velocity.
- Apply Ohm's law, resistance R = ρL/A, power.
- Apply Kirchhoff's junction and loop rules to multi-loop circuits.
- Reduce resistor and capacitor networks.
- Solve RC charging and discharging ODEs; interpret τ = RC.

### Key Equations
- `I = dQ/dt`; `J = nqv_d = I/A`; `R = ρL/A`.
- `V = IR`; `P = IV = I²R = V²/R`.
- Kirchhoff: `ΣI_in = ΣI_out`; `ΣΔV_loop = 0`.
- Resistors: series `R_eq = ΣR_i`; parallel `1/R_eq = Σ1/R_i`.
- RC charging: `q(t) = Q_f(1 − e^(−t/RC))`, `i(t) = (ε/R)e^(−t/RC)`.
- RC discharging: `q(t) = Q₀ e^(−t/RC)`, τ = RC.

### Diagram

![RC circuit](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Series-RC.svg/320px-Series-RC.svg.png)

```
    ___  R    ___||___
   |   |/\/\/|        |
   |   +     |   C    |
  (ε)        ====     
   |   -     |        |
   |___S/____|________|

Charging q(t):
 q |
Q_f|-----_________
   |  _-'
0.63Q_f|-_
   | /    :
   |/_____:_________ t
   0      τ=RC
```

### Worked Examples

**Example 1 — Two-loop Kirchhoff.** ε₁ = 12 V, ε₂ = 6 V, R₁ = 2 Ω, R₂ = 4 Ω, R₃ = 3 Ω. Junction: `I₁ = I₂ + I₃`. Left loop: `12 = 2I₁ + 4I₂`. Right loop: `6 = 4I₂ + 3I₃`.

Substitute `I₁ = I₂ + I₃` into left loop: `12 = 2(I₂+I₃) + 4I₂ = 6I₂ + 2I₃` → `6 = 3I₂ + I₃`. Combine with `6 = 4I₂ + 3I₃`: multiply first by 3 → `18 = 9I₂ + 3I₃`, subtract to get `12 = 5I₂` → **I₂ = 2.4 A**, **I₃ = 6 − 3(2.4) = −1.2 A** (opposite to assumed direction), **I₁ = 1.2 A**.

**Example 2 — RC charging ODE.** Loop: `ε − iR − q/C = 0`. Separable, q(0) = 0 → **`q(t) = Cε(1 − e^(−t/RC))`**, `i(t) = (ε/R)e^(−t/RC)`. At t = τ, q = 0.632 Q_f.

**Example 3 — RC discharging.** Q₀ = 10 μC, R = 1000 Ω, C = 2 μF. (a) Q₀/2 at t = RC·ln 2 = **1.39 ms**. (b) Total dissipated energy = `Q₀²/(2C) = 25 μJ`.

### Common Pitfalls
1. Sign errors in Kirchhoff loops — be consistent with traversal direction.
2. Capacitor at t = 0⁺ acts like a wire; at t → ∞ like an open.
3. `τ = RC` uses **Thévenin-equivalent** R seen by the capacitor.

---

## Unit 12 — Magnetic Fields and Electromagnetism

### Learning Objectives
- Describe B-fields from moving charges, currents, and magnets.
- Compute Lorentz force and force on current-carrying conductors.
- Analyze circular and helical motion in uniform B.
- Apply Biot–Savart law to finite wires, arcs, loops.
- Apply Ampère's law to symmetric cases (infinite wire, coaxial, solenoid, toroid).

### Key Equations
- `F = qv×B`, `F = IL×B`.
- Circular: `r = mv/qB`, `T = 2πm/qB` (independent of v).
- Biot–Savart: `dB = (μ₀/4π)(I dL×r̂)/r²`.
- Long wire: `B = μ₀I/(2πr)`; loop on axis: `B = μ₀IR²/[2(R²+z²)^(3/2)]`.
- Ampère: `∮B·dl = μ₀I_enc`; solenoid: `B = μ₀nI`; toroid: `B = μ₀NI/(2πr)`.

### Diagram

![Right-hand rule for wire](https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Manoderecha.svg/480px-Manoderecha.svg.png)

```
   Solenoid cross-section
   ┌───·───·───·───·───·───·───·───┐
   │                                │
   │   →   →   →   →   →   →   →   │   B = μ₀nI (uniform interior)
   │   →   →   →   →   →   →   →   │
   │                                │
   └───×───×───×───×───×───×───×───┘
        (· = current out, × = in)
```

### Worked Examples

**Example 1 — Coaxial cable.** Inner I₀ (radius a), outer shell −I₀ (radius b).

- r < a: `B = μ₀I₀ r/(2πa²)`.
- a < r < b: `B = μ₀I₀/(2πr)`.
- r > b: **B = 0** (self-shielding).

**Example 2 — Circular arc at center.** Arc of angle θ, radius R. `B = μ₀Iθ/(4πR)`. Full loop (θ = 2π) gives B = μ₀I/(2R). ✓

**Example 3 — Helical motion.** Proton, B = 0.5 T ẑ, v = (3×10⁶ x̂ + 4×10⁶ ẑ) m/s.

- r = mv_⊥/(qB) ≈ **6.3 cm**.
- T = 2πm/qB ≈ **1.31 × 10⁻⁷ s**.
- Pitch = v_∥ T ≈ **0.52 m**.

### Common Pitfalls
1. Dropping the sinθ in cross product or reversing the RHR for negative charges.
2. Using Ampère without symmetry — use Biot–Savart for finite geometries.
3. T is speed-independent; pitch uses v_∥ only, radius uses v_⊥ only.

---

## Unit 13 — Electromagnetic Induction

### Learning Objectives
- Compute magnetic flux Φ_B = ∫B·dA.
- Apply Faraday's and Lenz's laws.
- Analyze motional EMF in conductors moving through B.
- Define self-inductance; apply `ε = −L dI/dt`.
- Solve LR circuit ODEs; compute energy stored and energy density.
- Recognize LC oscillations qualitatively.

### Key Equations
- `Φ_B = ∫B·dA`, `ε = −dΦ_B/dt`.
- Motional: `ε = BLv`.
- Inductor: `ε = −L dI/dt`; `U = ½LI²`; `u = B²/(2μ₀)`.
- LR growth: `I(t) = (ε/R)(1 − e^(−t/τ))`; decay: `I(t) = I₀ e^(−t/τ)`; τ = L/R.
- LC: `ω = 1/√(LC)`.

### Diagram

![Faraday's induction experiment](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Faradays_experiment.svg/640px-Faradays_experiment.svg.png)

```
    × × × × × × × × ×   B into page
    ×───────────●──× →  v
    ×           │  ×
    R           │ rod (length L)
    ×           │  ×
    ×───────────●──×
    × × × × × × × × ×
  Induced current: counterclockwise (Lenz)
```

### Worked Examples

**Example 1 — Sliding rod.** L = 0.50 m, v = 4.0 m/s, B = 0.20 T, R = 2.0 Ω.

- ε = BLv = **0.40 V**; I = **0.20 A**.
- F_mag = BIL = 0.020 N (opposes motion).
- P = I²R = **0.080 W** = Fv ✓.

**Example 2 — LR circuit.** ε₀ = 12 V, R = 6 Ω, L = 3 H. `I(t) = 2(1 − e^(−2t)) A`; τ = 0.5 s. At steady state `U = ½LI² = 6.0 J`.

**Example 3 — Loop entering field.** Side a = 0.10 m, B = 0.30 T, v = 2.0 m/s, R = 0.50 Ω. While entering: ε = Bav = 0.060 V, I = 0.12 A. Once fully inside: dΦ/dt = 0, I = 0.

### Common Pitfalls
1. Lenz's law: induced current opposes the **change** in flux, not flux itself.
2. Inductor at t = 0⁺ is an open (I = 0); at steady state, a wire (V_L = 0).
3. Φ_B requires a consistent dA orientation — sets the positive sense of ε.

---

## General Study Tips

1. **Master calculus first.** AP Physics C assumes fluent differentiation and integration. Virtually every unit has a problem solvable only by calculus.
2. **Draw before solving.** FBDs (Mechanics) and field-line/Gaussian-surface sketches (E&M) catch sign errors before algebra does.
3. **Parallel concepts across units.** Rotational ↔ translational (Unit 5/6); Gauss ↔ Ampère (Unit 8/12); RC ↔ LR (Unit 11/13); SHM ↔ LC oscillation (Unit 7/13).
4. **Know the symmetry criterion.** Gauss's and Ampère's laws are always true but only *solvable* when symmetry makes E (or B) constant and parallel/perpendicular to dA (or dl).
5. **Practice old FRQs.** The CollegeBoard [AP Central past exam questions](https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam/past-exam-questions) archive is the single best resource.

### References
- [Mechanics CED (PDF)](https://apcentral.collegeboard.org/media/pdf/ap-physics-c-mechanics-course-and-exam-description.pdf)
- [E&M CED (PDF)](https://apcentral.collegeboard.org/media/pdf/ap-physics-c-electricity-and-magnetism-course-and-exam-description.pdf)
- [Mechanics 2026 Clarifications](https://apcentral.collegeboard.org/media/pdf/ap-physics-c-mechanics-course-and-exam-description-clarifications.pdf)

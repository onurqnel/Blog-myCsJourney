**If the function is continuous at point "a":**

$$
\lim _{x \rightarrow a} \sin (x) = \sin (a)
$$

<br>

**Sum Rule:**

$$
\lim _{x \rightarrow a} f(x) = L, \quad \lim _{x \rightarrow a} g(x) = M
$$

$$
\lim _{x \rightarrow a}(f(x) + g(x)) = L + M
$$

<br>

**Product Rule:**

$$
\lim _{x \rightarrow a} f(x) \cdot g(x) = L \cdot M
$$

<br>

**Quotient Rule:**

$$
\lim _{x \rightarrow a} \frac{f(x)}{g(x)} = \frac{L}{M}, \quad M \neq 0
$$

<br>

**Composition Rule:**

$$
\lim _{x \rightarrow a} g(f(x)) = g(L)
$$
<br>
<br>

___

<br>
<br>

**Example Limits**

$$
\lim_{x \to 2} \frac{x^2 - 4}{x^2 + x - 6} = \frac{(x-2)(x+2)}{(x-2)(x+3)} = \frac{x+2}{x+3} = \frac{4}{5}
$$

<br>

$$
\lim_{x \to 0} \frac{(x^2 + 13x + 15)e^x + 3}{e^{x^2 + 13x + 15}} = \frac{15 e^0 + 3}{e^{15}} = \frac{18}{e^{15}}
$$

<br>

$$
\lim_{x \to 0} \frac{x \sin(3x) + 15\pi}{\sin(x^2 + 13x + 41)} = \frac{15\pi}{\sin(41)}
$$

<br>

1. **Limits (Using L'Hopital's Rule):**
$$
\lim_{h \to 0} \frac{e^h - 1}{h} = \lim_{h \to 0} e^h = 1
$$
<br>
$$
\lim_{x \to 0} \frac{\sin(x)}{x} = 1
$$

<br>

$$
\lim_{x \to 0} \frac{\cos(x) - 1}{x} = 0
$$

<br>
<br>

___
<br>

**Sum of Cubes:**

$$
x^3 + y^3 = (x + y)(x^2 - xy + y^2)
$$

**Difference of Cubes:**

$$
x^3 - y^3 = (x - y)(x^2 + xy + y^2)
$$

<br>

---

<br>

<br>
<br>

**Undefined limits**

$$
\lim_{x \to 1} \frac{x^3 - 1}{x - 1} = \frac{0}{0}
$$

$$
(x - 1) \cdot \frac{x^2 + x + 1}{x - 1} = \frac{1 + 1 + 1}{1} = 3
$$



$$
\lim_{x \to -2} \frac{x^3 + 8}{x + 2} = \frac{0}{0}
$$

$$
(x + 2) \cdot \frac{x^2 - 2x + 4}{x + 2} = \frac{-4 + 4 + 4}{1} = 4
$$

<br>
<br>

**Example 1:**

$$
\lim_{x \to 4} \frac{x^2 - x - 12}{x^3 + x - 20} = \frac{0}{0}
$$


$$
(x - 4)(x + 3) \cdot \frac{1}{(x - 4)(x + 5)} = \frac{7}{9}
$$

<br>
<br>

**Example 2:**

$$
\lim_{x \to -3} \frac{x^4 - 81}{x^2 - 9} = \frac{0}{0}
$$

$$
x^2 - 9 \cdot \frac{x^2 + 9}{x^2 - 9} = 18
$$


<br>
<br>

**Example 3:**

$$
\lim_{x \to 0} \frac{e^x - 1}{e^{2x} - 1} = \frac{0}{0}
$$

$$
\frac{e^x - 1}{e^x - 1 \cdot (e^x + 1)} = \frac{1}{2}
$$

<br>
<br>

**Example 4:**

$$
\lim_{x \to \infty} \frac{(x + 4)^2}{4x^2 + 43x + 47} = \frac{\infty}{\infty}
$$


<br>
$$
\text{Simplify by dividing by the highest power of \(x\):}
$$
$$
\frac{\frac{x^2 + 8x + 16}{x^2}}{\frac{4x^2 + 43x + 47}{x^2}} = \frac{1 + \frac{8x}{x^2} + \frac{16}{x^2}}{41 + \frac{43x}{x^2} + \frac{47}{x^2}}
$$  
<br>
$$
\text{As } x \to \infty, \frac{1}{x} \text{ or } \frac{1}{x^n} \text{ approaches } \to 0
$$

$$
\text{ Therefore }\lim_{x \to \infty} \frac{(x + 4)^2}{4x^2 + 43x + 47} = \frac{1}{41}
$$

<br>
<br>

**Example 5:**

$$
\lim_{x \to \infty} \frac{x - 2}{x^2 - 3x + 2} = \frac{\infty}{-1}
$$


$$
\frac{x - 2}{(x - 2)(x - 1)} = \frac{1}{x - 1} = \frac{1}{\infty} = 0
$$

<br>
<br>

**Example 6:**

$$
\lim_{x \to \infty} \frac{(x^2 - 1)\sin\left(\frac{\pi x}{2}\right)}{x^3 + x^2 - x - 1} = \frac{\infty \cdot [-1, 1]}{\infty}
$$

$$
\text{Since } -1 < \sin\left(\frac{\pi x}{2}\right) < 1,
$$

$$
\text{ Any number divided by infinity equals } 0
$$

$$
\frac{(x^2 - 1) \sin\left(\frac{\pi x}{2}\right)}{(x^2 - 1)(x + 1)} = 0
$$


<br>
<br>

**Example 7:**

$$
\lim_{x \to 0} \sin x \cdot \sin\left(\frac{1}{x}\right)
$$

$$
-1 \leq \sin\left(\frac{1}{x}\right) \leq 1
$$


$$
-|\sin x| \leq \sin x \cdot \sin\left(\frac{1}{x}\right) \leq |\sin x|
$$

$$
\implies 0 \leq \sin x \cdot \sin\left(\frac{1}{x}\right) \leq 0
$$

$$
\text{Therefore, the limit is: } 0 \quad
$$

<br>
<br>

**Example 8:**

$$
\lim_{x \to 6} |x - 6| \cdot \cos\left(\frac{1}{x - 6}\right)
$$

$$
-1 \leq \cos\left(\frac{1}{x - 6}\right) \leq 1
$$


$$
-|x - 6| \leq |x - 6| \cdot \cos\left(\frac{1}{x - 6}\right) \leq |x - 6|
$$

$$
|x - 6| = 0, \text{ Therefore, the limit is: } 0
$$



<br>
<br>

**Example 9:**

$$
\lim_{x \to \frac{\pi}{4}} \frac{1 - \sin(2x)}{\sin x - \cos x}
$$


$$
\frac{\sin^2 x + \cos^2 x - \sin(2x)}{\sin x - \cos x} = \frac{(\sin x - \cos x)^2}{\sin x - \cos x} = \sin\left(\frac{\pi}{4}\right) - \cos\left(\frac{\pi}{4}\right)
$$

Therefore:

$$
\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2} = 0
$$

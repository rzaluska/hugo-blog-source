+++
date = "2017-07-05T17:30:36+02:00"
draft = false
title = "Finding vector perpendicular to another vector"
tags = ['3D', 'math']
useTex = true
+++

Hello, in this post I will present solution for math problem I stumbled upon
recently. The task was given as follows:

> Given arbitrary 3D vector from 3D space find any vector that is perpendicular to
> it. Note that there is infinite number of vectors perpendicular to given one.

At first glance the task seems to be very difficult. Let's write some
mathematical equations to help us find solution.

<!--more-->

# Dot product
First of all we will remind ourselves about dot product operator defined for
vectors. Given any two vectors @@\vec{A}@@ and @@\vec{B}@@ we define dot product
as following equation:
$$\vec{A} \cdot \vec{B} = \sum_{i = 1}^N \vec{A}_i * \vec{B}_i$$

Where @@\vec{A}_i@@ and @@\vec{B}_i@@ are @@i@@-th components of @@N@@ dimensional
vectors. As we can see dot product is only defined for vectors that are the same
size. In other words we can't compute dot product for pair of 2D and 3D vector directly.

## Angle between vectors
Using dot product we can compute angle between vectors. Let's write formula
that will allow us to make this calculation:

$$\vec{A} \cdot \vec{B} = ||\vec{A}|| * ||\vec{B}|| * \cos(\theta)$$

so the angle @@\theta@@ is given by
$$\theta = \cos^{-1}\left(\frac{\vec{A} \cdot \vec{B}}{||\vec{A}|| * ||\vec{B}||}\right)$$

## Perpendicular vectors
If vectors have to be perpendicular to each other the angle between them needs to be equal
@@90^\circ@@ (@@\frac{\pi}{4}@@).

We know that:
$$\cos(\frac{\pi}{4}) = 0$$

So let's insert it into out previous equation:
$$\vec{A} \cdot \vec{B} = ||\vec{A}|| * ||\vec{B}|| * \cos(\frac{\pi}{4})$$
$$\vec{A} \cdot \vec{B} = ||\vec{A}|| * ||\vec{B}|| * 0$$

Which leads us to following very important formula:
$$\vec{A} \cdot \vec{B} = 0$$

It is only true when both @@\vec{A}@@ and @@\vec{B}@@ have length not equal
to @@0@@. This equation tells us that if vectors will satisfy it,
then angle between them is equal to @@90^\circ@@ (@@\frac{\pi}{4}@@).

# 2D example
Let's suppose we have vector @@\vec{A} = (A_x, A_y)@@ and we want to find vector that is
perpendicular to it. Starting with formula:
$$\vec{A} \cdot \vec{U} = 0$$

we set up our unknown vector to @@\vec{U} = (U_x, U_y)@@

By inserting vectors to equation:
$$\vec{A} \cdot \vec{B} = \sum_{i = 1}^N \vec{A}_i * \vec{B}_i$$

we get:
$$\vec{A} \cdot \vec{U} = \vec{A}_x * \vec{U}_x + \vec{A}_y * \vec{U}_y$$

so it lead us to:
$$\vec{A}_x * \vec{U}_x + \vec{A}_y * \vec{U}_y = 0$$

Right now it is obvious that this equation have more than one solution. Having in mind that any
of perpendicular vectors that we can find will be correct solution - let's use some assumption. If we
arbitrarily set @@\vec{U}_x = 1@@ then our equation will turn into:
$$\vec{A}_x + \vec{A}_y * \vec{U}_y = 0$$

so:
$$\vec{U}_y = - \left(\frac{\vec{A}_x}{\vec{A}_y}\right)$$

and the whole solution will turn to be:
$$\vec{U} = \left(1, -\left(\frac{\vec{A}_x}{\vec{A}_y}\right)\right)$$

But what to do if @@\vec{A}_y = 0@@ ?

Then you need to set @@\vec{U}_y = 1@@ and follow previous steps which will lead us to:
$$\vec{U} = \left(-\left(\frac{\vec{A}_y}{\vec{A}_x}\right), 1\right)$$

If both @@\vec{A}_x@@ and @@\vec{A}_y@@ are equal to @@0@@ then we can't find perpendicular vector
because @@\vec{A}@@ has a length of @@0@@.

# 3D example
After showing 2D example 3D one will be more understandable. Now let's suppose we have vector
@@\vec{A} = (A_x, A_y, A_z)@@ and we want to find vector that is perpendicular to it.
Let's state that unknown vector is @@\vec{U} = (U_x, U_y, U_z)@@.

We write dot product formula:
$$\vec{A} \cdot \vec{U} = \vec{A}_x * \vec{U}_x + \vec{A}_y * \vec{U}_y + \vec{A_z} * \vec{U}_z$$

And use property:
$$\vec{A} \cdot \vec{U} = 0$$

so:
$$\vec{A}_x * \vec{U}_x + \vec{A}_y * \vec{U}_y + \vec{A_z} * \vec{U}_z = 0$$

Now we use similar assumption to one used in 2D case. Suppose that @@\vec{U}_x = 1@@. This will
reduce out equation to
$$\vec{A}_x + \vec{A}_y * \vec{U}_y + \vec{A_z} * \vec{U}_z = 0$$

which is very similar to 2D equation. Now we suppose also that @@\vec{U}_y = 1@@ and we get
$$\vec{A}_x + \vec{A}_y + \vec{A_z} * \vec{U}_z = 0$$

So solution is
$$\vec{U} = \left(1, 1, -\left(\frac{\vec{A}_x +
            \vec{A}_y}{\vec{A}_z}\right)\right)$$

But only if @@\vec{A}_z@@ is not equal @@0@@. If that is not the case then you need to choose
another component of @@\vec{U}@@ and set it arbitrarily to @@1@@.

# Final python example code
To sum up I prepared simple Python method that will compute vector perpendicular to another for 3D
case. It can be easily inserted into existing implementation of vector class.

~~~python
class Vector:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def give_perpendicular_vector(self):
        if self.x != 0:
            return Vector(-(self.y + self.z)/self.x, 1, 1)
        if self.y != 0:
            return Vector(1, -(self.x + self.z)/self.y, 1)
        if self.z != 0:
            return Vector(1, 1, -(self.x + self.y)/self.z)

        raise ValueError("Can't compute perpendicular vector")
~~~


# References
- [1](http://tutorial.math.lamar.edu/Classes/CalcII/DotProduct.aspx)
- [2](https://math.stackexchange.com/questions/133177/finding-a-unit-vector-perpendicular-to-another-vector)

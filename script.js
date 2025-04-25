$(document).ready(function () {
  $(".title").click(function () {
    $(".container").addClass("open");
  });

  $(".close").click(function () {
    $(".container").removeClass("open");
  });

  const poems = [
    `Sonnet of an Ideal Love

A lover true, both gentle, kind, and wise,
Whose heart beats soft with warmth in tender glow,
With laughter bright as dawn in painted skies,
And eyes that see the soul, yet never show.

They whisper love like waves upon the shore,
A voice that soothes, like melodies in flight.
Through storm and sun, they cherish evermore,
A guiding star in darkest, lonesome night.

With patient hands, they lift when sorrow weighs,
No fear nor doubt can shake their steadfast grace.
Through fleeting years and ever-changing days,
Their love remains—no time can dare erase.

Oh, if such love in fate’s embrace I find,
Forevermore, my soul to theirs entwined.`,

    `Her eyes, two midnight seas where dreams reside,
So deep, so dark, with stars that softly gleam.
Their gentle gaze leaves nowhere left to hide,
And in their warmth, I drift, as in a dream.

Her hair falls soft, like whispers of the night,
Black silk that dances in the tender air.
Each strand, a shadow spun with glints of light,
Cascades in waves, with grace beyond compare.

Her cheeks, like petals kissed by morning’s glow,
So sweet, so soft, they bloom with every smile.
A tender blush, where love’s own colors show,
And hearts find rest in theirs a little while.

Yet beauty’s crown is set within her soul —
So pure, so kind, the piece that makes her whole.`,

    `Teach me, love, the way to touch your soul’s core,
And I shall learn to love as you desire,
To know your past, its battles fought before,
And build a future shaped by your heart’s fire.

Say that you long for stars; I’ll bend the sky,
Unravel every gleam to meet your gaze.
I'll lift the night, and set the stars awry,
To light the path where only kindness stays.

Show me my flaws, each fault, each heavy cost,
And I will shape myself to be your peace.
For in your eyes, I’ve found what I had lost—
A truth where all uncertainties can cease.

Teach me your fears, your dreams, your every thought,
And I will guard them, fierce against the tide.
For in your heart, the solace that I sought,
Becomes the place where only love resides.

Tell me your burdens, let me bear their weight,
No sorrow too immense, no tear too small.
With every step, we’ll rise to meet our fate,
Together standing strong, we’ll conquer all.

For you, who moves me more than words can tell,
I'll weave a love as vast as ocean’s swell.
A bond unbroken, built with care and grace,
Forever written in time’s endless space.

You are my truth, my light, my endless muse,
A love so pure, it leaves no room to lose.`
  ];

  function updatePoemHourly() {
    const hour = new Date().getHours();
    const index = hour % poems.length; // In case less than 24 poems
    $(".endtext p").html(poems[index].replace(/\n/g, "<br>"));
  }

  // Initial call
  updatePoemHourly();

  // Optional: update every hour if page stays open
  setInterval(updatePoemHourly, 60 * 60 * 1000); // Every 1 hour
});

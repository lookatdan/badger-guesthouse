// interpolate between type ratio minimum and maximum values
// store the result in a CSS custom property
function TypeRatioInterpolation () {
    // get current viewport width
    let screenWidth = screen.width;
    // interpolate between minimum ratio and maximum ratio,
    // based on current viewport width
    function scaleRatio (width, minValue, maxValue) {
        const minRange = 680;
        const maxRange = 1280;
        const a = (maxValue - minValue) / (maxRange - minRange);
        const b = minValue - a * minRange;
        const ratio = width * a + b;
        const adjustedRatio = Math.max(minValue, Math.min(ratio, maxValue));
        // update CSS custom property '--ratio' with ratio figure from the above math
        document.documentElement.style.setProperty(`--ratio`, adjustedRatio);
    }
    // apply the ratio scaling function
    scaleRatio(screenWidth, 1.125, 1.24);
    // watch for change in the viewport width and recalculate if change is detected
    window.addEventListener('resize', () => {
        let screenWidth = screen.width;
        scaleRatio(screenWidth, 1.125, 1.333);
    });
}
TypeRatioInterpolation();

// image carousel
const slides = document.getElementsByClassName("image_inner");
//loop through slides and remove classes
function removeClasses() {
    for(var i = 0; i < slides.length; i++)
    {
       slides[i].classList.remove("fade_in");
       slides[i].classList.remove("fade_out");
    }
}
// count slide number
let slideNumber = 1;
// event for next slide button
const next = document.getElementById('next')
next.addEventListener('click', event => {
    slideNumber += 1;
    removeClasses();
    // sets a limit on how many slides.
    if (slideNumber <= 3) {
        document.getElementById("image_" + slideNumber).classList.add("fade_in");
    }
    else {
        // resets slide back to 1.
        slideNumber = 1;
    }
});
// event for previous slide button
const previous = document.getElementById('previous')
previous.addEventListener('click', event => {
    removeClasses();
    // loops slides back to last slide.
    if (slideNumber == 1) {
        slideNumber = 3;
        document.getElementById("image_" + slideNumber).classList.add("fade_in");
    }
    else {
        slideNumber -= 1;
        document.getElementById("image_" + slideNumber).classList.add("fade_in");
    }
});

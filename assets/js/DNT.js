// Get first defined value, starting with official property
var dnt = (typeof navigator.doNotTrack !== 'undefined')   ? navigator.doNotTrack
        : (typeof window.doNotTrack !== 'undefined')      ? window.doNotTrack
        : (typeof navigator.msDoNotTrack !== 'undefined') ? navigator.msDoNotTrack
        : null;

// https://www.w3.org/TR/tracking-dnt/#js-dom
// The specification allows for strings BEGINNING with "0" or "1",
// possibly followed by DNT-extension characters, e.g. "1xyz"
// We can handle these strings, as well as integer 0/1's, using parseInt()
// We then just need to check for a 'yes' or 'no' from some older browsers

if (0 === parseInt(dnt) || 'no' == dnt) {
    // The user prefers to ALLOW TRACKING on this request
    // This is equivalent to the DNT: 0 request header
}

else if (1 === parseInt(dnt) || 'yes' == dnt) {
    // The user prefers NOT TO BE TRACKED on this request
    // This is equivalent to the DNT: 1 request header
}

else {
    // The user has NOT SPECIFIED a tracking preference on this request
    // This is equivalent to *NO* DNT request header
}

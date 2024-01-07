import {greeting1, greeting2, greeting3, greeting4} from "./greeting";
import {asyncScheduler} from "./rxjsReexport";

// Reminder: it is normal in webpack-based projects to have unused imports in JavaScript files.
//
// Importing 'style.css' here is how we express "Hey webpack, I want style.css (CSS) on my web page (HTML)." The
// relationship of our CSS code to JavaScript code is not our choosing, but rather a consequence of webpack's design.
// It's an implementation detail that's exposed in the API.
//
// We don't actually author JavaScript code that makes use of this import, like we normally do with an import. Normally,
// we import a function, constant, or class from a JavaScript file and then invoke it or reference it in code. By
// contrast, the below import statement kicks off a circuitous software process that finds a way to load the CSS in our
// web page by way of JavaScript. You don't really need to know how it works, but you'll probably be curious.
import './style.css';

function drawGreeting(greeting: string) {
    const greetingEl: Element = document.createElement('div');
    greetingEl.innerHTML = greeting;
    document.body.appendChild(greetingEl);
}

function detectBrowser() {
    if (typeof globalThis['chrome'] !== 'undefined') {
        console.log("Detected the 'chrome' global variable. The browser is Chromium-based.")
        const loadTimes = chrome.loadTimes();
        console.log("Load times: ", loadTimes);
    } else {
        console.log("Did not find a 'chrome' global variable. The browser is not Chromium-based.")
    }
}

detectBrowser()
drawGreeting(greeting1());
asyncScheduler.schedule(() => drawGreeting(greeting2()), 1000);
asyncScheduler.schedule(() => drawGreeting(greeting3()), 2000);
asyncScheduler.schedule(() => drawGreeting(greeting4()), 3000);

try {
    asyncScheduler.doesNotExist();
} catch (e) {
    console.log("As expected, invoking, 'asyncScheduler.doesNotExist();' resulted in an error. The code compiled, but we tricked the TypeScript compiler! Here is the error: " + e)
}

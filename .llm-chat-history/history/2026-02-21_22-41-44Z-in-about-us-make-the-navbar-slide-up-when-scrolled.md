---
title: "in about us  make the navbar slide up when scrolled"
created: 2026-02-21T22:41:44.278Z
updated: 2026-02-21T22:45:45.650Z
source: "Blackbox AI"
model: "minimax-m2-minimax-m2"
---

# in about us  make the navbar slide up when scrolled

**Created**: 2/22/2026, 4:26:44 AM
**Messages**: 11 (User: 6, Assistant: 5)
**Session ID**: `1771713703519`
**Model**: minimax-m2-minimax-m2


---

## 💬 User #1

_2026-02-28 23:09:43Z_

<task>
in about us  make the navbar slide up when scrolled
</task>

<environment_details>
# VSCode Visible Files
app/page.js

# VSCode Open Tabs
components/Footer.js
TODO.md
components/Services.js
components/PartnersSlider.js
components/AboutSummary.js
components/Process.js
components/WhyChooseUs.js
components/Contact.js
components/Hero.js
components/Blog.js
components/Testimonials.js
components/MissionVision.js
app/globals.css
components/AboutHero.js
app/about/page.js
app/layout.js
app/page.js
components/WhatsAppButton.js
index.html

# Current Working Directory (c:/Users/TSB/choice-export) Files
.gitignore
choice-export.zip
eslint.config.js
index.html
jsconfig.json
next.config.js
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
TODO.md
app/
app/globals.css
app/layout.js
app/page.js
app/about/
app/about/page.js
components/
components/AboutHero.js
components/AboutSummary.js
components/BackToTop.js
components/Blog.js
components/Contact.js
components/Footer.js
components/Header.js
components/Hero.js
components/MissionVision.js
components/PartnersSlider.js
components/Process.js
components/Services.js
components/Testimonials.js
components/WhatsAppButton.js
components/WhyChooseUs.js
public/
public/vite.svg
public/img/
public/img/choiceintexp.pdf
public/img/container.jpg
public/img/depex.jpg
public/img/dhl.jpg
public/img/dpd.jpg
public/img/dtdc.jpg
public/img/ems.jpg
public/img/fedex.jpg
public/img/gig.jpg
public/img/logo.jpg
public/img/Microsoft.VisualStudio.Services.VSIXPackage
public/img/plane.jpg
public/img/shipment1.jpg
public/img/tnt.jpg
public/img/toll.jpg
public/img/ups.jpg
</environment_details>

## 🤖 Assistant #2

_2026-02-28 23:09:43Z_

I'll start by exploring the codebase to understand the current navbar implementation. Let me read the relevant files.

<read_file>
<path>components/Header.js</path>
</read_file>
<read_file>
<path>app/about/page.js</path>
</read_file>

## 💬 User #3

_2026-02-28 23:09:43Z_

[read_file for 'components/Header.js'] Result:

'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = stored ? stored === 'dark' : prefersDark;
      setIsDark(initial);
      if (initial) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {
      // ignore
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <img src="/img/logo.jpg" alt="Choice International" className="h-10 w-auto rounded-md" />
            <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 truncate">Choice International Export</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 pb-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary-600 dark:after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-400 after:ease-out"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={toggle} 
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
              aria-pressed={isDark} 
              className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggle} 
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
              aria-pressed={isDark} 
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 
// In components/Header.js, update the navItems array:
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' }, // Changed from #about to /about
  { name: 'Services', href: '#services' },
  // ... other items
];

Tool [read_file] was not executed because a tool has already been used in this message. Only one tool may be used per message. You must assess the first tool's result before proceeding to use the next tool.

<environment_details>
# VSCode Visible Files
app/page.js

# VSCode Open Tabs
components/Footer.js
TODO.md
components/Services.js
components/PartnersSlider.js
components/AboutSummary.js
components/Process.js
components/WhyChooseUs.js
components/Contact.js
components/Hero.js
components/Blog.js
components/Testimonials.js
components/MissionVision.js
app/globals.css
components/AboutHero.js
app/about/page.js
app/layout.js
app/page.js
components/WhatsAppButton.js
index.html
</environment_details>

## 🤖 Assistant #4

_2026-02-28 23:09:43Z_

Let me read the about page to understand the structure better:

<read_file>
<path>app/about/page.js</path>
</read_file>

## 💬 User #5

_2026-02-28 23:09:43Z_

[read_file for 'app/about/page.js'] Result:

import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import MissionVision from '@/components/MissionVision';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <WhyChooseUs />
      </main>
      <Footer />
      
      <BackToTop />
    </div>
  );
}


<environment_details>
# VSCode Visible Files
app/page.js

# VSCode Open Tabs
components/Footer.js
TODO.md
components/Services.js
components/PartnersSlider.js
components/AboutSummary.js
components/Process.js
components/WhyChooseUs.js
components/Contact.js
components/Hero.js
components/Blog.js
components/Testimonials.js
components/MissionVision.js
app/globals.css
components/AboutHero.js
app/about/page.js
app/layout.js
app/page.js
components/WhatsAppButton.js
index.html
</environment_details>

## 🤖 Assistant #6

_2026-02-28 23:09:43Z_

Now I have a good understanding of the codebase. Let me create a plan for this task:

**Information Gathered:**
- `components/Header.js`: Contains the fixed navbar with theme toggle and mobile menu
- The header uses `fixed top-0 w-full z-50` classes to stay at the top
- Currently, the header is always visible with no scroll behavior

**Plan:**
- Modify `components/Header.js` to:
  1. Add state for tracking scroll position (`lastScrollY`)
  2. Add state for hiding the header (`isHidden`)
  3. Add useEffect to listen to scroll events and determine scroll direction
  4. Add CSS transform classes to animate the slide up/down effect
  5. The header should slide up when scrolling down and slide down when scrolling up

**Dependent Files:**
- Only `components/Header.js` needs to be edited

**Followup Steps:**
- Test the scroll behavior on the About page

<ask_followup_question>
<question>Please confirm if I can proceed with this plan to make the navbar slide up when scrolled?</question>
</ask_followup_question>

## 💬 User #7

_2026-02-28 23:09:43Z_

[ask_followup_question for 'Please confirm if I can proceed with this plan to make the navbar slide up when scrolled?'] Result:

<answer>
yes
</answer>

<environment_details>
# VSCode Visible Files
app/page.js

# VSCode Open Tabs
components/Footer.js
TODO.md
components/Services.js
components/PartnersSlider.js
components/AboutSummary.js
components/Process.js
components/WhyChooseUs.js
components/Contact.js
components/Hero.js
components/Blog.js
components/Testimonials.js
components/MissionVision.js
app/globals.css
components/AboutHero.js
app/about/page.js
app/layout.js
app/page.js
components/WhatsAppButton.js
index.html
</environment_details>

## 🤖 Assistant #8

_2026-02-28 23:09:43Z_

Now I'll implement the scroll slide-up behavior for the navbar in `components/Header.js`:

<minimax:tool_call>
<path>components/Header.js</path>
<content>
<<<<<<< SEARCH
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
=======
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
>>>>>>> REPLACE
</content>
</edit_file>

## 💬 User #9

_2026-02-28 23:09:43Z_

[ERROR] You did not use a tool in your previous response! Please retry with a tool use..
# Reminder: Instructions for Tool Use

Tool uses are formatted using XML-style tags. The tool name is enclosed in opening and closing tags, and each parameter is similarly enclosed within its own set of tags. Here's the structure:

<tool_name>
<parameter1_name>value1</parameter1_name>
<parameter2_name>value2</parameter2_name>
...
</tool_name>

For example:

<attempt_completion>
<result>
I have completed the task...
</result>
</attempt_completion>

Always adhere to this format for all tool uses to ensure proper parsing and execution.
# Next Steps

If you have completed the user's task, use the attempt_completion tool. 
If you require additional information from the user, use the ask_followup_question tool. 
Otherwise, if you have not completed the task and do not need additional information, then proceed with the next step of the task. 
(This is an automated message, so do not respond to it conversationally.)

<environment_details>
# VSCode Visible Files
app/page.js

# VSCode Open Tabs
components/Footer.js
TODO.md
components/Services.js
components/PartnersSlider.js
components/AboutSummary.js
components/Process.js
components/WhyChooseUs.js
components/Contact.js
components/Hero.js
components/Blog.js
components/Testimonials.js
components/MissionVision.js
app/globals.css
components/AboutHero.js
app/about/page.js
app/layout.js
app/page.js
components/WhatsAppButton.js
index.html
</environment_details>

## 🤖 Assistant #10

_2026-02-28 23:09:43Z_

<edit_file>
<path>components/Header.js</path>
<content>
<<<<<<< SEARCH
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
=======
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
>>>>>>> REPLACE
</content>
</edit_file>

## 💬 User #11

_2026-02-28 23:09:43Z_

[edit_file for 'components/Header.js'] Result:

The content was successfully saved to components/Header.js.

New problems detected after saving the file:
components/Header.js
- [eslint Error] Line 60: Parsing error: Unexpected token <[Please review the changes carefully and make sure they are correct  You should ignore if you have introduced any redundant indendation issues / redundant blank lines or formatting issues as long as it does not impact the logic/ build. Edit the file again if necessary.][Diff of the changes applied]
@@ -1,143 +1,163 @@
-'use client';
-
-import { useState, useEffect } from 'react';
-
-export default function Header() {
-  const [isDark, setIsDark] = useState(false);
-  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
-
-  useEffect(() => {
-    try {
-      const stored = localStorage.getItem('theme');
-      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
-      const initial = stored ? stored === 'dark' : prefersDark;
-      setIsDark(initial);
-      if (initial) document.documentElement.classList.add('dark');
-      else document.documentElement.classList.remove('dark');
-    } catch (e) {
-      // ignore
-    }
-  }, []);
-
-  const toggle = () => {
-    const next = !isDark;
-    setIsDark(next);
-    if (next) document.documentElement.classList.add('dark');
-    else document.documentElement.classList.remove('dark');
-    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
-  };
-
-  const closeMobileMenu = () => setIsMobileMenuOpen(false);
-
-  const navItems = [
-    { name: 'Home', href: '/' },
-    { name: 'Services', href: '#services' },
-    { name: 'About', href: '/about' },
-    { name: 'Contact', href: '#contact' },
-  ];
-
-  return (
-    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
-      <div className="container-custom py-4">
-        <div className="flex items-center justify-between">
-          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
-            <img src="/img/logo.jpg" alt="Choice International" className="h-10 w-auto rounded-md" />
-            <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 truncate">Choice International Export</div>
-          </div>
-
-          {/* Desktop Navigation */}
-          <nav className="hidden lg:flex items-center space-x-6">
-            {navItems.map((item) => (
-              <a 
-                key={item.name}
-                href={item.href}
-                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 pb-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary-600 dark:after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-400 after:ease-out"
-              >
-                {item.name}
-              </a>
-            ))}
-            <button 
-              onClick={toggle} 
-              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
-              aria-pressed={isDark} 
-              className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
-            >
-              {isDark ? (
-                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
-                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
-                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
-                </svg>
-              ) : (
-                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
-                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
-                </svg>
-              )}
-            </button>
-          </nav>
-
-          {/* Mobile Menu Button & Theme Toggle */}
-          <div className="lg:hidden flex items-center gap-2">
-            <button 
-              onClick={toggle} 
-              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
-              aria-pressed={isDark} 
-              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
-            >
-              {isDark ? (
-                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
-                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
-                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
-                </svg>
-              ) : (
-                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
-                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
-                </svg>
-              )}
-            </button>
-            <button 
-              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
-              aria-label="Toggle menu"
-              aria-expanded={isMobileMenuOpen}
-              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
-            >
-              {isMobileMenuOpen ? (
-                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
-                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
-                </svg>
-              ) : (
-                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
-                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
-                </svg>
-              )}
-            </button>
-          </div>
-        </div>
-
-        {/* Mobile Navigation Menu */}
-        {isMobileMenuOpen && (
-          <nav className="lg:hidden pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
-            <div className="space-y-2">
-              {navItems.map((item) => (
-                <a 
-                  key={item.name}
-                  href={item.href}
-                  onClick={closeMobileMenu}
-                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-300 font-medium"
-                >
-                  {item.name}
-                </a>
-              ))}
-            </div>
-          </nav>
-        )}
-      </div>
-    </header>
-  );
-} 
-// In components/Header.js, update the navItems array:
-const navItems = [
-  { name: 'Home', href: '/' },
-  { name: 'About Us', href: '/about' }, // Changed from #about to /about
-  { name: 'Services', href: '#services' },
-  // ... other items
-];
\ No newline at end of file
+'use client';
+
+import { useState, useEffect } from 'react';
+
+export default function Header() {
+  const [isDark, setIsDark] = useState(false);
+  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
+  const [isHidden, setIsHidden] = useState(false);
+  const [lastScrollY, setLastScrollY] = useState(0);
+
+  useEffect(() => {
+    const handleScroll = () => {
+      const currentScrollY = window.scrollY;
+      
+      if (currentScrollY > lastScrollY && currentScrollY > 100) {
+        setIsHidden(true);
+      } else {
+        setIsHidden(false);
+      }
+      
+      setLastScrollY(currentScrollY);
+    };
+
+    window.addEventListener('scroll', handleScroll, { passive: true });
+    
+    return () => window.removeEventListener('scroll', handleScroll);
+  }, [lastScrollY]);
+
+  useEffect(() => {
+    try {
+      const stored = localStorage.getItem('theme');
+      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
+      const initial = stored ? stored === 'dark' : prefersDark;
+      setIsDark(initial);
+      if (initial) document.documentElement.classList.add('dark');
+      else document.documentElement.classList.remove('dark');
+    } catch (e) {
+      // ignore
+    }
+  }, []);
+
+  const toggle = () => {
+    const next = !isDark;
+    setIsDark(next);
+    if (next) document.documentElement.classList.add('dark');
+    else document.documentElement.classList.remove('dark');
+    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
+  };
+
+  const closeMobileMenu = () => setIsMobileMenuOpen(false);
+
+  const navItems = [
+    { name: 'Home', href: '/' },
+    { name: 'Services', href: '#services' },
+    { name: 'About', href: '/about' },
+    { name: 'Contact', href: '#contact' },
+  ];
+
+  return (
+    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
+      <div className="container-custom py-4">
+        <div className="flex items-center justify-between">
+          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
+            <img src="/img/logo.jpg" alt="Choice International" className="h-10 w-auto rounded-md" />
+            <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 truncate">Choice International Export</div>
+          </div>
+
+          {/* Desktop Navigation */}
+          <nav className="hidden lg:flex items-center space-x-6">
+            {navItems.map((item) => (
+              <a 
+                key={item.name}
+                href={item.href}
+                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 pb-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary-600 dark:after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-400 after:ease-out"
+              >
+                {item.name}
+              </a>
+            ))}
+            <button 
+              onClick={toggle} 
+              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
+              aria-pressed={isDark} 
+              className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
+            >
+              {isDark ? (
+                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
+                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
+                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
+                </svg>
+              ) : (
+                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
+                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
+                </svg>
+              )}
+            </button>
+          </nav>
+
+          {/* Mobile Menu Button & Theme Toggle */}
+          <div className="lg:hidden flex items-center gap-2">
+            <button 
+              onClick={toggle} 
+              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
+              aria-pressed={isDark} 
+              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
+            >
+              {isDark ? (
+                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
+                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
+                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
+                </svg>
+              ) : (
+                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
+                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
+                </svg>
+              )}
+            </button>
+            <button 
+              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
+              aria-label="Toggle menu"
+              aria-expanded={isMobileMenuOpen}
+              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
+            >
+              {isMobileMenuOpen ? (
+                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
+                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
+                </svg>
+              ) : (
+                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
+                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
+                </svg>
+              )}
+            </button>
+          </div>
+        </div>
+
+        {/* Mobile Navigation Menu */}
+        {isMobileMenuOpen && (
+          <nav className="lg:hidden pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
+            <div className="space-y-2">
+              {navItems.map((item) => (
+                <a 
+                  key={item.name}
+                  href={item.href}
+                  onClick={closeMobileMenu}
+                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-300 font-medium"
+                >
+                  {item.name}
+                </a>
+              ))}
+            </div>
+          </nav>
+        )}
+      </div>
+    </header>
+  );
+} 
+// In components/Header.js, update the navItems array:
+const navItems = [
+  { name: 'Home', href: '/' },
+  { name: 'About Us', href: '/about' }, // Changed from #about to /about
+  { name: 'Services', href: '#services' },
+  // ... other items
+];

[Please review the diff. You should ignore if you have introduced any redundant indendation issues / redundant blank lines or formatting issues as long as it does not impact the logic/ build.]
Important: You should ignore if you have introduced any redundant indendation issues / redundant blank lines or formatting issues as long as it does not impact the logic/ build

<environment_details>
# VSCode Visible Files
components/Header.js

# VSCode Open Tabs
components/Footer.js
TODO.md
components/Services.js
components/PartnersSlider.js
components/AboutSummary.js
components/Process.js
components/WhyChooseUs.js
components/Contact.js
components/Hero.js
components/Blog.js
components/Testimonials.js
components/MissionVision.js
app/globals.css
components/AboutHero.js
app/about/page.js
app/layout.js
app/page.js
components/Header.js
components/WhatsAppButton.js
index.html
</environment_details>


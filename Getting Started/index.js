// Copyright 2022 user
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var textButton = document.querySelector("button");
textButton.textContent = "Change Theme";

var theme = "light";

function setTheme(theme) {
  let root = document.documentElement;
  if (theme === "light") {
    root.style.setProperty("--bg-color", "#ECF2FF");
    root.style.setProperty("--text-color", "#2B283A");
    root.style.setProperty("--title-color", "#4A4E74");
  } else if (theme === "dark") {
    root.style.setProperty("--bg-color", "#2B283A");
    root.style.setProperty("--text-color", "#ECF2FF");
    root.style.setProperty("--title-color", "#D5D4D8");
  }
}

// 1. Try to change the theme to 'dark'
// 2. Run the code to see that it works

// 3. Try to change the theme to 'light'
// 4. Run the code to see that it works

function changeTheme() {
  if (theme === "light") {
    theme = "dark";
    setTheme("dark");
  } else {
    theme = "light";
    setTheme("light");
  }
}

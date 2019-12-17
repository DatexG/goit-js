"use strict";

import users from "./users.js";

const getSortedUniqueSkills = users =>users.reduce((allSkills, users) => { 
    allSkills.push(...users.skills);
    return allSkills;
}, []).sort().filter((item, i, arr) => arr.indexOf(item) == i)
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
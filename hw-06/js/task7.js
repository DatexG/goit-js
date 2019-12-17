"use strict";

import users from "./users.js";

const calculateTotalBalance = users => 
    users.reduce((acc, value) => 
    acc + value.balance, 0
    );
  
  console.log(calculateTotalBalance(users), '- total balance'); // 20916
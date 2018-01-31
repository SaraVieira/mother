var r=require("./reviews.json");module.exports=function(n){var t=r;return(n=n||{}).good&&(t=r.filter(function(r){return r.rating>5})),n.bad&&(t=r.filter(function(r){return r.rating<5})),t[Math.floor(Math.random()*t.length)]};
//# sourceMappingURL=mother.m.js.map

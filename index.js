// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

const mondayWork = function (thing = "go to the office") {
    return `This Monday, I will ${thing}.`;
}
mondayWork("work from home");

function wrapAdjective(str = "*") {
    return function(param = "special") {
        return `You are ${str}${param}${str}!`;
    }
}
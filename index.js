// code your solution here
function saturdayFun(activity ='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}
mondayWork('work from home');

function wrapAdjective(wrapAdjective = "*"){
    const inner = function(adjective = "a dedicated programer") {
        return `You are ${wrapAdjective}${adjective}${wrapAdjective}!`;
    };
    return inner;
}
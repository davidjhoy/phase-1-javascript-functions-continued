// code your solution here
const saturdayFun = function (skate = 'roller-skate'){
    return `This Saturday, I want to ${skate}!`;
}

const mondayWork = function(works = 'go to the office'){
    return `This Monday, I will ${works}.`;
}

const wrapAdjective = function(flourish='*'){
    
    return function (adjective = 'special'){
        return `You are ${flourish}${adjective}${flourish}!`;
        
    }
    
    
}




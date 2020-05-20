const assert = require('assert');

function go(rover, instructions) {
    if(instructions == 'R'){
        if(rover.facing == 'N')
            return {...rover, facing: "E"};

        if(rover.facing == 'E')
            return {...rover, facing: 'S'};

        if(rover.facing == 'S')
            return {...rover, facing: 'W'};

        return {...rover, facing: 'N'};
    };

    if(instructions == 'L'){
        if(rover.facing == 'N')
            return {...rover, facing: "W"};

        if(rover.facing == 'W')
            return {...rover, facing: 'S'};

        if(rover.facing == 'S')
            return {...rover, facing: 'E'};

        return {...rover, facing: 'N'};
    }

}

describe('Mars Rover', () => {
    it('Turns right N to E', () => {
        let rover = {facing: 'N'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'E');
    });

    it('Turns right E to S', () => {
        let rover = {facing: 'E'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'S');
    });

    it('Turns right S to W', () => {
        let rover = {facing: 'S'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'W');
    });

    it('Turns right W to N', () => {
        let rover = {facing: 'W'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'N');
    });

    it('Turns left N to W', () => {
        let rover = {facing: 'N'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'W');
    });

    it('Turns left W to S', () => {
        let rover = {facing: 'W'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'S');
    });

    it('Turns left S to E', () => {
        let rover = {facing: 'S'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'E');
    });

    it('Turns left E to N', () => {
        let rover = {facing: 'E'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'N');
    });
})